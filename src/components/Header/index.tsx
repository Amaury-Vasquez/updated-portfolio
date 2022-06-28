import { useLocation } from 'react-router-dom';

import { Loader } from '../Loader';
import { useImageLoad } from '../../hooks/useImageLoad';
import { Link, Head, ImageContainer, Name, Nav } from './styles';

export const Header = () => {
  const { pathname } = useLocation();
  const { img, loaded } = useImageLoad('https://i.imgur.com/39jqiyC.jpg');

  const routes = ['/projects', '/about', '/contact'];

  return (
    <Head>
      <ImageContainer>
        {loaded ? (
          <img width="100px" height="110px" src={img} alt="profile photo" />
        ) : (
          <Loader />
        )}
      </ImageContainer>
      <Name to="/">amaury vasquez</Name>
      <Nav>
        {routes.map((route, i) => (
          <Link
            fill={route === pathname ? 1 : 0}
            key={`${route + i}`}
            to={route}
          >
            {route.slice(1)}
          </Link>
        ))}
      </Nav>
    </Head>
  );
};
