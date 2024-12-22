import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTables } from './redux/tablesReducer';
import { API_URL } from './config';

import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import Table from './components/pages/Table/Table';
import NotFound from './components/pages/NotFound/NotFound';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/tables`);
        const data = await response.json();
        dispatch(fetchTables(data));
      } catch (error) {
        console.error('Error fetching tables:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>  
      <Route path="/" element={<Home />} />  
      <Route path="/table/:id" element={<Table />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
