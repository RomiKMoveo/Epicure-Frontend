import { CardInterface } from "../Card.type";

export interface IChef extends Document {
  title: string;
  image: string;
  description: string;
  restaurants: CardInterface[];
  chefOfTheWeek: boolean;
}

