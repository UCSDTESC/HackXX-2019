export const breakpoints = {
    'xs': '0px',
    'sm': '576px',
    'sm-md': '600px',
    'md': '768px',
    'lg': '992px',
    'lg-xl': '1100px',
    'xl': '1200px',
    'countdown': '1000px'
}

//active this css only under the passed in breakpoint value
export const mediaBreakpointDown = (width, css) => `
    @media (max-width: ${breakpoints[width]}) {
        ${css}
    }
`
//active this css only above the passed in breakpoint value
export const mediaBreakpointUp = (width, css) => `
    @media (min-width: ${breakpoints[width]}) {
        ${css}
    }
`
