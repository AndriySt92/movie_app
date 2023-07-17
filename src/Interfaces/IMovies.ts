export interface IMovie {
    backdrop_path: string;
    id: number;
    original_title: string;
    overview: string;
    release_date: string;
    title: string;
}

export interface IMovieResponse {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IMoviesResponseData {
    page: number;
    results: IMovieResponse[];
    total_pages: number;
    total_results: number;
}

export enum Categories {
    Popular = 'popular',
    Upcoming = 'upcoming',
    TopRated = 'top_rated',
} 
