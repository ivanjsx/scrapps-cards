// libraries
import { FC } from "react";

// components
import DeleteCardButton from "../delete-card-button/delete-card-button";

// styles
import styles from "./card.module.css";



type PropsType = Readonly<{
  id: number,
  color: string,
  onDelete: () => void,
}>;

const Card: FC<PropsType> = ({ color, onDelete }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <DeleteCardButton onDelete={onDelete} />
    </div>
  );
};

export default Card;
