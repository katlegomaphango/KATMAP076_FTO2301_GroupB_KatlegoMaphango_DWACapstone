
export type INITIALSTATE = {
    isActive: boolean,
    isPlaying: boolean,
    activeEpisode: EPISODE,
}

// https://podcast-api.netlify.app	
// Returns an array of PREVIEW

export type PREVIEW = {
    description: string;
    genres:    number[];
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
    image: string,
    updated: string
}

export type SEASON = {
    season: number;
    title: string;
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

export type User = {
  id: string,
  app_metadata: {
    provider?: string,
    [key: string]: any,
  },
  user_metadata: {
    [key: string]: any,
  },
  aud: string,
  confirmation_sent_at?: string,
  email?: string,
  created_at: string,
  confirmed_at?: string,
  last_sign_in_at?: string,
  role?: string,
  updated_at?: string,
}

export type Session = {
  provider_token?: string | null,
  access_token: string,
  expires_in?: number,
  expires_at?: number,
  refresh_token?: string,
  token_type: string,
  user: User | null
}

export type TOKEN = {
  session: Session | null,
  user: User | null,
}