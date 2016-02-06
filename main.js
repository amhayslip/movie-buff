var movies = [];
var currentIdNumber = 0;

generateId = function () {
  currentIdNumber += 1;
  return currentIdNumber;
};

var Movie = function (name, url) {
  this.name = name;
  this.url = url;
  this.likes = 0;
  this.id = generateId();

  this.like = function () {
    this.likes += 1;
  }
}

// render ALL the movies
var renderMovies = function () {
  $('.movies').empty();

  for (i = 0; i < movies.length; i += 1) {
    var name = movies[i].name;
    var url = movies[i].url;
    var id = movies[i].id;
    var likes = movies[i].likes;
    $('.movies').append(
      '<li class="movie" data-id=' + id + '> likes:<span class="like-count">' + likes  + '</span> <a href=' + url + ' target="blank">' + name + '</a> <button class="btn like">like</button> </li>'
    );

  }
  
  bindEvents();
}

var renderLike = function (movie) {
  $('.movies').find('li').each(function(i, m) {
    if ($(m).data().id === movie.id) {
      $(m).find('.like-count').html(movie.likes)
    }
  });
}

var findMovie = function (id) {
  for(i = 0; i < movies.length; i += 1) {
    if (movies[i].id === id) {
      return movies[i];
    }
  }
};

var likeMovie = function (id) {
  var movie = findMovie(id);
  movie.like();
  renderLike(movie);
}

var bindEvents = function () {
  $('.like').on('click', function () {
    console.log('clicked');
    var id = $(this).closest('.movie').data().id;
    likeMovie(id);
  });
}

var createMovie = function () {
  var name = $('.movie-name-input').val();
  var url = $('.movie-url-input').val();

  var movie = new Movie(name, url);
  movies.push(movie);
  renderMovies();
}

$('.post-movie').on('click', function (e) {
  e.preventDefault();
  createMovie();
});