import { tmdbApi } from '../Api/thdb';
import { IMovie } from '../Interfaces/IMovies'
import { getRandomNumber } from '../helpers/common/getRandomNumber';

export const renderRandomMovie = (movies: IMovie[]): void => {
    const randomNumber = getRandomNumber(1, movies.length)
    const randomMovie = movies[randomNumber];
    const title: HTMLHeadingElement = document.getElementById(
        'random-movie-name'
    ) as HTMLHeadingElement;

    title.innerHTML = randomMovie.title;

    const paragraph: HTMLParagraphElement = document.getElementById(
        'random-movie-description'
    ) as HTMLParagraphElement;

    paragraph.innerHTML = randomMovie.overview;

    const wrapper: HTMLElement = document.getElementById(
        'random-movie'
    ) as HTMLElement;
    wrapper.style.backgroundImage = `url(${tmdbApi.IMG_BASE_URL}/original${randomMovie.backdrop_path})`;
}
