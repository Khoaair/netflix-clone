export const request = {
  fetchTreding: `/trending/all/week`,
  fetchNetflixOriginals:
    '/discover/tv?include_null_first_air_dates=false&language=en-US&page=2',
  fetchTopRated: '/movie/top_rated?language=en-US&page=2',
  fetchTopRatedSeries: '/tv/top_rated?language=en-US&page=2',
  fetchActionMovies:
    'discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=28',
  fetchComedyMovies:
    'discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=35',
  fetchHorrorMovies:
    'discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=27',
  fetchDocumantaries:
    'discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=10751',
};
