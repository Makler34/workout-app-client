import { useQuery } from "@tanstack/react-query"
import userService from "../../services/user.service"

export const useProfile = () => {
    return useQuery({
        queryKey: ['get profiles'], queryFn: () => userService.getProfile(),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10
    })
}