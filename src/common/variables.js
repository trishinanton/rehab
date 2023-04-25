
export const textColor = '#8f8f8f';
export const  primaryColor= '#c49b66';
export const menuColor = '#eee'
export const bgColor = '#f7f7f7';
export const titleColor = '#bcb5b5';
export const titleFontFamily = `'Josefin Sans', sans-serif`;
export const bodyFontFamily = `'Rubik', sans-serif`;
export const commonText = (fontFamily,fontSize,fontWeight,letterSpacing,lineHeight,fontColor)=>({
    'font-family' : fontFamily,
    'font-size': fontSize,
    'font-weight': fontWeight,
    'letter-spacing': letterSpacing,
    'line-height': lineHeight,
    'color': fontColor
})
export const flex = (flexDir,justCont,alignItems)=>({
    'display': 'flex',
    'flex-direction': flexDir,
    'justify-content': justCont,
    'align-items' : alignItems
})