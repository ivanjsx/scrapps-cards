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
      hexColor: getRandomHexColor(),
    };
    setCards([newCard, ...cards]);
  };
  
  const onDelete = (cardId: number) => (): void => {
    const newCards = cards.filter(
      (card) => card.id !== cardId
    );
    setCards(newCards);
  };
  
  const content = cards.map(
    (card) => (
      <li key={card.id} className={styles.galleryItem}>
        <Card
          id={card.id}
          color={card.hexColor}
          onDelete={onDelete(card.id)}
        />
      </li>
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
