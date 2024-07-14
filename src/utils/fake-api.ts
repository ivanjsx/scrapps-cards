import { CardType } from "./types";
import initialCards from "./initial-cards";



class FakeApi {
  public static readonly getInitialCards = () => new Promise<Array<CardType>>(
    (resolve) => {
      setTimeout(
        () => {
          resolve(initialCards);
        }, 
        0
      );
    }
  );
};

export default FakeApi;
