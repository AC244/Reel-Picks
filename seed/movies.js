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
                posterImage: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg"
            },
            {
                title: "Die Hard",
                genre: "Action",
                releaseYear: 1988,
                description: "A New York City cop tries to save hostages taken by terrorists in a Los Angeles skyscraper.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/8/8e/Die_Hard_%281988_film%29.jpg"
            },
            {
                title: "John Wick",
                genre: "Action",
                releaseYear: 2014,
                description: "An ex-hitman comes out of retirement to track down the gangsters that took everything from him.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_Chapter_1_Poster.jpg"
            },
            {
                title: "The Dark Knight",
                genre: "Action",
                releaseYear: 2008,
                description: "Batman faces the Joker, a criminal mastermind who wants to create chaos.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/Dark_Knight.jpg"
            },
            {
                title: "Gladiator",
                genre: "Action",
                releaseYear: 2000,
                description: "A betrayed Roman general seeks revenge against the corrupt emperor who murdered his family.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/1/13/Gladiator_poster.jpg"
            },
            {
                title: "The Avengers",
                genre: "Action",
                releaseYear: 2012,
                description: "Earth’s mightiest heroes must come together to stop an alien invasion.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"
            },
            {
                title: "Inception",
                genre: "Action",
                releaseYear: 2010,
                description: "A thief who enters the dreams of others must plant an idea in a target’s mind.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/2/28/Inception_%282010_film%29.png"
            },
            {
                title: "The Matrix",
                genre: "Action",
                releaseYear: 1999,
                description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
            },
            {
                title: "Terminator 2: Judgment Day",
                genre: "Action",
                releaseYear: 1991,
                description: "A cyborg is sent back in time to protect a young boy from an advanced killing machine.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/7/76/Terminator2poster.jpg"
            },
            {
                title: "Skyfall",
                genre: "Action",
                releaseYear: 2012,
                description: "Bond’s loyalty to M is tested as her past comes back to haunt her.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3a/Skyfall_poster.jpg"
            },
            {
                title: "Casino Royale",
                genre: "Action",
                releaseYear: 2006,
                description: "James Bond earns his 00 status and is sent to play poker at Casino Royale.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/2/2b/Casino_Royale_Poster.jpg"
            },
            {
                title: "Black Panther",
                genre: "Action",
                releaseYear: 2018,
                description: "T’Challa returns home to the isolated nation of Wakanda to take the throne as king.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0c/Black_Panther_film_poster.jpg"
            },
            {
                title: "Avatar",
                genre: "Action",
                releaseYear: 2009,
                description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg"
            },
            {
                title: "Pirates of the Caribbean: The Curse of the Black Pearl",
                genre: "Action",
                releaseYear: 2003,
                description: "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/6/68/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.jpg"
            },
            {
                title: "RoboCop",
                genre: "Action",
                releaseYear: 1987,
                description: "In a dystopic and crime-ridden Detroit, a terminally wounded cop returns to the force as a powerful cyborg.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/Robocop.jpg"
            },
            {
                title: "Dunkirk",
                genre: "Action",
                releaseYear: 2017,
                description: "Allied soldiers are surrounded by enemy troops and evacuated during a fierce battle in World War II.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/1/12/Dunkirk_poster.jpg"
            },
            {
                title: "The Bourne Identity",
                genre: "Action",
                releaseYear: 2002,
                description: "A man suffering from amnesia tries to discover his true identity.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/6/64/The_Bourne_Identity_poster.jpg"
            },
            {
                title: "Kill Bill: Vol. 1",
                genre: "Action",
                releaseYear: 2003,
                description: "A former assassin awakens from a four-year coma and seeks revenge on her former colleagues.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0d/Kill_Bill_Vol_1_poster.jpg"
            },
            {
                title: "Furious 7",
                genre: "Action",
                releaseYear: 2015,
                description: "Dominic Toretto and his crew must face a powerful new enemy.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/8/8a/Furious_7_poster.jpg"
            },
            {
                title: "The Equalizer",
                genre: "Action",
                releaseYear: 2014,
                description: "A retired black ops operative seeks redemption by helping a young girl under the control of her pimp.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a0/The_Equalizer_Poster.jpg"
            },
            {
                title: "The Raid: Redemption",
                genre: "Action",
                releaseYear: 2011,
                description: "A rookie member of an elite team must fight his way through a criminal-infested building.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/6/63/The_Raid_poster.jpg"
            },
            {
                title: "The Fast and the Furious",
                genre: "Action",
                releaseYear: 2001,
                description: "An undercover cop infiltrates a street racing gang.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/8/8f/The_Fast_and_the_Furious.jpg"
            },
            {
                title: "Top Gun: Maverick",
                genre: "Action",
                releaseYear: 2022,
                description: "After more than 30 years of service, Maverick trains new recruits for a dangerous mission.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3f/Top_Gun_Maverick_Poster.jpg"
            },
            {
                title: "Mission: Impossible – Fallout",
                genre: "Action",
                releaseYear: 2018,
                description: "Ethan Hunt and his IMF team race against time to stop a nuclear threat.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/0/01/Mission_Impossible_Fallout.jpg"
            },
            {
                title: "The Hunger Games",
                genre: "Action",
                releaseYear: 2012,
                description: "Katniss Everdeen must survive a televised death match in a dystopian future.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/4/42/HungerGamesPoster.jpg"
            },
            {
                title: "Edge of Tomorrow",
                genre: "Action",
                releaseYear: 2014,
                description: "A soldier relives the same day over and over while fighting alien invaders.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/f/f9/Edge_of_Tomorrow_Poster.jpg"
            },
            {
                title: "300",
                genre: "Action",
                releaseYear: 2006,
                description: "King Leonidas of Sparta and his army of 300 men fight to the death against Xerxes' army.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5c/300poster.jpg"
            },
            {
                title: "Bad Boys",
                genre: "Action",
                releaseYear: 1995,
                description: "Two Miami detectives must protect a murder witness while investigating a stolen drugs case.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a6/Bad_Boys_poster.jpg"
            },
            {
                title: "Heat",
                genre: "Action",
                releaseYear: 1995,
                description: "A group of professional bank robbers start to feel the heat from the LAPD.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/6/6c/Heat_%281995_film_poster%29.png"
            },
            {
                title: "Speed",
                genre: "Action",
                releaseYear: 1994,
                description: "A Los Angeles cop must stop a bus that has been rigged to explode if it goes under 50 mph.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a4/Speed_movie_poster.jpg"
            },
            {
                title: "Point Break",
                genre: "Action",
                releaseYear: 1991,
                description: "An FBI agent goes undercover to catch a gang of surfers who rob banks to fund their extreme lifestyle.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/2/2c/Point_Break_%281991_film%29_poster.jpg"
            },
            {
                title: "The Fugitive",
                genre: "Action",
                releaseYear: 1993,
                description: "A doctor wrongly convicted of murdering his wife escapes custody to find the real killer.",
                rating: "PG-13",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e7/Fugitive1993poster.jpg"
            },
            {
                title: "True Lies",
                genre: "Action",
                releaseYear: 1994,
                description: "A secret agent discovers his wife might be having an affair while he is investigating a terrorist group.",
                rating: "R",
                posterImage: "https://upload.wikimedia.org/wikipedia/en/7/79/True_lies_poster.jpg"
            },
        
        

        // Comedy
        {
            title: "The Hangover",
            genre: "Comedy",
            releaseYear: 2009,
            description: "Three friends wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg"
        },
        {
            title: "Superbad",
            genre: "Comedy",
            releaseYear: 2007,
            description: "Two high school friends try to make the most of their last days before graduation with a wild party.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png"
        },
        {
            title: "Anchorman: The Legend of Ron Burgundy",
            genre: "Comedy",
            releaseYear: 2004,
            description: "Ron Burgundy, a top-rated newsman in San Diego during the 1970s, clashes with his new female co-anchor.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c5/Anchorman_the_legend_of_ron_burgundy_ver2.jpg"
        },
        {
            title: "Dumb and Dumber",
            genre: "Comedy",
            releaseYear: 1994,
            description: "Two unintelligent friends set out on a cross-country trip to return a briefcase full of money.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/64/Dumbanddumber.jpg"
        },
        {
            title: "Groundhog Day",
            genre: "Comedy",
            releaseYear: 1993,
            description: "A weatherman finds himself reliving the same day over and over.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/68/Groundhog_Day_%281993_film%29_poster.jpg"
        },
        {
            title: "Step Brothers",
            genre: "Comedy",
            releaseYear: 2008,
            description: "Two middle-aged men who still live at home become stepbrothers and chaos ensues.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d9/StepbrothersMP08.jpg"
        },
        {
            title: "Bridesmaids",
            genre: "Comedy",
            releaseYear: 2011,
            description: "Competition between the maid of honor and a bridesmaid over who is the bride's best friend.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/df/BridesmaidsPoster.jpg"
        },
        {
            title: "The 40-Year-Old Virgin",
            genre: "Comedy",
            releaseYear: 2005,
            description: "A middle-aged man tries to lose his virginity with the help of his friends.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d0/The40-Year-OldVirgin.jpg"
        },
        {
            title: "Ferris Bueller's Day Off",
            genre: "Comedy",
            releaseYear: 1986,
            description: "A high school student fakes being sick to skip school and has an adventurous day off.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/9b/Ferris_Bueller%27s_Day_Off.jpg"
        },
        {
            title: "Elf",
            genre: "Comedy",
            releaseYear: 2003,
            description: "A man raised as an elf at the North Pole is sent to the U.S. in search of his true identity.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/df/Elf_movie.jpg"
        },
        {
            title: "Monty Python and the Holy Grail",
            genre: "Comedy",
            releaseYear: 1975,
            description: "King Arthur and his knights embark on a low-budget search for the Grail.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0b/Monty_Python_and_the_Holy_Grail_%281975_film%29.jpg"
        },
        {
            title: "Tropic Thunder",
            genre: "Comedy",
            releaseYear: 2008,
            description: "Through a series of freak occurrences, a group of actors shooting a war movie in the jungle become the real soldiers.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d6/Tropic_thunder_ver3.jpg"
        },
        {
            title: "Shaun of the Dead",
            genre: "Comedy",
            releaseYear: 2004,
            description: "A man decides to turn his life around by winning back his ex-girlfriend and saving his town from zombies.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/49/Shaun_of_the_Dead_film_poster.jpg"
        },
        {
            title: "Napoleon Dynamite",
            genre: "Comedy",
            releaseYear: 2004,
            description: "A listless and alienated teenager decides to help his friend win the class presidency.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e0/Napoleon_dynamite_post.jpg"
        },
        {
            title: "Zoolander",
            genre: "Comedy",
            releaseYear: 2001,
            description: "At the end of his career, a clueless fashion model is brainwashed to kill the Prime Minister of Malaysia.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/7e/Zoolander_movie_poster.jpg"
        },
        {
            title: "The Big Lebowski",
            genre: "Comedy",
            releaseYear: 1998,
            description: "Jeff 'The Dude' Lebowski is mistaken for a millionaire of the same name and seeks restitution.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/35/Biglebowskiposter.jpg"
        },
        {
            title: "Meet the Parents",
            genre: "Comedy",
            releaseYear: 2000,
            description: "A man meets his girlfriend's overbearing father for the first time before proposing.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/37/Meet_The_Parents_Poster.jpg"
        },
        {
            title: "Wedding Crashers",
            genre: "Comedy",
            releaseYear: 2005,
            description: "Two friends crash weddings to meet women but things take a turn when one falls for a bride's maid.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/6c/Wedding_crashers_poster.jpg"
        },
        {
            title: "Old School",
            genre: "Comedy",
            releaseYear: 2003,
            description: "Three men in their 30s start a fraternity in order to relive their college years.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4f/Old_school_poster.jpg"
        },
        {
            title: "Knocked Up",
            genre: "Comedy",
            releaseYear: 2007,
            description: "A one-night stand between two mismatched individuals results in an unexpected pregnancy.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b9/Knocked_up_poster.jpg"
        },
        {
            title: "Austin Powers: International Man of Mystery",
            genre: "Comedy",
            releaseYear: 1997,
            description: "A cryogenically frozen British spy is thawed out in the 1990s to thwart his old nemesis, Dr. Evil.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/7d/Austin_Powers_International_Man_of_Mystery_theatrical_poster.jpg"
        },
        {
            title: "Liar Liar",
            genre: "Comedy",
            releaseYear: 1997,
            description: "A lawyer finds himself unable to lie for 24 hours due to his son's birthday wish.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e0/Liar_liar_ver2.jpg"
        },
        {
            title: "Ace Ventura: Pet Detective",
            genre: "Comedy",
            releaseYear: 1994,
            description: "A goofy detective specializing in animals must track down a missing dolphin mascot of a football team.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/f/f6/Ace_ventura_pet_detective.jpg"
        },
        {
            title: "The Mask",
            genre: "Comedy",
            releaseYear: 1994,
            description: "A bank clerk discovers a magical mask that transforms him into a mischievous and confident alter ego.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/6f/The_Mask_poster.jpg"
        },
    

        // Drama
        {
            title: "The Shawshank Redemption",
            genre: "Drama",
            releaseYear: 1994,
            description: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
        },
        {
            title: "Forrest Gump",
            genre: "Drama",
            releaseYear: 1994,
            description: "The story of Forrest Gump, a man with low intelligence who witnesses and unwittingly influences several historical events in 20th century America.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"
        },
        {
            title: "Fight Club",
            genre: "Drama",
            releaseYear: 1999,
            description: "An insomniac office worker forms an underground fight club that evolves into something much more.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg"
        },
        {
            title: "The Godfather",
            genre: "Drama",
            releaseYear: 1972,
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg"
        },
        {
            title: "Schindler's List",
            genre: "Drama",
            releaseYear: 1993,
            description: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg"
        },
        {
            title: "12 Years a Slave",
            genre: "Drama",
            releaseYear: 2013,
            description: "A free black man from upstate New York is abducted and sold into slavery.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/22/12_Years_a_Slave_film_poster.jpg"
        },
        {
            title: "Good Will Hunting",
            genre: "Drama",
            releaseYear: 1997,
            description: "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/52/Good_Will_Hunting.png"
        },
        {
            title: "A Beautiful Mind",
            genre: "Drama",
            releaseYear: 2001,
            description: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b8/A_Beautiful_Mind_Poster.jpg"
        },
        {
            title: "The Pursuit of Happyness",
            genre: "Drama",
            releaseYear: 2006,
            description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional endeavor.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg"
        },
        {
            title: "The Green Mile",
            genre: "Drama",
            releaseYear: 1999,
            description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/ce/Green_mile.jpg"
        },
        {
            title: "Requiem for a Dream",
            genre: "Drama",
            releaseYear: 2000,
            description: "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/92/Requiem_for_a_dream.jpg"
        },
        {
            title: "American Beauty",
            genre: "Drama",
            releaseYear: 1999,
            description: "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b6/American_Beauty_1999_film_poster.jpg"
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
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/7a/Social_network_film_poster.jpg"
        },
        {
            title: "La La Land",
            genre: "Drama",
            releaseYear: 2016,
            description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png"
        },
        {
            title: "Slumdog Millionaire",
            genre: "Drama",
            releaseYear: 2008,
            description: "A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of 'Who Wants to Be a Millionaire?'.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/92/Slumdog_Millionaire_poster.png"
        },
        {
            title: "Moonlight",
            genre: "Drama",
            releaseYear: 2016,
            description: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/84/Moonlight_%282016_film%29.png"
        },
        {
            title: "Eternal Sunshine of the Spotless Mind",
            genre: "Drama",
            releaseYear: 2004,
            description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/62/Eternal_Sunshine_of_the_Spotless_Mind.png"
        },
        {
            title: "Birdman",
            genre: "Drama",
            releaseYear: 2014,
            description: "A washed-up actor, famous for portraying an iconic superhero, struggles to mount a Broadway play.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/67/Birdman_poster.png"
        },
        {
            title: "Whiplash",
            genre: "Drama",
            releaseYear: 2014,
            description: "A promising young drummer enrolls at a cutthroat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/01/Whiplash_poster.jpg"
        },
        {
            title: "The Revenant",
            genre: "Drama",
            releaseYear: 2015,
            description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b6/The_Revenant_2015_film_poster.jpg"
        },
        {
            title: "A Star is Born",
            genre: "Drama",
            releaseYear: 2018,
            description: "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/cd/A_Star_is_Born.png"
        },
        {
            title: "The Pianist",
            genre: "Drama",
            releaseYear: 2002,
            description: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto during World War II.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a6/The_Pianist_movie.jpg"
        },
        {
            title: "The King's Speech",
            genre: "Drama",
            releaseYear: 2010,
            description: "The story of King George VI's effort to overcome his stammer with the help of speech therapist Lionel Logue.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a0/Kings_speech.jpg"
        },
        {
            title: "Manchester by the Sea",
            genre: "Drama",
            releaseYear: 2016,
            description: "A depressed uncle is asked to take care of his teenage nephew after the boy's father dies.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/60/Manchester_by_the_Sea.jpg"
        },

        // Horror
        {
            title: "The Exorcist",
            genre: "Horror",
            releaseYear: 1973,
            description: "A mother seeks the help of priests to save her daughter, who is possessed by a mysterious entity.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/6d/Exorcist_ver2.jpg"
        },
        {
            title: "Hereditary",
            genre: "Horror",
            releaseYear: 2018,
            description: "A grieving family is haunted by tragic and disturbing occurrences.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/7b/Hereditary.png"
        },
        {
            title: "The Shining",
            genre: "Horror",
            releaseYear: 1980,
            description: "A family heads to an isolated hotel where an evil presence drives the father into madness.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/25/The_Shining_%281980%29.png"
        },
        {
            title: "Get Out",
            genre: "Horror",
            releaseYear: 2017,
            description: "A young African-American uncovers disturbing secrets while visiting his white girlfriend's family.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png"
        },
        {
            title: "A Nightmare on Elm Street",
            genre: "Horror",
            releaseYear: 1984,
            description: "Teenagers are terrorized by a killer who attacks them in their dreams.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4f/A_Nightmare_on_Elm_Street_%281984%29_theatrical_poster.jpg"
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
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/56/The_Texas_Chain_Saw_Massacre_%281974%29_poster.jpg"
        },
        {
            title: "The Conjuring",
            genre: "Horror",
            releaseYear: 2013,
            description: "Paranormal investigators help a family terrorized by a dark presence in their farmhouse.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/1f/Conjuring_poster.jpg"
        },
        {
            title: "It",
            genre: "Horror",
            releaseYear: 2017,
            description: "A group of children are terrorized by a malevolent entity that takes the form of a clown.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg"
        },
        {
            title: "The Babadook",
            genre: "Horror",
            releaseYear: 2014,
            description: "A single mother and her son are haunted by a sinister presence that comes from a children's book.",
            rating: "Not Rated",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/98/The_Babadook_poster.jpg"
        },
        {
            title: "Insidious",
            genre: "Horror",
            releaseYear: 2010,
            description: "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/2d/Insidious_poster.jpg"
        },
        {
            title: "Paranormal Activity",
            genre: "Horror",
            releaseYear: 2007,
            description: "A young couple documents the terrifying supernatural occurrences in their home.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3c/Paranormal_Activity_poster.jpg"
        },
        {
            title: "The Ring",
            genre: "Horror",
            releaseYear: 2002,
            description: "A journalist investigates a cursed videotape that kills its viewer seven days after watching.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/9e/Theringpostere.jpg"
        },
        {
            title: "The Blair Witch Project",
            genre: "Horror",
            releaseYear: 1999,
            description: "Three film students vanish after traveling into the woods to make a documentary about a local legend.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/08/Blair_Witch_Project.jpg"
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
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg"
        },
        {
            title: "Psycho",
            genre: "Horror",
            releaseYear: 1960,
            description: "A secretary embezzles money and checks into a secluded motel where she meets the mysterious Norman Bates.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b9/Psycho_%281960%29.jpg"
        },
        {
            title: "The Witch",
            genre: "Horror",
            releaseYear: 2015,
            description: "A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and possession.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4c/The_Witch_poster.png"
        },
        {
            title: "Midsommar",
            genre: "Horror",
            releaseYear: 2019,
            description: "A couple travels to Sweden for a festival, only to find themselves in the midst of a sinister cult.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/7a/Midsommar_%282019%29_poster.png"
        },
        {
            title: "Poltergeist",
            genre: "Horror",
            releaseYear: 1982,
            description: "A family's home is haunted by malevolent spirits that abduct their young daughter.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a1/Poltergeist_1982.jpg"
        },
        {
            title: "The Omen",
            genre: "Horror",
            releaseYear: 1976,
            description: "An American ambassador realizes his child is the Antichrist after a series of mysterious deaths.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/55/Omen_ver4.jpg"
        },
        {
            title: "The Grudge",
            genre: "Horror",
            releaseYear: 2004,
            description: "An American nurse living in Tokyo encounters a vengeful supernatural force.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/50/The_Grudge_movie.jpg"
        },
        {
            title: "Carrie",
            genre: "Horror",
            releaseYear: 1976,
            description: "A shy, repressed teenage girl unleashes her telekinetic powers after being humiliated at her prom.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a2/Carrieposter.jpg"
        },
        {
            title: "The Cabin in the Woods",
            genre: "Horror",
            releaseYear: 2012,
            description: "Five friends visit a remote cabin, where they become victims of a sinister ritual.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a0/The_Cabin_in_the_Woods_%282012%29_theatrical_poster.jpg"
        },

        // Sci-Fi
        {
            title: "Blade Runner",
            genre: "Sci-Fi",
            releaseYear: 1982,
            description: "A former police officer hunts down bioengineered beings in a dystopian future.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/53/Blade_Runner_poster.jpg"
        },
        {
            title: "Inception",
            genre: "Sci-Fi",
            releaseYear: 2010,
            description: "A thief who enters the dreams of others must plant an idea in a target’s mind.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/28/Inception_%282010_film%29.png"
        },
        {
            title: "The Matrix",
            genre: "Sci-Fi",
            releaseYear: 1999,
            description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
        },
        {
            title: "Interstellar",
            genre: "Sci-Fi",
            releaseYear: 2014,
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b9/Interstellar_film_poster.jpg"
        },
        {
            title: "Star Wars: Episode IV - A New Hope",
            genre: "Sci-Fi",
            releaseYear: 1977,
            description: "A young farm boy joins a group of rebels to fight against the tyrannical Galactic Empire.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg"
        },
        {
            title: "The Terminator",
            genre: "Sci-Fi",
            releaseYear: 1984,
            description: "A cyborg is sent back in time to kill the mother of the future leader of the human resistance.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/20/The_Terminator_Poster.jpg"
        },
        {
            title: "E.T. the Extra-Terrestrial",
            genre: "Sci-Fi",
            releaseYear: 1982,
            description: "A young boy befriends an alien stranded on Earth and helps him return home.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/20/E.T._the_Extra-Terrestrial.jpg"
        },
        {
            title: "District 9",
            genre: "Sci-Fi",
            releaseYear: 2009,
            description: "An extraterrestrial race forced to live in slum-like conditions on Earth begins to change when one of them is exposed to a potent chemical.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b9/District_9_poster.jpg"
        },
        {
            title: "Gravity",
            genre: "Sci-Fi",
            releaseYear: 2013,
            description: "Two astronauts work together to survive after an accident leaves them stranded in space.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/39/Gravity_Poster.jpg"
        },
        {
            title: "The Fifth Element",
            genre: "Sci-Fi",
            releaseYear: 1997,
            description: "In the 23rd century, a cab driver becomes an unlikely hero in the battle to save the world.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c3/Fifth_element.jpg"
        },
        {
            title: "Arrival",
            genre: "Sci-Fi",
            releaseYear: 2016,
            description: "A linguist is recruited by the military to communicate with extraterrestrial visitors.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b5/Arrival_%282016_film%29.png"
        },
        {
            title: "Avatar",
            genre: "Sci-Fi",
            releaseYear: 2009,
            description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b9/Avatar_2012_film_poster.jpg"
        },
        {
            title: "Children of Men",
            genre: "Sci-Fi",
            releaseYear: 2006,
            description: "In a future where humanity is infertile, a man is tasked with protecting a miraculously pregnant woman.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4d/Children_of_Men_Poster.jpg"
        },
        {
            title: "Blade Runner 2049",
            genre: "Sci-Fi",
            releaseYear: 2017,
            description: "A young blade runner discovers a long-buried secret that has the potential to plunge what's left of society into chaos.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/bc/Blade_Runner_2049_poster.jpg"
        },
        {
            title: "The Martian",
            genre: "Sci-Fi",
            releaseYear: 2015,
            description: "An astronaut becomes stranded on Mars and must devise a way to survive while awaiting rescue.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c3/The_Martian_film_poster.jpg"
        },
        {
            title: "Terminator 2: Judgment Day",
            genre: "Sci-Fi",
            releaseYear: 1991,
            description: "A cyborg and a young boy join forces to protect the future leader of the human resistance.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/76/Terminator2.jpg"
        },
        {
            title: "12 Monkeys",
            genre: "Sci-Fi",
            releaseYear: 1995,
            description: "A convict from a dystopian future is sent back in time to gather information about a virus that wiped out most of humanity.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/9f/12monkeys.jpg"
        },
        {
            title: "Minority Report",
            genre: "Sci-Fi",
            releaseYear: 2002,
            description: "In a future where crime is predicted and stopped before it occurs, a cop is accused of a murder he has yet to commit.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5b/Minority_Report_poster.jpg"
        },
        {
            title: "Snowpiercer",
            genre: "Sci-Fi",
            releaseYear: 2013,
            description: "In a future where Earth is frozen, the last survivors are aboard a train that travels around the globe.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/57/Snowpiercer_poster.jpg"
        },
        {
            title: "The Prestige",
            genre: "Sci-Fi",
            releaseYear: 2006,
            description: "Two magicians engage in a bitter rivalry that leads to tragic consequences.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/9f/The_Prestige_poster.jpg"
        },

        // Fantasy
        {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            genre: "Fantasy",
            releaseYear: 2001,
            description: "A hobbit and his companions set out on a quest to destroy a powerful ring.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/9e/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring.jpg"
        },
        {
            title: "Harry Potter and the Sorcerer's Stone",
            genre: "Fantasy",
            releaseYear: 2001,
            description: "An orphaned boy discovers he is a wizard and attends a magical school.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e3/Harry_Potter_and_the_Sorcerer%27s_Stone_poster.jpg"
        },
        {
            title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
            genre: "Fantasy",
            releaseYear: 2005,
            description: "Four siblings discover a magical land ruled by a wicked queen.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3a/The_Chronicles_of_Narnia_The_Lion_the_Witch_and_the_Wardrobe_poster.jpg"
        },
        {
            title: "Pan's Labyrinth",
            genre: "Fantasy",
            releaseYear: 2006,
            description: "A young girl in post-Civil War Spain discovers a mythical labyrinth.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/Pans_Labyrinth.jpg"
        },
        {
            title: "Spirited Away",
            genre: "Fantasy",
            releaseYear: 2001,
            description: "A young girl gets trapped in a mysterious spirit world and must find her way back.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/30/Spirited_Away_poster.jpg"
        },
        {
            title: "The Wizard of Oz",
            genre: "Fantasy",
            releaseYear: 1939,
            description: "A girl is swept away to a magical land and embarks on a journey to return home.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/Wizard_of_Oz_Poster.jpg"
        },
        {
            title: "The Shape of Water",
            genre: "Fantasy",
            releaseYear: 2017,
            description: "A mute woman forms a unique relationship with a mysterious aquatic creature.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c3/The_Shape_of_Water.png"
        },
        {
            title: "Stardust",
            genre: "Fantasy",
            releaseYear: 2007,
            description: "A young man ventures into a magical realm to retrieve a fallen star.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b2/Stardust_poster.jpg"
        },
        {
            title: "The Princess Bride",
            genre: "Fantasy",
            releaseYear: 1987,
            description: "A young woman is kidnapped, and her true love must rescue her.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/9b/The_Princess_Bride.jpg"
        },
        {
            title: "The NeverEnding Story",
            genre: "Fantasy",
            releaseYear: 1984,
            description: "A boy discovers a magical book that tells a story about a young warrior's quest.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/63/The_NeverEnding_Story_Poster.jpg"
        },
        {
            title: "Labyrinth",
            genre: "Fantasy",
            releaseYear: 1986,
            description: "A young girl must navigate a labyrinth to save her baby brother from a goblin king.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4f/Labyrinth_%281986_film%29_poster.jpg"
        },
        {
            title: "Big Fish",
            genre: "Fantasy",
            releaseYear: 2003,
            description: "A man recounts his fantastical life stories to his estranged son.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4f/Big_Fish_poster.jpg"
        },
        {
            title: "The Golden Compass",
            genre: "Fantasy",
            releaseYear: 2007,
            description: "A young girl journeys to the Arctic to save her kidnapped friend and uncover a sinister plot.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d5/The_Golden_Compass_poster.jpg"
        },
        {
            title: "The Secret of NIMH",
            genre: "Fantasy",
            releaseYear: 1982,
            description: "A field mouse must save her family from a farmer’s plow with the help of a society of genetically modified rats.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/54/The_Secret_of_NIMH.jpg"
        },
        {
            title: "Fantastic Beasts and Where to Find Them",
            genre: "Fantasy",
            releaseYear: 2016,
            description: "In the wizarding world, a magical zoologist discovers and captures magical creatures.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c5/Fantastic_Beasts_and_Where_to_Find_Them_poster.jpg"
        },
        {
            title: "Bridge to Terabithia",
            genre: "Fantasy",
            releaseYear: 2007,
            description: "Two friends create a magical kingdom in the forest to escape reality.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4f/Bridge_to_Terabithia_poster.jpg"
        },
        {
            title: "A Monster Calls",
            genre: "Fantasy",
            releaseYear: 2016,
            description: "A young boy befriends a tree monster who helps him cope with his mother's illness.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5c/A_Monster_Calls_poster.jpg"
        },
        {
            title: "Eragon",
            genre: "Fantasy",
            releaseYear: 2006,
            description: "A farm boy discovers a dragon egg and becomes a Dragon Rider to fight an evil king.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0e/Eragon_poster.jpg"
        },
        {
            title: "Percy Jackson & the Olympians: The Lightning Thief",
            genre: "Fantasy",
            releaseYear: 2010,
            description: "A boy discovers he is the son of Poseidon and embarks on a quest to prevent a war among the gods.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d8/Percy_Jackson_%26_the_Olympians_The_Lightning_Thief_poster.jpg"
        },
        {
            title: "The Hobbit: An Unexpected Journey",
            genre: "Fantasy",
            releaseYear: 2012,
            description: "A hobbit is swept into an epic quest to reclaim a lost kingdom from a dragon.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3e/The_Hobbit_An_Unexpected_Journey.jpg"
        },
        {
            title: "The BFG",
            genre: "Fantasy",
            releaseYear: 2016,
            description: "A young girl befriends a friendly giant and embarks on an adventure to stop the other giants.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/57/The_BFG_poster.jpg"
        },

        // Romance
        {
            title: "The Notebook",
            genre: "Romance",
            releaseYear: 2004,
            description: "A young couple falls in love during the summer of 1940.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/50/The_Notebook.jpg"
        },
        {
            title: "Titanic",
            genre: "Romance",
            releaseYear: 1997,
            description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/22/Titanic_poster.jpg"
        },
        {
            title: "Pride and Prejudice",
            genre: "Romance",
            releaseYear: 2005,
            description: "A spirited young woman matches wits with a wealthy, reserved gentleman.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/67/Pride_and_Prejudice_poster.jpg"
        },
        {
            title: "La La Land",
            genre: "Romance",
            releaseYear: 2016,
            description: "A jazz musician and an aspiring actress fall in love in Los Angeles.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a0/La_La_Land_poster.jpg"
        },
        {
            title: "The Fault in Our Stars",
            genre: "Romance",
            releaseYear: 2014,
            description: "Two teenagers with cancer fall in love after meeting in a support group.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5c/The_Fault_in_Our_Stars_poster.jpg"
        },
        {
            title: "A Walk to Remember",
            genre: "Romance",
            releaseYear: 2002,
            description: "A popular high school student falls in love with a quiet, religious girl.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/23/A_Walk_to_Remember_poster.jpg"
        },
        {
            title: "Notting Hill",
            genre: "Romance",
            releaseYear: 1999,
            description: "A bookseller meets a famous actress, and their worlds collide.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e6/Notting_Hill.jpg"
        },
        {
            title: "10 Things I Hate About You",
            genre: "Romance",
            releaseYear: 1999,
            description: "A modern adaptation of Shakespeare's 'The Taming of the Shrew.'",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/44/10_Things_I_Hate_About_You.jpg"
        },
        {
            title: "When Harry Met Sally...",
            genre: "Romance",
            releaseYear: 1989,
            description: "A man and a woman meet over the years and ponder if men and women can just be friends.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/67/When_Harry_Met_Sally.jpg"
        },
        {
            title: "Crazy, Stupid, Love.",
            genre: "Romance",
            releaseYear: 2011,
            description: "A man learns to navigate dating life after his marriage falls apart.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/24/Crazy_Stupid_Love_poster.jpg"
        },
        {
            title: "Silver Linings Playbook",
            genre: "Romance",
            releaseYear: 2012,
            description: "Two troubled people develop a bond while trying to get their lives back on track.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/8b/Silver_Linings_Playbook_poster.jpg"
        },
        {
            title: "To All the Boys I've Loved Before",
            genre: "Romance",
            releaseYear: 2018,
            description: "A teenage girl's secret love letters are exposed, creating chaos in her love life.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4e/To_All_the_Boys_I%27ve_Loved_Before_poster.jpg"
        },
        {
            title: "Love Actually",
            genre: "Romance",
            releaseYear: 2003,
            description: "Multiple love stories interweave during the Christmas season in London.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b4/Love_Actually.jpg"
        },
        {
            title: "Before Sunrise",
            genre: "Romance",
            releaseYear: 1995,
            description: "Two strangers meet on a train and spend a night together in Vienna.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/95/Before_Sunrise_poster.jpg"
        },
        {
            title: "The Proposal",
            genre: "Romance",
            releaseYear: 2009,
            description: "A Canadian book editor convinces her assistant to marry her to avoid deportation.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3b/The_Proposal_poster.jpg"
        },
        {
            title: "The Time Traveler's Wife",
            genre: "Romance",
            releaseYear: 2009,
            description: "A love story about a man with a genetic disorder that causes him to time travel.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/55/The_Time_Traveler%27s_Wife_poster.jpg"
        },
        {
            title: "500 Days of Summer",
            genre: "Romance",
            releaseYear: 2009,
            description: "A man reflects on his failed relationship with a woman who doesn't believe in love.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/61/500_Days_of_Summer_poster.jpg"
        },
        {
            title: "Eat Pray Love",
            genre: "Romance",
            releaseYear: 2010,
            description: "A woman embarks on a journey of self-discovery across Italy, India, and Indonesia.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a2/Eat_Pray_Love_poster.jpg"
        },
        {
            title: "The Vow",
            genre: "Romance",
            releaseYear: 2012,
            description: "A man tries to win back his wife after a tragic accident erases her memory.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4e/The_Vow_poster.jpg"
        },
        {
            title: "The Best of Me",
            genre: "Romance",
            releaseYear: 2014,
            description: "Two former lovers reunite after many years apart.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/41/The_Best_of_Me_poster.jpg"
        },
        {
            title: "The Lucky One",
            genre: "Romance",
            releaseYear: 2012,
            description: "A Marine returns home from Iraq and searches for a woman whose photo he believes brought him luck.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/58/The_Lucky_One_poster.jpg"
        },
        {
            title: "Begin Again",
            genre: "Romance",
            releaseYear: 2013,
            description: "A chance encounter between a disgraced music executive and a young singer changes both their lives.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/20/Begin_Again_poster.jpg"
        },

        // Thriller
        {
            title: "Se7en",
            genre: "Thriller",
            releaseYear: 1995,
            description: "Two detectives hunt a serial killer who uses the seven deadly sins as motives.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/89/Se7en.jpg"
        },
        {
            title: "Gone Girl",
            genre: "Thriller",
            releaseYear: 2014,
            description: "A man becomes the prime suspect in the disappearance of his wife.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/f/f9/Gone_Girl_Poster.jpg"
        },
        {
            title: "Fight Club",
            genre: "Thriller",
            releaseYear: 1999,
            description: "An insomniac office worker forms an underground fight club.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/Fight_Club_poster.jpg"
        },
        {
            title: "The Silence of the Lambs",
            genre: "Thriller",
            releaseYear: 1991,
            description: "A young FBI cadet seeks the help of an incarcerated cannibalistic serial killer to catch another killer.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/89/Thesilenceofthelambs.jpg"
        },
        {
            title: "Prisoners",
            genre: "Thriller",
            releaseYear: 2013,
            description: "A father's desperation to find his missing daughter leads him to take matters into his own hands.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c3/Prisoners_%282013_film%29_poster.jpg"
        },
        {
            title: "The Girl with the Dragon Tattoo",
            genre: "Thriller",
            releaseYear: 2011,
            description: "A journalist and a hacker uncover dark secrets while investigating a missing person's case.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c9/The_Girl_with_the_Dragon_Tattoo_poster.jpg"
        },
        {
            title: "Shutter Island",
            genre: "Thriller",
            releaseYear: 2010,
            description: "A U.S. Marshal investigates the disappearance of a patient from a mental institution.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3e/Shutter_Island_poster.jpg"
        },
        {
            title: "Zodiac",
            genre: "Thriller",
            releaseYear: 2007,
            description: "A cartoonist becomes obsessed with the Zodiac killer who taunts police with letters.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/Zodiac_poster.jpg"
        },
        {
            title: "The Sixth Sense",
            genre: "Thriller",
            releaseYear: 1999,
            description: "A young boy who can see and communicate with the dead seeks the help of a child psychologist.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5c/Sixth_sense.jpg"
        },
        {
            title: "Memento",
            genre: "Thriller",
            releaseYear: 2000,
            description: "A man suffering from short-term memory loss attempts to track down his wife's murderer.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/6e/Memento_poster.jpg"
        },
        {
            title: "Oldboy",
            genre: "Thriller",
            releaseYear: 2003,
            description: "A man is imprisoned for 15 years and then released, and he seeks revenge on his captor.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/87/Oldboy_%282003_film%29.jpg"
        },
        {
            title: "No Country for Old Men",
            genre: "Thriller",
            releaseYear: 2007,
            description: "A hunter stumbles upon a drug deal gone wrong and takes a suitcase full of money, triggering a violent pursuit.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/cf/No_Country_for_Old_Men_poster.jpg"
        },
        {
            title: "Gone Baby Gone",
            genre: "Thriller",
            releaseYear: 2007,
            description: "Two private investigators are hired to find a missing girl in Boston.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a6/Gone_Baby_Gone_poster.jpg"
        },
        {
            title: "The Others",
            genre: "Thriller",
            releaseYear: 2001,
            description: "A woman living in a dark, old house with her two photosensitive children becomes convinced that her home is haunted.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e8/The_Others_poster.jpg"
        },
        {
            title: "Black Swan",
            genre: "Thriller",
            releaseYear: 2010,
            description: "A dancer's obsession with perfection leads her to dark places in her mind.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a0/Black_Swan_poster.jpg"
        },
        {
            title: "Cape Fear",
            genre: "Thriller",
            releaseYear: 1991,
            description: "A convicted rapist seeks revenge on the lawyer who originally put him away.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/1b/Cape_Fear_%281991_film%29_poster.jpg"
        },
        {
            title: "The Machinist",
            genre: "Thriller",
            releaseYear: 2004,
            description: "An industrial worker who hasn't slept in a year begins to doubt his own sanity.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/87/The_Machinist_poster.jpg"
        },
        {
            title: "Insomnia",
            genre: "Thriller",
            releaseYear: 2002,
            description: "A Los Angeles detective is dispatched to a northern town where the sun doesn't set to investigate a methodical murder.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/31/Insomnia_%282002_film%29_poster.jpg"
        },
        {
            title: "The Game",
            genre: "Thriller",
            releaseYear: 1997,
            description: "A wealthy banker is given an opportunity to participate in a game that integrates with his real life in unexpected ways.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/51/The_Game_%281997_film%29_poster.jpg"
        },
        {
            title: "Panic Room",
            genre: "Thriller",
            releaseYear: 2002,
            description: "A divorced woman and her daughter are trapped in their panic room by burglars.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/Panic_Room_poster.jpg"
        },
        {
            title: "The Invisible Man",
            genre: "Thriller",
            releaseYear: 2020,
            description: "A woman believes she is being hunted by her abusive ex-boyfriend, who has found a way to become invisible.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Invisible_Man_%282020_film%29_poster.jpg"
        },

        // Mystery
        {
            title: "Knives Out",
            genre: "Mystery",
            releaseYear: 2019,
            description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/6c/Knives_Out_poster.jpg"
        },
        {
            title: "Murder on the Orient Express",
            genre: "Mystery",
            releaseYear: 2017,
            description: "Famed detective Hercule Poirot investigates the murder of a wealthy passenger aboard the Orient Express.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d1/Murder_on_the_Orient_Express_%282017_film%29_poster.jpg"
        },
        {
            title: "The Girl with the Dragon Tattoo",
            genre: "Mystery",
            releaseYear: 2011,
            description: "A journalist and a hacker uncover dark secrets while investigating a missing person's case.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c9/The_Girl_with_the_Dragon_Tattoo_poster.jpg"
        },
        {
            title: "The Sixth Sense",
            genre: "Mystery",
            releaseYear: 1999,
            description: "A young boy who can see and communicate with the dead seeks the help of a child psychologist.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5c/Sixth_sense.jpg"
        },
        {
            title: "Gone Girl",
            genre: "Mystery",
            releaseYear: 2014,
            description: "A man becomes the prime suspect in the disappearance of his wife.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/f/f9/Gone_Girl_Poster.jpg"
        },
        {
            title: "Shutter Island",
            genre: "Mystery",
            releaseYear: 2010,
            description: "A U.S. Marshal investigates the disappearance of a patient from a mental institution.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3e/Shutter_Island_poster.jpg"
        },
        {
            title: "Chinatown",
            genre: "Mystery",
            releaseYear: 1974,
            description: "A private detective is hired to expose an adulterer but gets embroiled in a complex conspiracy.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/12/Chinatown_%281974_film%29.jpg"
        },
        {
            title: "The Others",
            genre: "Mystery",
            releaseYear: 2001,
            description: "A woman living in a dark, old house with her two photosensitive children becomes convinced that her home is haunted.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e8/The_Others_poster.jpg"
        },
        {
            title: "Se7en",
            genre: "Mystery",
            releaseYear: 1995,
            description: "Two detectives hunt a serial killer who uses the seven deadly sins as motives.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/89/Se7en.jpg"
        },
        {
            title: "The Prestige",
            genre: "Mystery",
            releaseYear: 2006,
            description: "Two magicians compete to create the ultimate stage illusion while sacrificing everything they have.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/87/The_Prestige_poster.jpg"
        },
        {
            title: "Prisoners",
            genre: "Mystery",
            releaseYear: 2013,
            description: "A father's desperation to find his missing daughter leads him to take matters into his own hands.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c3/Prisoners_%282013_film%29_poster.jpg"
        },
        {
            title: "The Maltese Falcon",
            genre: "Mystery",
            releaseYear: 1941,
            description: "A private detective takes on a case that involves him with three eccentric criminals and their quest for a priceless statuette.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0e/Maltese_falcon.jpg"
        },
        {
            title: "The Vanishing",
            genre: "Mystery",
            releaseYear: 1988,
            description: "A man searches for his girlfriend after she disappears without a trace during a trip.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b1/The_Vanishing_%281988_film%29_poster.jpg"
        },
        {
            title: "The Usual Suspects",
            genre: "Mystery",
            releaseYear: 1995,
            description: "A sole survivor tells the twisted story of a brutal heist and the events that led to it.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4d/Usual_suspects_ver2.jpg"
        },
        {
            title: "Body of Lies",
            genre: "Mystery",
            releaseYear: 2008,
            description: "A CIA operative is tasked with infiltrating a terrorist organization in the Middle East.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d8/Body_of_Lies_poster.jpg"
        },
        {
            title: "The Secret in Their Eyes",
            genre: "Mystery",
            releaseYear: 2009,
            description: "A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/ad/The_Secret_in_Their_Eyes.jpg"
        },
        {
            title: "The Invisible Man",
            genre: "Mystery",
            releaseYear: 2020,
            description: "A woman believes she is being hunted by her abusive ex-boyfriend, who has found a way to become invisible.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Invisible_Man_%282020_film%29_poster.jpg"
        },
        {
            title: "Atonement",
            genre: "Mystery",
            releaseYear: 2007,
            description: "A young girl makes a false accusation that changes the lives of everyone involved.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c6/Atonement_poster.jpg"
        },
        {
            title: "Angel Heart",
            genre: "Mystery",
            releaseYear: 1987,
            description: "A private investigator is hired to track down a missing person, but things take a dark turn.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a6/Angel_Heart_poster.jpg"
        },
        {
            title: "The Boy Next Door",
            genre: "Mystery",
            releaseYear: 2015,
            description: "A divorced woman falls for a younger man, but soon discovers he has a dark side.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Boy_Next_Door_poster.jpg"
        },
        {
            title: "The Witch",
            genre: "Mystery",
            releaseYear: 2015,
            description: "A family in 1630s New England is torn apart by the forces of witchcraft and possession.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/26/The_Witch_poster.jpg"
        },
        {
            title: "Fractured",
            genre: "Mystery",
            releaseYear: 2019,
            description: "A man searches for his missing wife and daughter after they disappear in a hospital.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/1d/Fractured_poster.jpg"
        },

        // Documentary
        {
            title: "13th",
            genre: "Documentary",
            releaseYear: 2016,
            description: "An in-depth look at the prison system in the United States and how it reveals the nation's history of racial inequality.",
            rating: "TV-MA",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0c/13th_%282016_film%29.png"
        },
        {
            title: "Won't You Be My Neighbor?",
            genre: "Documentary",
            releaseYear: 2018,
            description: "An exploration of the life and legacy of Fred Rogers, the beloved host of the popular children's television show, Mister Rogers' Neighborhood.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/38/Wont_You_Be_My_Neighbor_poster.jpg"
        },
        {
            title: "The Act of Killing",
            genre: "Documentary",
            releaseYear: 2012,
            description: "Former Indonesian death squad leaders reenact their real-life mass killings in whatever cinematic genres they wish.",
            rating: "NR",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/14/The_Act_of_Killing_poster.jpg"
        },
        {
            title: "Inside Job",
            genre: "Documentary",
            releaseYear: 2010,
            description: "A comprehensive analysis of the global financial crisis of 2008, which cost trillions of dollars and millions of jobs.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3c/Inside_Job_poster.jpg"
        },
        {
            title: "Blackfish",
            genre: "Documentary",
            releaseYear: 2013,
            description: "A documentary following the controversial captivity of killer whales, and its dangers for both humans and whales.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d6/Blackfish_poster.jpg"
        },
        {
            title: "Jiro Dreams of Sushi",
            genre: "Documentary",
            releaseYear: 2011,
            description: "Follows Jiro Ono, an esteemed sushi chef, and his relentless pursuit of perfection in his craft.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e8/Jiro_Dreams_of_Sushi_poster.jpg"
        },
        {
            title: "The Fog of War",
            genre: "Documentary",
            releaseYear: 2003,
            description: "A documentary on the complexities of war through the experiences of former U.S. Secretary of Defense, Robert S. McNamara.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/73/The_Fog_of_War_poster.jpg"
        },
        {
            title: "Making a Murderer",
            genre: "Documentary",
            releaseYear: 2015,
            description: "An examination of the 2007 case of Steven Avery, who was exonerated after serving 18 years for a wrongful conviction.",
            rating: "TV-14",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/bf/Making_a_Murderer.jpg"
        },
        {
            title: "The Social Dilemma",
            genre: "Documentary",
            releaseYear: 2020,
            description: "Explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/ae/The_Social_Dilemma_poster.jpg"
        },
        {
            title: "Exit Through the Gift Shop",
            genre: "Documentary",
            releaseYear: 2010,
            description: "A look at street art and the story of Thierry Guetta, a French immigrant and amateur filmmaker.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/87/Exit_Through_the_Gift_Shop.jpg"
        },
        {
            title: "Amy",
            genre: "Documentary",
            releaseYear: 2015,
            description: "A documentary about the life and career of British singer-songwriter Amy Winehouse.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/27/Amy_film_poster.jpg"
        },
        {
            title: "Won't You Be My Neighbor?",
            genre: "Documentary",
            releaseYear: 2018,
            description: "An exploration of the life and legacy of Fred Rogers, the beloved host of the popular children's television show, Mister Rogers' Neighborhood.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/38/Wont_You_Be_My_Neighbor_poster.jpg"
        },
        {
            title: "Food, Inc.",
            genre: "Documentary",
            releaseYear: 2008,
            description: "Examines corporate farming in the United States, highlighting the food industry and its impact on health and the environment.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/7c/Food_Inc_poster.jpg"
        },
        {
            title: "The Keepers",
            genre: "Documentary",
            releaseYear: 2017,
            description: "A nun's unsolved murder and the horrific secrets and pain that linger nearly five decades later.",
            rating: "TV-MA",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a3/The_Keepers.jpg"
        },
        {
            title: "The Imposter",
            genre: "Documentary",
            releaseYear: 2012,
            description: "A young Frenchman cons his way into a Texas family’s home after disappearing for three years.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Imposter_poster.jpg"
        },
        {
            title: "The Act of Killing",
            genre: "Documentary",
            releaseYear: 2012,
            description: "Former Indonesian death squad leaders reenact their real-life mass killings in whatever cinematic genres they wish.",
            rating: "NR",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/14/The_Act_of_Killing_poster.jpg"
        },
        {
            title: "Icarus",
            genre: "Documentary",
            releaseYear: 2017,
            description: "A filmmaker investigates the doping scandal in sports and the dark world of performance-enhancing drugs.",
            rating: "TV-MA",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5a/Icarus_poster.jpg"
        },
        {
            title: "The Hunting Ground",
            genre: "Documentary",
            releaseYear: 2015,
            description: "A documentary that examines the epidemic of sexual assault on college campuses in the United States.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Hunting_Ground_poster.jpg"
        },
        {
            title: "Planet Earth II",
            genre: "Documentary",
            releaseYear: 2016,
            description: "A sequel to the award-winning documentary series, exploring the beauty and diversity of life on Earth.",
            rating: "TV-PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c7/Planet_Earth_II.jpg"
        },
        {
            title: "Cameraperson",
            genre: "Documentary",
            releaseYear: 2016,
            description: "A collection of autobiographical fragments, drawing from a decade's worth of footage shot by the director.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d0/Cameraperson_poster.jpg"
        },
        {
            title: "The Great Hack",
            genre: "Documentary",
            releaseYear: 2019,
            description: "Explores the dark side of social media and the data-driven campaign strategies that influenced the 2016 election.",
            rating: "TV-MA",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/56/The_Great_Hack_poster.jpg"
        },
        {
            title: "Grizzly Man",
            genre: "Documentary",
            releaseYear: 2005,
            description: "The life and death of bear enthusiast Timothy Treadwell, who lived among grizzly bears in Alaska.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/41/Grizzly_Man_poster.jpg"
        },

        // Animation
        {
            title: "Toy Story",
            genre: "Animation",
            releaseYear: 1995,
            description: "A group of toys comes to life and must navigate the challenges of their owner's growing up.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg"
        },
        {
            title: "Finding Nemo",
            genre: "Animation",
            releaseYear: 2003,
            description: "A clownfish named Marlin teams up with a regal blue tang named Dory to find his abducted son, Nemo.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/28/Finding_Nemo.jpg"
        },
        {
            title: "The Lion King",
            genre: "Animation",
            releaseYear: 1994,
            description: "The journey of a lion cub named Simba as he struggles to find his place in the Circle of Life.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3d/TheLionKing-2019.jpg"
        },
        {
            title: "Shrek",
            genre: "Animation",
            releaseYear: 2001,
            description: "An ogre named Shrek embarks on a quest to rescue Princess Fiona and discovers love along the way.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3e/Shrek_The_Third.jpg"
        },
        {
            title: "Frozen",
            genre: "Animation",
            releaseYear: 2013,
            description: "Two sisters, Elsa and Anna, must work together to save their kingdom from eternal winter.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_II_poster.jpg"
        },
        {
            title: "Spirited Away",
            genre: "Animation",
            releaseYear: 2001,
            description: "A young girl becomes trapped in a mysterious and magical world, where she must save her parents.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/30/Spirited_Away_poster.jpg"
        },
        {
            title: "Inside Out",
            genre: "Animation",
            releaseYear: 2015,
            description: "Inside the mind of a young girl, five emotions try to navigate her experiences after she moves to a new city.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/69/Inside_Out.jpg"
        },
        {
            title: "Zootopia",
            genre: "Animation",
            releaseYear: 2016,
            description: "In a city of anthropomorphic animals, a rabbit police officer and a cynical con artist fox must work together.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/93/Zootopia.jpg"
        },
        {
            title: "Up",
            genre: "Animation",
            releaseYear: 2009,
            description: "A widowed man fulfills his dream of adventure by tying thousands of balloons to his house and flying to South America.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.png"
        },
        {
            title: "Kung Fu Panda",
            genre: "Animation",
            releaseYear: 2008,
            description: "A clumsy panda is unexpectedly chosen to fulfill an ancient prophecy and become a kung fu hero.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/05/Kung_Fu_Panda.jpg"
        },
        {
            title: "WALL-E",
            genre: "Animation",
            releaseYear: 2008,
            description: "A small waste-collecting robot embarks on a space journey that will ultimately decide the fate of mankind.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b0/WALL-Eposter.jpg"
        },
        {
            title: "The Incredibles",
            genre: "Animation",
            releaseYear: 2004,
            description: "A family of superheroes must come together to save the world while dealing with everyday life.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/20/The_Incredibles.jpg"
        },
        {
            title: "How to Train Your Dragon",
            genre: "Animation",
            releaseYear: 2010,
            description: "A young Viking befriends a dragon, leading to a revolution in the way his people view these creatures.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/95/How_to_Train_Your_Dragon_poster.jpg"
        },
        {
            title: "The Lego Movie",
            genre: "Animation",
            releaseYear: 2014,
            description: "An ordinary LEGO figure is mistakenly identified as the key to saving the world and must team up with a group of heroes.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/87/The_Lego_Movie.jpg"
        },
        {
            title: "Coco",
            genre: "Animation",
            releaseYear: 2017,
            description: "A young boy named Miguel embarks on a journey to the Land of the Dead to unlock his family's history.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5a/Coco_%282017_film%29_poster.jpg"
        },
        {
            title: "Ratatouille",
            genre: "Animation",
            releaseYear: 2007,
            description: "A rat named Remy dreams of becoming a chef in a Paris restaurant and forms an unlikely alliance with a young kitchen worker.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/50/Ratatouille_poster.jpg"
        },
        {
            title: "Monsters, Inc.",
            genre: "Animation",
            releaseYear: 2001,
            description: "In a world where monsters generate energy by scaring children, two monsters must rescue a little girl who enters their world.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d6/Monsters_Inc.jpg"
        },
        {
            title: "The Nightmare Before Christmas",
            genre: "Animation",
            releaseYear: 1993,
            description: "The King of Halloween Town discovers Christmas Town and decides to take over the holiday.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/28/Nightmare_before_christmas.jpg"
        },
        {
            title: "Despicable Me",
            genre: "Animation",
            releaseYear: 2010,
            description: "A supervillain adopts three orphaned girls and begins to change his perspective on life.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/39/Despicable_Me_poster.jpg"
        },
        {
            title: "Hotel Transylvania",
            genre: "Animation",
            releaseYear: 2012,
            description: "Count Dracula runs a lavish resort for monsters, but things go awry when a human stumbles upon the hotel.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/56/Hotel_Transylvania_poster.jpg"
        },
        {
            title: "Big Hero 6",
            genre: "Animation",
            releaseYear: 2014,
            description: "A young robotics prodigy and his inflatable healthcare companion form a superhero team to combat a mysterious villain.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e0/Big_Hero_6_poster.jpg"
        },
        {
            title: "The Croods",
            genre: "Animation",
            releaseYear: 2013,
            description: "A prehistoric family embarks on a journey through a fantastical world after their cave is destroyed.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4b/The_Croods_poster.jpg"
        },
        {
            title: "Finding Dory",
            genre: "Animation",
            releaseYear: 2016,
            description: "Dory, the forgetful blue tang fish, sets off on a journey to find her long-lost parents.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c9/Finding_Dory.jpg"
        },
        {
            title: "Wallace & Gromit: The Curse of the Were-Rabbit",
            genre: "Animation",
            releaseYear: 2005,
            description: "Wallace and his dog Gromit set out to discover who is sabotaging the annual vegetable competition.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e6/Wallace_%26_Gromit_The_Curse_of_the_Were-Rabbit_poster.jpg"
        },

        // Adventure
        {
            title: "Indiana Jones and the Raiders of the Lost Ark",
            genre: "Adventure",
            releaseYear: 1981,
            description: "An archeologist embarks on a quest to find the Ark of the Covenant before the Nazis can.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/23/Raiders_of_the_Lost_Ark_poster.jpg"
        },
        {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            genre: "Adventure",
            releaseYear: 2001,
            description: "A young hobbit named Frodo Baggins sets out on a journey to destroy a powerful ring.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring.jpg"
        },
        {
            title: "Jurassic Park",
            genre: "Adventure",
            releaseYear: 1993,
            description: "A theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/eb/Jurassic_Park_Poster.jpg"
        },
        {
            title: "Pirates of the Caribbean: The Curse of the Black Pearl",
            genre: "Adventure",
            releaseYear: 2003,
            description: "Captain Jack Sparrow and a blacksmith team up to rescue a kidnapped woman from pirates.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/68/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.jpg"
        },
        {
            title: "The Revenant",
            genre: "Adventure",
            releaseYear: 2015,
            description: "A frontiersman on a quest for survival after being left for dead by his hunting team.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/67/The_Revenant_poster.jpg"
        },
        {
            title: "The Hobbit: An Unexpected Journey",
            genre: "Adventure",
            releaseYear: 2012,
            description: "Bilbo Baggins sets out on an epic quest to help a group of dwarves reclaim their homeland.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/7f/The_Hobbit_An_Unexpected_Journey.jpg"
        },
        {
            title: "Star Wars: Episode IV - A New Hope",
            genre: "Adventure",
            releaseYear: 1977,
            description: "A young farmer joins forces with a group of rebels to save the galaxy from an evil empire.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg"
        },
        {
            title: "Avatar",
            genre: "Adventure",
            releaseYear: 2009,
            description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b9/Avatar_2012_film_poster.jpg"
        },
        {
            title: "The Princess Bride",
            genre: "Adventure",
            releaseYear: 1987,
            description: "A young woman is kidnapped and a farmhand must rescue her from an evil prince.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4e/The_Princess_Bride_Poster.jpg"
        },
        {
            title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
            genre: "Adventure",
            releaseYear: 2005,
            description: "Four siblings enter a magical land and must help a lion defeat the White Witch.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3b/The_Chronicles_of_Narnia_The_Lion_the_Witch_and_the_Wardrobe.jpg"
        },
        {
            title: "Jumanji: Welcome to the Jungle",
            genre: "Adventure",
            releaseYear: 2017,
            description: "Four teenagers are sucked into a magical video game and must work together to escape.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/99/Jumanji_Welcome_to_the_Jungle_poster.jpg"
        },
        {
            title: "Life of Pi",
            genre: "Adventure",
            releaseYear: 2012,
            description: "A young man survives a disaster at sea and is stranded on a lifeboat with a Bengal tiger.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/21/Life_of_Pi_poster.jpg"
        },
        {
            title: "The Secret Life of Walter Mitty",
            genre: "Adventure",
            releaseYear: 2013,
            description: "A daydreamer embarks on a global journey to find a missing photograph.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5f/The_Secret_Life_of_Walter_Mitty_poster.jpg"
        },
        {
            title: "National Treasure",
            genre: "Adventure",
            releaseYear: 2004,
            description: "A treasure hunter must decode clues to find a hidden treasure before a ruthless enemy.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/bf/National_Treasure_poster.jpg"
        },
        {
            title: "The Goonies",
            genre: "Adventure",
            releaseYear: 1985,
            description: "A group of kids sets out on an adventure to find a pirate's long-lost treasure.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Goonies.jpg"
        },
        {
            title: "Holes",
            genre: "Adventure",
            releaseYear: 2003,
            description: "A group of boys is sent to a juvenile detention camp where they dig holes to 'build character.'",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/71/Holes_movie_poster.jpg"
        },
        {
            title: "Mad Max: Fury Road",
            genre: "Adventure",
            releaseYear: 2015,
            description: "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrant.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c7/Mad_Max_Fury_Road.jpg"
        },
        {
            title: "The Maze Runner",
            genre: "Adventure",
            releaseYear: 2014,
            description: "A group of teenagers must navigate a dangerous maze to escape and discover the truth behind their situation.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/2c/The_Maze_Runner_poster.jpg"
        },
        {
            title: "Honey, I Shrunk the Kids",
            genre: "Adventure",
            releaseYear: 1989,
            description: "A scientist accidentally shrinks his kids to the size of insects and they must navigate their backyard.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d6/Honey_I_Shrunk_the_Kids.jpg"
        },
        {
            title: "Cloudy with a Chance of Meatballs",
            genre: "Adventure",
            releaseYear: 2009,
            description: "An inventor creates a machine that turns water into food, which leads to unexpected consequences.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e1/Cloudy_with_a_Chance_of_Meatballs_poster.jpg"
        },
        {
            title: "Tomb Raider",
            genre: "Adventure",
            releaseYear: 2018,
            description: "A young woman sets out to find her missing father and uncovers a mysterious island.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/ef/Tomb_Raider_2018_film_poster.jpg"
        },
        {
            title: "The Mummy",
            genre: "Adventure",
            releaseYear: 1999,
            description: "A group of adventurers accidentally awaken a cursed mummy while searching for treasure in Egypt.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/35/The_Mummy_%281999_film%29_poster.jpg"
        },
        {
            title: "The Time Machine",
            genre: "Adventure",
            releaseYear: 2002,
            description: "A Victorian inventor travels through time to save his fiancée and discovers the future of humanity.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a5/The_Time_Machine_2002_poster.jpg"
        },
        {
            title: "The BFG",
            genre: "Adventure",
            releaseYear: 2016,
            description: "A young girl befriends a giant and together they embark on an adventure to stop human-eating giants.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c9/The_BFG_%282016_film%29_poster.jpg"
        },

        // Musical
        {
            title: "The Sound of Music",
            genre: "Musical",
            releaseYear: 1965,
            description: "A woman leaves an Austrian convent to become a governess for a widowed naval captain's seven children.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3e/Sound_of_music.jpg"
        },
        {
            title: "La La Land",
            genre: "Musical",
            releaseYear: 2016,
            description: "A jazz musician and an aspiring actress fall in love but struggle to maintain their relationship amid their careers.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a6/La_La_Land_%282016_film%29.png"
        },
        {
            title: "Grease",
            genre: "Musical",
            releaseYear: 1978,
            description: "Teenagers Sandy and Danny fall in love, but their different social groups complicate their relationship.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5a/Greaseposter.jpg"
        },
        {
            title: "West Side Story",
            genre: "Musical",
            releaseYear: 1961,
            description: "Two teenagers from rival gangs fall in love in New York City.",
            rating: "Not Rated",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/39/West_Side_Story_poster.jpg"
        },
        {
            title: "Chicago",
            genre: "Musical",
            releaseYear: 2002,
            description: "Two murderesses find themselves on death row together and fight for fame, fortune, and freedom.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/6c/Chicago_2002_film_poster.jpg"
        },
        {
            title: "Mamma Mia!",
            genre: "Musical",
            releaseYear: 2008,
            description: "A young woman invites three men to her wedding, each of whom may be her father, based on her mother's diary.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a3/Mamma_Mia%21_poster.jpg"
        },
        {
            title: "Les Misérables",
            genre: "Musical",
            releaseYear: 2012,
            description: "In 19th century France, an ex-convict seeks redemption and revolution while being pursued by a relentless policeman.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4b/Les_Mis%C3%A9rables_%282012_film%29_poster.jpg"
        },
        {
            title: "The Greatest Showman",
            genre: "Musical",
            releaseYear: 2017,
            description: "Inspired by the story of P.T. Barnum, the film celebrates the birth of show business.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Greatest_Showman_poster.jpg"
        },
        {
            title: "Singing in the Rain",
            genre: "Musical",
            releaseYear: 1952,
            description: "A silent film production company transitions to sound films and the challenges that arise.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/99/Singin%27_in_the_Rain_poster.jpg"
        },
        {
            title: "Hairspray",
            genre: "Musical",
            releaseYear: 2007,
            description: "A plucky teenager fights for racial integration on a popular TV dance show in 1962 Baltimore.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/83/Hairspray_poster.jpg"
        },
        {
            title: "Fiddler on the Roof",
            genre: "Musical",
            releaseYear: 1971,
            description: "A Jewish peasant and his daughters navigate tradition and change in early 20th century Russia.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/48/Fiddler_on_the_Roof_poster.jpg"
        },
        {
            title: "Into the Woods",
            genre: "Musical",
            releaseYear: 2014,
            description: "A baker and his wife wish to have a child but must confront the consequences of their wishes.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/01/Into_the_Woods_poster.jpg"
        },
        {
            title: "The Phantom of the Opera",
            genre: "Musical",
            releaseYear: 2004,
            description: "A young soprano becomes the obsession of a mysterious phantom living beneath the Paris Opera House.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/eb/The_Phantom_of_the_Opera_%282004_film%29_poster.jpg"
        },
        {
            title: "Once",
            genre: "Musical",
            releaseYear: 2007,
            description: "A struggling musician and a flower seller form a deep connection through their shared love of music.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/05/Once_poster.jpg"
        },
        {
            title: "Dreamgirls",
            genre: "Musical",
            releaseYear: 2006,
            description: "A trio of female singers find fame and fortune, but struggle with the personal and professional challenges that arise.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/36/Dreamgirls_movie_poster.jpg"
        },
        {
            title: "A Star Is Born",
            genre: "Musical",
            releaseYear: 2018,
            description: "A musician helps a young singer find fame as his own career begins to fade.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4e/A_Star_Is_Born_%282018_film%29_poster.jpg"
        },
        {
            title: "The Producers",
            genre: "Musical",
            releaseYear: 2005,
            description: "A Broadway producer and an accountant come up with a get-rich-quick scheme by producing a surefire flop.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Producers_movie_poster.jpg"
        },
        {
            title: "Pitch Perfect",
            genre: "Musical",
            releaseYear: 2012,
            description: "A college freshman joins an all-girls a cappella group and helps them find their competitive edge.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e4/Pitch_Perfect_poster.jpg"
        },
        {
            title: "Yankee Doodle Dandy",
            genre: "Musical",
            releaseYear: 1942,
            description: "The life of George M. Cohan, a song and dance man who became a Broadway legend.",
            rating: "NR",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/12/Yankee_Doodle_Dandy_poster.jpg"
        },
        {
            title: "The Little Mermaid",
            genre: "Musical",
            releaseYear: 1989,
            description: "A mermaid princess makes a Faustian bargain with a sea witch in order to become human.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0a/The_Little_Mermaid_%28film%29.png"
        },

        // Western
        {
            title: "The Good, the Bad and the Ugly",
            genre: "Western",
            releaseYear: 1966,
            description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4f/Goodbadugly.jpg"
        },
        {
            title: "Unforgiven",
            genre: "Western",
            releaseYear: 1992,
            description: "A retired gunslinger reluctantly takes on one last job, seeking revenge for a brutal attack on a woman.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4b/Unforgiven_%281992_film%29_poster.jpg"
        },
        {
            title: "Django Unchained",
            genre: "Western",
            releaseYear: 2012,
            description: "A freed slave teams up with a bounty hunter to rescue his wife from a brutal plantation owner.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/8a/Django_Unchained_Poster.jpg"
        },
        {
            title: "True Grit",
            genre: "Western",
            releaseYear: 2010,
            description: "A stubborn teenager enlists the help of a tough U.S. Marshal to track down her father's murderer.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/27/True_Grit_poster.jpg"
        },
        {
            title: "The Searchers",
            genre: "Western",
            releaseYear: 1956,
            description: "A Civil War veteran spends years searching for his abducted niece, who was kidnapped by a Native American tribe.",
            rating: "NR",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0f/The_Searchers_poster.jpg"
        },
        {
            title: "Once Upon a Time in the West",
            genre: "Western",
            releaseYear: 1968,
            description: "A mysterious harmonica player teams up with a notorious outlaw to protect a widow from a ruthless assassin.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3a/Once_Upon_a_Time_in_the_West_poster.jpg"
        },
        {
            title: "Silverado",
            genre: "Western",
            releaseYear: 1985,
            description: "A group of misfits enters a town controlled by a corrupt sheriff and his ruthless brothers.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e6/Silverado_poster.jpg"
        },
        {
            title: "Tombstone",
            genre: "Western",
            releaseYear: 1993,
            description: "A retired lawman arrives in Tombstone, Arizona, to establish a peaceful life but is drawn into the legendary gunfight at the O.K. Corral.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e0/Tombstone_poster.jpg"
        },
        {
            title: "The Magnificent Seven",
            genre: "Western",
            releaseYear: 2016,
            description: "Seven gunfighters band together to protect a small town from a ruthless industrialist.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d0/The_Magnificent_Seven_poster.jpg"
        },
        {
            title: "3:10 to Yuma",
            genre: "Western",
            releaseYear: 2007,
            description: "A small-time rancher agrees to hold a captured outlaw who's awaiting a train to go to court in Yuma.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/41/3_10_to_Yuma_poster.jpg"
        },
        {
            title: "The Outlaw Josey Wales",
            genre: "Western",
            releaseYear: 1976,
            description: "A Missouri farmer joins a Confederate guerrilla unit and winds up on the run from the Union soldiers who killed his family.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b7/The_Outlaw_Josey_Wales_poster.jpg"
        },
        {
            title: "Butch Cassidy and the Sundance Kid",
            genre: "Western",
            releaseYear: 1969,
            description: "Two Western outlaws form a friendship and become legendary figures while on the run from law enforcement.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/1f/Butch_Cassidy_and_the_Sundance_Kid_poster.jpg"
        },
        {
            title: "The Assassination of Jesse James by the Coward Robert Ford",
            genre: "Western",
            releaseYear: 2007,
            description: "The film chronicles the last days of the legendary outlaw Jesse James and his murder by Robert Ford.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d1/Assassination_of_Jesse_James_poster.jpg"
        },
        {
            title: "High Noon",
            genre: "Western",
            releaseYear: 1952,
            description: "A town marshal, personally opposed to violence, must gather a posse to confront a gang of killers.",
            rating: "NR",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/52/High_noon_poster.jpg"
        },
        {
            title: "The Hateful Eight",
            genre: "Western",
            releaseYear: 2015,
            description: "Eight strangers seek refuge from a blizzard but soon discover that not all of them are who they claim to be.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/06/The_Hateful_Eight_poster.jpg"
        },
        {
            title: "True Grit",
            genre: "Western",
            releaseYear: 1969,
            description: "A stubborn young girl hires a tough U.S. Marshal to help her track down her father's murderer.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/6b/True_Grit_%281969_film%29_poster.jpg"
        },
        {
            title: "A Fistful of Dollars",
            genre: "Western",
            releaseYear: 1964,
            description: "A drifter arrives in a town divided by two rival families and plays them against each other.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/56/A_Fistful_of_Dollars.jpg"
        },
        {
            title: "Blazing Saddles",
            genre: "Western",
            releaseYear: 1974,
            description: "A town is threatened by a corrupt politician, and the governor appoints a black sheriff to help.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5c/Blazing_Saddles_poster.jpg"
        },
        {
            title: "The Revenant",
            genre: "Western",
            releaseYear: 2015,
            description: "A frontiersman on a quest for revenge against those who left him for dead in the wilderness.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/29/The_Revenant_poster.jpg"
        },
        {
            title: "The Quick and the Dead",
            genre: "Western",
            releaseYear: 1995,
            description: "A female gunslinger enters a quick-draw tournament to avenge her father's death.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Quick_and_the_Dead_poster.jpg"
        },

        // Biographical
        {
            title: "The Pursuit of Happyness",
            genre: "Biographical",
            releaseYear: 2006,
            description: "A struggling salesman takes custody of his son as he navigates his way through life.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/The_Pursuit_of_Happyness.jpg"
        },
        {
            title: "A Beautiful Mind",
            genre: "Biographical",
            releaseYear: 2001,
            description: "The true story of John Nash, a brilliant but asocial mathematician who develops paranoid schizophrenia.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/28/A_Beautiful_Mind_poster.jpg"
        },
        {
            title: "The Social Network",
            genre: "Biographical",
            releaseYear: 2010,
            description: "The story of the founding of Facebook and the legal battles that followed.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/6c/Social_network_film_poster.jpg"
        },
        {
            title: "Schindler's List",
            genre: "Biographical",
            releaseYear: 1993,
            description: "The story of Oskar Schindler, who saved more than a thousand Polish Jews during the Holocaust.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3d/Schindler%27s_List.jpg"
        },
        {
            title: "The Theory of Everything",
            genre: "Biographical",
            releaseYear: 2014,
            description: "A look at the relationship between the famous physicist Stephen Hawking and his wife.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e2/The_Theory_of_Everything.jpg"
        },
        {
            title: "Ray",
            genre: "Biographical",
            releaseYear: 2004,
            description: "The life and career of music legend Ray Charles.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/Ray_poster.jpg"
        },
        {
            title: "Walk the Line",
            genre: "Biographical",
            releaseYear: 2005,
            description: "A chronicle of country music legend Johnny Cash's life, focusing on his early years and his romance with June Carter.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/73/Walk_the_Line_poster.jpg"
        },
        {
            title: "Hidden Figures",
            genre: "Biographical",
            releaseYear: 2016,
            description: "The story of three African-American women mathematicians at NASA who were instrumental in launching astronaut John Glenn into orbit.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/03/Hidden_Figures_poster.jpg"
        },
        {
            title: "Gandhi",
            genre: "Biographical",
            releaseYear: 1982,
            description: "The life of Mahatma Gandhi, who led the nonviolent resistance movement against British rule in India.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/43/Gandhi_movie_poster.jpg"
        },
        {
            title: "The Imitation Game",
            genre: "Biographical",
            releaseYear: 2014,
            description: "The story of Alan Turing, who helped crack the Enigma code during World War II but was later persecuted for his sexuality.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c8/The_Imitation_Game_poster.jpg"
        },
        {
            title: "Bohemian Rhapsody",
            genre: "Biographical",
            releaseYear: 2018,
            description: "A chronicle of the years leading up to Queen's legendary performance at Live Aid in 1985.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3a/Bohemian_Rhapsody_poster.jpg"
        },
        {
            title: "12 Years a Slave",
            genre: "Biographical",
            releaseYear: 2013,
            description: "The true story of Solomon Northup, a free black man kidnapped and sold into slavery.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5c/12_Years_a_Slave_poster.jpg"
        },
        {
            title: "Frida",
            genre: "Biographical",
            releaseYear: 2002,
            description: "A biography of the painter Frida Kahlo, focusing on her art and turbulent relationship with Diego Rivera.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e8/Frida_poster.jpg"
        },
        {
            title: "Selma",
            genre: "Biographical",
            releaseYear: 2014,
            description: "The story of Martin Luther King Jr.'s campaign to secure equal voting rights via a march from Selma to Montgomery, Alabama.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b5/Selma_poster.jpg"
        },
        {
            title: "The King's Speech",
            genre: "Biographical",
            releaseYear: 2010,
            description: "The story of King George VI's effort to overcome his speech impediment with the help of a speech therapist.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4e/The_King%27s_Speech.jpg"
        },
        {
            title: "Rocketman",
            genre: "Biographical",
            releaseYear: 2019,
            description: "A musical fantasy about the fantastical human story of Elton John's breakthrough years.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/32/Rocketman_%28film%29.png"
        },
        {
            title: "American Sniper",
            genre: "Biographical",
            releaseYear: 2014,
            description: "The life of Chris Kyle, the most lethal sniper in U.S. military history.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b9/American_Sniper_poster.jpg"
        },
        {
            title: "The Aviator",
            genre: "Biographical",
            releaseYear: 2004,
            description: "A biopic about the legendary director and aviator Howard Hughes.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/55/The_Aviator_poster.jpg"
        },
        {
            title: "The Founder",
            genre: "Biographical",
            releaseYear: 2016,
            description: "The story of Ray Kroc, the man who turned McDonald's into one of the world's biggest fast-food chains.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/51/The_Founder_poster.jpg"
        },
        {
            title: "Jobs",
            genre: "Biographical",
            releaseYear: 2013,
            description: "A biographical drama about the life of Apple co-founder Steve Jobs.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d6/Jobs_%282013_film%29_poster.jpg"
        },
        {
            title: "The Greatest Showman",
            genre: "Biographical",
            releaseYear: 2017,
            description: "A musical inspired by the story of P.T. Barnum, who founded the circus that became the famous traveling Ringling Bros. and Barnum & Bailey Circus.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e9/The_Greatest_Showman_poster.jpg"
        },
        {
            title: "My All-American",
            genre: "Biographical",
            releaseYear: 2015,
            description: "The story of college football star Freddie Steinmark, who battled cancer while leading his team to victory.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c4/My_All_American_poster.jpg"
        },

        // Crime
        {
            title: "The Godfather",
            genre: "Crime",
            releaseYear: 1972,
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_V.png"
        },
        {
            title: "Goodfellas",
            genre: "Crime",
            releaseYear: 1990,
            description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/39/Goodfellas.jpg"
        },
        {
            title: "Pulp Fiction",
            genre: "Crime",
            releaseYear: 1994,
            description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/82/Pulp_Fiction_cover.jpg"
        },
        {
            title: "Scarface",
            genre: "Crime",
            releaseYear: 1983,
            description: "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/Scarfaceposter.jpg"
        },
        {
            title: "The Shawshank Redemption",
            genre: "Crime",
            releaseYear: 1994,
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
        },
        {
            title: "Se7en",
            genre: "Crime",
            releaseYear: 1995,
            description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his modus operandi.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/Se7en.jpg"
        },
        {
            title: "The Departed",
            genre: "Crime",
            releaseYear: 2006,
            description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/54/The_Departed.jpg"
        },
        {
            title: "Fight Club",
            genre: "Crime",
            releaseYear: 1999,
            description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/27/Fight_Club_%282019%29.jpg"
        },
        {
            title: "Trainspotting",
            genre: "Crime",
            releaseYear: 1996,
            description: "Mark Renton, a young man living in Edinburgh, Scotland, tries to choose life while being addicted to heroin.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/94/Trainspotting_ver1.jpg"
        },
        {
            title: "Casino",
            genre: "Crime",
            releaseYear: 1995,
            description: "A tale of greed, deception, money, power, and murder in Las Vegas.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/27/Casino_%281995_film%29_poster.jpg"
        },
        {
            title: "The Usual Suspects",
            genre: "Crime",
            releaseYear: 1995,
            description: "A sole survivor tells the police the twists and turns of his story involving international criminals and the infamous Keyser Söze.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3f/Usual_suspects.jpg"
        },
        {
            title: "City of God",
            genre: "Crime",
            releaseYear: 2002,
            description: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/8c/Cidade_de_Deus_poster.jpg"
        },
        {
            title: "The Silence of the Lambs",
            genre: "Crime",
            releaseYear: 1991,
            description: "A young FBI cadet must receive the help of an incarcerated and manipulative killer to catch another serial killer.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/59/Thesilenceofthelambs.jpg"
        },
        {
            title: "No Country for Old Men",
            genre: "Crime",
            releaseYear: 2007,
            description: "Violence escalates after a hunter stumbles upon a drug deal gone wrong and takes a suitcase of cash.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/7d/No_Country_for_Old_Men_poster.jpg"
        },
        {
            title: "American Gangster",
            genre: "Crime",
            releaseYear: 2007,
            description: "In the 1970s, a heroin dealer rises to power while being pursued by a dogged detective.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/2e/American_Gangster_poster.jpg"
        },
        {
            title: "Prisoners",
            genre: "Crime",
            releaseYear: 2013,
            description: "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/66/Prisoners_%282013_film%29_poster.jpg"
        },
        {
            title: "Scarface",
            genre: "Crime",
            releaseYear: 1983,
            description: "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/Scarfaceposter.jpg"
        },
        {
            title: "The Nice Guys",
            genre: "Crime",
            releaseYear: 2016,
            description: "In 1970s Los Angeles, a mismatched pair of private eyes investigate the disappearance of a teenage girl.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/09/The_Nice_Guys.jpg"
        },
        {
            title: "Gone Baby Gone",
            genre: "Crime",
            releaseYear: 2007,
            description: "Two private detectives are hired to find a missing girl in Boston.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d5/Gone_Baby_Gone_poster.jpg"
        },
        {
            title: "Zodiac",
            genre: "Crime",
            releaseYear: 2007,
            description: "A cartoonist becomes an amateur detective obsessed with tracking down the Zodiac killer.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/23/Zodiac_poster.jpg"
        },
        {
            title: "The French Connection",
            genre: "Crime",
            releaseYear: 1971,
            description: "A pair of NYC cops in the Narcotics Bureau stumble onto a drug smuggling job.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/16/French_connection.jpg"
        },
        {
            title: "Training Day",
            genre: "Crime",
            releaseYear: 2001,
            description: "A rookie cop spends his first day as a Los Angeles narcotics officer with a rogue detective.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/9b/Training_Day_poster.jpg"
        },

        // Family
        {
            title: "Coco",
            genre: "Family",
            releaseYear: 2017,
            description: "A young boy named Miguel dreams of becoming a musician and accidentally finds himself in the Land of the Dead.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/26/Coco_%282017_film%29.png"
        },
        {
            title: "The Peanuts Movie",
            genre: "Family",
            releaseYear: 2015,
            description: "Charlie Brown, Snoopy, Lucy, and the rest of the Peanuts gang embark on an adventure.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/06/The_Peanuts_Movie_poster.jpg"
        },
        {
            title: "Despicable Me",
            genre: "Family",
            releaseYear: 2010,
            description: "When a criminal mastermind adopts three orphaned girls, his life changes forever.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/39/Despicable_Me_poster.jpg"
        },
        {
            title: "The Secret Life of Pets",
            genre: "Family",
            releaseYear: 2016,
            description: "The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5e/The_Secret_Life_of_Pets.jpg"
        },
        {
            title: "How to Train Your Dragon",
            genre: "Family",
            releaseYear: 2010,
            description: "A young Viking befriends a dragon, which leads to an unlikely friendship that could change the fate of both their worlds.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/8f/How_to_Train_Your_Dragon_Poster.jpg"
        },
        {
            title: "The Muppets",
            genre: "Family",
            releaseYear: 2011,
            description: "A trio of fans must save the Muppets from a greedy oil tycoon who wants to destroy their studio.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/1a/The_Muppets_Poster.jpg"
        },
        {
            title: "Jumanji: Welcome to the Jungle",
            genre: "Family",
            releaseYear: 2017,
            description: "Four teenagers discover a magical video game that transports them into the game's jungle setting.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/f/fb/Jumanji_Welcome_to_the_Jungle.jpg"
        },
        {
            title: "Puss in Boots",
            genre: "Family",
            releaseYear: 2011,
            description: "The feline hero Puss in Boots sets out on a quest to find the mythical beans that will lead him to the goose that lays golden eggs.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e6/Puss_in_Boots_poster.jpg"
        },
        {
            title: "Cloudy with a Chance of Meatballs 2",
            genre: "Family",
            releaseYear: 2013,
            description: "Inventor Flint Lockwood returns to save the world from food-animal hybrids.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5d/Cloudy_with_a_Chance_of_Meatballs_2.jpg"
        },
        {
            title: "The Croods",
            genre: "Family",
            releaseYear: 2013,
            description: "A prehistoric family sets off on a journey through a dangerous landscape in search of a new home.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/64/The_Croods_poster.jpg"
        },
        {
            title: "Paddington",
            genre: "Family",
            releaseYear: 2014,
            description: "A young bear from Peru travels to London in search of a home and is adopted by a kindly family.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/1f/Paddington_poster.jpg"
        },
        {
            title: "The Lego Batman Movie",
            genre: "Family",
            releaseYear: 2017,
            description: "Batman must learn to work with others to save Gotham City from the Joker.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/63/The_Lego_Batman_Movie_poster.jpg"
        },
        {
            title: "Wonder Park",
            genre: "Family",
            releaseYear: 2019,
            description: "A young girl named June discovers a magical amusement park that she built in her imagination.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3e/Wonder_Park_poster.jpg"
        },
        {
            title: "Trolls",
            genre: "Family",
            releaseYear: 2016,
            description: "When their village is invaded by the Bergens, the happy Trolls must find a way to save their friends.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/73/Trolls_poster.jpg"
        },
        {
            title: "A Shaun the Sheep Movie",
            genre: "Family",
            releaseYear: 2015,
            description: "Shaun the Sheep and his friends embark on an adventure to rescue their farmer.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/47/A_Shaun_the_Sheep_Movie_poster.jpg"
        },
        {
            title: "The Emoji Movie",
            genre: "Family",
            releaseYear: 2017,
            description: "In a digital city, the Emojis live inside a smartphone and go on an adventure to find their purpose.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4e/The_Emoji_Movie_poster.jpg"
        },
        {
            title: "Spirit: Stallion of the Cimarron",
            genre: "Family",
            releaseYear: 2002,
            description: "A wild mustang fights for his freedom and the freedom of his herd.",
            rating: "G",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c5/Spirit_stallion_of_the_cimarron.jpg"
        },
        {
            title: "Home",
            genre: "Family",
            releaseYear: 2015,
            description: "An alien on the run from his own people lands on Earth and befriends a girl who is trying to find her mother.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a7/Home_2015_film_poster.jpg"
        },
        {
            title: "The Nut Job",
            genre: "Family",
            releaseYear: 2014,
            description: "A squirrel and his friends plan a heist to steal nuts from a store.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/19/The_Nut_Job.jpg"
        },
        {
            title: "The Lego Ninjago Movie",
            genre: "Family",
            releaseYear: 2017,
            description: "A young ninja must defeat his arch-nemesis in order to save his home.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d0/The_Lego_Ninjago_Movie.jpg"
        },
        {
            title: "The BFG",
            genre: "Family",
            releaseYear: 2016,
            description: "A girl named Sophie befriends a gentle giant and helps him stop the man-eating giants.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/1e/The_BFG_poster.jpg"
        },
        {
            title: "A Wrinkle in Time",
            genre: "Family",
            releaseYear: 2018,
            description: "A young girl travels through time and space to save her father and the universe.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d6/A_Wrinkle_in_Time_2018_poster.jpg"
        }
    ,

        // War
        {
            title: "Saving Private Ryan",
            genre: "War",
            releaseYear: 1998,
            description: "During World War II, a group of U.S. soldiers must retrieve a paratrooper whose brothers have been killed in action.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/81/Saving_Private_Ryan.jpg"
        },
        {
            title: "1917",
            genre: "War",
            releaseYear: 2019,
            description: "Two British soldiers must cross enemy territory to deliver a message that could save 1,600 men.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3c/1917_film_poster.jpg"
        },
        {
            title: "Full Metal Jacket",
            genre: "War",
            releaseYear: 1987,
            description: "A two-segment look at the Vietnam War through the eyes of a Marine recruit and the consequences of his training.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/36/Full_Metal_Jacket_poster.jpg"
        },
        {
            title: "Apocalypse Now",
            genre: "War",
            releaseYear: 1979,
            description: "A journey up the Congo River during the Vietnam War to find and assassinate a renegade colonel.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/60/Apocalypse_Now.jpg"
        },
        {
            title: "Black Hawk Down",
            genre: "War",
            releaseYear: 2001,
            description: "Based on true events, a group of American soldiers is sent into Somalia to capture a warlord, leading to a fierce battle.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/53/Black_Hawk_Down_poster.jpg"
        },
        {
            title: "Dunkirk",
            genre: "War",
            releaseYear: 2017,
            description: "Allied soldiers are surrounded by enemy troops and evacuated during a fierce battle in World War II.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/12/Dunkirk_poster.jpg"
        },
        {
            title: "Platoon",
            genre: "War",
            releaseYear: 1986,
            description: "A young recruit in Vietnam faces the horrors of war and moral dilemmas while caught between two sergeants.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b8/Platoon_poster.jpg"
        },
        {
            title: "The Thin Red Line",
            genre: "War",
            releaseYear: 1998,
            description: "The conflict at Guadalcanal during World War II is portrayed through the eyes of several soldiers.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b5/The_Thin_Red_Line_poster.jpg"
        },
        {
            title: "We Were Soldiers",
            genre: "War",
            releaseYear: 2002,
            description: "Based on the Battle of Ia Drang during the Vietnam War, the film follows the first major battle between U.S. and North Vietnamese forces.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c0/We_Were_Soldiers_poster.jpg"
        },
        {
            title: "Full Metal Jacket",
            genre: "War",
            releaseYear: 1987,
            description: "A look at the Vietnam War from the perspective of a Marine recruit and his experience in the war.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/36/Full_Metal_Jacket_poster.jpg"
        },
        {
            title: "American Sniper",
            genre: "War",
            releaseYear: 2014,
            description: "Based on the life of Navy SEAL Chris Kyle, the film chronicles his service in Iraq and the struggles he faced.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/22/American_Sniper_Poster.jpg"
        },
        {
            title: "Hacksaw Ridge",
            genre: "War",
            releaseYear: 2016,
            description: "The true story of Desmond Doss, a conscientious objector who served as a medic during World War II without carrying a weapon.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5a/Hacksaw_Ridge_poster.jpg"
        },
        {
            title: "Born on the Fourth of July",
            genre: "War",
            releaseYear: 1989,
            description: "The story of a Vietnam War veteran who becomes an anti-war activist after returning home.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/67/Born_on_the_Fourth_of_July_poster.jpg"
        },
        {
            title: "War Horse",
            genre: "War",
            releaseYear: 2011,
            description: "The journey of a horse named Joey as he experiences the realities of World War I.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/10/War_Horse_poster.jpg"
        },
        {
            title: "Troy",
            genre: "War",
            releaseYear: 2004,
            description: "The epic tale of the Trojan War, focusing on the legendary conflict between the Greeks and Trojans.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b6/Troy_film_poster.jpg"
        },
        {
            title: "The Hurt Locker",
            genre: "War",
            releaseYear: 2008,
            description: "An Army bomb disposal team faces danger during the Iraq War, revealing the psychological impact of war.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/68/The_Hurt_Locker_poster.jpg"
        },
        {
            title: "Midway",
            genre: "War",
            releaseYear: 2019,
            description: "The story of the Battle of Midway, a pivotal moment in World War II, told through the eyes of the sailors and soldiers.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b0/Midway_2019_film_poster.jpg"
        },
        {
            title: "The Last Samurai",
            genre: "War",
            releaseYear: 2003,
            description: "An American military advisor is hired by the Emperor of Japan to train the country's first modern army.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/61/The_Last_Samurai_poster.jpg"
        },
        {
            title: "Enemy at the Gates",
            genre: "War",
            releaseYear: 2001,
            description: "A Russian sniper and a German sniper face off during the Battle of Stalingrad in World War II.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/26/Enemy_at_the_Gates_poster.jpg"
        },
        {
            title: "Sicario",
            genre: "War",
            releaseYear: 2015,
            description: "An FBI agent is enlisted to help take down a drug lord in a war against drugs at the U.S.-Mexico border.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/84/Sicario_poster.jpg"
        },
        {
            title: "Lone Survivor",
            genre: "War",
            releaseYear: 2013,
            description: "Based on the true story of a Navy SEAL team on a mission in Afghanistan that goes wrong.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a5/Lone_Survivor_poster.jpg"
        },
        {
            title: "The Siege of Jadotville",
            genre: "War",
            releaseYear: 2016,
            description: "The true story of a 1961 siege during the Congo Crisis where Irish soldiers fought against overwhelming odds.",
            rating: "TV-MA",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Siege_of_Jadotville.jpg"
        },

        // Sports
        {
            title: "Rocky",
            genre: "Sports",
            releaseYear: 1976,
            description: "A small-time boxer gets a once-in-a-lifetime chance to fight the heavyweight champion of the world.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/1e/Rocky_1976_poster.jpg"
        },
        {
            title: "Field of Dreams",
            genre: "Sports",
            releaseYear: 1989,
            description: "An Iowa farmer builds a baseball field in his cornfield after hearing a mysterious voice.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5b/Field_of_Dreams_poster.jpg"
        },
        {
            title: "Moneyball",
            genre: "Sports",
            releaseYear: 2011,
            description: "The true story of how the Oakland Athletics baseball team used statistical analysis to build a competitive team.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/4a/Moneyball.jpg"
        },
        {
            title: "The Blind Side",
            genre: "Sports",
            releaseYear: 2009,
            description: "The story of a homeless African-American teenager who becomes an All-American football player with the help of a caring woman.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/87/The_Blind_Side_poster.jpg"
        },
        {
            title: "Coach Carter",
            genre: "Sports",
            releaseYear: 2005,
            description: "A high school basketball coach takes a controversial stand by benching his team for poor academic performance.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/69/Coach_Carter_poster.jpg"
        },
        {
            title: "Remember the Titans",
            genre: "Sports",
            releaseYear: 2000,
            description: "Based on a true story, a newly appointed African-American football coach and his high school team overcome racial tensions.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/92/Remember_the_Titans_poster.jpg"
        },
        {
            title: "Hoop Dreams",
            genre: "Sports",
            releaseYear: 1994,
            description: "A documentary that follows two Chicago high school basketball players as they strive for success and a better life.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/74/Hoop_Dreams_poster.jpg"
        },
        {
            title: "The Sandlot",
            genre: "Sports",
            releaseYear: 1993,
            description: "A group of young baseball players during the summer of 1962 learn important life lessons while playing the game.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/25/The_Sandlot.jpg"
        },
        {
            title: "A League of Their Own",
            genre: "Sports",
            releaseYear: 1992,
            description: "The story of the All-American Girls Professional Baseball League during World War II.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0d/A_League_of_Their_Own_poster.jpg"
        },
        {
            title: "Rudy",
            genre: "Sports",
            releaseYear: 1993,
            description: "A determined young man dreams of playing football at the University of Notre Dame despite many obstacles.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/e7/Rudy_poster.jpg"
        },
        {
            title: "Miracle",
            genre: "Sports",
            releaseYear: 2004,
            description: "The true story of the 1980 U.S. Olympic hockey team that stunned the world by defeating the Soviet Union.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/43/Miracle_poster.jpg"
        },
        {
            title: "The Fighter",
            genre: "Sports",
            releaseYear: 2010,
            description: "The story of boxer Micky Ward and his rise to fame, supported by his half-brother and mother.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3e/The_Fighter_poster.jpg"
        },
        {
            title: "Creed",
            genre: "Sports",
            releaseYear: 2015,
            description: "The son of Apollo Creed seeks the help of Rocky Balboa to become a professional boxer.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/f/f6/Creed_poster.jpg"
        },
        {
            title: "The Wrestler",
            genre: "Sports",
            releaseYear: 2008,
            description: "A faded professional wrestler struggles to maintain his personal and professional life as he ages.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5f/The_Wrestler_poster.jpg"
        },
        {
            title: "The Bad News Bears",
            genre: "Sports",
            releaseYear: 1976,
            description: "A down-and-out baseball coach is tasked with managing a misfit Little League team.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_News_Bears_poster.jpg"
        },
        {
            title: "Bend It Like Beckham",
            genre: "Sports",
            releaseYear: 2002,
            description: "A British girl of Indian descent dreams of playing soccer against her family's wishes.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3a/Bend_It_Like_Beckham_poster.jpg"
        },
        {
            title: "The Mighty Ducks",
            genre: "Sports",
            releaseYear: 1992,
            description: "A lawyer is sentenced to community service coaching a misfit youth hockey team.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a5/The_Mighty_Ducks.jpg"
        },
        {
            title: "Friday Night Lights",
            genre: "Sports",
            releaseYear: 2004,
            description: "Based on the true story of a high school football team in Texas, highlighting the pressures of the sport.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/42/Friday_Night_Lights_poster.jpg"
        },
        {
            title: "Chariots of Fire",
            genre: "Sports",
            releaseYear: 1981,
            description: "The true story of two runners in the 1924 Olympics, highlighting their different motivations and backgrounds.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b8/Chariots_of_Fire_poster.jpg"
        },
        {
            title: "The Express",
            genre: "Sports",
            releaseYear: 2008,
            description: "The true story of Ernie Davis, the first African American to win the Heisman Trophy.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/07/The_Express_poster.jpg"
        },
        {
            title: "The Karate Kid",
            genre: "Sports",
            releaseYear: 1984,
            description: "A teenager learns martial arts from an unassuming handyman to defend himself from bullies.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/92/The_Karate_Kid_%281984_film%29_poster.jpg"
        },
        {
            title: "Swingers",
            genre: "Sports",
            releaseYear: 1996,
            description: "A group of friends navigate the dating scene while trying to find success in Hollywood.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0b/Swingers_poster.jpg"
        },
        {
            title: "Pumping Iron",
            genre: "Sports",
            releaseYear: 1977,
            description: "A documentary that follows the world of professional bodybuilding and its athletes.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c0/Pumping_Iron_poster.jpg"
        },

        // Historical
        {
            title: "Schindler's List",
            genre: "Historical",
            releaseYear: 1993,
            description: "The true story of Oskar Schindler, a businessman who saved over a thousand Polish Jews during the Holocaust.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3c/Schindler%27s_List.jpg"
        },
        {
            title: "12 Years a Slave",
            genre: "Historical",
            releaseYear: 2013,
            description: "The true story of Solomon Northup, a free African-American man who is kidnapped and sold into slavery.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/88/12_Years_a_Slave_poster.jpg"
        },
        {
            title: "Braveheart",
            genre: "Historical",
            releaseYear: 1995,
            description: "The story of William Wallace, a Scottish warrior who led his countrymen in a rebellion against English rule.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/9b/Braveheart_imp.jpg"
        },
        {
            title: "The King's Speech",
            genre: "Historical",
            releaseYear: 2010,
            description: "King George VI of Britain seeks the help of a speech therapist to overcome his stammer.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5f/The_King%27s_Speech.jpg"
        },
        {
            title: "Lincoln",
            genre: "Historical",
            releaseYear: 2012,
            description: "The story of President Abraham Lincoln's efforts to pass the Thirteenth Amendment to the U.S. Constitution.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/9e/Lincoln_2012_film_poster.jpg"
        },
        {
            title: "Glory",
            genre: "Historical",
            releaseYear: 1989,
            description: "The story of the first all-black regiment in the Civil War and their fight for freedom and equality.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/03/Glory_%281989_film%29_poster.jpg"
        },
        {
            title: "Dunkirk",
            genre: "Historical",
            releaseYear: 2017,
            description: "The evacuation of Allied soldiers from the beaches of Dunkirk during World War II.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/1/12/Dunkirk_poster.jpg"
        },
        {
            title: "The Imitation Game",
            genre: "Historical",
            releaseYear: 2014,
            description: "The story of Alan Turing, a mathematician who played a crucial role in breaking the German Enigma code during World War II.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Imitation_Game_poster.jpg"
        },
        {
            title: "Selma",
            genre: "Historical",
            releaseYear: 2014,
            description: "The story of the 1965 Selma to Montgomery voting rights marches led by Martin Luther King Jr.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/41/Selma_poster.jpg"
        },
        {
            title: "The Last Samurai",
            genre: "Historical",
            releaseYear: 2003,
            description: "An American military advisor embraces the Samurai culture he was hired to destroy in 19th century Japan.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/88/The_Last_Samurai_poster.jpg"
        },
        {
            title: "A Beautiful Mind",
            genre: "Historical",
            releaseYear: 2001,
            description: "The story of John Nash, a mathematical genius who struggles with schizophrenia.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/21/A_Beautiful_Mind_poster.jpg"
        },
        {
            title: "The Pianist",
            genre: "Historical",
            releaseYear: 2002,
            description: "The true story of a Jewish pianist who struggles to survive the destruction of the Warsaw ghetto during World War II.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/05/The_Pianist_poster.jpg"
        },
        {
            title: "Hidden Figures",
            genre: "Historical",
            releaseYear: 2016,
            description: "The story of three African-American women mathematicians who played a crucial role in NASA during the early years of the U.S. space program.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/83/Hidden_Figures_poster.jpg"
        },
        {
            title: "The Theory of Everything",
            genre: "Historical",
            releaseYear: 2014,
            description: "The story of the renowned physicist Stephen Hawking and his relationship with his wife Jane.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c4/The_Theory_of_Everything_poster.jpg"
        },
        {
            title: "The Butler",
            genre: "Historical",
            releaseYear: 2013,
            description: "The story of a White House butler who served eight presidents over three decades, witnessing significant events in American history.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/74/The_Butler_poster.jpg"
        },
        {
            title: "Hotel Rwanda",
            genre: "Historical",
            releaseYear: 2004,
            description: "The true story of a hotel manager who sheltered thousands of Tutsi refugees during the Rwandan genocide.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/9d/Hotel_Rwanda_poster.jpg"
        },
        {
            title: "The Boy in the Striped Pajamas",
            genre: "Historical",
            releaseYear: 2008,
            description: "A young boy befriends a Jewish boy in a concentration camp, leading to tragic consequences.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5f/The_Boy_in_the_Striped_Pajamas.jpg"
        },
        {
            title: "The Greatest Showman",
            genre: "Historical",
            releaseYear: 2017,
            description: "A musical inspired by the story of P. T. Barnum, the founder of the circus that became the famous traveling Ringling Bros. and Barnum & Bailey Circus.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/9/9d/The_Greatest_Showman_poster.jpg"
        },
        {
            title: "Patton",
            genre: "Historical",
            releaseYear: 1970,
            description: "The story of General George S. Patton's controversial career during World War II.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/3e/Patton_poster.jpg"
        },
        {
            title: "The Last Days",
            genre: "Historical",
            releaseYear: 1998,
            description: "A documentary that tells the story of five Hungarian Jews who survived the Holocaust.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a6/The_Last_Days_poster.jpg"
        },
        {
            title: "The Crucible",
            genre: "Historical",
            releaseYear: 1996,
            description: "A dramatization of the Salem witch trials and their impact on a community.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Crucible_poster.jpg"
        },
        {
            title: "Hacksaw Ridge",
            genre: "Historical",
            releaseYear: 2016,
            description: "The true story of Desmond Doss, who served as a medic in World War II without carrying a weapon.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/67/Hacksaw_Ridge_poster.jpg"
        },

        // Superhero
        {
            title: "Spider-Man: Homecoming",
            genre: "Superhero",
            releaseYear: 2017,
            description: "Peter Parker balances his life as an ordinary high school student while fighting crime as Spider-Man.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/f/fc/Spider-Man_Homecoming_poster.jpg"
        },
        {
            title: "Wonder Woman",
            genre: "Superhero",
            releaseYear: 2017,
            description: "An Amazonian princess discovers her full powers after leaving her island home to fight in World War I.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/7e/Wonder_Woman_2017_poster.jpg"
        },
        {
            title: "Deadpool",
            genre: "Superhero",
            releaseYear: 2016,
            description: "A former special forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/0/0f/Deadpool_poster.jpg"
        },
        {
            title: "Black Panther: Wakanda Forever",
            genre: "Superhero",
            releaseYear: 2022,
            description: "The leaders of Wakanda fight to protect their nation from intervening world powers in the wake of King T'Challa's death.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Panther_Wakanda_Forever_poster.jpg"
        },
        {
            title: "Ant-Man",
            genre: "Superhero",
            releaseYear: 2015,
            description: "A thief with a special suit that allows him to shrink in size must embrace his inner hero to help his mentor protect the technology.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/4/45/Ant-Man_poster.jpg"
        },
        {
            title: "Guardians of the Galaxy",
            genre: "Superhero",
            releaseYear: 2014,
            description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/51/Guardians_of_the_Galaxy_poster.jpg"
        },
        {
            title: "Thor: Ragnarok",
            genre: "Superhero",
            releaseYear: 2017,
            description: "Thor must fight to save his home from destruction while imprisoned on the other side of the universe.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c7/Thor_Ragnarok_poster.jpg"
        },
        {
            title: "Shazam!",
            genre: "Superhero",
            releaseYear: 2019,
            description: "A teenage boy can transform into an adult superhero by uttering a magic word.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c1/Shazam_%282019_film%29_poster.jpg"
        },
        {
            title: "The Incredibles",
            genre: "Superhero",
            releaseYear: 2004,
            description: "A family of superheroes must hide their powers to live a quiet suburban life but are forced to fight against a new villain.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/62/The_Incredibles.jpg"
        },
        {
            title: "Kick-Ass",
            genre: "Superhero",
            releaseYear: 2010,
            description: "A teenager decides to become a real-life superhero despite having no powers, training, or meaningful reason to do so.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/ab/Kick-Ass_poster.jpg"
        },
        {
            title: "Batman Begins",
            genre: "Superhero",
            releaseYear: 2005,
            description: "Bruce Wayne travels the world seeking the means to fight injustice and returns home to Gotham City as Batman.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/7f/Batman_Begins.jpg"
        },
        {
            title: "Man of Steel",
            genre: "Superhero",
            releaseYear: 2013,
            description: "Clark Kent, one of the last of his kind, is forced to reveal his identity to stop an imminent threat.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/6/6e/Man_of_Steel.jpg"
        },
        {
            title: "The Amazing Spider-Man",
            genre: "Superhero",
            releaseYear: 2012,
            description: "Peter Parker uncovers the truth about his parents' disappearance and learns to embrace his identity as Spider-Man.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/58/The_Amazing_Spider-Man_poster.jpg"
        },
        {
            title: "Batman v Superman: Dawn of Justice",
            genre: "Superhero",
            releaseYear: 2016,
            description: "Batman and Superman are brought into conflict with each other due to differing ideologies.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a7/Batman_v_Superman_Dawn_of_Justice.jpg"
        },
        {
            title: "The Suicide Squad",
            genre: "Superhero",
            releaseYear: 2021,
            description: "Supervillains are recruited to undertake a dangerous mission for the government in exchange for reduced sentences.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/d/d6/The_Suicide_Squad_poster.jpg"
        },
        {
            title: "Venom",
            genre: "Superhero",
            releaseYear: 2018,
            description: "Journalist Eddie Brock gains superpowers after being bonded with an alien symbiote.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/29/Venom_poster.jpg"
        },
        {
            title: "Spider-Man: Into the Spider-Verse",
            genre: "Superhero",
            releaseYear: 2018,
            description: "Teenager Miles Morales becomes Spider-Man and joins other Spider-People from different dimensions to save the multiverse.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/3/39/Spider-Man_Into_the_Spider-Verse_poster.jpg"
        },
        {
            title: "Ghost Rider",
            genre: "Superhero",
            releaseYear: 2007,
            description: "A stunt motorcyclist makes a deal with the devil and becomes the Ghost Rider, a fiery spirit of vengeance.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/a9/Ghost_Rider_poster.jpg"
        },
        {
            title: "Doctor Strange",
            genre: "Superhero",
            releaseYear: 2016,
            description: "A former neurosurgeon discovers the mystic arts after a career-ending accident.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c7/Doctor_Strange_poster.jpg"
        },
        {
            title: "X-Men: First Class",
            genre: "Superhero",
            releaseYear: 2011,
            description: "The origins of the X-Men and their arch-nemesis, Magneto, during the Cuban Missile Crisis.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/b/b9/X-Men_First_Class_poster.jpg"
        },
        {
            title: "Hellboy II: The Golden Army",
            genre: "Superhero",
            releaseYear: 2008,
            description: "Hellboy and his team must save humanity from an ancient evil that seeks to reclaim the Earth.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/29/Hellboy_II_poster.jpg"
        },
        {
            title: "The Crow",
            genre: "Superhero",
            releaseYear: 1994,
            description: "A man is resurrected from the dead to avenge his murder and that of his fiancée.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/e/ea/The_Crow_poster.jpg"
        },

        {
            title: "Blade II",
            genre: "Superhero",
            releaseYear: 2002,
            description: "Blade teams up with an uneasy alliance of vampires to battle a new breed of super vampire.",
            rating: "R",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/8/82/Blade_II_poster.jpg"
        },
        {
            title: "Steel",
            genre: "Superhero",
            releaseYear: 1997,
            description: "A weapons designer becomes a vigilante to stop criminals using his technology.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/a/aa/Steel_poster.jpg"
        },
        {
            title: "Supergirl",
            genre: "Superhero",
            releaseYear: 1984,
            description: "Kara Zor-El, Superman's cousin, comes to Earth to rescue a magical object and battles a sorceress.",
            rating: "PG",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/2/22/Supergirl_%281984_film%29_poster.jpg"
        },
        {
            title: "The Spirit",
            genre: "Superhero",
            releaseYear: 2008,
            description: "A rookie cop returns from the dead as a masked crime-fighter who battles the evil organization that killed him.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/7/79/The_Spirit_poster.jpg"
        },
        {
            title: "Catwoman",
            genre: "Superhero",
            releaseYear: 2004,
            description: "A shy woman, resurrected by a mystical cat, becomes a vigilante with cat-like abilities.",
            rating: "PG-13",
            posterImage: "https://upload.wikimedia.org/wikipedia/en/5/5e/Catwoman_poster.jpg"
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
