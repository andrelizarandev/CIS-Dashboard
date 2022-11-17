// Modules
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Screens
import LoginScreen from '../screens/login';
import EventsScreen from '../screens/events';
import SpeakersScreen from '../screens/speakers';

export default function Router () {

  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginScreen/>}/>
          <Route path='/speakers' element={<SpeakersScreen/>}/>
          <Route path='/events' element={<EventsScreen/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
