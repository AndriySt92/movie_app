export interface ICreateHTMLElementProps {
    tagName: tagName;
    classes: string;
    attributes?: { [key: string]: string };
}

export interface ICreateSvgElementProps extends ICreateHTMLElementProps {
    svgAttributes: { [key: string]: string };
    pathAttributes: { [key: string]: string };
}

export enum tagName {
    DIV = 'div',
    P = 'p',
    IMG = 'img',
    SVG = 'svg',
    SMALL = 'small',
    INPUT = 'input',
    LABEL = 'label',
    FORM = 'form',
    BUTTON = 'button',
    SECTION = 'section',
    H1 = 'h1',
}