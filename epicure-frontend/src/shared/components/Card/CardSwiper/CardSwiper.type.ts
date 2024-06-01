import { CardInterface } from '../Card.type';

export interface CardList {
    cards: CardInterface[];
    cardType: cardType;
}

export enum cardType {
    dish = "dish",
    restaurant = "restaurant",
    chef = "chef",
}