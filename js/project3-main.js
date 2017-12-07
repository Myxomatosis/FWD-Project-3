// console.log('yo');

new Vue({
  el: '#app',
  data: {
    posts: [],
    newPostText: ''
    
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
      var p = this.newPostText;
      this.posts.push(p);
      this.newPostText = '';
    }

  },

  computed: {

  },

  watch: {

  },

  mounted: function(){

  }
});
