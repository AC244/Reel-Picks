const db = require('../db')
const { Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = [
        // Action
            {
                title: "Mad Max: Fury Road",
                genre: "Action",
                releaseYear: 2015,
                description: "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrant.",
                rating: "R",
                posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10854488_p_v8_ac.jpg"
            },
            {
                title: "Die Hard",
                genre: "Action",
                releaseYear: 1988,
                description: "A New York City cop tries to save hostages taken by terrorists in a Los Angeles skyscraper.",
                rating: "R",
                posterImage: "https://m.media-amazon.com/images/M/MV5BMGNlYmM1NmQtYWExMS00NmRjLTg5ZmEtMmYyYzJkMzljYWMxXkEyXkFqcGc@._V1_.jpg"
            },
            {
                title: "John Wick",
                genre: "Action",
                releaseYear: 2014,
                description: "An ex-hitman comes out of retirement to track down the gangsters that took everything from him.",
                rating: "R",
                posterImage: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg"
            },
            {
                title: "The Dark Knight",
                genre: "Action",
                releaseYear: 2008,
                description: "Batman faces the Joker, a criminal mastermind who wants to create chaos.",
                rating: "PG-13",
                posterImage: "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg"
            },
            {
                title: "Gladiator",
                genre: "Action",
                releaseYear: 2000,
                description: "A betrayed Roman general seeks revenge against the corrupt emperor who murdered his family.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png"
            },
            {
                title: "The Avengers",
                genre: "Action",
                releaseYear: 2012,
                description: "Earth’s mightiest heroes must come together to stop an alien invasion.",
                rating: "PG-13",
                posterImage: "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            },
            {
                title: "Inception",
                genre: "Action",
                releaseYear: 2010,
                description: "A thief who enters the dreams of others must plant an idea in a target’s mind.",
                rating: "PG-13",
                posterImage: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
            },
            {
                title: "The Matrix",
                genre: "Action",
                releaseYear: 1999,
                description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
                rating: "R",
                posterImage: "https://m.media-amazon.com/images/I/613ypTLZHsL._AC_UF1000,1000_QL80_.jpg"
            },
            {
                title: "Terminator 2: Judgment Day",
                genre: "Action",
                releaseYear: 1991,
                description: "A cyborg is sent back in time to protect a young boy from an advanced killing machine.",
                rating: "R",
                posterImage: "https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            },
            {
                title: "Skyfall",
                genre: "Action",
                releaseYear: 2012,
                description: "Bond’s loyalty to M is tested as her past comes back to haunt her.",
                rating: "PG-13",
                posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8919177_p_v13_bj.jpg"
            },
            {
                title: "Casino Royale",
                genre: "Action",
                releaseYear: 2006,
                description: "James Bond earns his 00 status and is sent to play poker at Casino Royale.",
                rating: "PG-13",
                posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159167_p_v8_aw.jpg"
            },
            {
                title: "Black Panther",
                genre: "Action",
                releaseYear: 2018,
                description: "T’Challa returns home to the isolated nation of Wakanda to take the throne as king.",
                rating: "PG-13",
                posterImage: "https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0%2C0%2C540%2C810"
            },
            {
                title: "Avatar",
                genre: "Action",
                releaseYear: 2009,
                description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission.",
                rating: "PG-13",
                posterImage: "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_.jpg"
            },
            {
                title: "Pirates of the Caribbean: The Curse of the Black Pearl",
                genre: "Action",
                releaseYear: 2003,
                description: "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow.",
                rating: "PG-13",
                posterImage: "https://m.media-amazon.com/images/M/MV5BNDhlMzEyNzItMTA5Mi00YWRhLThlNTktYTQyMTA0MDIyNDEyXkEyXkFqcGc@._V1_.jpg"
            },
            {
                title: "RoboCop",
                genre: "Action",
                releaseYear: 1987,
                description: "In a dystopic and crime-ridden Detroit, a terminally wounded cop returns to the force as a powerful cyborg.",
                rating: "R",
                posterImage: "https://m.media-amazon.com/images/M/MV5BZWM1YzRhODktZDE1MC00NzBlLTk0NGMtOGNhZDQyMmJiZGFiXkEyXkFqcGc@._V1_.jpg"
            },
            {
                title: "Dunkirk",
                genre: "Action",
                releaseYear: 2017,
                description: "Allied soldiers are surrounded by enemy troops and evacuated during a fierce battle in World War II.",
                rating: "PG-13",
                posterImage: "https://m.media-amazon.com/images/M/MV5BZWU5ZjJkNTQtMzQwOS00ZGE4LWJkMWUtMGQ5YjdiM2FhYmRhXkEyXkFqcGc@._V1_.jpg"
            },
            {
                title: "The Bourne Identity",
                genre: "Action",
                releaseYear: 2002,
                description: "A man suffering from amnesia tries to discover his true identity.",
                rating: "PG-13",
                posterImage: "https://m.media-amazon.com/images/M/MV5BYTk1ZTcyMWMtMWUxYS00MmEzLTlmODYtOTk1MGRjOTg1ZjlmXkEyXkFqcGc@._V1_.jpg"
            },
            {
                title: "Kill Bill: Vol. 1",
                genre: "Action",
                releaseYear: 2003,
                description: "A former assassin awakens from a four-year coma and seeks revenge on her former colleagues.",
                rating: "R",
                posterImage: "https://m.media-amazon.com/images/M/MV5BZmMyYzJlZmYtY2I3NC00NjAyLTkyZWItZjdjZDI1YTYyYTEwXkEyXkFqcGc@._V1_.jpg"
            },
            {
                title: "Furious 7",
                genre: "Action",
                releaseYear: 2015,
                description: "Dominic Toretto and his crew must face a powerful new enemy.",
                rating: "PG-13",
                posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10679969_p_v8_av.jpg"
            },
            {
                title: "The Equalizer",
                genre: "Action",
                releaseYear: 2014,
                description: "A retired black ops operative seeks redemption by helping a young girl under the control of her pimp.",
                rating: "R",
                posterImage: "https://m.media-amazon.com/images/M/MV5BMTQ2MzE2NTk0NF5BMl5BanBnXkFtZTgwOTM3NTk1MjE@._V1_.jpg"
            },
            {
                title: "The Raid: Redemption",
                genre: "Action",
                releaseYear: 2011,
                description: "A rookie member of an elite team must fight his way through a criminal-infested building.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/9/9a/The_Raid_2011_poster.jpg"
            },
            {
                title: "The Fast and the Furious",
                genre: "Action",
                releaseYear: 2001,
                description: "An undercover cop infiltrates a street racing gang.",
                rating: "PG-13",
                posterImage: "https://m.media-amazon.com/images/I/71qtDoM-rcL._AC_UF894,1000_QL80_.jpg"
            },
            {
                title: "Top Gun: Maverick",
                genre: "Action",
                releaseYear: 2022,
                description: "After more than 30 years of service, Maverick trains new recruits for a dangerous mission.",
                rating: "PG-13",
                posterImage: "https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_.jpg"
            },
            {
                title: "Mission: Impossible – Fallout",
                genre: "Action",
                releaseYear: 2018,
                description: "Ethan Hunt and his IMF team race against time to stop a nuclear threat.",
                rating: "PG-13",
                posterImage: "https://m.media-amazon.com/images/I/81LvdFeQSXL._AC_UF894,1000_QL80_.jpg"
            },
            {
                title: "The Hunger Games",
                genre: "Action",
                releaseYear: 2012,
                description: "Katniss Everdeen must survive a televised death match in a dystopian future.",
                rating: "PG-13",
                posterImage: "https://m.media-amazon.com/images/M/MV5BMWI1OGM4YjQtNmIxNi00YmE2LWJkNTAtY2Q0YjU4NTI5NWQyXkEyXkFqcGc@._V1_.jpg"
            },
            {
                title: "Edge of Tomorrow",
                genre: "Action",
                releaseYear: 2014,
                description: "A soldier relives the same day over and over while fighting alien invaders.",
                rating: "PG-13",
                posterImage: "https://resizing.flixster.com/T6hqzeQpWlt65RcMZ6HiyQhGrW8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUxNWFlMGQ0LWU0ZTUtNDkzMC04NGQ4LTk0ZWM5MzRjMzRhNy53ZWJw"
            },
            {
                title: "300",
                genre: "Action",
                releaseYear: 2006,
                description: "King Leonidas of Sparta and his army of 300 men fight to the death against Xerxes' army.",
                rating: "R",
                posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p163191_p_v8_al.jpg"
            },
            {
                title: "Bad Boys",
                genre: "Action",
                releaseYear: 1995,
                description: "Two Miami detectives must protect a murder witness while investigating a stolen drugs case.",
                rating: "R",
                posterImage: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/badboys_onesheet_1400x2100_0.jpg?itok=GGzVOfd0"
            },
            {
                title: "Heat",
                genre: "Action",
                releaseYear: 1995,
                description: "A group of professional bank robbers start to feel the heat from the LAPD.",
                rating: "R",
                posterImage: "https://m.media-amazon.com/images/M/MV5BMTkxYjU1OTMtYWViZC00ZjAzLWI3MDktZGQ2N2VmMjVjNDRlXkEyXkFqcGc@._V1_.jpg"
            },
            {
                title: "Speed",
                genre: "Action",
                releaseYear: 1994,
                description: "A Los Angeles cop must stop a bus that has been rigged to explode if it goes under 50 mph.",
                rating: "R",
                posterImage: "https://play-lh.googleusercontent.com/qLekpg2sGyiWCtczo4ZlDHvCdMSB6VqinTmALREEtcVaoDkO6Xz2hFLnfL28ftjD6gY"
            },
            {
                title: "Point Break",
                genre: "Action",
                releaseYear: 1991,
                description: "An FBI agent goes undercover to catch a gang of surfers who rob banks to fund their extreme lifestyle.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/7/7e/Pointbreaktheatrical.jpg"
            },
            {
                title: "The Fugitive",
                genre: "Action",
                releaseYear: 1993,
                description: "A doctor wrongly convicted of murdering his wife escapes custody to find the real killer.",
                rating: "PG-13",
                posterImage: "https://m.media-amazon.com/images/M/MV5BM2RjMjEwODUtYTE4OC00MzhkLThjMjItZjYyZjk3YzA4YWUxXkEyXkFqcGc@._V1_.jpg"
            },
            {
                title: "True Lies",
                genre: "Action",
                releaseYear: 1994,
                description: "A secret agent discovers his wife might be having an affair while he is investigating a terrorist group.",
                rating: "R",
                posterImage: "https://m.media-amazon.com/images/M/MV5BYjU1ZjNhMjMtOTMxZS00MDc1LTlkNzQtZTdjNGQyYjQ4YTA4XkEyXkFqcGc@._V1_.jpg"
            },
        
        

        // Comedy
        {
            title: "The Hangover",
            genre: "Comedy",
            releaseYear: 2009,
            description: "Three friends wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNDI2MzBhNzgtOWYyOS00NDM2LWE0OGYtOGQ0M2FjMTI2NTllXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Superbad",
            genre: "Comedy",
            releaseYear: 2007,
            description: "Two high school friends try to make the most of their last days before graduation with a wild party.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNjk0MzdlZGEtNTRkOC00ZDRiLWJkYjAtMzUzYTRiNzk1YTViXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Anchorman: The Legend of Ron Burgundy",
            genre: "Comedy",
            releaseYear: 2004,
            description: "Ron Burgundy, a top-rated newsman in San Diego during the 1970s, clashes with his new female co-anchor.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTQ2MzYwMzk5Ml5BMl5BanBnXkFtZTcwOTI4NzUyMw@@._V1_.jpg"
        },
        {
            title: "Dumb and Dumber",
            genre: "Comedy",
            releaseYear: 1994,
            description: "Two unintelligent friends set out on a cross-country trip to return a briefcase full of money.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNGQxZDA1MmMtYWQ1Ni00NTJmLTljMjgtZWVmODllODVhMzgyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Groundhog Day",
            genre: "Comedy",
            releaseYear: 1993,
            description: "A weatherman finds himself reliving the same day over and over.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BOWE3MjQ3ZDAtNDQ2MC00YjBjLTk0ZWYtNjQ0YzQ4YWE3YTEyXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Step Brothers",
            genre: "Comedy",
            releaseYear: 2008,
            description: "Two middle-aged men who still live at home become stepbrothers and chaos ensues.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYWNiOGZkOTgtNGMzMC00MDg5LTliM2UtN2VjMDI3N2ViOWE5XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Bridesmaids",
            genre: "Comedy",
            releaseYear: 2011,
            description: "Competition between the maid of honor and a bridesmaid over who is the bride's best friend.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwODI4MzE0NA@@._V1_.jpg"
        },
        {
            title: "The 40-Year-Old Virgin",
            genre: "Comedy",
            releaseYear: 2005,
            description: "A middle-aged man tries to lose his virginity with the help of his friends.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p36173_p_v10_ab.jpg"
        },
        {
            title: "Ferris Bueller's Day Off",
            genre: "Comedy",
            releaseYear: 1986,
            description: "A high school student fakes being sick to skip school and has an adventurous day off.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9316_p_v8_al.jpg"
        },
        {
            title: "Elf",
            genre: "Comedy",
            releaseYear: 2003,
            description: "A man raised as an elf at the North Pole is sent to the U.S. in search of his true identity.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNDQ0ZWE2NzgtNGNhMC00MDIwLWI1MjUtYjYxZGRiM2UyYTQzXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Monty Python and the Holy Grail",
            genre: "Comedy",
            releaseYear: 1975,
            description: "King Arthur and his knights embark on a low-budget search for the Grail.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYWY4YmUzZmUtMzQ0ZS00N2Y2LWJlODQtN2IwMDc1MWQwMmU3XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Tropic Thunder",
            genre: "Comedy",
            releaseYear: 2008,
            description: "Through a series of freak occurrences, a group of actors shooting a war movie in the jungle become the real soldiers.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNDE5NjQzMDkzOF5BMl5BanBnXkFtZTcwODI3ODI3MQ@@._V1_.jpg"
        },
        {
            title: "Shaun of the Dead",
            genre: "Comedy",
            releaseYear: 2004,
            description: "A man decides to turn his life around by winning back his ex-girlfriend and saving his town from zombies.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNzNjZGE4YTUtOWU3OC00Mzg2LThjNWItMzUwYzEwMDgxYmVjXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Napoleon Dynamite",
            genre: "Comedy",
            releaseYear: 2004,
            description: "A listless and alienated teenager decides to help his friend win the class presidency.",
            rating: "PG",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p34617_p_v8_ak.jpg"
        },
        {
            title: "Zoolander",
            genre: "Comedy",
            releaseYear: 2001,
            description: "At the end of his career, a clueless fashion model is brainwashed to kill the Prime Minister of Malaysia.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZjM2NDEwOWQtOGMyOS00ZjVhLWEyNDUtNzQ0M2Y5ODFhNWE5XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Big Lebowski",
            genre: "Comedy",
            releaseYear: 1998,
            description: "Jeff 'The Dude' Lebowski is mistaken for a millionaire of the same name and seeks restitution.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNDQwMTAzOTkxNV5BMl5BanBnXkFtZTgwMjc0MTAwMjE@._V1_.jpg"
        },
        {
            title: "Meet the Parents",
            genre: "Comedy",
            releaseYear: 2000,
            description: "A man meets his girlfriend's overbearing father for the first time before proposing.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZmE0MGI0OTctOGRlMy00MDdjLTg4M2EtNzFmZWNiNDhjYTgzXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Wedding Crashers",
            genre: "Comedy",
            releaseYear: 2005,
            description: "Two friends crash weddings to meet women but things take a turn when one falls for a bride's maid.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYzQwNmU0NGEtZjlmYy00ZjQ5LTlmMWYtODY3YzI4NTdiYzA4XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Old School",
            genre: "Comedy",
            releaseYear: 2003,
            description: "Three men in their 30s start a fraternity in order to relive their college years.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31600_p_v12_aq.jpg"
        },
        {
            title: "Knocked Up",
            genre: "Comedy",
            releaseYear: 2007,
            description: "A one-night stand between two mismatched individuals results in an unexpected pregnancy.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYmIyMDA5YzgtZmNhMC00YWNlLTgwYjItOTc0ZGNjNTcwNzAxXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Austin Powers: International Man of Mystery",
            genre: "Comedy",
            releaseYear: 1997,
            description: "A cryogenically frozen British spy is thawed out in the 1990s to thwart his old nemesis, Dr. Evil.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19297_p_v10_aa.jpg"
        },
        {
            title: "Liar Liar",
            genre: "Comedy",
            releaseYear: 1997,
            description: "A lawyer finds himself unable to lie for 24 hours due to his son's birthday wish.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19140_p_v8_ah.jpg"
        },
        {
            title: "Ace Ventura: Pet Detective",
            genre: "Comedy",
            releaseYear: 1994,
            description: "A goofy detective specializing in animals must track down a missing dolphin mascot of a football team.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BOWU1M2Q5MDgtOTkxZS00NjdmLWFlNWEtOGEyOTNlNGYyYTZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "The Mask",
            genre: "Comedy",
            releaseYear: 1994,
            description: "A bank clerk discovers a magical mask that transforms him into a mischievous and confident alter ego.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNGNmNjI0ZmMtMzI5MC00ZjUyLWFlZDEtYjUyMGZlN2E3N2E2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
    

        // Drama
        {
            title: "The Shawshank Redemption",
            genre: "Drama",
            releaseYear: 1994,
            description: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/I/61-vQDr7ecL._AC_UF894,1000_QL80_.jpg"
        },
        {
            title: "Forrest Gump",
            genre: "Drama",
            releaseYear: 1994,
            description: "The story of Forrest Gump, a man with low intelligence who witnesses and unwittingly influences several historical events in 20th century America.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Fight Club",
            genre: "Drama",
            releaseYear: 1999,
            description: "An insomniac office worker forms an underground fight club that evolves into something much more.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Godfather",
            genre: "Drama",
            releaseYear: 1972,
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Schindler's List",
            genre: "Drama",
            releaseYear: 1993,
            description: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "12 Years a Slave",
            genre: "Drama",
            releaseYear: 2013,
            description: "A free black man from upstate New York is abducted and sold into slavery.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_.jpg"
        },
        {
            title: "Good Will Hunting",
            genre: "Drama",
            releaseYear: 1997,
            description: "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNDdjZGQ5YzEtNTc2My00Mjc0LWFlMTctYzkwMzZlNzdiZWYzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "A Beautiful Mind",
            genre: "Drama",
            releaseYear: 2001,
            description: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNzljZTk5ZDgtZTQ1Zi00NTM4LThlOGUtZDk2MGM4NDQ4NWQyXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Pursuit of Happyness",
            genre: "Drama",
            releaseYear: 2006,
            description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional endeavor.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "The Green Mile",
            genre: "Drama",
            releaseYear: 1999,
            description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Requiem for a Dream",
            genre: "Drama",
            releaseYear: 2000,
            description: "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25574_p_v12_ab.jpg"
        },
        {
            title: "American Beauty",
            genre: "Drama",
            releaseYear: 1999,
            description: "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/5sOOWkgXyKfxn5zq73bjF59_5cI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY4NTUxOGZjLWNkMjAtNDE3YS1hOGVkLWU3NTZkZjFhMGMxOS53ZWJw"
        },
        {
            title: "There Will Be Blood",
            genre: "Drama",
            releaseYear: 2007,
            description: "A story of family, religion, hatred, oil, and madness, focusing on a turn-of-the-century prospector in the early days of the oil business.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/da/There_Will_Be_Blood_Poster.jpg"
        },
        {
            title: "The Social Network",
            genre: "Drama",
            releaseYear: 2010,
            description: "The story of the founders of the social-networking website, Facebook.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/S/pv-target-images/ea4f1c75ddd9fd937a77875d48f9ce8225ed954afcefabe7a2195311b1a97ddd.jpg"
        },
        {
            title: "La La Land",
            genre: "Drama",
            releaseYear: 2016,
            description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg"
        },
        {
            title: "Slumdog Millionaire",
            genre: "Drama",
            releaseYear: 2008,
            description: "A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of 'Who Wants to Be a Millionaire?'.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/I/71ZUVjgWcBL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "Moonlight",
            genre: "Drama",
            releaseYear: 2016,
            description: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_.jpg"
        },
        {
            title: "Eternal Sunshine of the Spotless Mind",
            genre: "Drama",
            releaseYear: 2004,
            description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg"
        },
        {
            title: "Birdman",
            genre: "Drama",
            releaseYear: 2014,
            description: "A washed-up actor, famous for portraying an iconic superhero, struggles to mount a Broadway play.",
            rating: "R",
            posterImage: "https://static0.moviewebimages.com/wordpress/wp-content/uploads/movie/9yz1ZGdz2jbPppD1kwUZRtFPSqRMLN.jpg"
        },
        {
            title: "Whiplash",
            genre: "Drama",
            releaseYear: 2014,
            description: "A promising young drummer enrolls at a cutthroat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
            rating: "R",
            posterImage: "https://miro.medium.com/v2/resize:fit:1400/1*HygtAUSg3MqQjimu0MQy3Q.jpeg"
        },
        {
            title: "The Revenant",
            genre: "Drama",
            releaseYear: 2015,
            description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYTgwNmQzZDctMjNmOS00OTExLTkwM2UtNzJmOTJhODFjOTdlXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "A Star is Born",
            genre: "Drama",
            releaseYear: 2018,
            description: "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNGUxZTc0NTAtNzQwMy00MmM2LTgzMGYtZWIyY2E1MGFjYmM5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "The Pianist",
            genre: "Drama",
            releaseYear: 2002,
            description: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto during World War II.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjEwNmEwYjgtNTk3ZC00NjljLTg5ZDctZTY3ZGQwZjRkZmQxXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The King's Speech",
            genre: "Drama",
            releaseYear: 2010,
            description: "The story of King George VI's effort to overcome his stammer with the help of speech therapist Lionel Logue.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMzU5MjEwMTg2Nl5BMl5BanBnXkFtZTcwNzM3MTYxNA@@._V1_.jpg"
        },
        {
            title: "Manchester by the Sea",
            genre: "Drama",
            releaseYear: 2016,
            description: "A depressed uncle is asked to take care of his teenage nephew after the boy's father dies.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_.jpg"
        },



        // Horror
        {
            title: "The Exorcist",
            genre: "Horror",
            releaseYear: 1973,
            description: "A mother seeks the help of priests to save her daughter, who is possessed by a mysterious entity.",
            rating: "R",
            posterImage: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/116/2022/09/16085653/4ucLGcXVVSVnsfkGtbLY4XAius8-scaled.jpg"
        },
        {
            title: "Hereditary",
            genre: "Horror",
            releaseYear: 2018,
            description: "A grieving family is haunted by tragic and disturbing occurrences.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNTEyZGQwODctYWJjZi00NjFmLTg3YmEtMzlhNjljOGZhMWMyXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Shining",
            genre: "Horror",
            releaseYear: 1980,
            description: "A family heads to an isolated hotel where an evil presence drives the father into madness.",
            rating: "R",
            posterImage: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/192/2022/05/05152719/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg"
        },
        {
            title: "Get Out",
            genre: "Horror",
            releaseYear: 2017,
            description: "A young African-American uncovers disturbing secrets while visiting his white girlfriend's family.",
            rating: "R",
            posterImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8Dqjjt2IZJu2yujKjYRB8xo2ntQDhWFEjw&s"
        },
        {
            title: "A Nightmare on Elm Street",
            genre: "Horror",
            releaseYear: 1984,
            description: "Teenagers are terrorized by a killer who attacks them in their dreams.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8572_p_v8_ad.jpg"
        },
        {
            title: "Halloween",
            genre: "Horror",
            releaseYear: 1978,
            description: "Fifteen years after murdering his sister, Michael Myers escapes from a mental hospital and returns to his hometown to kill again.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/af/Halloween_%281978%29_theatrical_poster.jpg"
        },
        {
            title: "The Texas Chainsaw Massacre",
            genre: "Horror",
            releaseYear: 1974,
            description: "Five friends visiting rural Texas encounter a family of cannibals, led by Leatherface.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTU1MzY2NDc2MV5BMl5BanBnXkFtZTgwMTc3MTUzMzI@._V1_.jpg"
        },
        {
            title: "The Conjuring",
            genre: "Horror",
            releaseYear: 2013,
            description: "Paranormal investigators help a family terrorized by a dark presence in their farmhouse.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg"
        },
        {
            title: "It",
            genre: "Horror",
            releaseYear: 2017,
            description: "A group of children are terrorized by a malevolent entity that takes the form of a clown.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Babadook",
            genre: "Horror",
            releaseYear: 2014,
            description: "A single mother and her son are haunted by a sinister presence that comes from a children's book.",
            rating: "Not Rated",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Insidious",
            genre: "Horror",
            releaseYear: 2010,
            description: "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMGExMzQ2NWYtMjk2My00YzczLTk0MGQtYzliNDU3ZjU1NDU1XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Paranormal Activity",
            genre: "Horror",
            releaseYear: 2007,
            description: "A young couple documents the terrifying supernatural occurrences in their home.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjY1NjcxODQ4MV5BMl5BanBnXkFtZTcwMzUxNjM4Mg@@._V1_.jpg"
        },
        {
            title: "The Ring",
            genre: "Horror",
            releaseYear: 2002,
            description: "A journalist investigates a cursed videotape that kills its viewer seven days after watching.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNDA2NTg2NjE4Ml5BMl5BanBnXkFtZTYwMjYxMDg5._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "The Blair Witch Project",
            genre: "Horror",
            releaseYear: 1999,
            description: "Three film students vanish after traveling into the woods to make a documentary about a local legend.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNGFmYzA5NzktOTc1Ni00YTIxLWJiZTEtNmEyZjBjNDM2MjRlXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Saw",
            genre: "Horror",
            releaseYear: 2004,
            description: "Two men wake up chained in a room, and must follow the sadistic rules of a killer to survive.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/56/Saw_official_poster.jpg"
        },
        {
            title: "The Silence of the Lambs",
            genre: "Horror",
            releaseYear: 1991,
            description: "A young FBI agent seeks the help of a brilliant but insane cannibalistic psychiatrist to catch a serial killer.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Psycho",
            genre: "Horror",
            releaseYear: 1960,
            description: "A secretary embezzles money and checks into a secluded motel where she meets the mysterious Norman Bates.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/S/pv-target-images/ff9f479f732b340142be8dfc74a4ea380a7ee6c358b254fedb1a0213e319d8b6.jpg"
        },
        {
            title: "The Witch",
            genre: "Horror",
            releaseYear: 2015,
            description: "A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and possession.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/bf/The_Witch_poster.png"
        },
        {
            title: "Midsommar",
            genre: "Horror",
            releaseYear: 2019,
            description: "A couple travels to Sweden for a festival, only to find themselves in the midst of a sinister cult.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Poltergeist",
            genre: "Horror",
            releaseYear: 1982,
            description: "A family's home is haunted by malevolent spirits that abduct their young daughter.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNzY4MGZkYjgtYTQ2YS00YTlhLWEyMjAtMjZhYzczNTRlM2ZmXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Omen",
            genre: "Horror",
            releaseYear: 1976,
            description: "An American ambassador realizes his child is the Antichrist after a series of mysterious deaths.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Omen_ver4.jpg/220px-Omen_ver4.jpg"
        },
        {
            title: "The Grudge",
            genre: "Horror",
            releaseYear: 2004,
            description: "An American nurse living in Tokyo encounters a vengeful supernatural force.",
            rating: "PG-13",
            posterImage: "https://images.moviesanywhere.com/42599faa82dbcbf2e66d483424781c67/d1cb150e-4266-41b9-b38a-c6b723def944.jpg"
        },
        {
            title: "Carrie",
            genre: "Horror",
            releaseYear: 1976,
            description: "A shy, repressed teenage girl unleashes her telekinetic powers after being humiliated at her prom.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNjMwMDVlZjYtMWRlZS00OTU1LTlmYTQtOGViNTdmYTE0ZjRlXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Cabin in the Woods",
            genre: "Horror",
            releaseYear: 2012,
            description: "Five friends visit a remote cabin, where they become victims of a sinister ritual.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNTUxNzYyMjg2N15BMl5BanBnXkFtZTcwMTExNzExNw@@._V1_.jpg"
        },

        // Sci-Fi
        {
            title: "Blade Runner",
            genre: "Sci-Fi",
            releaseYear: 1982,
            description: "A former police officer hunts down bioengineered beings in a dystopian future.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Inception",
            genre: "Sci-Fi",
            releaseYear: 2010,
            description: "A thief who enters the dreams of others must plant an idea in a target’s mind.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
        },
        {
            title: "The Matrix",
            genre: "Sci-Fi",
            releaseYear: 1999,
            description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Interstellar",
            genre: "Sci-Fi",
            releaseYear: 2014,
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Star Wars: Episode IV - A New Hope",
            genre: "Sci-Fi",
            releaseYear: 1977,
            description: "A young farm boy joins a group of rebels to fight against the tyrannical Galactic Empire.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/I/612h-jwI+EL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "The Terminator",
            genre: "Sci-Fi",
            releaseYear: 1984,
            description: "A cyborg is sent back in time to kill the mother of the future leader of the human resistance.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "E.T. the Extra-Terrestrial",
            genre: "Sci-Fi",
            releaseYear: 1982,
            description: "A young boy befriends an alien stranded on Earth and helps him return home.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYTNhNmY0YWMtMTczYi00MTA0LThhMmUtMTIxYzE0Y2QwMzRlXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "District 9",
            genre: "Sci-Fi",
            releaseYear: 2009,
            description: "An extraterrestrial race forced to live in slum-like conditions on Earth begins to change when one of them is exposed to a potent chemical.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p177953_p_v8_ae.jpg"
        },
        {
            title: "Gravity",
            genre: "Sci-Fi",
            releaseYear: 2013,
            description: "Two astronauts work together to survive after an accident leaves them stranded in space.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_.jpg"
        },
        {
            title: "The Fifth Element",
            genre: "Sci-Fi",
            releaseYear: 1997,
            description: "In the 23rd century, a cab driver becomes an unlikely hero in the battle to save the world.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BODU4ZTE5MWYtNmY2MC00NDkyLTk0NDgtNTk5YjgzMzc4NmQwXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Arrival",
            genre: "Sci-Fi",
            releaseYear: 2016,
            description: "A linguist is recruited by the military to communicate with extraterrestrial visitors.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg"
        },
        {
            title: "Avatar",
            genre: "Sci-Fi",
            releaseYear: 2009,
            description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Children of Men",
            genre: "Sci-Fi",
            releaseYear: 2006,
            description: "In a future where humanity is infertile, a man is tasked with protecting a miraculously pregnant woman.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYjRiZDE0ZWQtY2FlYy00OTRhLThjMGMtYTdmYzViM2I4ODBhXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Blade Runner 2049",
            genre: "Sci-Fi",
            releaseYear: 2017,
            description: "A young blade runner discovers a long-buried secret that has the potential to plunge what's left of society into chaos.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg"
        },
        {
            title: "The Martian",
            genre: "Sci-Fi",
            releaseYear: 2015,
            description: "An astronaut becomes stranded on Mars and must devise a way to survive while awaiting rescue.",
            rating: "PG-13",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/image_a119dd78.jpeg?region=0%2C0%2C800%2C1200"
        },
        {
            title: "Terminator 2: Judgment Day",
            genre: "Sci-Fi",
            releaseYear: 1991,
            description: "A cyborg and a young boy join forces to protect the future leader of the human resistance.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "12 Monkeys",
            genre: "Sci-Fi",
            releaseYear: 1995,
            description: "A convict from a dystopian future is sent back in time to gather information about a virus that wiped out most of humanity.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMDQwNDY0M2MtOGFmNy00ZjI5LTkzN2ItMzg5M2IwZTZjY2MyXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Minority Report",
            genre: "Sci-Fi",
            releaseYear: 2002,
            description: "In a future where crime is predicted and stopped before it occurs, a cop is accused of a murder he has yet to commit.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYTdmNzM3YzItZTRkYS00MTY5LTg4ZmItNjFmNTk2N2Q2NmNlXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Snowpiercer",
            genre: "Sci-Fi",
            releaseYear: 2013,
            description: "In a future where Earth is frozen, the last survivors are aboard a train that travels around the globe.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTQ3NzA1MTY3MV5BMl5BanBnXkFtZTgwNzE2Mzg5MTE@._V1_.jpg"
        },
        {
            title: "The Prestige",
            genre: "Sci-Fi",
            releaseYear: 2006,
            description: "Two magicians engage in a bitter rivalry that leads to tragic consequences.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg"
        },

        // Fantasy
        {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            genre: "Fantasy",
            releaseYear: 2001,
            description: "A hobbit and his companions set out on a quest to destroy a powerful ring.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28828_p_v8_ao.jpg"
        },
        {
            title: "Harry Potter and the Sorcerer's Stone",
            genre: "Fantasy",
            releaseYear: 2001,
            description: "An orphaned boy discovers he is a wizard and attends a magical school.",
            rating: "PG",
            posterImage: "https://media.themoviedb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
        },
        {
            title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
            genre: "Fantasy",
            releaseYear: 2005,
            description: "Four siblings discover a magical land ruled by a wicked queen.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_.jpg"
        },
        {
            title: "Pan's Labyrinth",
            genre: "Fantasy",
            releaseYear: 2006,
            description: "A young girl in post-Civil War Spain discovers a mythical labyrinth.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BOTc1NTAxMWItMWFlNy00MmU2LTkwMTMtNzMwOTg5OTQ5YTFiXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Spirited Away",
            genre: "Fantasy",
            releaseYear: 2001,
            description: "A young girl gets trapped in a mysterious spirit world and must find her way back.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Wizard of Oz",
            genre: "Fantasy",
            releaseYear: 1939,
            description: "A girl is swept away to a magical land and embarks on a journey to return home.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Wizard_of_oz_movie_poster.jpg/1200px-Wizard_of_oz_movie_poster.jpg"
        },
        {
            title: "The Shape of Water",
            genre: "Fantasy",
            releaseYear: 2017,
            description: "A mute woman forms a unique relationship with a mysterious aquatic creature.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/37/The_Shape_of_Water_%28film%29.png"
        },
        {
            title: "Stardust",
            genre: "Fantasy",
            releaseYear: 2007,
            description: "A young man ventures into a magical realm to retrieve a fallen star.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "The Princess Bride",
            genre: "Fantasy",
            releaseYear: 1987,
            description: "A young woman is kidnapped, and her true love must rescue her.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/I/815sfDB8mEL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "The NeverEnding Story",
            genre: "Fantasy",
            releaseYear: 1984,
            description: "A boy discovers a magical book that tells a story about a young warrior's quest.",
            rating: "PG",
            posterImage: "https://images.fathomevents.com/image/upload/w_1200,dpr_2,f_auto,q_auto/v1698871803/Events/2024/1875/FBSC_NeverEnding_Story_2024_1000x1480_FE_Website.jpg.jpg"
        },
        {
            title: "Labyrinth",
            genre: "Fantasy",
            releaseYear: 1986,
            description: "A young girl must navigate a labyrinth to save her baby brother from a goblin king.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjM2MDE4OTQwOV5BMl5BanBnXkFtZTgwNjgxMTg2NzE@._V1_.jpg"
        },
        {
            title: "Big Fish",
            genre: "Fantasy",
            releaseYear: 2003,
            description: "A man recounts his fantastical life stories to his estranged son.",
            rating: "PG-13",
            posterImage: "https://preview.redd.it/big-fish-2003-magical-movie-that-feels-like-being-part-of-a-v0-w6rx9wcizfjd1.jpeg?auto=webp&s=e770abcabc954ae9d470ca09195de30c1097e1e3"
        },
        {
            title: "The Golden Compass",
            genre: "Fantasy",
            releaseYear: 2007,
            description: "A young girl journeys to the Arctic to save her kidnapped friend and uncover a sinister plot.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTM2NDkxMjQxMV5BMl5BanBnXkFtZTYwNTMxMDM4._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "The Secret of NIMH",
            genre: "Fantasy",
            releaseYear: 1982,
            description: "A field mouse must save her family from a farmer’s plow with the help of a society of genetically modified rats.",
            rating: "G",
            posterImage: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/249/2023/10/13175443/TheSecretofNIMH.jpeg"
        },
        {
            title: "Fantastic Beasts and Where to Find Them",
            genre: "Fantasy",
            releaseYear: 2016,
            description: "In the wizarding world, a magical zoologist discovers and captures magical creatures.",
            rating: "PG-13",
            posterImage: "https://i.ebayimg.com/images/g/QzQAAOSwUPFhE8Es/s-l400.jpg"
        },
        {
            title: "Bridge to Terabithia",
            genre: "Fantasy",
            releaseYear: 2007,
            description: "Two friends create a magical kingdom in the forest to escape reality.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTMzOTk1MzIyN15BMl5BanBnXkFtZTcwNTM3MjczMQ@@._V1_.jpg"
        },
        {
            title: "A Monster Calls",
            genre: "Fantasy",
            releaseYear: 2016,
            description: "A young boy befriends a tree monster who helps him cope with his mother's illness.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTg1OTA5OTkyNV5BMl5BanBnXkFtZTgwODMwNDU5OTE@._V1_.jpg"
        },
        {
            title: "Eragon",
            genre: "Fantasy",
            releaseYear: 2006,
            description: "A farm boy discovers a dragon egg and becomes a Dragon Rider to fight an evil king.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BOWY3YWEzYzYtYjY4MC00ODA5LTliMTAtNWUxNTI4YWRhMjIxXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Percy Jackson & the Olympians: The Lightning Thief",
            genre: "Fantasy",
            releaseYear: 2010,
            description: "A boy discovers he is the son of Poseidon and embarks on a quest to prevent a war among the gods.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZDE4M2ZiYzEtODJiZC00NmI1LWFlNTgtOGJlNTY3NmExYWNjXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Hobbit: An Unexpected Journey",
            genre: "Fantasy",
            releaseYear: 2012,
            description: "A hobbit is swept into an epic quest to reclaim a lost kingdom from a dragon.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b3/The_Hobbit-_An_Unexpected_Journey.jpeg"
        },
        {
            title: "The BFG",
            genre: "Fantasy",
            releaseYear: 2016,
            description: "A young girl befriends a friendly giant and embarks on an adventure to stop the other giants.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNjAzOTUzNTY3Ml5BMl5BanBnXkFtZTgwMjYwNzE5ODE@._V1_.jpg"
        },

        // Romance
        {
            title: "The Notebook",
            genre: "Romance",
            releaseYear: 2004,
            description: "A young couple falls in love during the summer of 1940.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/I/81JhFaZMwJL._AC_UF894,1000_QL80_.jpg"
        },
        {
            title: "Titanic",
            genre: "Romance",
            releaseYear: 1997,
            description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/I/71ps2xBoAuL._AC_UF894,1000_QL80_.jpg"
        },
        {
            title: "Pride and Prejudice",
            genre: "Romance",
            releaseYear: 2005,
            description: "A spirited young woman matches wits with a wealthy, reserved gentleman.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg"
        },
        {
            title: "La La Land",
            genre: "Romance",
            releaseYear: 2016,
            description: "A jazz musician and an aspiring actress fall in love in Los Angeles.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg"
        },
        {
            title: "The Fault in Our Stars",
            genre: "Romance",
            releaseYear: 2014,
            description: "Two teenagers with cancer fall in love after meeting in a support group.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYTA4ODg5YWUtYmZiYy00Y2M4LWE0NjEtODE5MzhkYmJmZGEwXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "A Walk to Remember",
            genre: "Romance",
            releaseYear: 2002,
            description: "A popular high school student falls in love with a quiet, religious girl.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYjkxZWE0YjMtYTk2OS00ZmFjLTk2YjEtY2M3MGY4MzE4MGNkXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Notting Hill",
            genre: "Romance",
            releaseYear: 1999,
            description: "A bookseller meets a famous actress, and their worlds collide.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZjY3YWI5OTMtYTdlNy00ZTZiLWEwYjItN2M1MGVkMDM4ZDExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "10 Things I Hate About You",
            genre: "Romance",
            releaseYear: 1999,
            description: "A modern adaptation of Shakespeare's 'The Taming of the Shrew.'",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/I/510wepmKASL._AC_UF894,1000_QL80_.jpg"
        },
        {
            title: "When Harry Met Sally...",
            genre: "Romance",
            releaseYear: 1989,
            description: "A man and a woman meet over the years and ponder if men and women can just be friends.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@._V1_.jpg"
        },
        {
            title: "Crazy, Stupid, Love.",
            genre: "Romance",
            releaseYear: 2011,
            description: "A man learns to navigate dating life after his marriage falls apart.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_.jpg"
        },
        {
            title: "Silver Linings Playbook",
            genre: "Romance",
            releaseYear: 2012,
            description: "Two troubled people develop a bond while trying to get their lives back on track.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_.jpg"
        },
        {
            title: "To All the Boys I've Loved Before",
            genre: "Romance",
            releaseYear: 2018,
            description: "A teenage girl's secret love letters are exposed, creating chaos in her love life.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjQ3NjM5MTAzN15BMl5BanBnXkFtZTgwODQzMDAwNjM@._V1_.jpg"
        },
        {
            title: "Love Actually",
            genre: "Romance",
            releaseYear: 2003,
            description: "Multiple love stories interweave during the Christmas season in London.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/eb/Love_Actually_movie.jpg"
        },
        {
            title: "Before Sunrise",
            genre: "Romance",
            releaseYear: 1995,
            description: "Two strangers meet on a train and spend a night together in Vienna.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/S/pv-target-images/68114a7cbd5af78b4e215b414171551143ce9bb91366b8be57f4837654beece8.jpg"
        },
        {
            title: "The Proposal",
            genre: "Romance",
            releaseYear: 2009,
            description: "A Canadian book editor convinces her assistant to marry her to avoid deportation.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYWU3ZmFhYTktNzU4NS00ZTEyLTkwNTYtMWE1M2JjMTFmODVkXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Time Traveler's Wife",
            genre: "Romance",
            releaseYear: 2009,
            description: "A love story about a man with a genetic disorder that causes him to time travel.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BOGU4M2JjNmEtYTVkOS00ZWY5LTllODQtNWExN2U1NzQwZGEwXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "500 Days of Summer",
            genre: "Romance",
            releaseYear: 2009,
            description: "A man reflects on his failed relationship with a woman who doesn't believe in love.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p193428_p_v8_bb.jpg"
        },
        {
            title: "Eat Pray Love",
            genre: "Romance",
            releaseYear: 2010,
            description: "A woman embarks on a journey of self-discovery across Italy, India, and Indonesia.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8045209_p_v13_an.jpg"
        },
        {
            title: "The Vow",
            genre: "Romance",
            releaseYear: 2012,
            description: "A man tries to win back his wife after a tragic accident erases her memory.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c2/The_Vow_Poster.jpg"
        },
        {
            title: "The Best of Me",
            genre: "Romance",
            releaseYear: 2014,
            description: "Two former lovers reunite after many years apart.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMzQ5Njg3Njk5N15BMl5BanBnXkFtZTgwODIwODIxMjE@._V1_.jpg"
        },
        {
            title: "The Lucky One",
            genre: "Romance",
            releaseYear: 2012,
            description: "A Marine returns home from Iraq and searches for a woman whose photo he believes brought him luck.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8890197_p_v8_an.jpg"
        },
        {
            title: "Begin Again",
            genre: "Romance",
            releaseYear: 2013,
            description: "A chance encounter between a disgraced music executive and a young singer changes both their lives.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNjAxMTI4MTgzMV5BMl5BanBnXkFtZTgwOTAwODEwMjE@._V1_.jpg"
        },

        // Thriller
        {
            title: "Se7en",
            genre: "Thriller",
            releaseYear: 1995,
            description: "Two detectives hunt a serial killer who uses the seven deadly sins as motives.",
            rating: "R",
            posterImage: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/302/2024/04/18114839/6yoghtyTpznpBik8EngEmJskVUO-scaled.jpg"
        },
        {
            title: "Gone Girl",
            genre: "Thriller",
            releaseYear: 2014,
            description: "A man becomes the prime suspect in the disappearance of his wife.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Fight Club",
            genre: "Thriller",
            releaseYear: 1999,
            description: "An insomniac office worker forms an underground fight club.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Silence of the Lambs",
            genre: "Thriller",
            releaseYear: 1991,
            description: "A young FBI cadet seeks the help of an incarcerated cannibalistic serial killer to catch another killer.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Prisoners",
            genre: "Thriller",
            releaseYear: 2013,
            description: "A father's desperation to find his missing daughter leads him to take matters into his own hands.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_.jpg"
        },
        {
            title: "The Girl with the Dragon Tattoo",
            genre: "Thriller",
            releaseYear: 2011,
            description: "A journalist and a hacker uncover dark secrets while investigating a missing person's case.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_.jpg"
        },
        {
            title: "Shutter Island",
            genre: "Thriller",
            releaseYear: 2010,
            description: "A U.S. Marshal investigates the disappearance of a patient from a mental institution.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3531967_p_v13_an.jpg"
        },
        {
            title: "Zodiac",
            genre: "Thriller",
            releaseYear: 2007,
            description: "A cartoonist becomes obsessed with the Zodiac killer who taunts police with letters.",
            rating: "R",
            posterImage: "https://davidkummer.com/wp-content/uploads/2017/12/f0ec6-zodiac.jpg"
        },
        {
            title: "The Sixth Sense",
            genre: "Thriller",
            releaseYear: 1999,
            description: "A young boy who can see and communicate with the dead seeks the help of a child psychologist.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a4/The_Sixth_Sense_poster.png"
        },
        {
            title: "Memento",
            genre: "Thriller",
            releaseYear: 2000,
            description: "A man suffering from short-term memory loss attempts to track down his wife's murderer.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c7/Memento_poster.jpg"
        },
        {
            title: "Oldboy",
            genre: "Thriller",
            releaseYear: 2003,
            description: "A man is imprisoned for 15 years and then released, and he seeks revenge on his captor.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_.jpg"
        },
        {
            title: "No Country for Old Men",
            genre: "Thriller",
            releaseYear: 2007,
            description: "A hunter stumbles upon a drug deal gone wrong and takes a suitcase full of money, triggering a violent pursuit.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p170313_p_v13_ad.jpg"
        },
        {
            title: "Gone Baby Gone",
            genre: "Thriller",
            releaseYear: 2007,
            description: "Two private investigators are hired to find a missing girl in Boston.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BOTlmNmU2NDgtZDU1OS00OTFhLWJlNTgtMWE2OGQ1OTg1MGM4XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Others",
            genre: "Thriller",
            releaseYear: 2001,
            description: "A woman living in a dark, old house with her two photosensitive children becomes convinced that her home is haunted.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19365_p_v8_aa.jpg"
        },
        {
            title: "Black Swan",
            genre: "Thriller",
            releaseYear: 2010,
            description: "A dancer's obsession with perfection leads her to dark places in her mind.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_.jpg"
        },
        {
            title: "Cape Fear",
            genre: "Thriller",
            releaseYear: 1991,
            description: "A convicted rapist seeks revenge on the lawyer who originally put him away.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNTBkNTYwZTctOTgxYS00ZmIyLTgzNDAtODJhZjg2MDUwNmFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "The Machinist",
            genre: "Thriller",
            releaseYear: 2004,
            description: "An industrial worker who hasn't slept in a year begins to doubt his own sanity.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BY2I1MmUxYmMtZjk3OC00N2MwLWI2YjAtNGQxODA1Y2I3YTI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Insomnia",
            genre: "Thriller",
            releaseYear: 2002,
            description: "A Los Angeles detective is dispatched to a northern town where the sun doesn't set to investigate a methodical murder.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/7c/Insomnia2002Poster.jpg"
        },
        {
            title: "The Game",
            genre: "Thriller",
            releaseYear: 1997,
            description: "A wealthy banker is given an opportunity to participate in a game that integrates with his real life in unexpected ways.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNGUzNzQwNmMtNzI3Mi00ZDIwLWJlM2ItMTA5N2Q2ZDMxMjJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Panic Room",
            genre: "Thriller",
            releaseYear: 2002,
            description: "A divorced woman and her daughter are trapped in their panic room by burglars.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BODU0ZGM0MjctM2YxYy00OWY1LTk2N2YtNWE4ZWQ2ODQwMTI5XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Invisible Man",
            genre: "Thriller",
            releaseYear: 2020,
            description: "A woman believes she is being hunted by her abusive ex-boyfriend, who has found a way to become invisible.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYTM3NDJhZWUtZWM1Yy00ODk4LThjNmMtNDg3OGYzMGM2OGYzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },

        // Mystery
        {
            title: "Knives Out",
            genre: "Mystery",
            releaseYear: 2019,
            description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/I/91i1Ibj3GoL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "Murder on the Orient Express",
            genre: "Mystery",
            releaseYear: 2017,
            description: "Famed detective Hercule Poirot investigates the murder of a wealthy passenger aboard the Orient Express.",
            rating: "PG-13",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/image_37a1eab9.jpeg?region=0%2C0%2C1400%2C2100"
        },
        {
            title: "The Girl with the Dragon Tattoo",
            genre: "Mystery",
            releaseYear: 2011,
            description: "A journalist and a hacker uncover dark secrets while investigating a missing person's case.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_.jpg"
        },
        {
            title: "The Sixth Sense",
            genre: "Mystery",
            releaseYear: 1999,
            description: "A young boy who can see and communicate with the dead seeks the help of a child psychologist.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a4/The_Sixth_Sense_poster.png"
        },
        {
            title: "Gone Girl",
            genre: "Mystery",
            releaseYear: 2014,
            description: "A man becomes the prime suspect in the disappearance of his wife.",
            rating: "R",
            posterImage: "https://img.rgstatic.com/content/movie/81c195f7-d4b5-4c18-bae5-653dd84e8eaa/poster-500.jpg"
        },
        {
            title: "Shutter Island",
            genre: "Mystery",
            releaseYear: 2010,
            description: "A U.S. Marshal investigates the disappearance of a patient from a mental institution.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3531967_p_v13_an.jpg"
        },
        {
            title: "Chinatown",
            genre: "Mystery",
            releaseYear: 1974,
            description: "A private detective is hired to expose an adulterer but gets embroiled in a complex conspiracy.",
            rating: "R",
            posterImage: "https://www.paramountmovies.com/uploads/movies/chinatown/chinatown_2019update_en_800x1200-c.jpg"
        },
        {
            title: "The Others",
            genre: "Mystery",
            releaseYear: 2001,
            description: "A woman living in a dark, old house with her two photosensitive children becomes convinced that her home is haunted.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZTNhODBkODAtNDllYy00YTg1LWJmNDUtYjgzMzEzOWQ0YWNjXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Se7en",
            genre: "Mystery",
            releaseYear: 1995,
            description: "Two detectives hunt a serial killer who uses the seven deadly sins as motives.",
            rating: "R",
            posterImage: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/302/2024/04/18114839/6yoghtyTpznpBik8EngEmJskVUO-scaled.jpg"
        },
        {
            title: "The Prestige",
            genre: "Mystery",
            releaseYear: 2006,
            description: "Two magicians compete to create the ultimate stage illusion while sacrificing everything they have.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg"
        },
        {
            title: "Prisoners",
            genre: "Mystery",
            releaseYear: 2013,
            description: "A father's desperation to find his missing daughter leads him to take matters into his own hands.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_.jpg"
        },
        {
            title: "The Maltese Falcon",
            genre: "Mystery",
            releaseYear: 1941,
            description: "A private detective takes on a case that involves him with three eccentric criminals and their quest for a priceless statuette.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/commons/6/6b/The_Maltese_Falcon_%281941_film_poster%29.jpg"
        },
        {
            title: "The Vanishing",
            genre: "Mystery",
            releaseYear: 1988,
            description: "A man searches for his girlfriend after she disappears without a trace during a trip.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTYzMzg0NDYyM15BMl5BanBnXkFtZTYwMTI0MTU5._V1_.jpg"
        },
        {
            title: "The Usual Suspects",
            genre: "Mystery",
            releaseYear: 1995,
            description: "A sole survivor tells the twisted story of a brutal heist and the events that led to it.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BOTE5MDUxZDUtZWZmZC00NDVmLWFhOGQtNWI2YTc4NzY3MGQ0XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Body of Lies",
            genre: "Mystery",
            releaseYear: 2008,
            description: "A CIA operative is tasked with infiltrating a terrorist organization in the Middle East.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTgzOTY3MTM0OV5BMl5BanBnXkFtZTcwNjc5MTI5MQ@@._V1_.jpg"
        },
        {
            title: "The Secret in Their Eyes",
            genre: "Mystery",
            releaseYear: 2009,
            description: "A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTgwNTI3OTczOV5BMl5BanBnXkFtZTcwMTM3MTUyMw@@._V1_.jpg"
        },
        {
            title: "The Invisible Man",
            genre: "Mystery",
            releaseYear: 2020,
            description: "A woman believes she is being hunted by her abusive ex-boyfriend, who has found a way to become invisible.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYTM3NDJhZWUtZWM1Yy00ODk4LThjNmMtNDg3OGYzMGM2OGYzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Atonement",
            genre: "Mystery",
            releaseYear: 2007,
            description: "A young girl makes a false accusation that changes the lives of everyone involved.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZmQ5ZjZlMzMtODA1ZS00NTNiLWIzOTYtOTQyYjQ2YWQxMTA1XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Angel Heart",
            genre: "Mystery",
            releaseYear: 1987,
            description: "A private investigator is hired to track down a missing person, but things take a dark turn.",
            rating: "R",
            posterImage: "https://collinwatchesmovies.wordpress.com/wp-content/uploads/2018/11/angel-heart.jpg?w=225"
        },
        {
            title: "The Boy Next Door",
            genre: "Mystery",
            releaseYear: 2015,
            description: "A divorced woman falls for a younger man, but soon discovers he has a dark side.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10893389_p_v8_ap.jpg"
        },
        {
            title: "The Witch",
            genre: "Mystery",
            releaseYear: 2015,
            description: "A family in 1630s New England is torn apart by the forces of witchcraft and possession.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/bf/The_Witch_poster.png"
        },
        {
            title: "Fractured",
            genre: "Mystery",
            releaseYear: 2019,
            description: "A man searches for his missing wife and daughter after they disappear in a hospital.",
            rating: "R",
            posterImage: "https://myhotposters.com/cdn/shop/products/mL3628_1024x1024.jpg?v=1571445733"
        },

        // Documentary
        {
            title: "13th",
            genre: "Documentary",
            releaseYear: 2016,
            description: "An in-depth look at the prison system in the United States and how it reveals the nation's history of racial inequality.",
            rating: "TV-MA",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/6b/13th_%28film%29.png"
        },
        {
            title: "Won't You Be My Neighbor?",
            genre: "Documentary",
            releaseYear: 2018,
            description: "An exploration of the life and legacy of Fred Rogers, the beloved host of the popular children's television show, Mister Rogers' Neighborhood.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTk2YzRmYjUtNmQ1NC00NGU4LTgxOTgtMDY3NDI5NTBjYjRmXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Act of Killing",
            genre: "Documentary",
            releaseYear: 2012,
            description: "Former Indonesian death squad leaders reenact their real-life mass killings in whatever cinematic genres they wish.",
            rating: "NR",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9568463_p_v8_ak.jpg"
        },
        {
            title: "Inside Job",
            genre: "Documentary",
            releaseYear: 2010,
            description: "A comprehensive analysis of the global financial crisis of 2008, which cost trillions of dollars and millions of jobs.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTQ3MjkyODA2Nl5BMl5BanBnXkFtZTcwNzQxMTU4Mw@@._V1_.jpg"
        },
        {
            title: "Blackfish",
            genre: "Documentary",
            releaseYear: 2013,
            description: "A documentary following the controversial captivity of killer whales, and its dangers for both humans and whales.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/bd/BLACKFISH_Film_Poster.jpg"
        },
        {
            title: "Jiro Dreams of Sushi",
            genre: "Documentary",
            releaseYear: 2011,
            description: "Follows Jiro Ono, an esteemed sushi chef, and his relentless pursuit of perfection in his craft.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/I/810Fw8dOh4L._AC_UF894,1000_QL80_.jpg"
        },
        {
            title: "The Fog of War",
            genre: "Documentary",
            releaseYear: 2003,
            description: "A documentary on the complexities of war through the experiences of former U.S. Secretary of Defense, Robert S. McNamara.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/I/71XwBbtaQHL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "Making a Murderer",
            genre: "Documentary",
            releaseYear: 2015,
            description: "An examination of the 2007 case of Steven Avery, who was exonerated after serving 18 years for a wrongful conviction.",
            rating: "TV-14",
            posterImage: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUFiAhZGl21wu-amJNx5Aj0vZi1jCxc4mIf6157yAcfrSPGZ7WPRIEq0entwifTn4oaafrerF1bZV1Oya32lHwel3-XV2B94Z_-cf6q20s6cv9hsySFNAmTCMxT7c3_sVDsk9Q.jpg?r=676"
        },
        {
            title: "The Social Dilemma",
            genre: "Documentary",
            releaseYear: 2020,
            description: "Explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.",
            rating: "PG-13",
            posterImage: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABbZiTVp9iwps-lz6n9TF6bGllt49qsgdRiJQip-vLoR0ocihij2CaQ0GUqPS5ACmEKYlHmBhDDfv5SxYErsRCAcFFbGqAqRYWPuILDpbYzsUMp6M50pF85ys_OtHubOTmLiEFA.jpg?r=288"
        },
        {
            title: "Exit Through the Gift Shop",
            genre: "Documentary",
            releaseYear: 2010,
            description: "A look at street art and the story of Thierry Guetta, a French immigrant and amateur filmmaker.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjE2NTg1NDM4Ml5BMl5BanBnXkFtZTcwMzMxOTkyMw@@._V1_.jpg"
        },
        {
            title: "Amy",
            genre: "Documentary",
            releaseYear: 2015,
            description: "A documentary about the life and career of British singer-songwriter Amy Winehouse.",
            rating: "R",
            posterImage: "https://play-lh.googleusercontent.com/PGyY-FO9l6l5rOCsF-vV5fdWF6jrIkZxkGtk1RNjJA_7BHiP6tr_vPUCx7a4DFUwHNo"
        },
        {
            title: "Food, Inc.",
            genre: "Documentary",
            releaseYear: 2008,
            description: "Examines corporate farming in the United States, highlighting the food industry and its impact on health and the environment.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNmQyY2VlNTYtYjYzNi00YmY3LTgzNTktOWJkZmNlMmFlNWQyXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Keepers",
            genre: "Documentary",
            releaseYear: 2017,
            description: "A nun's unsolved murder and the horrific secrets and pain that linger nearly five decades later.",
            rating: "TV-MA",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNjRlY2MzYzItMGJmMC00MWRkLWEwMGMtZmU2NzkxNmIyMDcxXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Imposter",
            genre: "Documentary",
            releaseYear: 2012,
            description: "A young Frenchman cons his way into a Texas family’s home after disappearing for three years.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZWQ1NjZkNTUtMThjYi00NTUwLWEzMzYtMjA4YzMzOTZmOWJmXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Icarus",
            genre: "Documentary",
            releaseYear: 2017,
            description: "A filmmaker investigates the doping scandal in sports and the dark world of performance-enhancing drugs.",
            rating: "TV-MA",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZmMzZmI2NzctNWNlMS00ZGE0LTljYjctNDQ5MDQ4Yzc0NDlkXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Hunting Ground",
            genre: "Documentary",
            releaseYear: 2015,
            description: "A documentary that examines the epidemic of sexual assault on college campuses in the United States.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BOGYzY2U4Y2YtODJjMi00MDRlLWIyY2MtMWYzOTI5Njg4OWM3XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Planet Earth II",
            genre: "Documentary",
            releaseYear: 2016,
            description: "A sequel to the award-winning documentary series, exploring the beauty and diversity of life on Earth.",
            rating: "TV-PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMzY4NDBkMWYtYzdkYy00YzBjLWJmODctMWM4YjYzZTdjNWE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Cameraperson",
            genre: "Documentary",
            releaseYear: 2016,
            description: "A collection of autobiographical fragments, drawing from a decade's worth of footage shot by the director.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BN2U4ZTgwY2UtMWI5NS00ZDQxLWEzNTgtMDc1NTY1ZDk2MDdkXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Great Hack",
            genre: "Documentary",
            releaseYear: 2019,
            description: "Explores the dark side of social media and the data-driven campaign strategies that influenced the 2016 election.",
            rating: "TV-MA",
            posterImage: "https://resizing.flixster.com/XeSuW5DOKrj07mBpJxsb9rnnVo4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFmOGYxNzVlLTk1YmQtNDJjNS05ZThjLWJjMDVjMjUzNzNjNC53ZWJw"
        },
        {
            title: "Grizzly Man",
            genre: "Documentary",
            releaseYear: 2005,
            description: "The life and death of bear enthusiast Timothy Treadwell, who lived among grizzly bears in Alaska.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BODc3NTAxMTY1MV5BMl5BanBnXkFtZTcwOTE4NjUzMw@@._V1_.jpg"
        },

        // Animation
        {
            title: "Toy Story",
            genre: "Animation",
            releaseYear: 1995,
            description: "A group of toys comes to life and must navigate the challenges of their owner's growing up.",
            rating: "G",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Finding Nemo",
            genre: "Animation",
            releaseYear: 2003,
            description: "A clownfish named Marlin teams up with a regal blue tang named Dory to find his abducted son, Nemo.",
            rating: "G",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg"
        },
        {
            title: "The Lion King",
            genre: "Animation",
            releaseYear: 1994,
            description: "The journey of a lion cub named Simba as he struggles to find his place in the Circle of Life.",
            rating: "G",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/p_thelionking_19752_1_0b9de87b.jpeg?region=0%2C0%2C540%2C810"
        },
        {
            title: "Shrek",
            genre: "Animation",
            releaseYear: 2001,
            description: "An ogre named Shrek embarks on a quest to rescue Princess Fiona and discovers love along the way.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Frozen",
            genre: "Animation",
            releaseYear: 2013,
            description: "Two sisters, Elsa and Anna, must work together to save their kingdom from eternal winter.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg"
        },
        {
            title: "Spirited Away",
            genre: "Animation",
            releaseYear: 2001,
            description: "A young girl becomes trapped in a mysterious and magical world, where she must save her parents.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Inside Out",
            genre: "Animation",
            releaseYear: 2015,
            description: "Inside the mind of a young girl, five emotions try to navigate her experiences after she moves to a new city.",
            rating: "PG",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg?region=0%2C0%2C540%2C810"
        },
        {
            title: "Zootopia",
            genre: "Animation",
            releaseYear: 2016,
            description: "In a city of anthropomorphic animals, a rabbit police officer and a cynical con artist fox must work together.",
            rating: "PG",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg"
        },
        {
            title: "Up",
            genre: "Animation",
            releaseYear: 2009,
            description: "A widowed man fulfills his dream of adventure by tying thousands of balloons to his house and flying to South America.",
            rating: "PG",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/p_up_19753_e6f911e3.jpeg"
        },
        {
            title: "Kung Fu Panda",
            genre: "Animation",
            releaseYear: 2008,
            description: "A clumsy panda is unexpectedly chosen to fulfill an ancient prophecy and become a kung fu hero.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZDU5MDNiMGItYjVmZi00NDUxLTg2OTktNGE0NzNlNzM4NzgyXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Spider-Man: Into the Spider-Verse",
            genre: "Animation",
            releaseYear: 2018,
            description: "Teenager Miles Morales becomes the Spider-Man of his reality, crossing paths with five counterparts from other dimensions to stop a threat.",
            rating: "PG",
            posterImage: "https://musicart.xboxlive.com/7/25f25000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
        },
        {
            title: "Spider-Man: Across the Spider-Verse",
            genre: "Animation",
            releaseYear: 2023,
            description: "Miles Morales embarks on an epic journey across the multiverse with Gwen Stacy and a new team of Spider-People to face a powerful villain.",
            rating: "PG",
            posterImage: "https://assets-prd.ignimgs.com/2022/12/20/spideman-across-the-spider-verse-movie-poster-button-1671558249641.jpg"
        },
        {
            title: "WALL-E",
            genre: "Animation",
            releaseYear: 2008,
            description: "A small waste-collecting robot embarks on a space journey that will ultimately decide the fate of mankind.",
            rating: "G",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg"
        },
        {
            title: "The Incredibles",
            genre: "Animation",
            releaseYear: 2004,
            description: "A family of superheroes must come together to save the world while dealing with everyday life.",
            rating: "PG",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/p_theincredibles_19751_52f1f47a.jpeg?region=0%2C0%2C540%2C810"
        },
        {
            title: "How to Train Your Dragon",
            genre: "Animation",
            releaseYear: 2010,
            description: "A young Viking befriends a dragon, leading to a revolution in the way his people view these creatures.",
            rating: "PG",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3625299_p_v13_al.jpg"
        },
        {
            title: "The Lego Movie",
            genre: "Animation",
            releaseYear: 2014,
            description: "An ordinary LEGO figure is mistakenly identified as the key to saving the world and must team up with a group of heroes.",
            rating: "PG",
            posterImage: "https://static.wikia.nocookie.net/iepfanon/images/2/2e/The_Lego_Movie_-poster.jpg/revision/latest?cb=20240714121437"
        },
        {
            title: "Coco",
            genre: "Animation",
            releaseYear: 2017,
            description: "A young boy named Miguel embarks on a journey to the Land of the Dead to unlock his family's history.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Ratatouille",
            genre: "Animation",
            releaseYear: 2007,
            description: "A rat named Remy dreams of becoming a chef in a Paris restaurant and forms an unlikely alliance with a young kitchen worker.",
            rating: "G",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg"
        },
        {
            title: "Monsters, Inc.",
            genre: "Animation",
            releaseYear: 2001,
            description: "In a world where monsters generate energy by scaring children, two monsters must rescue a little girl who enters their world.",
            rating: "G",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/p_monstersinc_19751_55afa07a.jpeg"
        },
        {
            title: "The Nightmare Before Christmas",
            genre: "Animation",
            releaseYear: 1993,
            description: "The King of Halloween Town discovers Christmas Town and decides to take over the holiday.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNmYxOTAzZWYtOGI3Yi00ODc3LTk5ZjYtZTY0MzVkZTg3YmRiXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Despicable Me",
            genre: "Animation",
            releaseYear: 2010,
            description: "A supervillain adopts three orphaned girls and begins to change his perspective on life.",
            rating: "PG",
            posterImage: "https://www.peacocktv.com/dam/growth/assets/Library/DespicableMe/despicable-me-description-image.jpg?downsize=1200:*&output-format=webp&output-quality=70"
        },
        {
            title: "Hotel Transylvania",
            genre: "Animation",
            releaseYear: 2012,
            description: "Count Dracula runs a lavish resort for monsters, but things go awry when a human stumbles upon the hotel.",
            rating: "PG",
            posterImage: "https://resizing.flixster.com/bc052Tih1aNww-uTgS9mAZS9j14=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9128632_v_v13_af.jpg"
        },
        {
            title: "Big Hero 6",
            genre: "Animation",
            releaseYear: 2014,
            description: "A young robotics prodigy and his inflatable healthcare companion form a superhero team to combat a mysterious villain.",
            rating: "PG",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/p_bighero6_19753_20bd6206.jpeg"
        },
        {
            title: "The Croods",
            genre: "Animation",
            releaseYear: 2013,
            description: "A prehistoric family embarks on a journey through a fantastical world after their cave is destroyed.",
            rating: "PG",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9418164_p_v10_aw.jpg"
        },
        {
            title: "Finding Dory",
            genre: "Animation",
            releaseYear: 2016,
            description: "Dory, the forgetful blue tang fish, sets off on a journey to find her long-lost parents.",
            rating: "PG",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/p_findingdory_19754_4d6d2025.jpeg"
        },
        {
            title: "Wallace & Gromit: The Curse of the Were-Rabbit",
            genre: "Animation",
            releaseYear: 2005,
            description: "Wallace and his dog Gromit set out to discover who is sabotaging the annual vegetable competition.",
            rating: "G",
            posterImage: "https://m.media-amazon.com/images/M/MV5BM2JkOTRkZTctN2ZiMy00ZGRmLWJkNzQtOGJkNmFiM2ZjNjYzXkEyXkFqcGc@._V1_.jpg"
        },

        // Adventure
        {
            title: "Indiana Jones and the Raiders of the Lost Ark",
            genre: "Adventure",
            releaseYear: 1981,
            description: "An archeologist embarks on a quest to find the Ark of the Covenant before the Nazis can.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BOGNhMjg2ZjgtYzk4Ni00MTViLTg1MmUtYzM2MDZiYjZlMmU3XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            genre: "Adventure",
            releaseYear: 2001,
            description: "A young hobbit named Frodo Baggins sets out on a journey to destroy a powerful ring.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Jurassic Park",
            genre: "Adventure",
            releaseYear: 1993,
            description: "A theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
            rating: "PG-13",
            posterImage: "https://musicart.xboxlive.com/7/52125100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
        },
        {
            title: "Pirates of the Caribbean: The Curse of the Black Pearl",
            genre: "Adventure",
            releaseYear: 2003,
            description: "Captain Jack Sparrow and a blacksmith team up to rescue a kidnapped woman from pirates.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNDhlMzEyNzItMTA5Mi00YWRhLThlNTktYTQyMTA0MDIyNDEyXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Revenant",
            genre: "Adventure",
            releaseYear: 2015,
            description: "A frontiersman on a quest for survival after being left for dead by his hunting team.",
            rating: "R",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/revenant_584x800_6d98d1b6.jpeg?region=0%2C0%2C584%2C800"
        },
        {
            title: "The Hobbit: An Unexpected Journey",
            genre: "Adventure",
            releaseYear: 2012,
            description: "Bilbo Baggins sets out on an epic quest to help a group of dwarves reclaim their homeland.",
            rating: "PG-13",
            posterImage: "https://static.wikia.nocookie.net/listofdeaths/images/1/1e/The-hobbit-an-unexpected-journey.jpg/revision/latest?cb=20220127130240"
        },
        {
            title: "Star Wars: Episode IV - A New Hope",
            genre: "Adventure",
            releaseYear: 1977,
            description: "A young farmer joins forces with a group of rebels to save the galaxy from an evil empire.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/I/612h-jwI+EL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "Avatar: The Way of Water",
            genre: "Adventure",
            releaseYear: 2022,
            description: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora when an ancient threat resurfaces.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_.jpg"
        },
        {
            "title": "The Chronicles of Narnia: Prince Caspian",
            "genre": "Adventure",
            "releaseYear": 2008,
            "description": "The Pevensie siblings return to Narnia to help Prince Caspian fight an evil king and restore peace to the magical land.",
            "rating": "PG",
            "posterImage": "https://m.media-amazon.com/images/S/pv-target-images/21e18882994e58a901d56da06ac1e00dac5ec52bb35c752c7b1455a615d0cdfb.jpg"
        },
        {
            title: "Jumanji: Welcome to the Jungle",
            genre: "Adventure",
            releaseYear: 2017,
            description: "Four teenagers are sucked into a magical video game and must work together to escape.",
            rating: "PG-13",
            posterImage: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-5778832454.jpg"
        },
        {
            title: "Life of Pi",
            genre: "Adventure",
            releaseYear: 2012,
            description: "A young man survives a disaster at sea and is stranded on a lifeboat with a Bengal tiger.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_.jpg"
        },
        {
            title: "The Secret Life of Walter Mitty",
            genre: "Adventure",
            releaseYear: 2013,
            description: "A daydreamer embarks on a global journey to find a missing photograph.",
            rating: "PG",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/image_b49633a4.jpeg?region=0%2C0%2C1400%2C2100"
        },
        {
            title: "National Treasure",
            genre: "Adventure",
            releaseYear: 2004,
            description: "A treasure hunter must decode clues to find a hidden treasure before a ruthless enemy.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTY3NTc4OTYxMF5BMl5BanBnXkFtZTcwMjk5NzUyMw@@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Race to Witch Mountain",
            genre: "Adventure",
            releaseYear: 2009,
            description: "A Las Vegas cab driver must protect two siblings with paranormal powers from a dangerous organization that wants to use them for sinister purposes.",
            rating: "PG",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p178740_p_v13_ai.jpg"
        },
        {
            title: "The Goonies",
            genre: "Adventure",
            releaseYear: 1985,
            description: "A group of kids sets out on an adventure to find a pirate's long-lost treasure.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/I/61wNEQf481L._AC_UF894,1000_QL80_.jpg"
        },
        {
            title: "Holes",
            genre: "Adventure",
            releaseYear: 2003,
            description: "A group of boys is sent to a juvenile detention camp where they dig holes to 'build character.'",
            rating: "PG",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/p_holes_19755_8f3e1618.jpeg"
        },
        {
            title: "Mad Max: Fury Road",
            genre: "Adventure",
            releaseYear: 2015,
            description: "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrant.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Maze Runner",
            genre: "Adventure",
            releaseYear: 2014,
            description: "A group of teenagers must navigate a dangerous maze to escape and discover the truth behind their situation.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/I/811p2PaN3uL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "Honey, I Shrunk the Kids",
            genre: "Adventure",
            releaseYear: 1989,
            description: "A scientist accidentally shrinks his kids to the size of insects and they must navigate their backyard.",
            rating: "PG",
            posterImage: "https://images.moviesanywhere.com/0e6baaaca7f42590cbad147552f49e68/3ce66886-1f62-4dea-8202-a7a790096356.jpg"
        },
        {
            title: "Cloudy with a Chance of Meatballs",
            genre: "Adventure",
            releaseYear: 2009,
            description: "An inventor creates a machine that turns water into food, which leads to unexpected consequences.",
            rating: "PG",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p197825_p_v8_ae.jpg"
        },
        {
            title: "Tomb Raider",
            genre: "Adventure",
            releaseYear: 2018,
            description: "A young woman sets out to find her missing father and uncovers a mysterious island.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTIwNWU2NTEtMDQ0Yi00MjFkLThhN2UtMjJhOGVjN2UyYzFkXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Mummy",
            genre: "Adventure",
            releaseYear: 1999,
            description: "A group of adventurers accidentally awaken a cursed mummy while searching for treasure in Egypt.",
            rating: "PG-13",
            posterImage: "https://musicart.xboxlive.com/7/d0c54200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
        },
        {
            title: "The Time Machine",
            genre: "Adventure",
            releaseYear: 2002,
            description: "A Victorian inventor travels through time to save his fiancée and discovers the future of humanity.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/6f/Time_machine.jpg"
        },
        {
            title: "The Mummy",
            genre: "Action, Adventure",
            releaseYear: 2017,
            description: "An ancient princess is awakened from her crypt beneath the desert, bringing with her a malevolent force as she embarks on a path of vengeance.",
            rating: "PG-13",
            posterImage: "https://i.ebayimg.com/images/g/0hIAAOSw7c5jBc-d/s-l400.jpg"
        },

        // Musical
        {
            title: "The Sound of Music",
            genre: "Musical",
            releaseYear: 1965,
            description: "A woman leaves an Austrian convent to become a governess for a widowed naval captain's seven children.",
            rating: "G",
            posterImage: "https://m.media-amazon.com/images/I/81RL1tAmHnL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "West Side Story",
            genre: "Musical",
            releaseYear: 2021,
            description: "In 1950s New York City, two teenagers from rival gangs fall in love, but their relationship is threatened by the ongoing gang violence and their differing backgrounds.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/2e/West_Side_Story_2021_Official_Poster.jpg"
        },
        {
            title: "La La Land",
            genre: "Musical",
            releaseYear: 2016,
            description: "A jazz musician and an aspiring actress fall in love but struggle to maintain their relationship amid their careers.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg"
        },
        {
            title: "Grease",
            genre: "Musical",
            releaseYear: 1978,
            description: "Teenagers Sandy and Danny fall in love, but their different social groups complicate their relationship.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNGY0NzE0ZTctN2YzNC00M2IwLWI0OWYtMTAwZWU2NjZhMTQwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "West Side Story",
            genre: "Musical",
            releaseYear: 1961,
            description: "Two teenagers from rival gangs fall in love in New York City.",
            rating: "Not Rated",
            posterImage: "https://upload.wikimedia.org/wikipedia/commons/0/0b/West_Side_Story_1961_film_poster.jpg"
        },
        {
            title: "Rags",
            genre: "Musical",
            releaseYear: 2012,
            description: "A modern twist on the Cinderella story, a talented teenage boy from the streets tries to achieve his dreams of becoming a singer while facing challenges and hardships.",
            rating: "TV-PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BM2E4M2YxMjYtOWQ5Ny00N2Y1LWJmMGYtODc1MTZlOWVkMTgxXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Chicago",
            genre: "Musical",
            releaseYear: 2002,
            description: "Two murderesses find themselves on death row together and fight for fame, fortune, and freedom.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNmJmZDEyNTctOTM1MS00NWEwLWFkMjctMjhhODEzMjU1MjA0XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Mamma Mia!",
            genre: "Musical",
            releaseYear: 2008,
            description: "A young woman invites three men to her wedding, each of whom may be her father, based on her mother's diary.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTA2MDU0MjM0MzReQTJeQWpwZ15BbWU3MDYwNzgwNzE@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Les Misérables",
            genre: "Musical",
            releaseYear: 2012,
            description: "In 19th century France, an ex-convict seeks redemption and revolution while being pursued by a relentless policeman.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/1zLOrsw_MLsSBZqw8mpjTbdpUQE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY5MDI2ZTQ5LTU2NDItNDBiZC04OTJiLWRkYTdkOWIyN2VmNC5qcGc="
        },
        {
            title: "The Greatest Showman",
            genre: "Musical",
            releaseYear: 2017,
            description: "Inspired by the story of P.T. Barnum, the film celebrates the birth of show business.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_.jpg"
        },
        {
            title: "Singing in the Rain",
            genre: "Musical",
            releaseYear: 1952,
            description: "A silent film production company transitions to sound films and the challenges that arise.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Singin%27_in_the_Rain_%281952_poster%29.jpg"
        },
        {
            title: "Hairspray",
            genre: "Musical",
            releaseYear: 2007,
            description: "A plucky teenager fights for racial integration on a popular TV dance show in 1962 Baltimore.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYzBiNjJhNmUtMjM0Yi00ZjZkLTliNzUtYWEyYmVkZTFhMmQzXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Fiddler on the Roof",
            genre: "Musical",
            releaseYear: 1971,
            description: "A Jewish peasant and his daughters navigate tradition and change in early 20th century Russia.",
            rating: "G",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMzYyYjJmMjctNzk3Yi00NmRhLWE5ZmQtZTNlZjU3MDMxNTBhXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Into the Woods",
            genre: "Musical",
            releaseYear: 2014,
            description: "A baker and his wife wish to have a child but must confront the consequences of their wishes.",
            rating: "PG",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/p_intothewoods_19906_d3b548e1.jpeg?region=0%2C0%2C540%2C810"
        },
        {
            title: "The Phantom of the Opera",
            genre: "Musical",
            releaseYear: 2004,
            description: "A young soprano becomes the obsession of a mysterious phantom living beneath the Paris Opera House.",
            rating: "PG-13",
            posterImage: "https://musicart.xboxlive.com/7/04441000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
        },
        {
            title: "Once",
            genre: "Musical",
            releaseYear: 2007,
            description: "A struggling musician and a flower seller form a deep connection through their shared love of music.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYmFmZmRkNzYtMTcyNy00NjY3LTkyNTUtNGExZjViNGFhZDdkXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Dreamgirls",
            genre: "Musical",
            releaseYear: 2006,
            description: "A trio of female singers find fame and fortune, but struggle with the personal and professional challenges that arise.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTY1MzIwNDQyNl5BMl5BanBnXkFtZTcwNDEwNzYyMw@@._V1_.jpg"
        },
        {
            title: "The Producers",
            genre: "Musical",
            releaseYear: 2005,
            description: "A Broadway producer and an accountant come up with a get-rich-quick scheme by producing a surefire flop.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMGVhNmRlMGYtYWM1ZC00ZWU1LWFhOTAtZGY2ZWVkYWIyN2I4XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Pitch Perfect",
            genre: "Musical",
            releaseYear: 2012,
            description: "A college freshman joins an all-girls a cappella group and helps them find their competitive edge.",
            rating: "PG-13",
            posterImage: "https://static.wikia.nocookie.net/pitch-perfect/images/2/29/Pitch_Perfect.jpg/revision/latest/thumbnail/width/360/height/360?cb=20140409081643"
        },
        {
            title: "Yankee Doodle Dandy",
            genre: "Musical",
            releaseYear: 1942,
            description: "The life of George M. Cohan, a song and dance man who became a Broadway legend.",
            rating: "NR",
            posterImage: "https://upload.wikimedia.org/wikipedia/commons/9/92/Yankee_Doodle_Dandy_%281942_poster%29.jpg"
        },
        {
            title: "High School Musical",
            genre: "Musical",
            releaseYear: 2006,
            description: "Two high school students from rival cliques discover their mutual love for music and stage a musical together, challenging their school's social norms.",
            rating: "G",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNzA2MmIxYWUtOGRiYi00ZTVkLWE4YTQtY2MyN2I5ZmRmOTBjXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Little Mermaid",
            genre: "Musical",
            releaseYear: 1989,
            description: "A mermaid princess makes a Faustian bargain with a sea witch in order to become human.",
            rating: "G",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNmQ3ODcyZGMtMjNlOS00YzhlLTg0YzAtZGVjNmQ0OTYyNDg0XkEyXkFqcGc@._V1_.jpg"
        },

        // Western
        {
            title: "The Good, the Bad and the Ugly",
            genre: "Western",
            releaseYear: 1966,
            description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/45/Good_the_bad_and_the_ugly_poster.jpg"
        },
        {
            title: "Unforgiven",
            genre: "Western",
            releaseYear: 1992,
            description: "A retired gunslinger reluctantly takes on one last job, seeking revenge for a brutal attack on a woman.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4e/Unforgiven_2.jpg"
        },
        {
            title: "Django Unchained",
            genre: "Western",
            releaseYear: 2012,
            description: "A freed slave teams up with a bounty hunter to rescue his wife from a brutal plantation owner.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/S/pv-target-images/ebb04886027f29c7a0ed1c4108ed48afaecfff9760c72e960b0ff6c5039eb88d.jpg"
        },
        {
            title: "True Grit",
            genre: "Western",
            releaseYear: 2010,
            description: "A stubborn teenager enlists the help of a tough U.S. Marshal to track down her father's murderer.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8160526_p_v8_ae.jpg"
        },
        {
            title: "The Searchers",
            genre: "Western",
            releaseYear: 1956,
            description: "A Civil War veteran spends years searching for his abducted niece, who was kidnapped by a Native American tribe.",
            rating: "NR",
            posterImage: "https://images.moviesanywhere.com/dece63a863156159324d3dcf1958f0b7/f880a16c-e277-4f99-96b8-efa5a84b1bf5.jpg"
        },
        {
            title: "Once Upon a Time in the West",
            genre: "Western",
            releaseYear: 1968,
            description: "A mysterious harmonica player teams up with a notorious outlaw to protect a widow from a ruthless assassin.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p2803_p_v8_ap.jpg"
        },
        {
            title: "Silverado",
            genre: "Western",
            releaseYear: 1985,
            description: "A group of misfits enters a town controlled by a corrupt sheriff and his ruthless brothers.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/I/712KTLneKRS._AC_UF894,1000_QL80_.jpg"
        },
        {
            title: "Tombstone",
            genre: "Western",
            releaseYear: 1993,
            description: "A retired lawman arrives in Tombstone, Arizona, to establish a peaceful life but is drawn into the legendary gunfight at the O.K. Corral.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15292_p_v8_aa.jpg"
        },
        {
            title: "The Magnificent Seven",
            genre: "Western",
            releaseYear: 2016,
            description: "Seven gunfighters band together to protect a small town from a ruthless industrialist.",
            rating: "PG-13",
            posterImage: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/816621_MAGNIFICENT%20SEVEN%2C%20THE%20%282016%29_1400x2100_English%20%28US%29.jpg?itok=71Tw5oqG"
        },
        {
            title: "3:10 to Yuma",
            genre: "Western",
            releaseYear: 2007,
            description: "A small-time rancher agrees to hold a captured outlaw who's awaiting a train to go to court in Yuma.",
            rating: "R",
            posterImage: "https://static.wikia.nocookie.net/soundeffects/images/8/81/3-10_to_Yuma_%282007%29_Poster.jpg/revision/latest/scale-to-width-down/960?cb=20221218190109"
        },
        {
            title: "The Outlaw Josey Wales",
            genre: "Western",
            releaseYear: 1976,
            description: "A Missouri farmer joins a Confederate guerrilla unit and winds up on the run from the Union soldiers who killed his family.",
            rating: "PG",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p574_p_v10_ax.jpg"
        },
        {
            title: "Butch Cassidy and the Sundance Kid",
            genre: "Western",
            releaseYear: 1969,
            description: "Two Western outlaws form a friendship and become legendary figures while on the run from law enforcement.",
            rating: "PG",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/image_08cad4e6.jpeg?region=0%2C0%2C1400%2C2100"
        },
        {
            title: "The Assassination of Jesse James by the Coward Robert Ford",
            genre: "Western",
            releaseYear: 2007,
            description: "The film chronicles the last days of the legendary outlaw Jesse James and his murder by Robert Ford.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTY2NDI2MTc2NV5BMl5BanBnXkFtZTcwNjA2NTQzMw@@._V1_.jpg"
        },
        {
            title: "High Noon",
            genre: "Western",
            releaseYear: 1952,
            description: "A town marshal, personally opposed to violence, must gather a posse to confront a gang of killers.",
            rating: "NR",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMmJiZjA3ODgtNWI1Zi00OTA1LTkyNTMtZTA1NGYwOTQyZTA3XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Hateful Eight",
            genre: "Western",
            releaseYear: 2015,
            description: "Eight strangers seek refuge from a blizzard but soon discover that not all of them are who they claim to be.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/I/91L6M95tlKL._AC_UF894,1000_QL80_.jpg"
        },
        {
            title: "True Grit",
            genre: "Western",
            releaseYear: 1969,
            description: "A stubborn young girl hires a tough U.S. Marshal to help her track down her father's murderer.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a5/Truegritposter.jpg"
        },
        {
            title: "A Fistful of Dollars",
            genre: "Western",
            releaseYear: 1964,
            description: "A drifter arrives in a town divided by two rival families and plays them against each other.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3571_p_v10_ae.jpg"
        },
        {
            title: "Blazing Saddles",
            genre: "Western",
            releaseYear: 1974,
            description: "A town is threatened by a corrupt politician, and the governor appoints a black sheriff to help.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/Az4BIWKZUtwh8v7CcNe-GMtmMU8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p1036_p_v12_an.jpg"
        },
        {
            title: "The Quick and the Dead",
            genre: "Western",
            releaseYear: 1995,
            description: "A female gunslinger enters a quick-draw tournament to avenge her father's death.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16466_p_v8_ab.jpg"
        },

        // Crime
        {
            title: "The Godfather",
            genre: "Crime",
            releaseYear: 1972,
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Goodfellas",
            genre: "Crime",
            releaseYear: 1990,
            description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
            rating: "R",
            posterImage: "https://cinema-fanatic.com/wp-content/uploads/2010/10/goodfellas_poster.jpg"
        },
        {
            title: "Pulp Fiction",
            genre: "Crime",
            releaseYear: 1994,
            description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            rating: "R",
            posterImage: "https://musicart.xboxlive.com/7/767c6300-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
        },
        {
            title: "Scarface",
            genre: "Crime",
            releaseYear: 1983,
            description: "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
            rating: "R",
            posterImage: "https://www.datocms-assets.com/99008/1695941647-scar.jpg?auto=compress%2Cformat"
        },
        {
            title: "The Shawshank Redemption",
            genre: "Crime",
            releaseYear: 1994,
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/I/61-vQDr7ecL._AC_UF894,1000_QL80_.jpg"
        },
        {
            title: "The Departed",
            genre: "Crime",
            releaseYear: 2006,
            description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162564_p_v8_ag.jpg"
        },
        {
            title: "Fight Club",
            genre: "Crime",
            releaseYear: 1999,
            description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Trainspotting",
            genre: "Crime",
            releaseYear: 1996,
            description: "Mark Renton, a young man living in Edinburgh, Scotland, tries to choose life while being addicted to heroin.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/S/pv-target-images/1d4b2bc8ee1f21544db616dedff967c1e3ee0b138735a0a6ff3d9e3c1e424163.jpg"
        },
        {
            title: "Casino",
            genre: "Crime",
            releaseYear: 1995,
            description: "A tale of greed, deception, money, power, and murder in Las Vegas.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMDRlZWZjZjYtYzY2NS00ZWVjLTkwYzAtZTA2ZDAzMGRiYmYwXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Usual Suspects",
            genre: "Crime",
            releaseYear: 1995,
            description: "A sole survivor tells the police the twists and turns of his story involving international criminals and the infamous Keyser Söze.",
            rating: "R",
            posterImage: "https://musicart.xboxlive.com/7/5b041100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
        },
        {
            title: "City of God",
            genre: "Crime",
            releaseYear: 2002,
            description: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
            rating: "R",
            posterImage: "https://static.wixstatic.com/media/c46b9d_dbe762aec6de46a69e4d7c776d0c2653~mv2.gif"
        },
        {
            title: "No Country for Old Men",
            genre: "Crime",
            releaseYear: 2007,
            description: "Violence escalates after a hunter stumbles upon a drug deal gone wrong and takes a suitcase of cash.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p170313_p_v13_ad.jpg"
        },
        {
            title: "American Gangster",
            genre: "Crime",
            releaseYear: 2007,
            description: "In the 1970s, a heroin dealer rises to power while being pursued by a dogged detective.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/mR8DT7MdKcdkS3TeZlx_zMXXHp0=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159405_v_v10_ac.jpg"
        },
        {
            title: "The Nice Guys",
            genre: "Crime",
            releaseYear: 2016,
            description: "In 1970s Los Angeles, a mismatched pair of private eyes investigate the disappearance of a teenage girl.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/I/91XSaTFFA4L._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "Gone Baby Gone",
            genre: "Crime",
            releaseYear: 2007,
            description: "Two private detectives are hired to find a missing girl in Boston.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BOTlmNmU2NDgtZDU1OS00OTFhLWJlNTgtMWE2OGQ1OTg1MGM4XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Zodiac",
            genre: "Crime",
            releaseYear: 2007,
            description: "A cartoonist becomes an amateur detective obsessed with tracking down the Zodiac killer.",
            rating: "R",
            posterImage: "https://davidkummer.com/wp-content/uploads/2017/12/f0ec6-zodiac.jpg"
        },
        {
            title: "The French Connection",
            genre: "Crime",
            releaseYear: 1971,
            description: "A pair of NYC cops in the Narcotics Bureau stumble onto a drug smuggling job.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZDAyZDU3OWUtNWQ3Zi00ZWRkLWI4MGEtNDFlZWIzZDk5ZTZkXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Training Day",
            genre: "Crime",
            releaseYear: 2001,
            description: "A rookie cop spends his first day as a Los Angeles narcotics officer with a rogue detective.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28363_p_v13_ab.jpg"
        },

        // Family
        {
            title: "A Wrinkle in Time",
            genre: "Family",
            releaseYear: 2018,
            description: "A young girl travels through time and space to save her father and the universe.",
            rating: "PG",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/p_awrinkleintime_0862db68.jpeg"
        },
        {
            title: "The Parent Trap",
            genre: "Family",
            releaseYear: 1998,
            description: "Identical twins separated at birth meet at summer camp and plot to reunite their divorced parents.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNTRkYmY3Y2QtMGM2Ny00MTNmLTk4NjYtNjMwNTNmMGY5ZDllXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Jumanji",
            genre: "Family",
            releaseYear: 1995,
            description: "Two kids find and play a magical board game that brings jungle animals and other dangers to life.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b6/Jumanji_poster.jpg"
        },
        {
            title: "Night at the Museum",
            genre: "Family",
            releaseYear: 2006,
            description: "A night guard at a museum discovers that the exhibits come to life at night.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNGMyYjYyZDAtNzRiZC00ZjRkLTkwYjktODkxODQzNTFiMTVmXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Spy Kids",
            genre: "Family",
            releaseYear: 2001,
            description: "Two kids discover their parents are secret agents and must rescue them from danger.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZTQyNDA0ZDctZjFkMC00NDA1LWI3Y2QtOWY5OWE0NTQ2YzJjXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Cheaper by the Dozen",
            genre: "Family",
            releaseYear: 2003,
            description: "A family of twelve navigates the challenges of parenthood and raising kids in a hectic household.",
            rating: "PG",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/cheaperbythedozen_feature-poster_584x800_e4a16675.jpeg?region=0%2C0%2C584%2C800"
        },
        {
            title: "The Karate Kid",
            genre: "Family",
            releaseYear: 2010,
            description: "A 12-year-old boy moves to a new city and learns martial arts from a master to defend himself and find his place in the world.",
            rating: "PG",
            posterImage: "https://musicart.xboxlive.com/7/07941100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
        },
        {
            title: "Matilda",
            genre: "Family",
            releaseYear: 1996,
            description: "A young girl with extraordinary powers fights against her neglectful parents and tyrannical principal.",
            rating: "PG",
            posterImage: "https://i0.wp.com/www.scatteredbooks.com/wp-content/uploads/2023/05/Matilda-Movie-Poster.jpg?ssl=1"
        },
        {
            title: "Wonka",
            genre: "Family",
            releaseYear: 2023,
            description: "A prequel exploring the early life of Willy Wonka and his adventures before opening the world’s most famous chocolate factory.",
            rating: "PG",
            posterImage: "https://cdn.hmv.com/r/w-640/hmv/files/12/12be51cf-0367-47f1-8cd7-bf583f95f70d.jpg"
        },
        {
            title: "The Goonies",
            genre: "Family",
            releaseYear: 1985,
            description: "A group of kids embarks on a treasure hunt to save their homes from foreclosure.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/I/61wNEQf481L._AC_UF894,1000_QL80_.jpg"
        },
        {
            title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
            genre: "Family",
            releaseYear: 2005,
            description: "Four siblings enter a magical land and must help a lion defeat the White Witch.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_.jpg"
        },
        {
            title: "Mrs. Doubtfire",
            genre: "Family",
            releaseYear: 1993,
            description: "After losing custody of his children, a divorced father disguises himself as a female nanny to spend time with them.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BODgxNzYxNTYxMV5BMl5BanBnXkFtZTcwMDM1MjgxMQ@@._V1_.jpg"
        },
        {
            title: "The Secret Garden",
            genre: "Family",
            releaseYear: 2020,
            description: "A young girl discovers a neglected garden and transforms it, bringing joy and healing to those around her.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BOGZjMzIzMTItMjYxZC00MjE2LWE2MWItNWI4NGZhMzBkZWZmXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Big",
            genre: "Family",
            releaseYear: 1988,
            description: "A young boy makes a wish to be big and wakes up in the body of an adult, leading to comedic and heartfelt adventures.",
            rating: "PG",
            posterImage: "https://resizing.flixster.com/TAIB2TuOtGDnUWREvA8IuuN9P_I=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10873_p_v8_ak.jpg"
        },
        {
            title: "Sandlot 2",
            genre: "Family",
            releaseYear: 2005,
            description: "A new group of kids bond over baseball and adventure during a summer in the 1970s.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/03/The_Sandlot_2_poster.jpg"
        },
        {
            title: "Honey, I Shrunk the Kids",
            genre: "Family",
            releaseYear: 1989,
            description: "A scientist accidentally shrinks his kids to miniature size, and they must navigate their way through the dangers of the backyard.",
            rating: "PG",
            posterImage: "https://images.moviesanywhere.com/0e6baaaca7f42590cbad147552f49e68/3ce66886-1f62-4dea-8202-a7a790096356.jpg"
        },
        {
            title: "Freaky Friday",
            genre: "Family",
            releaseYear: 2003,
            description: "A mother and daughter magically swap bodies and learn to understand each other’s lives.",
            rating: "PG",
            posterImage: "https://static.wixstatic.com/media/7f1ef7_1e7d06dfc25f40458c72a2f76d91429e~mv2.jpg/v1/fill/w_568,h_852,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7f1ef7_1e7d06dfc25f40458c72a2f76d91429e~mv2.jpg"
        },
        {
            title: "Nanny McPhee",
            genre: "Family",
            releaseYear: 2005,
            description: "A magical nanny uses her unique abilities to help a widowed father and his unruly children.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjAwNDUxODEwMF5BMl5BanBnXkFtZTcwMzgyMTIzMQ@@._V1_.jpg"
        },
        {
            title: "Percy Jackson & the Olympians: The Sea of Monsters",
            genre: "Family",
            releaseYear: 2013,
            description: "Percy Jackson and his friends embark on a quest to find the mythical Golden Fleece to save their home.",
            rating: "PG",
            posterImage: "https://musicart.xboxlive.com/7/3c691100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
        },
    

        // War
        {
            title: "Saving Private Ryan",
            genre: "War",
            releaseYear: 1998,
            description: "During World War II, a group of U.S. soldiers must retrieve a paratrooper whose brothers have been killed in action.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "1917",
            genre: "War",
            releaseYear: 2019,
            description: "Two British soldiers must cross enemy territory to deliver a message that could save 1,600 men.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYzkxZjg2NDQtMGVjMy00NWZkLTk0ZDEtZWE3NDYwYjAyMTg1XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Full Metal Jacket",
            genre: "War",
            releaseYear: 1987,
            description: "A two-segment look at the Vietnam War through the eyes of a Marine recruit and the consequences of his training.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYWUzNzZkNzUtNDdiYy00Nzk5LTgxMmItNTk0MjRjNjdjNDA0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Apocalypse Now",
            genre: "War",
            releaseYear: 1979,
            description: "A journey up the Congo River during the Vietnam War to find and assassinate a renegade colonel.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p5545_p_v13_at.jpg"
        },
        {
            title: "Black Hawk Down",
            genre: "War",
            releaseYear: 2001,
            description: "Based on true events, a group of American soldiers is sent into Somalia to capture a warlord, leading to a fierce battle.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BYTM3YTQ1M2MtNDEyNC00NzRlLWFmOTgtYjBhNDg2ODNjNTU0XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Dunkirk",
            genre: "War",
            releaseYear: 2017,
            description: "Allied soldiers are surrounded by enemy troops and evacuated during a fierce battle in World War II.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZWU5ZjJkNTQtMzQwOS00ZGE4LWJkMWUtMGQ5YjdiM2FhYmRhXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Platoon",
            genre: "War",
            releaseYear: 1986,
            description: "A young recruit in Vietnam faces the horrors of war and moral dilemmas while caught between two sergeants.",
            rating: "R",
            posterImage: "https://static.tvtropes.org/pmwiki/pub/images/img_platoon_1986.JPG"
        },
        {
            title: "The Thin Red Line",
            genre: "War",
            releaseYear: 1998,
            description: "The conflict at Guadalcanal during World War II is portrayed through the eyes of several soldiers.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMzQ5NmViMDUtMjI1NC00ZWJkLTkwNzctMmIxZWY2MzQyZDc2XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "We Were Soldiers",
            genre: "War",
            releaseYear: 2002,
            description: "Based on the Battle of Ia Drang during the Vietnam War, the film follows the first major battle between U.S. and North Vietnamese forces.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/I/91-GwTH6u3L._AC_UF894,1000_QL80_.jpg"
        },
        {
            title: "American Sniper",
            genre: "War",
            releaseYear: 2014,
            description: "Based on the life of Navy SEAL Chris Kyle, the film chronicles his service in Iraq and the struggles he faced.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_.jpg"
        },
        {
            title: "Hacksaw Ridge",
            genre: "War",
            releaseYear: 2016,
            description: "The true story of Desmond Doss, a conscientious objector who served as a medic during World War II without carrying a weapon.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_.jpg"
        },
        {
            title: "Born on the Fourth of July",
            genre: "War",
            releaseYear: 1989,
            description: "The story of a Vietnam War veteran who becomes an anti-war activist after returning home.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12039_p_v8_ag.jpg"
        },
        {
            title: "War Horse",
            genre: "War",
            releaseYear: 2011,
            description: "The journey of a horse named Joey as he experiences the realities of World War I.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8618532_p_v8_ae.jpg"
        },
        {
            title: "Troy",
            genre: "War",
            releaseYear: 2004,
            description: "The epic tale of the Trojan War, focusing on the legendary conflict between the Greeks and Trojans.",
            rating: "R",
            posterImage: "https://musicart.xboxlive.com/7/dce21100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
        },
        {
            title: "The Hurt Locker",
            genre: "War",
            releaseYear: 2008,
            description: "An Army bomb disposal team faces danger during the Iraq War, revealing the psychological impact of war.",
            rating: "R",
            posterImage: "https://play-lh.googleusercontent.com/HuNJHggq-yqYwvF2PS1Kp1oliKpHMarLk1m2UyIpSAnAsPNb_T1iUVLl2rrqcvJ5DqSGAANt2NvbnIEbzg"
        },
        {
            title: "Midway",
            genre: "War",
            releaseYear: 2019,
            description: "The story of the Battle of Midway, a pivotal moment in World War II, told through the eyes of the sailors and soldiers.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZjI5MzBjYjktZjcwNy00ZmU2LWEyMTgtNzA2ODBlNWQ3NDYzXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Last Samurai",
            genre: "War",
            releaseYear: 2003,
            description: "An American military advisor is hired by the Emperor of Japan to train the country's first modern army.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p33171_p_v8_ay.jpg"
        },
        {
            title: "Enemy at the Gates",
            genre: "War",
            releaseYear: 2001,
            description: "A Russian sniper and a German sniper face off during the Battle of Stalingrad in World War II.",
            rating: "R",
            posterImage: "https://play-lh.googleusercontent.com/bW-i__lrTnb0lZeh1LsiWpElIxnA3WTlzX2-bNQryj9GAJ-5b6pneuQmZNmfndzl7i7n"
        },
        {
            title: "Sicario",
            genre: "War",
            releaseYear: 2015,
            description: "An FBI agent is enlisted to help take down a drug lord in a war against drugs at the U.S.-Mexico border.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/dy8boIcBPTKLuZZ5FNtIvEDRNlU=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11539968_v_v13_aa.jpg"
        },
        {
            title: "Lone Survivor",
            genre: "War",
            releaseYear: 2013,
            description: "Based on the true story of a Navy SEAL team on a mission in Afghanistan that goes wrong.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjA0NTgwOTk5Ml5BMl5BanBnXkFtZTcwMjE3NDc5OQ@@._V1_.jpg"
        },
        {
            title: "The Siege of Jadotville",
            genre: "War",
            releaseYear: 2016,
            description: "The true story of a 1961 siege during the Congo Crisis where Irish soldiers fought against overwhelming odds.",
            rating: "TV-MA",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNjJhZGY0NTUtOTI0Yi00NGY5LTk4ZWYtYmVmNGFiMTZiZTgwXkEyXkFqcGc@._V1_.jpg"
        },

        // Sports
        {
            title: "Rocky",
            genre: "Sports",
            releaseYear: 1976,
            description: "A small-time boxer gets a once-in-a-lifetime chance to fight the heavyweight champion of the world.",
            rating: "PG",
            posterImage: "https://static.posters.cz/image/1300/plakatok/rocky-balboa-rocky-film-i167759.jpg"
        },
        {
            title: "Field of Dreams",
            genre: "Sports",
            releaseYear: 1989,
            description: "An Iowa farmer builds a baseball field in his cornfield after hearing a mysterious voice.",
            rating: "PG",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11582_p_v8_ad.jpg"
        },
        {
            title: "Moneyball",
            genre: "Sports",
            releaseYear: 2011,
            description: "The true story of how the Oakland Athletics baseball team used statistical analysis to build a competitive team.",
            rating: "PG-13",
            posterImage: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/229898_Moneyball_2011_1400x2100_US_1.jpg?itok=XqvCtAC0"
        },
        {
            title: "The Blind Side",
            genre: "Sports",
            releaseYear: 2009,
            description: "The story of a homeless African-American teenager who becomes an All-American football player with the help of a caring woman.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjEzOTE3ODM3OF5BMl5BanBnXkFtZTcwMzYyODI4Mg@@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Coach Carter",
            genre: "Sports",
            releaseYear: 2005,
            description: "A high school basketball coach takes a controversial stand by benching his team for poor academic performance.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNjk0M2Y4ZTUtNzA3MS00MWYwLThmYjktMmYzNzVkYzQ3NmFlXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Remember the Titans",
            genre: "Sports",
            releaseYear: 2000,
            description: "Based on a true story, a newly appointed African-American football coach and his high school team overcome racial tensions.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTczNTA2MDc0OF5BMl5BanBnXkFtZTYwMTg4MDY2._V1_.jpg"
        },
        {
            title: "Hoop Dreams",
            genre: "Sports",
            releaseYear: 1994,
            description: "A documentary that follows two Chicago high school basketball players as they strive for success and a better life.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/S/pv-target-images/c7c3f61c5efaeb4b452a562eb9650d7c66e4919b3904b324e0e8b68e1de36497.jpg"
        },
        {
            title: "The Sandlot",
            genre: "Sports",
            releaseYear: 1993,
            description: "A group of young baseball players during the summer of 1962 learn important life lessons while playing the game.",
            rating: "PG",
            posterImage: "https://visitsouthjersey.com/wp-content/uploads/2023/06/The-sandlot-scaled.jpg"
        },
        {
            title: "A League of Their Own",
            genre: "Sports",
            releaseYear: 1992,
            description: "The story of the All-American Girls Professional Baseball League during World War II.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNGIzZWQ1MDMtZTdjNS00ODljLWI3MGYtNzJkMGVlMmQ1MDFiXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Rudy",
            genre: "Sports",
            releaseYear: 1993,
            description: "A determined young man dreams of playing football at the University of Notre Dame despite many obstacles.",
            rating: "PG",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15066_p_v10_ac.jpg"
        },
        {
            title: "Miracle",
            genre: "Sports",
            releaseYear: 2004,
            description: "The true story of the 1980 U.S. Olympic hockey team that stunned the world by defeating the Soviet Union.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/S/pv-target-images/f448d2a5a28b91e369deb4d660d5c97dad41a3c9cccdba12bf9f364977de842a.png"
        },
        {
            title: "The Fighter",
            genre: "Sports",
            releaseYear: 2010,
            description: "The story of boxer Micky Ward and his rise to fame, supported by his half-brother and mother.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTM0ODk3MjM1MV5BMl5BanBnXkFtZTcwNzc1MDIwNA@@._V1_.jpg"
        },
        {
            title: "Creed",
            genre: "Sports",
            releaseYear: 2015,
            description: "The son of Apollo Creed seeks the help of Rocky Balboa to become a professional boxer.",
            rating: "PG-13",
            posterImage: "https://musicart.xboxlive.com/7/e9f22700-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
        },
        {
            title: "The Wrestler",
            genre: "Sports",
            releaseYear: 2008,
            description: "A faded professional wrestler struggles to maintain his personal and professional life as he ages.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTc5MjYyOTg4MF5BMl5BanBnXkFtZTcwNDc2MzQwMg@@._V1_.jpg"
        },
        {
            title: "The Bad News Bears",
            genre: "Sports",
            releaseYear: 1976,
            description: "A down-and-out baseball coach is tasked with managing a misfit Little League team.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNDIzNTNmOGUtZGI4OC00YWMyLWExZTQtNGM2OWViODNiZjM2XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Bend It Like Beckham",
            genre: "Sports",
            releaseYear: 2002,
            description: "A British girl of Indian descent dreams of playing soccer against her family's wishes.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30451_p_v8_ae.jpg"
        },
        {
            title: "The Mighty Ducks",
            genre: "Sports",
            releaseYear: 1992,
            description: "A lawyer is sentenced to community service coaching a misfit youth hockey team.",
            rating: "PG",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14264_p_v10_aa.jpg"
        },
        {
            title: "Friday Night Lights",
            genre: "Sports",
            releaseYear: 2004,
            description: "Based on the true story of a high school football team in Texas, highlighting the pressures of the sport.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTcxMDI5MTM4Ml5BMl5BanBnXkFtZTcwNjA4MDcyMQ@@._V1_.jpg"
        },
        {
            title: "Chariots of Fire",
            genre: "Sports",
            releaseYear: 1981,
            description: "The true story of two runners in the 1924 Olympics, highlighting their different motivations and backgrounds.",
            rating: "PG",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p4414_p_v8_an.jpg"
        },
        {
            title: "The Express",
            genre: "Sports",
            releaseYear: 2008,
            description: "The true story of Ernie Davis, the first African American to win the Heisman Trophy.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTM3MTY5OTA5MF5BMl5BanBnXkFtZTcwMjA5ODk3MQ@@._V1_.jpg"
        },
        {
            title: "The Karate Kid",
            genre: "Sports",
            releaseYear: 1984,
            description: "A teenager learns martial arts from an unassuming handyman to defend himself from bullies.",
            rating: "PG",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p6526_p_v10_aa.jpg"
        },
        {
            title: "Pumping Iron",
            genre: "Sports",
            releaseYear: 1977,
            description: "A documentary that follows the world of professional bodybuilding and its athletes.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p39130_p_v8_ac.jpg"
        },
        {
            title: "Like Mike",
            genre: "Sports",
            releaseYear: 2002,
            description: "A young boy's life changes when he finds a pair of sneakers that belonged to his idol, allowing him to play basketball like a pro.",
            rating: "PG",
            posterImage: "https://m.media-amazon.com/images/I/513E6bKCqYL._AC_UF894,1000_QL80_.jpg"
        },

        // Superhero
        {
            title: "Spider-Man: Homecoming",
            genre: "Superhero",
            releaseYear: 2017,
            description: "Peter Parker balances his life as an ordinary high school student while fighting crime as Spider-Man.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12798844_p_v8_ao.jpg"
        },
        {
            title: "Wonder Woman",
            genre: "Superhero",
            releaseYear: 2017,
            description: "An Amazonian princess discovers her full powers after leaving her island home to fight in World War I.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/oV9ExzAFUOnlqgtCAM0-aL2fXUs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg5ZDA3ZGQ4LTE2NDUtNDUyNi04NTZjLTk3Y2MyZTAyODAyOS53ZWJw"
        },
        {
            title: "Deadpool",
            genre: "Superhero",
            releaseYear: 2016,
            description: "A former special forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers.",
            rating: "R",
            posterImage: "https://extra-images.akamaized.net/image/54/5by6/2016/02/13/5453c4e311cf513cb79f08d032991390_md.jpg"
        },
        {
            title: "Black Panther: Wakanda Forever",
            genre: "Superhero",
            releaseYear: 2022,
            description: "The leaders of Wakanda fight to protect their nation from intervening world powers in the wake of King T'Challa's death.",
            rating: "PG-13",
            posterImage: "https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg?region=0%2C0%2C540%2C810"
        },
        {
            title: "Ant-Man",
            genre: "Superhero",
            releaseYear: 2015,
            description: "A thief with a special suit that allows him to shrink in size must embrace his inner hero to help his mentor protect the technology.",
            rating: "PG-13",
            posterImage: "https://play-lh.googleusercontent.com/4Ol5d39t1STEtOLhGBil6U6qf2TFPB9K1CAjpwdmRq2PrtYft5kvn4qs_0hxa4UJFyd6"
        },
        {
            title: "Guardians of the Galaxy",
            genre: "Superhero",
            releaseYear: 2014,
            description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
            rating: "PG-13",
            posterImage: "https://images.moviesanywhere.com/959ef1bcb5c9a8e31e384f8d20384efa/7b57798c-b6d2-4b46-8487-bc0ca59934ec.jpg"
        },
        {
            title: "Thor: Ragnarok",
            genre: "Superhero",
            releaseYear: 2017,
            description: "Thor must fight to save his home from destruction while imprisoned on the other side of the universe.",
            rating: "PG-13",
            posterImage: "https://image.tmdb.org/t/p/original/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg"
        },
        {
            title: "Shazam!",
            genre: "Superhero",
            releaseYear: 2019,
            description: "A teenage boy can transform into an adult superhero by uttering a magic word.",
            rating: "PG-13",
            posterImage: "https://i-viaplay-com.akamaized.net/viaplay-prod/798/584/1645189395-afb4177991101d1a6dc96f54fc0d37493a11f7c7.jpg?width=400&height=600"
        },
        {
            title: "Kick-Ass",
            genre: "Superhero",
            releaseYear: 2010,
            description: "A teenager decides to become a real-life superhero despite having no powers, training, or meaningful reason to do so.",
            rating: "R",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7876199_p_v13_ao.jpg"
        },
        {
            title: "Batman Begins",
            genre: "Superhero",
            releaseYear: 2005,
            description: "Bruce Wayne travels the world seeking the means to fight injustice and returns home to Gotham City as Batman.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p35903_p_v8_ay.jpg"
        },
        {
            title: "Man of Steel",
            genre: "Superhero",
            releaseYear: 2013,
            description: "Clark Kent, one of the last of his kind, is forced to reveal his identity to stop an imminent threat.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9259673_p_v10_an.jpg"
        },
        {
            title: "The Amazing Spider-Man",
            genre: "Superhero",
            releaseYear: 2012,
            description: "Peter Parker uncovers the truth about his parents' disappearance and learns to embrace his identity as Spider-Man.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg"
        },
        {
            title: "Batman v Superman: Dawn of Justice",
            genre: "Superhero",
            releaseYear: 2016,
            description: "Batman and Superman are brought into conflict with each other due to differing ideologies.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BZTJkYjdmYjYtOGMyNC00ZGU1LThkY2ItYTc1OTVlMmE2YWY1XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "The Suicide Squad",
            genre: "Superhero",
            releaseYear: 2021,
            description: "Supervillains are recruited to undertake a dangerous mission for the government in exchange for reduced sentences.",
            rating: "R",
            posterImage: "https://posterspy.com/wp-content/uploads/2017/01/suicide-squad-poster-new.jpg"
        },
        {
            title: "Venom",
            genre: "Superhero",
            releaseYear: 2018,
            description: "Journalist Eddie Brock gains superpowers after being bonded with an alien symbiote.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNTYwMDg5MDItNjhmZi00NmVmLThjNWItMmNkMjVkMWRhNzI2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Spider-Man: Into the Spider-Verse",
            genre: "Superhero",
            releaseYear: 2018,
            description: "Teenager Miles Morales becomes Spider-Man and joins other Spider-People from different dimensions to save the multiverse.",
            rating: "PG",
            posterImage: "https://musicart.xboxlive.com/7/25f25000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
        },
        {
            title: "Ghost Rider",
            genre: "Superhero",
            releaseYear: 2007,
            description: "A stunt motorcyclist makes a deal with the devil and becomes the Ghost Rider, a fiery spirit of vengeance.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/Mpqudy8asOoudizyrVTLUiFF0s4=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159753_k_h9_ac.jpg"
        },
        {
            title: "Doctor Strange",
            genre: "Superhero",
            releaseYear: 2016,
            description: "A former neurosurgeon discovers the mystic arts after a career-ending accident.",
            rating: "PG-13",
            posterImage: "https://cdn.europosters.eu/image/750/posters/doctor-strange-hand-i32870.jpg"
        },
        {
            title: "X-Men: First Class",
            genre: "Superhero",
            releaseYear: 2011,
            description: "The origins of the X-Men and their arch-nemesis, Magneto, during the Cuban Missile Crisis.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Hellboy II: The Golden Army",
            genre: "Superhero",
            releaseYear: 2008,
            description: "Hellboy and his team must save humanity from an ancient evil that seeks to reclaim the Earth.",
            rating: "PG-13",
            posterImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p172364_p_v10_af.jpg"
        },
        {
            title: "The Crow",
            genre: "Superhero",
            releaseYear: 1994,
            description: "A man is resurrected from the dead to avenge his murder and that of his fiancée.",
            rating: "R",
            posterImage: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/344/2024/09/12170514/rMMB3v6jYHjsvXRNJYESacoTD7j-scaled.jpg"
        },

        {
            title: "Blade II",
            genre: "Superhero",
            releaseYear: 2002,
            description: "Blade teams up with an uneasy alliance of vampires to battle a new breed of super vampire.",
            rating: "R",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMGE5ZmY2NzEtZTEyMi00MWIyLThmOWYtYzJkOTQ0Y2U3ZWU1XkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Steel",
            genre: "Superhero",
            releaseYear: 1997,
            description: "A weapons designer becomes a vigilante to stop criminals using his technology.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BY2QxZWM5ZjMtYzk2MS00MTdkLWIyMWUtMmE0YjgyN2Y5ZTgxXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Supergirl",
            genre: "Superhero",
            releaseYear: 1984,
            description: "Kara Zor-El, Superman's cousin, comes to Earth to rescue a magical object and battles a sorceress.",
            rating: "PG",
            posterImage: "https://resizing.flixster.com/SNCBX3ps2lhzHBVWSTtwWgFKK34=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8616_v_v13_ae.jpg"
        },
        {
            title: "The Spirit",
            genre: "Superhero",
            releaseYear: 2008,
            description: "A rookie cop returns from the dead as a masked crime-fighter who battles the evil organization that killed him.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BNDcyMTc1NzgwNF5BMl5BanBnXkFtZTcwNzUyMDUwMg@@._V1_.jpg"
        },
        {
            title: "Catwoman",
            genre: "Superhero",
            releaseYear: 2004,
            description: "A shy woman, resurrected by a mystical cat, becomes a vigilante with cat-like abilities.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/M/MV5BMjA4MzM0NDAzOF5BMl5BanBnXkFtZTcwMDY3MDYyMQ@@._V1_.jpg"
        },
        {
            title: "Iron Man",
            genre: "Superhero",
            releaseYear: 2008,
            description: "Billionaire Tony Stark builds a high-tech suit of armor to escape captivity and becomes the armored superhero known as Iron Man.",
            rating: "PG-13",
            posterImage: "https://m.media-amazon.com/images/S/pv-target-images/144540abcf5eb3ca17ea30a5ac3554dcd011a2880ccfba9694d13b27362060fe.jpg"
        },
        {
            title: "Logan",
            genre: "Superhero",
            releaseYear: 2017,
            description: "In a dystopian future, an aging Wolverine and ailing Professor X must protect a young mutant on the run from dark forces.",
            rating: "R",
            posterImage: "https://i.pinimg.com/736x/94/6d/25/946d2558166a40b88b88f59b91b9adde.jpg"
        },
        

        //Holiday
        {
            "title": "Home Alone",
            "genre": "Holiday",
            "releaseYear": 1990,
            "description": "An eight-year-old boy is accidentally left behind when his family goes on Christmas vacation, and he must protect his home from burglars.",
            "rating": "PG",
            "posterImage": "https://m.media-amazon.com/images/I/512qJvmjRDL._AC_UF894,1000_QL80_.jpg"
        },
        {
            "title": "Elf",
            "genre": "Holiday",
            "releaseYear": 2003,
            "description": "A man raised as an elf at the North Pole journeys to New York City to find his biological father.",
            "rating": "PG",
            "posterImage": "https://m.media-amazon.com/images/M/MV5BNDQ0ZWE2NzgtNGNhMC00MDIwLWI1MjUtYjYxZGRiM2UyYTQzXkEyXkFqcGc@._V1_.jpg"
        },
        {
            "title": "The Polar Express",
            "genre": "Holiday",
            "releaseYear": 2004,
            "description": "A young boy embarks on a magical adventure to the North Pole aboard the Polar Express.",
            "rating": "G",
            "posterImage": "https://m.media-amazon.com/images/M/MV5BMTM1NTU0NTE4MV5BMl5BanBnXkFtZTcwMTQ0MjEzMw@@._V1_.jpg"
        },
        {
            "title": "How the Grinch Stole Christmas",
            "genre": "Holiday",
            "releaseYear": 2000,
            "description": "The Grinch plots to ruin Christmas for the citizens of Whoville, but his heart may be changed by the holiday spirit.",
            "rating": "PG",
            "posterImage": "https://m.media-amazon.com/images/M/MV5BNDAwMjFhYTEtNzYyMS00YmY2LTg3MGEtZTRkNWNiMDI4MDRkXkEyXkFqcGc@._V1_.jpg"
        },
        {
            "title": "The Santa Clause",
            "genre": "Holiday",
            "releaseYear": 1994,
            "description": "An ordinary man accidentally causes Santa's death and must take over the role of Santa Claus.",
            "rating": "PG",
            "posterImage": "https://musicart.xboxlive.com/7/3d1b5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
        },
        {
            "title": "A Christmas Story",
            "genre": "Holiday",
            "releaseYear": 1983,
            "description": "In the 1940s, a young boy desperately wants a Red Ryder BB gun for Christmas despite warnings that he'll 'shoot his eye out.'",
            "rating": "PG",
            "posterImage": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8655_v_v13_aj.jpg"
        },
        {
            "title": "It's a Wonderful Life",
            "genre": "Holiday",
            "releaseYear": 1946,
            "description": "An angel helps a compassionate but despairingly frustrated businessman by showing him what life would have been like if he never existed.",
            "rating": "PG",
            "posterImage": "https://image.tmdb.org/t/p//w780//eFLahYmGUqRMjhQKbDPA6xbfFkT.jpg"
        },
        {
            "title": "National Lampoon's Christmas Vacation",
            "genre": "Holiday",
            "releaseYear": 1989,
            "description": "The Griswold family's plans for a big family Christmas predictably turn into a disaster.",
            "rating": "PG-13",
            "posterImage": "https://m.media-amazon.com/images/M/MV5BZDgxYzI2YWItNmUyNS00ZWE4LWEzZDctYTk1M2VkYjhkOWVmXkEyXkFqcGc@._V1_.jpg"
        },
        {
            "title": "The Nightmare Before Christmas",
            "genre": "Holiday",
            "releaseYear": 1993,
            "description": "Jack Skellington, the King of Halloween Town, discovers Christmas Town and attempts to bring the holiday back to his home.",
            "rating": "PG",
            "posterImage": "https://m.media-amazon.com/images/M/MV5BNmYxOTAzZWYtOGI3Yi00ODc3LTk5ZjYtZTY0MzVkZTg3YmRiXkEyXkFqcGc@._V1_.jpg"
        },
        {
            "title": "Love Actually",
            "genre": "Holiday",
            "releaseYear": 2003,
            "description": "Follows the lives of eight very different couples dealing with their love lives in various loosely interrelated tales during Christmas.",
            "rating": "R",
            "posterImage": "https://upload.wikimedia.org/wikipedia/en/e/eb/Love_Actually_movie.jpg"
        },
        {
            "title": "The Muppet Christmas Carol",
            "genre": "Holiday",
            "releaseYear": 1992,
            "description": "The Muppets tell their version of the classic Charles Dickens tale, starring Michael Caine as Ebenezer Scrooge.",
            "rating": "G",
            "posterImage": "https://m.media-amazon.com/images/M/MV5BNTIwOTAyMDgtNTY1Zi00ZWMyLWFjMjAtNjI5YWIyOTE2NDJhXkEyXkFqcGc@._V1_.jpg"
        },
        {
            "title": "The Holiday",
            "genre": "Holiday",
            "releaseYear": 2006,
            "description": "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
            "rating": "PG-13",
            "posterImage": "https://upload.wikimedia.org/wikipedia/en/6/60/Theholidayposter.jpg"
        },
        {
            "title": "Jingle All the Way",
            "genre": "Holiday",
            "releaseYear": 1996,
            "description": "A father vows to get his son a Turbo Man action figure for Christmas, but every store is sold out.",
            "rating": "PG",
            "posterImage": "https://m.media-amazon.com/images/M/MV5BMjAzMjI0NDE4N15BMl5BanBnXkFtZTgwMjE0MzgwMzE@._V1_.jpg"
        },
        {
            "title": "Scrooged",
            "genre": "Holiday",
            "releaseYear": 1988,
            "description": "A selfish, cynical television executive is haunted by three spirits bearing lessons on Christmas Eve.",
            "rating": "PG-13",
            "posterImage": "https://upload.wikimedia.org/wikipedia/en/a/a1/Scrooged_film_poster.JPG"
        },
        {
            "title": "The Christmas Chronicles",
            "genre": "Holiday",
            "releaseYear": 2018,
            "description": "The story of sister and brother, Kate and Teddy Pierce, whose plan to catch Santa Claus on camera turns into an unexpected adventure.",
            "rating": "PG",
            "posterImage": "https://m.media-amazon.com/images/M/MV5BNTA3NjU3OTM2MV5BMl5BanBnXkFtZTgwNjQ2MzE1NjM@._V1_.jpg"
        },
        {
            "title": "Arthur Christmas",
            "genre": "Holiday",
            "releaseYear": 2011,
            "description": "Santa's clumsy son Arthur sets out on a mission with Grandsanta to deliver a misplaced present in time for Christmas.",
            "rating": "PG",
            "posterImage": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8718241_p_v8_ae.jpg"
        },
        {
            "title": "Miracle on 34th Street",
            "genre": "Holiday",
            "releaseYear": 1947,
            "description": "When a department store Santa claims to be the real Santa Claus, it leads to a court case to determine his authenticity.",
            "rating": "G",
            "posterImage": "https://images.store.sky.com/api/img/asset/en/66D8BB8A-E4E8-4422-9242-603110084545_4E5D8E25-4F8C-417B-B26F-E957DF6ACA57_2024-3-7-T9-4-14.jpg?s=260x371"
        },
        {
            "title": "Four Christmases",
            "genre": "Holiday",
            "releaseYear": 2008,
            "description": "A couple struggles to visit all four of their divorced parents on Christmas Day.",
            "rating": "PG-13",
            "posterImage": "https://m.media-amazon.com/images/M/MV5BMTQ2MjA0NDAwNF5BMl5BanBnXkFtZTcwOTU4MTM5MQ@@._V1_FMjpg_UX1000_.jpg"
        },
        {
            "title": "Bad Santa",
            "genre": "Holiday",
            "releaseYear": 2003,
            "description": "A miserable conman and his partner pose as Santa and his helper to rob department stores on Christmas Eve, but they run into complications.",
            "rating": "R",
            "posterImage": "https://m.media-amazon.com/images/M/MV5BMjA4Njg1MDcwN15BMl5BanBnXkFtZTYwMzAxNjM3._V1_.jpg"
        },
        {
            "title": "Klaus",
            "genre": "Holiday",
            "releaseYear": 2019,
            "description": "A selfish postman and a reclusive toymaker form an unlikely friendship that brings joy to a cold, dark town.",
            "rating": "PG",
            "posterImage": "https://m.media-amazon.com/images/M/MV5BZDA4ODhlMzctNGRmYi00NmViLTkxZGYtZjRkNGQ5YzYwYWVlXkEyXkFqcGc@._V1_.jpg"
        },
        {
            "title": "The Christmas Chronicles 2",
            "genre": "Holiday",
            "releaseYear": 2020,
            "description": "Kate Pierce, now a cynical teen, is unexpectedly reunited with Santa Claus when a mysterious troublemaker threatens to cancel Christmas forever.",
            "rating": "PG",
            "posterImage": "https://m.media-amazon.com/images/M/MV5BZTA1N2U4YWMtOWUxMy00NGI2LWJjOGItNGJiNmUyMDZkY2QwXkEyXkFqcGc@._V1_.jpg"
        },
        {
            "title": "A Charlie Brown Christmas",
            "genre": "Holiday",
            "releaseYear": 1965,
            "description": "Charlie Brown searches for the true meaning of Christmas with the help of his friends and a small, sad Christmas tree.",
            "rating": "G",
            "posterImage": "https://m.media-amazon.com/images/M/MV5BMjViMWMxNWItYTk2OC00MWQwLWIyMzktNDQ4YWIyYjcxZGIyXkEyXkFqcGc@._V1_.jpg"
        },
        {
            "title": "The Man Who Invented Christmas",
            "genre": "Holiday",
            "releaseYear": 2017,
            "description": "The story of Charles Dickens' journey to create the timeless classic 'A Christmas Carol.'",
            "rating": "PG",
            "posterImage": "https://m.media-amazon.com/images/M/MV5BMzEzNTc5MWUtNmQ0My00ZGYwLWJiNzQtN2ViZGZlYWEyMGEwXkEyXkFqcGc@._V1_.jpg"
        },
        {
            "title": "Noelle",
            "genre": "Holiday",
            "releaseYear": 2019,
            "description": "Santa Claus's daughter, Noelle, is called upon to take over the family business when her brother, Nick, gets cold feet.",
            "rating": "G",
            "posterImage": "https://resizing.flixster.com/pGFilumC75fQdHFEaH-7IH79t5k=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17609641_v_h9_ab.jpg"
        },
        {
            "title": "A Boy Called Christmas",
            "genre": "Holiday",
            "releaseYear": 2021,
            "description": "A young boy named Nikolas sets out on an extraordinary adventure into the snowy north in search of his father and the fabled village of the elves.",
            "rating": "PG",
            "posterImage": "https://m.media-amazon.com/images/M/MV5BMmNjMmEzMDgtNmE0MS00MjY2LWFkNDMtOWM5YjFkZWM5MGNhXkEyXkFqcGc@._V1_.jpg"
        }

    ]

    await Movie.insertMany(movies)
    console.log("Created some movies!")
}

const run = async () => {
    await main()
    db.close()
}

run()
