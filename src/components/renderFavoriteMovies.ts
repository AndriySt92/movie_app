import { IMovie } from '../Interfaces/IMovies';
import {getMovieById} from '../services/moviesService';
import { movieCard } from './movieCard';

export const renderFavoriteMovies = async (): Promise<void> => {
    const favoriteMovies = localStorage.getItem('favoriteMovies');
    const wrapper: HTMLDivElement = document.getElementById(
        'favorite-movies'
    ) as HTMLDivElement;

    if (!favoriteMovies){
        wrapper.innerHTML = '';
        return
    };
    
    const moviesIds: string[] = JSON.parse(favoriteMovies);
    const movies: IMovie[] = [] as IMovie[]

    for (const movieId of moviesIds) {
        const movie = await getMovieById(movieId)
        if(movie){
            movies.push(movie)
        }
    }

    wrapper.innerHTML = '';
    movies?.forEach((movie) => {
        const container = movieCard(movie, 'col-12 p-2', true);
        wrapper.append(container);
    });
}
