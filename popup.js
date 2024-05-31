setup();

function setup() {
    assignUIFunctionality();
    getData((data) => {
        if (!dataExists(data))
            setDefaultData();
    })
}

function assignUIFunctionality() {
    assignButtonFunctionality();
}

function assignButtonFunctionality() {
    document.getElementById('new-adventure').onclick = newAdventure;
    document.getElementById('saved-adventure').onclick = savedAdventure;
}

function getData(callback) {
    chrome.storage.local.get(['wikidata'], (data) => {callback(data);});
}

function setData(data) {
    chrome.storage.local.set(data);
}

function setDefaultData() {
    let data = {
        wikidata: {
            adventures: [
                /*
                    {
                        name: string,
                        id: uid,
                        start: string,
                        goal: string,
                        history: [
                            // url: string
                        ]
                    }
                    */
            ]
        }
    }
    setData(data);
}

function clearData() {
    chrome.storage.local.clear();
}

function dataExists(data) {
    return !!Object.keys(data).length;
}

function newAdventure() {
    const adventure = getNewAdventure();
    getData(data => {
        data.wikidata.adventures.unshift(adventure);
        setData(data);
        openWikipediaPage(adventure.history[0]);
    })
}

function savedAdventure() {
    getData(data => {
        if (data.wikidata.adventures.length) {
            const history = data.wikidata.adventures[0].history;
            openWikipediaPage(history[history.length - 1]);
        }
    })
}

function openWikipediaPage(url) {
    // open in new tab if not currently on wikipedia. 
    // open in current tab if currently on wikipedia
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab.url.includes('wikipedia')) {
            chrome.tabs.update(tabs[0].id, {url: url});
        } else {
            window.open(url, '_blank');
        }
    });
}

function getNewAdventure() {
    const start = getRandomWiki();
    let end;
    do {
        end = getRandomWiki();
    } while (end == start);

    return {
        name: 'New Adventure',
        id: Math.round(Math.random()*Number.MAX_SAFE_INTEGER),
        start: start,
        end: end,
        history: [
            getWikiUrl(start)
        ]
    }
}

function getRandomWiki() {
    const wikis = getWikis();
    return wikis[Math.floor(Math.random()*wikis.length)];
}

function getWikiUrl(topic) {
    return 'https://en.wikipedia.org/wiki/' + topic.replaceAll(' ', '_');
}

