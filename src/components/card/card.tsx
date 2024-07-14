// libraries
import { FC, useRef } from "react";

// components
import DeleteCardButton from "../delete-card-button/delete-card-button";

// styles
import styles from "./card.module.css";



type PropsType = Readonly<{
  id: number,
  color: string,
  onDelete: () => void,
}>;

const Card: FC<PropsType> = ({ id, color, onDelete }) => {
  
  const cardRef = useRef<HTMLLIElement>(null);
  
  return (
    <li 
      key={id} 
      ref={cardRef} 
      className={styles.card} 
      style={{ backgroundColor: color }}
    >
      <DeleteCardButton onDelete={onDelete} />
    </li>
  );
};

export default Card;
