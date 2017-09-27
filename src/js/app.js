console.log('JS loaded');

const Vue = require('vue');

window.onload = function () {


  var data = {
    list: null
  };

  {
    // GET /someUrl
    Vue.$http.get('/events').then(response => {

      // get body data
      Vue.someData = response.body;

    });
  }

  var app = new Vue({
    el: '#app',
    data: data
  });
};
