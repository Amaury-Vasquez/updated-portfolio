import { useLocation } from 'react-router-dom';

import { Link, Head, Image, Name, Nav } from './styles';

export const Header = () => {
  const { pathname } = useLocation();
  const routes = ['/projects', '/about', '/contact'];

  return (
    <Head>
      <Image
        width={'100px'}
        height="100px"
        src="https://i.imgur.com/39jqiyC.jpg"
        alt="profile photo"
      />
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
