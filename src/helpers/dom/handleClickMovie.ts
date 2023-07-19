import { IMovie } from '../../Interfaces/IMovies';
import { renderFavoriteMovies } from '../../components/renderFavoriteMovies';

export const handleClickMovie = async (movie: IMovie): Promise<void> => {
    const favoriteMovies = localStorage.getItem('favoriteMovies');
    let movies: number[] = [];
    if (favoriteMovies) {
        movies = JSON.parse(favoriteMovies);
    }

    const svg = document.getElementById(`${movie.id}`);

    if (movies?.find((m) => m === movie.id)) {
        movies = movies.filter((m) => m !== movie.id);
        svg?.setAttribute('fill', '#ff000078');
    } else {
        svg?.setAttribute('fill', 'red');

        movies.push(movie.id);
    }

    localStorage.setItem('favoriteMovies', JSON.stringify(movies));
    renderFavoriteMovies();
};
