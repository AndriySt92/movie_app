import { renderMovies } from '../../components/renderMovies';
import { getSearchMovies } from '../../services/moviesService';
import { setPage } from './handleClickLoadMore';

export let search = '';

export const setSearchValue =(value: string): void => {
    search = value;
}

export const handleSearch = async (e: Event): Promise<void> => {
    const input: HTMLInputElement = document.getElementById(
        'search'
    ) as HTMLInputElement;
    const query = input.value;
    const movies = await getSearchMovies(query);
    if(!movies) return
    renderMovies(movies, true)
    setSearchValue(query);
    setPage(1);
}

