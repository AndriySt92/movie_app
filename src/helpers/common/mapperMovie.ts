import { IMovieResponse, IMovie } from '../../Interfaces/IMovies';

export const mapperMovie = (movies: IMovieResponse[]): IMovie[] => {
    const mappedMovies = movies.map((movie: IMovieResponse) => {
        return {
            mainImg: movie.backdrop_path,
            id: movie.id,
            overview: movie.overview,
            release_date: movie.release_date,
            title: movie.title,
            posterImg: movie.poster_path,
        };
    });

    return mappedMovies;
};
