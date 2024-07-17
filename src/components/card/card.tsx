// libraries
import { FC, memo, MouseEventHandler } from "react";

// components
import DeleteCardButton from "../delete-card-button/delete-card-button";

// styles
import styles from "./card.module.css";



type PropsType = Readonly<{
  id: number,
  color: string,
  createDeleteHandler: (cardId: number) => MouseEventHandler<HTMLButtonElement>,
}>;

const Card: FC<PropsType> = ({ id, color, createDeleteHandler }) => {  
  const onDelete = createDeleteHandler(id);
  return (
    <li 
      className={styles.card} 
      style={{ 
        backgroundColor: color, 
        viewTransitionName: `card-${id}` 
      }}
    >
      <DeleteCardButton onDelete={onDelete} />
    </li>
  );
};

export default memo(Card);
