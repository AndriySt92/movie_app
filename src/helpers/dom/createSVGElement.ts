import { ICreateSvgElementProps } from '../../Interfaces/IDom';

export const createSVGElement = ({
    tagName,
    classes,
    svgAttributes,
    pathAttributes,
}: ICreateSvgElementProps): SVGElement => {
    const iconSvg = document.createElementNS(
        'http://www.w3.org/2000/svg',
        tagName
    );
    const iconPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
    );

    if (classes) {
        const classNames = classes.split(' ')
        iconSvg.classList.add(...classNames);
    }

    Object.keys(svgAttributes).forEach((key) =>
        iconSvg.setAttribute(key, svgAttributes[key])
    );
    Object.keys(pathAttributes).forEach((key) =>
        iconPath.setAttribute(key, pathAttributes[key])
    );

    iconSvg.append(iconPath);

    return iconSvg;
};
