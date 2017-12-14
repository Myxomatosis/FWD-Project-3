// console.log('yo');

var app = new Vue({
  el: '#app',
  data: {
    posts: [],
    newPostText: '',
    newReplyText: '',
    selectedFilter: 'all',
    show: false
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

    submitReply: function(post){
      var r = this.newReplyText;
      if(post.replies.length == 0){
        post.replies.push(r);
      } else {
        post.replies.unshift(r);
      }
      this.newReplyText = '';
      this.show = !this.show;
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
      } else if(this.posts[i].tag === 'all' || this.posts[i].tag === '' || this.posts[i].tag == null){
        return 'all';
      } else if(this.posts[i].tag === 'keystone'){
        return 'keystone';
      }
    },

    whatFilter: function(){
      this.selectedFilter = $('input[name="filterSelector"]:checked').val();
      console.log(this.selectedFilter);
    },

    filterPosts: function(posts){
      return posts.filter(function (post){
        if(post.tag == this.selectedFilter || this.selectedFilter == 'all'){
          console.log('FILTERING');
          return true;
        }
      })


    }

  },

  computed: {
    filterItems(){
      return this.posts.filter(post => {
        return this.selectedFilter == post.tag
      })
    }
  },

  watch: {
    posts: {
      handler: function (val, oldVal) {
      	console.log('a thing changed')
      },
      deep: true
    },
    // selectedFilter: {
    //   handler: function (val, oldVal) {
    //   	console.log('a filter changed')
    //   },
    //   deep: true
    // }

  },

  mounted: function(){

  }
});
