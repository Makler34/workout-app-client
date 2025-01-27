import { useMutation, useQuery } from "@tanstack/react-query";
import workoutService from "../../../services/workout/workout.service";
import workoutLogService from "../../../services/workout/workout-log.service";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";


export const useWorkouts = () => {
    const navigate = useNavigate();

    const {
        data: workoutList,
        isSuccess,
        isLoading
    } = useQuery({
        queryKey: ['get workouts'],
        queryFn: () => workoutService.getAll()
        //select: ({ data }) => data
    });

    const {
        mutate,
        isPending,
        isSuccess: isSuccessMutate,
        error
    } = useMutation({
        mutationKey: ['create new workout log'],
        mutationFn: (workoutId) => workoutLogService.create(workoutId),
        onSuccess: (data) => {
            navigate(`/workout/${data.id}`)
        }
    })


    return useMemo(() => ({
        workoutList,
        isSuccess,
        isLoading,
        mutate,
        isPending,
        isSuccessMutate,
        error
    }), [workoutList, isSuccess, isLoading, mutate, isPending, isSuccessMutate, error])
}

export default useWorkouts