import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useMemo } from "react";
import exerciseService from "../services/exercise/exercise.service";



const useCreateExercise = () => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        control
    } = useForm({
        mode: 'onChange'
    });

    const { mutate, isPending, isSuccess, error } = useMutation({
        mutationFn: ({ name, times, iconPath }) =>
            exerciseService.create({ name, times, iconPath }),
        onSuccess: data => {
            console.log(data);
            reset();
        }
    });

    useEffect(() => {
        if (!isAuth) {
            navigate('/auth');
        }
    }, [isAuth, navigate]);

    const onSubmit = useCallback(data => {
        mutate(data);
    }, [mutate])


    return useMemo(() => ({
        register,
        handleSubmit,
        errors,
        control,
        onSubmit,
        isPending,
        isSuccess,
        error
    }), [control, error, errors, handleSubmit, isPending, isSuccess, onSubmit, register])
}

export default useCreateExercise

