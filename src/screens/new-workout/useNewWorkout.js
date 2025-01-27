import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import workoutService from "../../services/workout/workout.service";

export const useNewWorkout = () => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors }
    } = useForm({
        mode: 'onChange'
    });

    const { isSuccess, error, isPending, mutate } = useMutation({
        mutationKey: ['create workout'],
        mutationFn: (body) => workoutService.create(body),
        onSuccess: () => {
            reset({
                name: '',
                exerciseIds: []
            })
        }
    })

    useEffect(() => {
        if (!isAuth) {
            navigate('/auth');
        }
    }, [isAuth, navigate]);


    const onSubmit = useCallback((data) => {
        mutate({
            name: data.name,
            exerciseIds: data.exerciseIds.map((exercise) => exercise.value)
        })
    }, [mutate])

    return useMemo(() => ({
        register,
        control,
        handleSubmit,
        onSubmit,
        errors,
        navigate,
        isSuccess, error, isPending
    }), [register, control, handleSubmit, onSubmit, errors, navigate, isSuccess, error, isPending])

}