export const LIGHT_BLUE = '#43D2F0';

export const PURPLE = '#8E44AD';

export const Hero = {
    gradient: `linear-gradient(180deg, 
        #FFFFFF 0%,  
        ${LIGHT_BLUE} 0.01%, 
        ${PURPLE} 100%
    );`,
    animation: {
        play: true,
        slideIn: {
            selector: '#HERO',
            duration: 1,
            fromX: '-100px'
        },
        fadeIn: {
            selector: '#TEAL_1, #PURPLE_1, #BLUE_1, #PINK_1',
            duration: 0.4,
            yOffset: -10
        },
        tremor: {
            selector: '#LANDMASS, #PALM_TREE_1, #PURPLE_1, #TEAL_1, #TURTLE_1, #BLUE_1, #PINK_1, #SEAWEED_1, #SYMBOLS_1',
            yOffset: 7,
            duration: 1
        },
        lines: {
            selector: '#Group_99 > path',
            duration: 0.1,
            repeatDelay: 2
        },
        bubbles: {
            
        }
    }
}

export const About = {
    gradient: `linear-gradient(180deg, #53B4E2 0%, #6493D2 100%);`,
    DATA_ENTRANCE_DELAY: 250
}

export const Involved = {
    gradient: `linear-gradient(180deg, #6493D2 0%, #7D7ABC 100%);`,
    animation: {
        play: false,
        fish: {
            blue: {
                selector: '#i-blue-fish'
            },
            red: {

            }
        }
    }
}

export const Schedule = {
    gradient: `linear-gradient(180deg, #7D7ABC 0%, #8E44AD 100%);`
}

export const Faq = {
    gradient: `linear-gradient(180deg, #8E44AD 0%, #C39F9F 82.32%, #DFCF98 100%);`,
    animation: {
        play: true,
        fish: {
            red: {
                selector: '#FISH__ORANGE',
                duration: 2,
                x: '100%'
            },
            blue: {
                selector: '#FISH__TROUT'
            },
            bubbles: {
                selector: '#FISH__TROUT #BUBBLES g'
            }
        }
    }
}

export const Sponsor = {
    gradient: `linear-gradient(180deg, #DFCF98 0%, #FFE76A 100%);`
}

export const BORDER_RADIUS = '1rem';
