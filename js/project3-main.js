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
    },

    addThumbDown: function(i){
      this.posts[i].downs++;
    }
  },

  computed: {
    revPosts(){
      return this.posts.slice().reverse();
    },

    filterPosts(){

    }
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
