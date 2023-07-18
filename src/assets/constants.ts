
export type INITIALSTATE = {
    currentEpisode: [],
    currentIndex: number,
    isActive: boolean,
    isPlaying: boolean,
    activeEpisode: object,
    genreListId: string,
}

// https://podcast-api.netlify.app	
// Returns an array of PREVIEW

export type PREVIEW = {
    description: string;
    genreIds:    number[];
    id:          string;
    image:       string;
    seasons:     number;
    title:       string;
    updated:     string;
}

// https://podcast-api.netlify.app/id/<ID>	
// Returns a SHOW object with several 
// SEASON and EPISODE objects directly embedded within
export type SHOW = {
    id: number;
    title: string;
    description: string;
    seasons: SEASON[];
}

export type SEASON = {
    id: number;
    title:string;
    image: string;
    episodes: EPISODE[];
}


// https://podcast-api.netlify.app/genre/<ID>	
// Returns a GENRE object
export type GENRE = {
    id: number;
    title: string;
    description: string;
    showIds: string[]
}

export type EPISODE = {
    title: string;
    description: string;
    episode: number;
    file: string;
}

export const genresArray = [
    { id: 1, title: 'Personal Growth'},
    { id: 2, title: 'Investigative Journalism'},
    { id: 3, title: 'History'},
    { id: 4, title: 'Comedy'},
    { id: 5, title: 'Entertainment'},
    { id: 6, title: 'Business'},
    { id: 7, title: 'Fiction'},
    { id: 8, title: 'News'},
    { id: 9, title: 'Kids and Family'},
]

export const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]