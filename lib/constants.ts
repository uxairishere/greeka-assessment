import companyone from '@/public/assets/companyone.png'
import companythree from '@/public/assets/companythree.png'
import companytwo from '@/public/assets/companytwo.png'
import greeceflag from '@/public/assets/greeceflag.png'
import italyflag from '@/public/assets/italyflag.png'

export const DUMMY_DATA = [
    {
        id: 1,
        company_name: 'Blue Star Ferries',
        heading: "Blue Star Ferries",
        imageUrl: companyone,
        rating: {
            customers: 1342,
            ratings: 4.5
        },
        desciption: "Blue Star Ferries is currently the biggest ferry company in Greece.\nIt is a member of Attica Group, one of the most significant companies in the Greek shipping industry.\nIts fleet consists of vessels of the latest technology and serves itineraries starting from the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos etc). Blue Star Ferries reaches over 50 destinations in total. Even though Blue Star ...",
        countries: [
            { name: "Greece", countryLogo: greeceflag },
        ],
        vessels_number: 8,
        ferry_types: '8 normal',
        popular_vessels: [
            {
                name: 'Blue Star Delos',
                link: 'https://www.google.com/'
            },
            {
                name: 'Blue Star Naxos',
                link: 'https://www.google.com/'
            },
        ]
    },
    {
        id: 2,
        company_name: 'Seajets',
        heading: "",
        imageUrl: companytwo,
        rating: {
            customers: 2467,
            ratings: 2.5
        },
        desciption: "Seajets is the biggest company of high-speed vessels of the Aegean Sea. It is a joint venture of speedboats that was initially founded in 1989 to provide shipping services.\nThe company's passenger ferries have been connecting over 26 destinations in the Aegean Sea since 2002. Their fleet consists of 14 high-speed catamarans and 3 conventional ones, with a speed of up to 50 knots.\nSeajets connect the main ports of Athens (Piraeus, Rafina and Lavrion)",
        countries: [
            { name: "Greece", countryLogo: greeceflag },
        ],
        vessels_number: 17,
        ferry_types: '10 normal and 7 high-speed ferries',
        popular_vessels: [
            {
                name: 'WorldChampion jet',
                link: 'https://www.google.com/'
            },
            {
                name: 'Seajet 2',
                link: 'https://www.google.com/'
            },
        ]
    },
    {
        id: 3,
        company_name: 'Anek - Superfast',
        heading: "Anek-Superfast",
        imageUrl: companythree,
        rating: {
            customers: 667,
            ratings: 2.5
        },
        desciption: "Seajets is the biggest company of high-speed vessels of the Aegean Sea. It is a joint venture of speedboats that was initially founded in 1989 to provide shipping services.\nThe company's passenger ferries have been connecting over 26 destinations in the Aegean Sea since 2002. Their fleet consists of 14 high-speed catamarans and 3 conventional ones, with a speed of up to 50 knots.\nSeajets connect the main ports of Athens (Piraeus, Rafina and Lavrion)",
        countries: [
            { name: "Greece", countryLogo: greeceflag },
            { name: "Italy", countryLogo: italyflag }
        ],
        vessels_number: 6,
        ferry_types: 'Normal ferries',
        popular_vessels: [
            {
                name: 'Superfast XII',
                link: 'https://www.google.com/'
            },
            {
                name: 'Superfast XI',
                link: 'https://www.google.com/'
            },
        ]
    }
]