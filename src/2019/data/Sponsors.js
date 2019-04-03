const pastSponsors = [

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
        name: 'Northrop Grumman',
        logo: '/sponsors/northrop-grumman.svg',
        link: 'http://www.northropgrumman.com/Pages/default.aspx'
    },
].map(x => ({...x, tier: 0}));

const tierTwoSponsor = [
    {
        name: 'ServiceNow',
        logo: '/sponsors/snow.png',
        link: 'https://servicenow.com'
    },
    {
        name: 'American Express',
        logo: '/sponsors/amex.jpg',
        link: 'https://www.americanexpress.com',
        className: 'w-75'
    },
    {
        name: 'Cisco',
        logo: '/sponsors/cisco.svg',
        link: 'https://cisco.com'
    },
    {
        name: 'iTradeNetwork',
        logo: '/sponsors/itradenetwork.png',
        link: 'https://itradenetwork.com',
    },
    {
        name: 'Surcle',
        logo: '/sponsors/surcle.png',
        link: 'https://surcle.io'
    },
    {
        name: 'Google Cloud Platform',
        logo: '/sponsors/gcp.png',
        link: 'https://cloud.google.com'
    },
    {
        name: 'GitHub',
        logo: '/sponsors/git.png',
        link: 'https://github.com'
    },
    {
        name: 'UC San Diego Bookstore',
        logo: '/sponsors/bookstore.png',
        link: 'https://ucsandiegobookstore.com/'
    }
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
    },
    {
        name: 'Triton XR',
        logo: '/partners/xr.png',
        link: 'https://tritonxr.ucsd.edu'
    },
    {
        name: 'IEEE UC San Diego',
        logo: '/partners/ieee.png',
        link: 'http://ieeeucsd.org'
    },
    {
        name: 'HKN',
        logo: '/partners/hkn.png',
        link: 'http://hkn.ucsd.edu'
    },
    {
        name: 'Div-E',
        logo: '/partners/div-e.png',
        link: 'http://www.div-e.io/'
    }
].map(x => ({...x, tier: 2}));

export {
    pastSponsors,
    sponsors,
    partners
}