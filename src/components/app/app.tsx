// libraries
import { flushSync } from "react-dom";
import { FC, MouseEvent, MouseEventHandler, useCallback, useEffect, useState } from "react";

// components
import Card from "../card/card";
import AddCardButton from "../add-card-button/add-card-button";

// styles
import styles from "./app.module.css";

// types
import { CardType } from "../../utils/types";

// fake api
import FakeApi from "../../utils/fake-api";

// helpers
import getMaxId from "../../utils/get-max-id";
import getRandomHexColor from "../../utils/get-random-hex-color";



const App: FC = () => {
  
  const [cards, setCards] = useState<Array<CardType>>([]);
  
  useEffect(
    () => {
      const fetchData = async (): Promise<void> => {
        const initialCards = await FakeApi.getInitialCards();
        setCards(initialCards);
      };
      fetchData();
    }, 
    []
  );
  
  const onAdd = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (): void => {
      const stateSetter = (prevCards: Array<CardType>): Array<CardType> => {
        const newCard: CardType = {
          id: getMaxId(prevCards) + 1,
          color: getRandomHexColor(),
        };          
        return [newCard, ...prevCards];
      };
      if (!document.startViewTransition) {
        setCards(stateSetter);
        return;
      };
      document.startViewTransition(
        () => flushSync(
          () => setCards(stateSetter)
        )
      );
    },
    []    
  );
  
  const createDeleteHandler = useCallback<(cardId: number) => MouseEventHandler<HTMLButtonElement>>(
    (cardId: number) => (event: MouseEvent<HTMLButtonElement>): void => {
      const stateSetter = (prevCards: Array<CardType>): Array<CardType> => prevCards.filter(
        (card) => card.id !== cardId
      );
      if (!document.startViewTransition) {
        setCards(stateSetter);
        return;
      };
      document.startViewTransition(
        () => flushSync(
          () => setCards(stateSetter)
        )
      );
    },
    []    
  );
  
  const content = cards.map(
    (card) => (
      <Card
        id={card.id}
        key={card.id}
        color={card.color}
        createDeleteHandler={createDeleteHandler}
      />
    )
  );
  
  return (
    <div className={styles.app}>
      <div className={styles.buttonArea}>
        <AddCardButton onAdd={onAdd} />
      </div>
      <ul className={styles.gallery}>
        {content}
      </ul>
    </div>
  );
};

export default App;
