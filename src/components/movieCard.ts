import { tmdbApi } from '../Api/tmdb';
import { tagName } from '../Interfaces/IDom';
import { IMovie } from '../Interfaces/IMovies';
import { createHTMLElement, createSVGElement } from '../helpers';

export const movieCard = (movie: IMovie, classes: string, isFavoriteMovie = false): HTMLElement => {
    //container
    const container = createHTMLElement({ tagName: tagName.DIV, classes });
    // wrapper
    const wrapper = createHTMLElement({ tagName: tagName.DIV, classes: 'card shadow-sm' });
    // image;
    const image = createHTMLElement({
        tagName: tagName.IMG,
        classes: '',
        attributes: { src: `${tmdbApi.IMG_BASE_URL}/w500${movie.posterImg}` },
    });
    //svg
    const svg = createSVGElement({
        tagName: tagName.SVG,
        classes: 'bi bi-heart-fill position-absolute p-2',
        svgAttributes: {
            width: '50',
            height: '50',
            stroke: 'red',
            viewBox: '0 -2 18 22',
            fill: `${isFavoriteMovie ? 'red' : '#ff000078'}`,
        },
        pathAttributes: {
            d: 'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z',
            'fill-rule': 'evenodd',
        },
    });
    if (!isFavoriteMovie) {
        svg.id = movie.id.toString();
    }
    svg.onclick = () => {}
    // card
    const card = createHTMLElement({ tagName: tagName.DIV, classes: 'card-body' });
    // overview
    const overview = createHTMLElement({ tagName: tagName.P, classes: 'card-text truncate' });
    overview.innerText = movie.overview;
    // date container
    const dateContainer = createHTMLElement({
        tagName: tagName.DIV,
        classes: 'd-flex justify-content-between align-items-center',
    });
    //date
    const date = createHTMLElement({ tagName: tagName.SMALL, classes: 'text-muted' });
    date.innerText = movie.release_date;

    dateContainer.append(date);
    card.append(overview, date);
    wrapper.append(image, svg, card);
    container.append(wrapper);

    return container;
};
