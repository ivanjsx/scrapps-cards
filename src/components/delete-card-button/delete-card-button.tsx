// libraries
import { FC, MouseEventHandler } from "react";

// styles
import styles from "./delete-card-button.module.css";

// icons
import trashIcon from "../../icons/trash.svg";



type PropsType = Readonly<{
  onDelete: MouseEventHandler<HTMLButtonElement>,
}>;

const DeleteCardButton: FC<PropsType> = ({ onDelete }) => {  
  return (
    <button onClick={onDelete} className={styles.button}>
      <img src={trashIcon} className={styles.icon} alt="delete card" />
    </button>
  );
};

export default DeleteCardButton;
