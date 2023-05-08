
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
      <ReactQueryDevtools/>
    </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
