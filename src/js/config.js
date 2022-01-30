// Data that stays constant throughout the whole project. Easily change the settings by just modifying data in this file

// The API url might change in the future (ex: V3 vs V2), let's make it a global variable so we'll only have to change it once
// since this will note change, we use upper case to declare it
export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';

// Duration after which our app rejects the promise
export const TIMEOUT_SEC = 10;

export const RESULTS_PER_PAGE = 10;

export const KEY = '213cf11f-a7dd-4a2e-bf90-3118a7fdfb1a';

export const MODAL_CLOSE_SEC = 3;
