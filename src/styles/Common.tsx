import {theme} from './Theme';


type FontPropsType = {
    ff?: string,
    fw?: number,
    color?: string,
    lh?: number,
    ls?: number,
    FMax: number,
    FMin: number,
    Vmax?: number,
    Vmin?: number
}

export const font = ({ff, fw, color, lh, ls, FMin, FMax, Vmax, Vmin}: FontPropsType) => `
    font-family: ${ff || "Nunito Sans"};
    font-weight: ${fw || 400};
    color: ${color || theme.colors.titleFont};
     line-height: ${lh || 1.2};
    letter-spacing: ${ls + 'px' || 0 + 'px'};
    font-size: ${changeSize({FMax, FMin, Vmax, Vmin})};
`

export const changeSize = ({ FMin, FMax, Vmax = 1440, Vmin = 374 }: FontPropsType) => {
    const variablePart = (FMax - FMin) / (Vmax - Vmin);
    const rem =  parseFloat(((FMax - Vmax * variablePart) / 16).toFixed(3));
    const vw = parseFloat((100 * variablePart).toFixed(2));

    return `clamp(${FMin}px, ${rem}rem + ${vw}vw, ${FMax}px)`;
}

//margin-bottom: ${changeSize({FMax:80, FMin:40, Vmax:1440, Vmin:768})};;

//*****************************************************************************

// @media screen and (max-width: 767px) {
//     font-size: calc(${Fmin}px + ((${Fmax} - ${Fmin}) + (${Fmax} - ${Fmin}) * 0.7) * ((100vw - 374px) / 1440));
// }
//
// @media screen and (min-width: 767px) {
//     font-size: calc(${Fmin}px + (${Fmax} - ${Fmin}) * (100vw / 1440));
// }

//*****************************************************************************

//font-size: calc( (100vw - 374px)/(1440 - 374) * (${Fmax} - ${Fmin}) + ${Fmin}px);

