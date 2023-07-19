import {ICreateHTMLElementProps} from '../../Interfaces/IDom'

export const createHTMLElement = ({
    tagName,
    classes = '',
    attributes = {},
}: ICreateHTMLElementProps): HTMLElement => {
    const element: HTMLElement = document.createElement(tagName);

    if (classes) {
        const classNames = classes.split(' ');
        element.classList.add(...classNames);
    }

    Object.keys(attributes).forEach((key) =>
        element.setAttribute(key, attributes[key])
    );

    return element;
};
