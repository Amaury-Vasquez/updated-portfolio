import { Link } from 'react-router-dom';

import { Head, Image, Name, Nav } from './styles';

export const Header = () => {
  return (
    <Head>
      <Image
        width={'100px'}
        height="100px"
        src="https://i.imgur.com/39jqiyC.jpg"
        alt="profile photo"
      />
      <Name>
        <Link to="/"> amaury vasquez</Link>
      </Name>
      <Nav>
        <Link to="/projects"> projects </Link>
        <Link to="/about"> about </Link>
        <Link to="/contact"> contact </Link>
      </Nav>
    </Head>
  );
};
