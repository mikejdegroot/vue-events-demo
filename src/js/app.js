console.log('JS loaded');
/* global Vue */
window.onload = function () {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  });

};
