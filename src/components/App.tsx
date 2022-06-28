import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './Layout';
import { FallbackScreen } from './FallbackScreen';
import { GlobalStyles } from '../styles/GlobalStyles';

//Lazy imports
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Projects = lazy(() => import('../pages/Projects'));

const App = () => {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<FallbackScreen />}>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<About />} path="/about" />
              <Route element={<Contact />} path="/contact" />
              <Route element={<Projects />} path="/projects" />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
