// console.log('yo');

new Vue({
  el: '#app',
  data: {
    posts: [],
    newPostText: ''

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
