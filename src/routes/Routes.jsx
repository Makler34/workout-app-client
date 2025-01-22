import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { useAuth } from "../hooks/useAuth";
// import NotFound from '../screens/not-found/NotFound';
// import Home from '../screens/home/Home';
// import Auth from '../screens/Auth/Auth';
// import NewWorkout from '../screens/New-workout/NewWorkout';
// import Profile from '../screens/profile/Profile';
import routes from './routes.data';
import { useAuth } from '../hooks/useAuth';
import NotFound from '../screens/not-found/NotFound';

// export const router = createBrowserRouter(
// 	[
// 	{
// 		path: '/',
// 		element: <Home />
// 	},
// 	{
// 		path: '/auth',
// 		element: <Auth />
// 	},
// 	{
// 		path: '/new-workout',
// 		element: <NewWorkout />
// 	},
// 	{
// 		path: '/profile',
// 		element: <Profile />
// 	},
// 	{
// 		path: '*',
// 		element: <NotFound />
// 	}
// ]);

// const router = createBrowserRouter(
// 	routes.map(router => ({
// 		key: router.path,
// 		path: router.path,
// 		element: <router.component />
// 	}))
// 	// 	{
// 	// 		path: '*',
// 	// 		element: <NotFound />
// 	// 	}
// 	// [
// 	// 	({
// 	// 		path: '/',
// 	// 		element: <Home />
// 	// 	},
// 	// 	{
// 	// 		path: '/auth',
// 	// 		element: <Auth />
// 	// 	},
// 	// 	{
// 	// 		path: '/new-workout',
// 	// 		element: <NewWorkout />
// 	// 	},
// 	// 	{
// 	// 		path: '/profile',
// 	// 		element: <Profile />
// 	// 	},
// 	// 	{
// 	// 		path: '*',
// 	// 		element: <NotFound />
// 	// 	})
// 	// ]
// );

const Router = () => {
	const { isAuth } = useAuth();
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.isAuth && !isAuth) {
						return false;
					}

					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					);
				})}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
