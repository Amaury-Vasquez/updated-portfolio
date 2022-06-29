import { Credits, Image, Landing, Text } from './styles';

const NotFound = () => {
  return (
    <Landing>
      <Text>Whoops! We couldn't find what you were looking for</Text>
      <Image src="https://i.imgur.com/YtXd2MM.png" alt="not found page" />
      <Credits> Designed by freepik </Credits>
    </Landing>
  );
};

export default NotFound;
