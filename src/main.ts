import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/styles.css';
import { getMovieById, getMovies, searchMovie } from './services/moviesService';
import { Categories } from './Interfaces/IMovies';

export async function render(): Promise<void> {
    const movies = await getMovies(1, Categories.TopRated);
    const movieById = await getMovieById('238')
    const searchedMovie = await searchMovie('The Godfather')
    console.log(searchedMovie, movies, movieById)
}

render()