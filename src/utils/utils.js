import { DURATION_SHORT_MOVIES } from "./constants";

//----Конвертер длительности фильма
function durationConverter(duration) {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  return `${hours > 0 ? hours + "ч " : ""}${minutes}м`;
}

//----Фильтрация короткометражек
function shortMovies(movies) {
  return movies.filter((movie) => movie.duration <= DURATION_SHORT_MOVIES);
}

// ----Поиск по запросу
function searchByRequest(movies, searchQuery) {  
  const moviesByFilter = movies.filter((movie) => {
    const userQuery = searchQuery.toLowerCase().trim();
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    // const country = String(movie.country).toLowerCase().trim();
    // const description = String(movie.description).toLowerCase().trim();
    // const director = String(movie.director).toLowerCase().trim();
    // const year = String(movie.year).trim();

    return (
      movieRu.indexOf(userQuery) !== -1 ||
      movieEn.indexOf(userQuery) !== -1
      // country.indexOf(userQuery) !== -1 ||
      // description.indexOf(userQuery) !== -1 ||
      // director.indexOf(userQuery) !== -1 ||
      // year.indexOf(userQuery) !== -1
    );
  });
  return moviesByFilter;
}

export { durationConverter, searchByRequest, shortMovies };
