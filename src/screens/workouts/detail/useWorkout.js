import { useMutation, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import workoutLogService from "../../../services/workout/workout-log.service";

export const useWorkout = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const {
        data: workoutLog,
        isSuccess,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['get workout', id],
        queryFn: () => workoutLogService.getById(id)
        //select: ({ data }) => data
    });


    const { mutate, error: errorCompleted } = useMutation({
        mutationKey: ['complete workout log', id],
        mutationFn: (id) =>
            workoutLogService.complete(id),
        onSuccess: () => {
            navigate(`/`)
        }
    });

    return useMemo(() => ({
        workoutLog,
        isSuccess,
        isLoading,
        completeWorkout: mutate,
        error,
        errorCompleted
    }), [error, errorCompleted, isLoading, isSuccess, mutate, workoutLog])
}