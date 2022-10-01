import { FC, useEffect, useState } from "react";

import WithErrorApi from '@hoc-helpers/WithErrorApi';

import PeopleList from "@components/PeoplePage/PeopleList";
import { getPeopleId, getPeopleImage } from "@services/get.people.data";
import { getApiResource } from "@utils/network";
import { Pokedex } from "@models/api.model";
import { People } from "@models/people.model";
import ApiConstants from "@constants/api";
import styles from "./PeoplePage.module.css";

interface PeoplePageProp {
  setErrorApi: React.Dispatch<React.SetStateAction<boolean>>;
}

/* Страница списка пользователей */
const PeoplePage: FC<PeoplePageProp> = ({ setErrorApi }) => {
  const [people, setPeople] = useState<People[] | null>(null);

  const getResource = async (url: string) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = (res as Pokedex).results.map(({ name, url }) => {
        const id = getPeopleId(url) as unknown as number;
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        } as People;
      }) as People[];

      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(ApiConstants.SWAPI_ROOT + ApiConstants.SWAPI_PEOPLE);
  }, []);

  return (
    <>
      <h1>Navigation</h1>
      {people && <PeopleList people={people} />}
    </>
  );
};

export default WithErrorApi(PeoplePage);
