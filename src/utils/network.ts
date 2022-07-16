import ApiConstants from "../constants/api";

export const getApiResource = async (url: string) => {
  try {
    const res = await fetch(url);

    if(!res.ok){
        console.error('Coould not fetch. ', res.status);
        return false;
    }

    return await res.json();
  } catch (e) {
    console.error('Coould not fetch. ', (e as Error).message);

    return false;
  }

  /*fetch(url)
        .then((res: Response) => {
            return res.json()
        })
        .then((body) => {
            console.log(body);
        })
        .catch((error: Error) => {
            console.log(error.message);
        });*/
};