import { WORKOUTLOG } from "../../app.constants";
import { $axios } from "../../api";


class WorkoutLogService {
    async getById(id) {
        try {
            const response = await $axios.get(`${WORKOUTLOG}/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }

    }
    async create(workoutId) {
        try {
            const response = await $axios.post(`${WORKOUTLOG}/${workoutId}`);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }
    }

    async complete(id) {
        try {
            const response = await $axios.patch(`${WORKOUTLOG}/complete/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }
    }
}


export default new WorkoutLogService();