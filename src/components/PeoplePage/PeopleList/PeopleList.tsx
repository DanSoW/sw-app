import { FC } from "react";
import { People } from "@models/people.model";
import styles from "./PeopleList.module.css";

interface PeopleProp {
  people: People[] | null;
}

/* Компонент списка пользователей */
const PeopleList: FC<PeopleProp> = ({ people }) => {
  return (
    <>
      <ul className={styles["list__container"]}>
        {people?.map(({ id, name, img }) => {
          return (
            <li className={styles["list__item"]} key={id}>
              <a href="">
                <img className={styles["person__photo"]} src={img} alt={name} />
                <p>{name}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PeopleList;
