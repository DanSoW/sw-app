import ApiConstants, { URL_IMG_PERSON } from "../constants/api";

const getId = (url: string, category: string) => {
    const id = url.replace(ApiConstants.SWAPI_ROOT + ApiConstants.SWAPI_PEOPLE, '');
    return id.replaceAll('/', '');
}

export const getPeopleId = (url: string) => {
    return getId(url, ApiConstants.SWAPI_PEOPLE);
};

export const getPeopleImage = (id: number) => `${URL_IMG_PERSON}/${id}${ApiConstants.GUIDE_IMG_EXTENSION}`;