
import { $axios } from "../api";


const USERS = '/users'

class UserService {
    async getProfile() {
        try {
            const response = await $axios.get(`${USERS}/profile/stat`);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }
    }
}


export default new UserService();