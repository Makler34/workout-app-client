import { $axios } from "../../api";


const EXERCISE = '/exercises'

class ExerciseService {
    async getAll() {
        try {
            const response = await $axios.get(`${EXERCISE}`);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }

    }
    async create(body) {
        try {
            const response = await $axios.post(`${EXERCISE}`, body);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(id, body) {
        try {
            const response = await $axios.put(`${EXERCISE}/${id}`, body);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }
    }

    async delete(id) {
        try {
            const response = await $axios.delete(`${EXERCISE}/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }
    }
}


export default new ExerciseService();