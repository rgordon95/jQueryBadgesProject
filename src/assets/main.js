$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/rgordon95.json',
    dataType: 'jsonp',
    success: function(response) {
      //for each course completed returned by the response
      for (let i = 0; i < response.courses.completed.length; i++) {
        //create a div, add class .course, append to #badges
        let div = document.createElement('DIV');
          div.toggleClass('.course');
          div.appendTo('#badges');
      } //end for loop
    } // end success function
  }); //end ajax call

}); //end doc ready function

// https://www.codeschool.com/users/rgordon95.json
