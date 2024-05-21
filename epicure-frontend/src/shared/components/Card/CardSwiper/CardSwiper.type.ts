import { CardInterface } from '../Card.type';

export interface CardList {
    cards: CardInterface[];
    cardType: cardType;
}

export enum cardType {
    DISH = "dish",
    RESTAURANT = "restaurant",
    CHEF = "chef",
}