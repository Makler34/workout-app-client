import { WORKOUTS } from "../../app.constants";
import { $axios } from "../../api";


class WorkoutService {
    async getAll() {
        try {
            const response = await $axios.get(`${WORKOUTS}`);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }

    }
    async getById(id) {
        try {
            const response = await $axios.get(`${WORKOUTS}/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }

    }
    async create(body) {
        try {
            const response = await $axios.post(`${WORKOUTS}`, body);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(id, body) {
        try {
            const response = await $axios.put(`${WORKOUTS}/${id}`, body);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }
    }

    async delete(id) {
        try {
            const response = await $axios.delete(`${WORKOUTS}/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }
    }
}


export default new WorkoutService();