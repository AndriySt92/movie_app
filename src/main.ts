import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/styles.css';
import { getMovies } from './services/moviesService';
import { renderRandomMovie } from './components/renderRandomMovie';
import { renderMovies } from './components/renderMovies';
import { renderFavoriteMovies } from './components/renderFavoriteMovies';
import { handleSearch } from './helpers';
import { handleClickCategory } from './helpers';
import { handleClickLoadMore } from './helpers';

const btnSearch = document.getElementById('submit');
const btnLoadMore = document.getElementById('load-more');
const btnCategory = document.getElementById('button-wrapper');

export async function render(): Promise<void> {
    const movies = await getMovies();

    btnSearch?.addEventListener('click', handleSearch);
    btnLoadMore?.addEventListener('click', handleClickLoadMore);
    btnCategory?.addEventListener('click', handleClickCategory);

    if (!movies) return;
    renderRandomMovie(movies);
    renderMovies(movies);
    renderFavoriteMovies();
}

render();
