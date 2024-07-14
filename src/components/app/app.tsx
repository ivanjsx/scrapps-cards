// libraries
import { FC, useEffect, useState } from "react";

// components
import AddCardButton from "../add-card-button/add-card-button";

// styles
import styles from "./app.module.css";

// types
import { CardType } from "../../utils/types";

// fake api
import getInitialCards from "../../utils/fake-api";



const App: FC = () => {
  
  const [cards, setCards] = useState<Array<CardType>>([]);
  
  useEffect(
    () => {
      const fetchData = async (): Promise<void> => {
        const initialCards = await getInitialCards();
        setCards(initialCards);
      };
      fetchData();
    }, 
    []
  );
  
  const onAdd = (): void => {};
  
  return (
    <div className={styles.app}>
      <div className={styles.buttonArea}>
        <AddCardButton onAdd={onAdd} />
      </div>
    </div>
  );
};

export default App;
