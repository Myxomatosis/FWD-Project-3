// console.log('yo');

new Vue({
  el: '#app',
  data: {
    posts: [],
    newPostText: '',

    // object

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
      p.likes = 0;
      p.date = new Date();

      // var post = ;
      // post.content = this.newPostText;
      // // var p = this.newPostText;
      // // post.content = p;
      this.posts.push(p);
      this.newPostText = '';
    }

  },

  computed: {
    revPosts(){
      return this.posts.slice().reverse();
    }
  },

  watch: {

  },

  mounted: function(){

  }
});
