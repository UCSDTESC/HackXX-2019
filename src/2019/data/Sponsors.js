const pastSponsors = [
    {
        name: 'Northrop Grumman',
        logo: '/sponsors/northrop-grumman.svg',
        link: 'http://www.northropgrumman.com/Pages/default.aspx'
    },
    {
        name: 'Amazon',
        logo: '/sponsors/amazon.png',
        link: 'https://amazon.com'
    },
    {
        name: 'Nanome',
        logo: '/sponsors/nanome.png',
        link: 'https://nanome.com'
    },
    {
        name: "Jacob's School of Engineering - ECE Dept",
        logo: '/sponsors/jsoe.svg',
        link: 'https://ece.ucsd.edu'
    },
    {
        name: "Jacob's School of Engineering - CSE Dept",
        logo: '/sponsors/cse.png',
        link: 'https://cse.ucsd.edu'
    }
]

const tierOneSponsor = [
    {
        name: 'Cisco',
        logo: '/sponsors/cisco.svg',
        link: 'https://cisco.com'
    }
].map(x => ({...x, tier: 0}));

const tierTwoSponsor = [
    {
        name: 'GitHub',
        logo: '/sponsors/git.png',
        link: 'https://github.com'
    },
    {
        name: 'Surcle',
        logo: '/sponsors/surcle.png',
        link: 'https://surcle.io'
    }
].map(x => ({...x, tier: 1}));

const sponsors =  [
    ...tierOneSponsor,
    ...tierTwoSponsor
]

export {
    pastSponsors,
    sponsors
}