import { FC, useEffect, useState } from "react";
import styles from "./PeoplePage.module.css";

import { getApiResource } from "../../utils/network";
import { getPeopleId, getPeopleImage } from "../../services/get.people.data";
import ApiConstants from "../../constants/api";
import { Pokedex } from "../../models/api.model";
import { People } from "../../models/people.model";

import PeopleList from "../../components/PeoplePage/PeopleList";

const PeoplePage: FC<any> = () => {
    const [people, setPeople] = useState<People[] | null>(null);

    const getResource = async (url: string) => {
        const res = await getApiResource(url);
        
        const peopleList = (res as Pokedex).results.map(({name, url}) => {
            const id = (getPeopleId(url) as unknown) as number;
            const img = getPeopleImage(id);

            return {
                id,
                name,
                img
            } as People;
        }) as People[];

        setPeople(peopleList);
    };

    useEffect(() => {
        getResource(ApiConstants.SWAPI_ROOT + ApiConstants.SWAPI_PEOPLE);
    }, []);

    return (
        <>
            <PeopleList people={people} />
        </>
    );
};

export default PeoplePage;
