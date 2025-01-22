import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useEffect, useMemo, useCallback, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import authService from "../services/auth.service";
import { useForm } from "react-hook-form";


const useAuthPage = () => {
    const { login, isAuth } = useAuth();
    const navigate = useNavigate();

    const [type, setType] = useState('login');

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors }
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            switch: true
        }
    });

    const authSwitch = watch('switch');

    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth, navigate]);

    const { mutate, isPending } = useMutation({
        mutationFn: ({ email, password }) =>
            authService.main(email, password, type),
        onSuccess: data => {
            login(data.user);
            navigate('/');
            reset();
        }
    });

    const onSubmit = useCallback(data => {
        mutate({ email: data.email, password: data.password });
    }, [mutate])

    const handleSwitchChange = useCallback(() => {
        setValue('switch', !authSwitch); // Обновляем значение в форме
    }, [authSwitch, setValue])

    return useMemo(() => ({
        setType,
        register,
        handleSubmit,
        errors,
        onSubmit,
        handleSwitchChange,
        isPending,
        authSwitch
    }), [authSwitch, errors, handleSubmit, handleSwitchChange, isPending, onSubmit, register])


}

export default useAuthPage