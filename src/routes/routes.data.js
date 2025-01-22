import Auth from "../screens/Auth/Auth";
import Home from "../screens/home/Home";
import NewWorkout from "../screens/New-workout/NewWorkout";
import Profile from "../screens/profile/Profile";
import NotFound from "../screens/not-found/NotFound";


const routes = [
    {
        path: '/',
        component: Home,
        isAuth: true
    },
    {
        path: '/auth',
        component: Auth,
        isAuth: false
    },
    {
        path: '/new-workout',
        component: NewWorkout,
        isAuth: true
    },
    {
        path: '/profile',
        component: Profile,
        isAuth: true
    },
    {
        path: '*',
        component: NotFound,
        isAuth: false
    }
    /* 
    {
        path: '/new-exercise',

        component: NewExercise,
        isAuth: true,
    },

    {
        path: '/workout/:id',

        component: SingleWorkout,
        auth: true,
    },
    {
        path: '/workouts',

        component: ListWorkouts,
        isAuth: true,
    },
    {
        path: '/exercise/:id',

        component: SingleExercise,
        isAuth: true,
    }, */

]


export default routes