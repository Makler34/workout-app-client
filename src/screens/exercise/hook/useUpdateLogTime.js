import { useMutation, useQueryClient } from "@tanstack/react-query";
import exerciseLogService from "../../../services/exercise/exercise-log.service";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

export const useUpdateLogTime = () => {
    const { id } = useParams();
    const queryClient = useQueryClient();

    const { mutate, error: errorChange } = useMutation({
        mutationKey: ['update log time'],
        mutationFn: ({ id, body }) =>
            exerciseLogService.updateTime(id, body)
        ,

        onSuccess: () => {
            queryClient.invalidateQueries(['get exercise log', id])
        }
    });

    return useMemo(() => ({
        onChangeTimes: mutate, errorChange
    }), [errorChange, mutate])
}