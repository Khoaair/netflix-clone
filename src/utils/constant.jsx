import { request } from './request';

export const imgUrl = 'https://image.tmdb.org/t/p/original/';

export const listsMovies = [
  { id: 1, title: 'Trending Now', fetchUrl: request.fetchTreding },
  { id: 2, title: 'Top Rated', fetchUrl: request.fetchTopRated },
  { id: 3, title: 'Series', fetchUrl: request.fetchTopRatedSeries },
  { id: 4, title: 'Best Action Movies', fetchUrl: request.fetchActionMovies },
  { id: 5, title: 'Best Comedy Movies', fetchUrl: request.fetchComedyMovies },
  { id: 6, title: 'Best Horror Movies', fetchUrl: request.fetchHorrorMovies },
  { id: 7, title: 'Best Family Movies', fetchUrl: request.fetchDocumantaries },
];
