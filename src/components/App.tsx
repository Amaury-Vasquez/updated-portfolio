import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './Layout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Projects } from '../pages/Projects';
import { GlobalStyles } from '../styles/GlobalStyles';

const App = () => {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Projects />} path="/projects" />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
