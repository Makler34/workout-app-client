
import { useParams } from 'react-router-dom';
import exerciseLogService from '../../../services/exercise/exercise-log.service';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

const useExercise = () => {
	const { id } = useParams();

	const {
		data: exerciseLog,
		error,
		isSuccess,
		isLoading,
	} = useQuery({
		queryKey: ['get exercise log', id],
		queryFn: () => exerciseLogService.getById(id),
	});


	return useMemo(() => ({
		exerciseLog,
		isSuccess,
		isLoading,
		error

	}), [error, exerciseLog, isLoading, isSuccess])
};

export default useExercise;
