import axios from 'axios';
import { IChef } from '../shared/components/Card/models/chef.models';
import { CardInterface } from '../shared/components/Card/Card.type';


const API_URL = 'http://localhost:3000/api';

export const getPopularRestaurants = async () => {
    try {
        const response = await axios.get(`${API_URL}/restaurant/popular`);
        const data : CardInterface[] = response.data;
        return data;
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error;
    }
};

export const getChefOfTheWeek = async () => {
    try {
        const response = await axios.get(`${API_URL}/chef/chefOfTheWeek`);
        const data : IChef = response.data;

        return data;
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error;
    }
};

export const getSignatureDishes = async () => {
    try {
        const response = await axios.get(`${API_URL}/dish/signature`);
        const data : CardInterface[] = response.data;
        return data;
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error;
    }
};