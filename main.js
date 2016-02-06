$('.post-movie').on('click', function (e) {
  e.preventDefault();
  
  var name = $('.movie-name-input').val();
  var url = $('.movie-url-input').val();

  $('.movies').append('<li><a href=' + url + '>' + name + '</a></li>');
});




