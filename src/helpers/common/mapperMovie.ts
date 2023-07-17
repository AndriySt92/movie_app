import { IMovieResponse, IMovie } from '../../Interfaces/IMovies';

export const mapperMovie = (movies: IMovieResponse[]): IMovie[] => {
    const mappedMovies = movies.map((movie: IMovieResponse) => {
        return {
            backdrop_path: movie.backdrop_path,
            id: movie.id,
            original_title: movie.original_title,
            overview: movie.overview,
            release_date: movie.release_date,
            title: movie.title,
        };
    });

    return mappedMovies;
};
