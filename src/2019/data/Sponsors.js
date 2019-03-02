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

].map(x => ({...x, tier: 0}));

const tierTwoSponsor = [
    {
        name: 'ServiceNow',
        logo: '/sponsors/snow.png',
        link: 'https://servicenow.com'
    },
    {
        name: 'Cisco',
        logo: '/sponsors/cisco.svg',
        link: 'https://cisco.com'
    },
    {
        name: 'Surcle',
        logo: '/sponsors/surcle.png',
        link: 'https://surcle.io'
    },

    {
        name: 'GitHub',
        logo: '/sponsors/git.png',
        link: 'https://github.com'
    },
].map(x => ({...x, tier: 1}));

const sponsors =  [
    ...tierOneSponsor,
    ...tierTwoSponsor
]

const partners = [
    {
        name: 'WIC',
        logo: '/partners/wic.png',
        link: 'http://wic.ucsd.edu'
    },
    {
        name: 'CSES',
        logo: '/partners/cses.png',
        link: 'http://cses.ucsd.edu'
    }
].map(x => ({...x, tier: 2}));

export {
    pastSponsors,
    sponsors,
    partners
}