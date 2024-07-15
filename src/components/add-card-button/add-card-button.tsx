// libraries
import { FC, memo } from "react";

// styles
import styles from "./add-card-button.module.css";

// icons
import plusIcon from "../../icons/plus.svg";



type PropsType = Readonly<{
  onAdd: () => void,
}>;

const AddCardButton: FC<PropsType> = ({ onAdd }) => {  
  return (
    <button onClick={onAdd} className={styles.button}>
      <img src={plusIcon} className={styles.icon} alt="add card" />
    </button>
  );
};

export default memo(AddCardButton);
