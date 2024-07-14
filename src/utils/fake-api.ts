import { CardType } from "./types";
import initialCards from "./initial-cards";



const getInitialCards = () => new Promise<Array<CardType>>(
  (resolve) => {
    setTimeout(
      () => {
        resolve(initialCards);
      },
      0
    );
  }
);

export default getInitialCards;
