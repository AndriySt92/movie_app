import { tmdbApi } from '../Api/tmdb';
import { IMovie } from '../Interfaces/IMovies';
import { getRandomNumber } from '../helpers';

export const renderRandomMovie = (movies: IMovie[]): void => {
    const randomNumber = getRandomNumber(1, movies.length);
    const randomMovie = movies[randomNumber];
    const title: HTMLHeadingElement = document.getElementById('random-movie-name') as HTMLHeadingElement;

    title.innerHTML = randomMovie.title;

    const overview: HTMLParagraphElement = document.getElementById('random-movie-description') as HTMLParagraphElement;

    overview.innerHTML = randomMovie.overview;

    const wrapper: HTMLElement = document.getElementById('random-movie') as HTMLElement;
    wrapper.style.backgroundImage = `url(${tmdbApi.IMG_BASE_URL}/original${randomMovie.mainImg})`;
};