function getWikis() {
    // top 500 articles (filtered inappropriate articles out)
    return [
        "2023 Cricket World Cup","Cricket World Cup","YouTube","1234","Cleopatra","Tiger 3","Deaths in 2023","2024 ICC Men's T20 World Cup","The Marvels","Leo (2023 Indian film)","XXXX (beer)","XXX: Return of Xander Cage","Matthew Perry","Henry Kissinger","Virat Kohli","Napoleon","Jimmy Carter","India national cricket team","Napoleon (2023 film)","Taylor Swift","The Hunger Games: The Ballad of Songbirds & Snakes","ChatGPT","Killers of the Flower Moon (film)","Outlook.com","The Killer (2023 film)","David Beckham","Jawan (film)","Five Nights at Freddy's (film)","Dodi Fayed","XXX (2002 film)","Oppenheimer (film)","Dolly Parton","UEFA Euro 2024 qualifying","Sam Altman","Saltburn (film)","All the Light We Cannot See","Joshua Dobbs","Suella Braverman","Facebook","Victor Chang","J. Robert Oppenheimer","Survivor Series: WarGames (2023)","Miss Universe 2023","Elon Musk","Israel","Australia national cricket team","Diana Nyad","Travis Kelce","Diwali","Wikipedia","State of Palestine","Mohammed Shami","ICC Men's T20 World Cup","Javier Milei","Animal (2023 film)","Premier League","Jamie Lynn Spears","Loki (season 2)","Robbie Williams","Instagram","Rosalynn Carter","Mohamed Al-Fayed","United States","Cristiano Ronaldo","Five Nights at Freddy's","Google Translate","The Creator (2023 film)","The Ballad of Songbirds and Snakes","Rohit Sharma","Donald Trump","Wish (film)","Thanksgiving","Sylvester Stallone","Raindrop cake","Diana, Princess of Wales","Ansel Adams","Joe Biden","Alia Bhatt","Shubman Gill","UEFA Champions League","Aria Mia Loberti","Bruce Willis","India","Sage Stallone","A Haunting in Venice","John F. Kennedy","David Cameron","The Fall of the House of Usher (miniseries)","The Equalizer 3","Invincible (TV series)","Nikki Haley","Thanksgiving (2023 film)","Madame Web","Lionel Messi","Blue Eye Samurai","Sachin Tendulkar","Rachel Zegler","Now and Then (Beatles song)","Dancing with the Stars (American season 32)","2023 FIFA U-17 World Cup","Benjamin Netanyahu","Crown Jewel (2023)","Black Friday (shopping)","2023 Dutch general election","UEFA Euro 2024","Flipkart","Priscilla Presley","Timothée Chalamet","WhatsApp","Jennifer Lawrence","2026 FIFA World Cup qualification","Elizabeth II","Narendra Modi Stadium","List of highest-grossing Indian films","List of Marvel Cinematic Universe films","Omegle","Jason Kelce","Gen V","Amy Carter","OpenAI","Glenn Maxwell","12th Fail","World War II","Barbra Streisand","2027 Cricket World Cup","Cher","Bigg Boss (Tamil season 7)","Loki (TV series)","Bass Reeves","Elvis Presley","Rachin Ravindra","Charles III","2024 United States presidential election","Monarch: Legacy of Monsters","Shane MacGowan","2023 Telangana Legislative Assembly election","Barack Obama","Britney Spears","Brie Larson","Trolls Band Together","Gordon Ramsay","The Hunger Games (film series)","Bodies (2023 TV series)","Madame Web (film)","Mira Murati","No Nut November","Jennifer Aniston","The Hunger Games","Cassie Ventura","Sam Bankman-Fried","Jigarthanda DoubleX","Josh Giddey","New Zealand national cricket team","2023 Formula One World Championship","2025 ICC Champions Trophy","Shreyas Iyer","The Beatles","United Kingdom","Shah Rukh Khan","Pakistan national cricket team","World War I","Leonardo DiCaprio","Scott Pilgrim Takes Off","2026 FIFA World Cup","Thanksgiving (United States)","Google","Day of the Dead","Twitter","Michael Fassbender","ICC Champions Trophy","UFC 295","Joaquin Phoenix","Michael Jackson","Doctor Who (2023 specials)","Cat","Lisa Marie Presley","Terry Venables","John Lennon","Hunter Schafer","All the Light We Cannot See (miniseries)","The Eras Tour","Cary Grant","Spider-Man: Across the Spider-Verse","Australia","MS Dhoni","Tyler Christopher (actor)","George W. Bush","Bob Knight","Arnold Schwarzenegger","C. J. Stroud","Russian invasion of Ukraine","Dwayne Johnson","Tommy DeVito (American football)","2026 FIFA World Cup qualification (AFC)","Josh Hutcherson","2011 Cricket World Cup","Manchester United F.C.","LeBron James","Hannah Waddingham","Geert Wilders","Squid Game: The Challenge","Joséphine de Beauharnais","Sean Combs","Al Nassr FC","Anushka Sharma","Charlie Munger","Doctor Who","Bigg Boss (Hindi season 17)","Vivek Ramaswamy","The Fall of the House of Usher","List of Hindi films of 2023","KL Rahul","Death of Diana, Princess of Wales","George Harrison","Friends","Dua Lipa","Ridley Scott","Jodie Foster","Marvel Cinematic Universe","List of international cricket centuries by Virat Kohli","Albert Einstein","Matt Rife","South Africa national cricket team","Ottoman Empire","Jelly Roll (singer)","Tom Blyth","Attack on Titan","FIFA World Cup","Barbie (film)","2023 Argentine general election","2023 elections in India","Al Jazeera","Courteney Cox","Novak Djokovic","Antonio Pierce","Leo (2023 American film)","Andrew Tate","Victor Wembanyama","2003 Cricket World Cup","India at the Cricket World Cup","John Gotti","Clint Eastwood","Skanda (film)","Jeremy Allen White","Blue Beetle (film)","Attack on Titan (TV series)","Bill Clinton","Suki Waterhouse","2019 Cricket World Cup","Macaulay Culkin","Paul McCartney","Patrick Dempsey","Assassination of John F. Kennedy","Vanessa Kirby","Godzilla Minus One","Mia Khalifa","Matt LeBlanc","Attack on Titan (season 4)","The Railway Men","Call of Duty: Modern Warfare III (2023 video game)","Rick and Morty (season 7)","Sheynnis Palacios","Rishi Sunak","Saw X","Indian Super League","Ryan Reynolds","Dunki (film)","Michael Jordan","CM Punk","Tom Cruise","The Gilded Age (TV series)","Angelina Jolie","Scarlett Johansson","Mariah Carey","Kingdom of the Planet of the Apes","China","The Hunger Games (film)","Harry Kane","Mad (film)","Robert F. Kennedy Jr.","Squid Game","Boygenius","Artificial intelligence","Twinkling Watermelon","Lainey Wilson","Zawe Ashton","Max Verstappen","Liverpool F.C.","The Crown (season 6)","Russia","Algebraic notation (chess)","Sam Manekshaw","Lessons in Chemistry","Lee Harvey Oswald","Fargo (season 5)","Netherlands","List of James Bond films","The Pirate Bay","New York City","Markwayne Mullin","BBC World Service","Japan","Email","Daylight saving time","Turkey","Jerusalem","Olivia Rodrigo","Eminem","Canada","Mike Tyson","TikTok","Erling Haaland","Tom Hiddleston","Ilya Sutskever","Keanu Reeves","The Crown (TV series)","Pakistan","Jude Bellingham","Annette Bening","Drop bear","Jacqueline Kennedy Onassis","List of countries by GDP (nominal)","Argentina","Jason Momoa","Jacob Elordi","Fargo (TV series)","Lisa Kudrow","Tiger Nageswara Rao","West Bank","2015 Cricket World Cup","Yellowstone (American TV series)","Veterans Day","Jujutsu Kaisen","Marvel Cinematic Universe: Phase Five","Brad Pitt","Subrata Roy","List of Cricket World Cup finals","Muhammad","The Boys (TV series)","Manchester City F.C.","Duane Martin","Halloween","Full Gear (2023)","Jack Ruby","David Schwimmer","Priscilla (film)","No Hard Feelings (2023 film)","Young Sheldon","Periodic table","Martin Scorsese","Tate McRae","Julia Roberts","Freddie Mercury","Adam Johnson (ice hockey)","William Shakespeare","Irugapatru","Singapore","For All Mankind (TV series)","Rashmika Mandanna","Kanye West","Emily Blunt","Mike McDaniel","FIFA U-17 World Cup","MrBeast","Yasser Arafat","Sydney Sweeney","Texas Rangers (baseball)","George Santos","Six-Day War","Ayda Field","Snoop Dogg","Limonene","A Murder at the End of the World","Taika Waititi","Inside Out 2","Perfect Marriage Revenge","Michelle Dee","Wiki","A","Game of Thrones","Cole Palmer","History of Palestine","Ringo Starr","Dakota Johnson","Margot Robbie","Tom Aspinall","Harry Potter (film series)","Real Madrid CF","Bradley Cooper","Ryan Gosling","Jailer (2023 Tamil film)","Mission: Impossible – Dead Reckoning Part One","UEFA Euro 2024 qualifying play-offs","Lewis Hamilton","Sound of Freedom (film)","Victoria Beckham","Houthi movement","Nicole Kidman","Jack Harlow","List of states and territories of the United States","South Africa","Iran","List of Super Bowl champions","Talk to Me (2022 film)","Jim Harbaugh","Kim Kardashian","Grace Dent","Saudi Arabia","Ravindra Jadeja","New Zealand","Salman Khan","2023 Madhya Pradesh Legislative Assembly election","Wikimedia Foundation","Generation Z","Germany","Ballon d'Or","Queen Victoria","Paris Hilton","Vladimir Putin","The Curse (American TV series)","Taj Mahal","Battle of Waterloo","United Arab Emirates","Barry Sanders","Vietnam War","Mahatma Gandhi","Coca-Cola","Winston Churchill","Pain Hustlers","Planet of the Apes","André 3000","Bangladesh","List of Attack on Titan episodes","George VI","Ben Gurion Canal Project","Guy Fawkes","List of Doctor Who episodes (2005–present)","Elizabeth Haysom","Adam Sandler","Atomic bombings of Hiroshima and Nagasaki","Argentina national football team","123Movies","Jeffrey Dahmer","Remembrance Day","Amazon (company)","Kannur Squad","Gal Gadot","Gmail","XXXX Gold","Bruce Bochy","Jesus","Seven deadly sins","Jenna Ortega","Antony Blinken","Apple Inc.","Nyad (film)","Patrick Mahomes","Philippines","Fellow Travelers (miniseries)","John Bennett Perry","English language","Nicolas Cage","Phillip Hughes","Alex Pereira","Susan Sarandon","Jeff Bezos","Corey Seager","Ronald Reagan","Celine Dion","James Cleverly","Barry Keoghan","The Nun II","Chelsea F.C.","The Morning Show (American TV series)","Muhammad Ali","Interstellar (film)","2022 FIFA World Cup"
    ];
}