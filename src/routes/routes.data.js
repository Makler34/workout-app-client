import Auth from "../screens/Auth/Auth";
import Home from "../screens/home/Home";
import NewWorkout from "../screens/New-workout/NewWorkout";
import Profile from "../screens/profile/Profile";
import NotFound from "../screens/not-found/NotFound";
import NewExercise from "../screens/new-exercise/NewExercise";
import ListWorkouts from "../screens/workouts/list/ListWorkouts";
import Workout from "../screens/workouts/detail/Workout";
import Exercise from "../screens/exercise/Exercise";


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
        path: '/new-exercise',
        component: NewExercise,
        isAuth: true,
    },
    {
        path: '/workouts',

        component: ListWorkouts,
        isAuth: true,
    },
    {
        path: '/workout/:id',

        component: Workout,
        auth: true,
    },

    {
        path: '/exercise/:id',

        component: Exercise,
        isAuth: true,
    },
    {
        path: '*',
        component: NotFound,
        isAuth: false
    },
]


export default routes