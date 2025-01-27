import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.scss';
import Router from './routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//import ChipContainer from './test';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
});

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router />
			{/* <ChipContainer /> */}
		</QueryClientProvider>
	</StrictMode>
);
