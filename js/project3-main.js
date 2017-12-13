// console.log('yo');

new Vue({
  el: '#app',
  data: {
    posts: [],
    newPostText: '',

    // object
    // newPost
    // newPost: {
    //   content: '',
    //   replies: [],
    //   likes: 0,
    //   date: ''
    // }
  },

  methods: {

    submitPost: function(){
      var p = new Object();
      p.content = this.newPostText;
      p.replies = [];
      p.ups = 0;
      p.downs = 0;
      p.date = new Date();
      p.tag = $('input[name="tagSelector"]:checked').val();

      if(this.posts.length == 0){
        this.posts.push(p);
      } else {
        this.posts.unshift(p);
      }
      this.newPostText = '';
      // var post = ;
      // post.content = this.newPostText;
      // // var p = this.newPostText;
      // // post.content = p;
    },

    addThumbUp: function(i){
      this.posts[i].ups++;
      console.log(i);
    },

    addThumbDown: function(i){
      this.posts[i].downs++;
    },

    tagClass(i){
      // console.log(this.posts[i].tag);
      if(this.posts[i].tag === 'breck'){
        return 'breck';
      } else if(this.posts[i].tag === 'abasin'){
        return 'abasin';
      } else if(this.posts[i].tag === 'copper'){
        return 'copper';
      } else if(this.posts[i].tag === 'vail'){
        return 'vail';
      } else if(this.posts[i].tag === 'eldora'){
        return 'eldora';
      } else if(this.posts[i].tag === 'aspen'){
        return 'aspen';
      } else if(this.posts[i].tag === 'psa'){
        return 'psa';
      }
    }

  },

  computed: {
    // revPosts(){
    //   return this.posts.slice().reverse();
    // },


  },

  watch: {
    posts: {
      handler: function (val, oldVal) {
      	console.log('a thing changed')
      },
      deep: true
    }
  },

  mounted: function(){

  }
});
