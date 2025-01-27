import { useMutation } from "@tanstack/react-query";
import exerciseLogService from "../../../services/exercise/exercise-log.service";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useCompleteLog = () => {
    const { id } = useParams();
    const navigate = useNavigate()


    const { mutate, data, error: errorCompleted } = useMutation({
        mutationKey: ['complete log'],
        mutationFn: (body) =>
            exerciseLogService.complete(id, body),
        onSuccess: () => {
            navigate(`/workout${data.workoutLogId}`)
        }
    });

    return useMemo(() => ({
        completeLog: mutate, errorCompleted
    }), [errorCompleted, mutate])
}