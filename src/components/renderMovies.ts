import { IMovie } from '../Interfaces/IMovies';
import { movieCard } from './movieCard';

export const renderMovies = (movies: IMovie[], isNewCategory = false): void => {
    const favoriteMovies = localStorage.getItem('favoriteMovies');
    let favoriteMoviesIds: number[] = [];
    if (favoriteMovies){
        favoriteMoviesIds = JSON.parse(favoriteMovies)
    };

    const mainContainer: HTMLDivElement = document.getElementById(
        'film-container'
    ) as HTMLDivElement;

    if (isNewCategory){
        mainContainer.innerHTML = ''; 
    } 

    movies.forEach((movie) => {
        const isFavoriteMovie = favoriteMoviesIds?.includes(movie.id)
        const container = movieCard(movie, 'col-lg-3 col-md-4 p-2', isFavoriteMovie);
        mainContainer.append(container);
    });
}
