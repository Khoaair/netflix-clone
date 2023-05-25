import { request } from './request';

export const imgUrl = 'https://image.tmdb.org/t/p/original/';

export const listsMovies = [
  { id: 1, title: 'Trending Now', fetchUrl: request.fetchTreding },
  { id: 2, title: 'Top Rated', fetchUrl: request.fetchTopRated },
  { id: 3, title: 'Series', fetchUrl: request.fetchTopRatedSeries },
  { id: 4, title: 'Action Movies', fetchUrl: request.fetchActionMovies },
  { id: 5, title: 'Comedy Movies', fetchUrl: request.fetchComedyMovies },
  { id: 6, title: 'Horror Movies', fetchUrl: request.fetchHorrorMovies },
  { id: 7, title: 'Documantaries', fetchUrl: request.fetchDocumantaries },
];
