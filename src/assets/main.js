$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/rgordon95.json',
    dateType: 'jsonp',
    success: function(response) {
      //convert json to js
      //create html to hold response
      createElement('DIV')
      .addClass('.course')
      .appendTo('#badges')
      //insert data from json or js object into html
      //append html to page
    }
  });

});

// https://www.codeschool.com/users/rgordon95.json
