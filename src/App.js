import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './frontend/Contact';
import Navbar from './frontend/Navbar';
import { Profile } from './frontend/Profile';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { About } from './frontend/About';
import { Forms } from './frontend/Forms';

export const AppContext = createContext();

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,

      }
    }
  });
  const [username, setUsername] = useState("Aki Reiss");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/about' element={<About />} />
              <Route path='/forms' element={<Forms />} />
              <Route path='*' element={<h1>Page Not Found</h1>} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider >

    </div>

  );
}

export default App;
