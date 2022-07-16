export const HTTPS = 'https://';
export const HTTP = 'http://';

const ApiConstants = {
    SWAPI_ROOT: HTTPS + 'swapi.dev/api/',
    SWAPI_PEOPLE: 'people',

    GUIDE_ROOT_IMG: 'https://starwars-visualguide.com/assets/img/',
    GUIDE_PEOPLE: 'characters',
    GUIDE_IMG_EXTENSION: '.jpg',
};

export const URL_IMG_PERSON = ApiConstants.GUIDE_ROOT_IMG + ApiConstants.GUIDE_PEOPLE;
export default ApiConstants;
