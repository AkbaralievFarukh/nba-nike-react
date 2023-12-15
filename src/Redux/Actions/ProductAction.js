// actions.js
import axios from 'axios';
import { GET_PRODUCTS } from '../type';

export const getProducts = () => {
    return (dispatch) => {
        axios('https://657ca608853beeefdb99c62f.mockapi.io/nba')
            .then((response) => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: response.data,
                });
            })
            .catch((error) => {
                // Обработка ошибок при необходимости
                console.error('Error fetching products:', error);
            });
    };
};
