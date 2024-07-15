// libraries
import { FC, useEffect, useState } from "react";

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
  
  const onAdd = (): void => {
    const newCard: CardType = {
      id: getMaxId(cards) + 1,
      color: getRandomHexColor(),
    };
    if (!document.startViewTransition) {
      setCards([newCard, ...cards]);
      return;
    };
    document.startViewTransition(
      () => setCards([newCard, ...cards])
    );
  };
  
  const onDelete = (cardId: number) => (): void => {
    const filteredCards = cards.filter(
      (card) => card.id !== cardId
    );
    if (!document.startViewTransition) {
      setCards(filteredCards);
      return;
    };
    document.startViewTransition(
      () => setCards(filteredCards)
    );
  };
  
  const content = cards.map(
    (card) => (
      <Card
        id={card.id}
        key={card.id}
        color={card.color}
        onDelete={onDelete(card.id)}
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
