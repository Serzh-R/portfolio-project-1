import {theme} from './Theme';


type FontPropsType = {
    ff?: string
    fw?: number
    color?: string
    lh?: number
    Fmax?: number
    Fmin?: number
}

export const font = ({ff, fw, color, lh, Fmin, Fmax}: FontPropsType) => `
    font-family: ${ff || "Nunito Sans"};
    font-weight: ${fw || 400};
    line-height: ${lh || 1.2};
    color: ${color || theme.colors.titleFont};
    
    @media screen and (max-width: 767px) {
       font-size: calc(${Fmin}px + ((${Fmax} - ${Fmin}) + (${Fmax} - ${Fmin}) * 0.7) * ((100vw - 374px) / 1440)); 
    }
    
    @media screen and (min-width: 767px) {
       font-size: calc(${Fmin}px + (${Fmax} - ${Fmin}) * (100vw / 1440)); 
    }
`

//font-size: calc( (100vw - 374px)/(1440 - 374) * (${Fmax} - ${Fmin}) + ${Fmin}px);