import { EXERCISELOG } from "../../app.constants";
import { $axios } from "../../api";


class ExerciseLogService {
    async getById(id) {
        try {
            const response = await $axios.get(`${EXERCISELOG}/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }

    }
    async create(exerciseId) {
        try {
            const response = await $axios.post(`${EXERCISELOG}/${exerciseId}`);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateTime(exerciseLogId, body) {
        try {
            const response = await $axios.put(`${EXERCISELOG}/time/${exerciseLogId}`, body);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }
    }

    async complete(exerciseId, body) {
        try {
            const response = await $axios.patch(`${EXERCISELOG}/complete/${exerciseId}`, body);
            return response.data;
        } catch (error) {
            throw new Error(error)
        }
    }
}


export default new ExerciseLogService();