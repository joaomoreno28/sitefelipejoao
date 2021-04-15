import axios from 'axios';
import configs from '../config';

const URL_USERS = `${configs.URL_BACKEND}/users`;

export default {

    getUser: async function(id) {
        try {
            const response = await axios.get(`${URL_USERS}/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getUserByEmail: async function(email) {
        try {
            const response = await axios.get(`${URL_USERS}/${email}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getUserList: async function() {
        try {
            const response = await axios.get(`${URL_USERS}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}