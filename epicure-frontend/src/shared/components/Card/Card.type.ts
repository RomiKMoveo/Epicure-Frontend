import { cardType } from "./CardSwiper/CardSwiper.type";

export interface CardInterface {
    id: string;
    image: string;
    title: string;
    chefName?: string;
    restaurantName?: string;
    ingredients?: string;
    price?: number;
    stars?: number;
    icon?: string;
    type:string
  }

  export interface CardProps {
    card: CardInterface;
    cardType: cardType;
  }