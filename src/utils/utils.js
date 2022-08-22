import { DURATION_SHORT_MOVIES } from "./constants";

//----Конвертер длительности фильма
function durationConverter(duration) {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  return `${hours > 0 ? hours + "ч " : ""}${minutes}м`;
}

//----Фильтрация короткометражек
function filterShortMovies(movies) {
  return movies.filter(movie => movie.duration <= DURATION_SHORT_MOVIES);
}

//----Поисковый фильтр
function searchByFilter(movies, searchQuery, checkboxState) {
  const moviesByFilter = movies.filter((movie) => {
      const userQuery = searchQuery.toLowerCase().trim();
      const movieRu = String(movie.nameRU).toLowerCase();
      const movieEn = String(movie.nameEN).toLowerCase();
      
    return movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1;
  });

  if (checkboxState) {
    return filterShortMovies(moviesByFilter)
  } else {
    return moviesByFilter;
  }
}

export { 
  durationConverter,
  searchByFilter,
  filterShortMovies,
};
