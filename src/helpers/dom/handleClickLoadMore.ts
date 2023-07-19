import { getMovies } from '../../services/moviesService';
import { renderMovies } from '../../components/renderMovies';
import { category } from './handleClickCategory';
import { getSearchMovies } from '../../services/moviesService';
import { search } from './handleSearch';

export let page = 1;

export const setPage = (newPage: number): void => {
    page = newPage;
};

export const handleClickLoadMore = async (): Promise<void> => {
    setPage(page + 1);
    if (!search) {
        const movies =await getMovies(page, category);
        if(!movies) return
        renderMovies(movies);
    } else {
        const movies = await getSearchMovies(search, page);
        if(!movies) return
        renderMovies(movies);
    }
};

