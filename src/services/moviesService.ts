import { tmdbApi } from '../Api/thdb';
import { IMovie, Categories, IMovieResponse, IMoviesResponseData } from '../Interfaces/IMovies';
import { mapperMovie } from '../helpers/common/mapperMovie';

export const getMovies = async (
    page: number = 1,
    category: Categories = Categories.Popular
): Promise<IMovie[] | void> => {
    try {
        const response = await fetch(`${tmdbApi.BASE_URL}movie/${category}?api_key=${tmdbApi.API_KEY}&page=${page}`);
        if (!response.ok) {
            throw new Error('Failed to get movies, got status: ' + response.status);
        }
        const data: IMoviesResponseData = await response.json();
        const mappedMovies = mapperMovie(data.results);
        return mappedMovies;
    } catch (e: any) {
        alert(e.message);
    }
};

export const getMovieById = async (movieId: string): Promise<IMovie | void> => {
    try {
        const response = await fetch(`${tmdbApi.BASE_URL}movie/${movieId}}?api_key=${tmdbApi.API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to get movie, got status: ' + response.status);
        }
        const data: IMovieResponse = await response.json();
        const mappedMovies = mapperMovie([data]);
        return mappedMovies[0];
    } catch (e: any) {
        alert(e.message);
    }
};

export const searchMovie = async (query: string): Promise<IMovie[] | void> => {
    try {
        const response = await fetch(`${tmdbApi.BASE_URL}search/movie?api_key=${tmdbApi.API_KEY}&query=${query}`);
        if (!response.ok) {
            throw new Error('Failed to get movie, got status: ' + response.status);
        }
        const data: IMoviesResponseData = await response.json();
        const mappedMovies = mapperMovie(data.results);
        return mappedMovies;
    } catch (e: any) {
        alert(e.message);
    }
};
