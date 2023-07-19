import { Categories } from '../../Interfaces/IMovies';
import { clearInput } from './clearInput';
import { getMovies } from '../../services/moviesService';
import { search, setSearchValue } from './handleSearch';
import { setPage } from './handleClickLoadMore';
import { renderMovies } from '../../components/renderMovies';

export let category: Categories = Categories.Popular;

export const setCategory = async (newCategory: Categories): Promise<void> => {
    category = newCategory;
    setPage(1);
    const movies = await getMovies(1, category);
    if (!movies) return;
    renderMovies(movies, true);
};

export const handleClickCategory = (): void => {
    const popular: HTMLInputElement = document.getElementById('popular') as HTMLInputElement;
    popular.onclick = () => {
        if (category !== Categories.Popular || search) {
            setCategory(Categories.Popular);
        }
        clearInput();
        setSearchValue('');
    };

    const upcoming: HTMLInputElement = document.getElementById('upcoming') as HTMLInputElement;
    upcoming.onclick = () => {
        if (category !== Categories.Upcoming || search) {
            setCategory(Categories.Upcoming);
        }
        clearInput();
        setSearchValue('');
    };

    const topRated: HTMLInputElement = document.getElementById('top_rated') as HTMLInputElement;
    topRated.onclick = () => {
        if (category !== Categories.TopRated || search) {
            setCategory(Categories.TopRated);
        }
        clearInput();
        setSearchValue('');
    };
};
