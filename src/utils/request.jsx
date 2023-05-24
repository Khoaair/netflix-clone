const API_KEY = process.env.TMDB_API_KEY;

const request = {
  fetchTreding: `/trending/all/day?language=en-US`,
  fetchNetflixOriginals:
    '/discover/movie?include_adult=true&include_video=true&language=en-US&sort_by=popularity.desc',
};
