import { GiHand } from 'react-icons/gi';
import { Helmet } from 'react-helmet-async';
import { FcVoicePresentation } from 'react-icons/fc';
import { SiPlatzi, SiTypescript } from 'react-icons/si';
import { FaCode, FaNodeJs, FaReact } from 'react-icons/fa';

import { Hello, Info, Text } from './styles';
import { IconText } from '../../components/IconText';
import { Article, BoldText, TextContent } from '../../styles/templates';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title> Amaury Vasquez </title>
      </Helmet>
      <TextContent>
        <Hello>
          <GiHand /> Hello, welcome to my portfolio!
        </Hello>
        <br />
        <Text>
          I am Amaury Vasquez, a web developer and a tech fan.
          <FcVoicePresentation />
        </Text>
        <br />
        <br />
        <Info>
          <Article>
            <BoldText> Formation </BoldText>
            <IconText Icon={SiPlatzi} color="#95c93c">
              Active student at Platzi.
            </IconText>
            <Text>Currently studying computer science at ESCOM, IPN.</Text>
          </Article>
          <Article>
            <BoldText> Skills </BoldText>
            <IconText Icon={FaReact} color="#5fd3f3">
              React (proficient)
            </IconText>
            <IconText Icon={SiTypescript} color="#2f74c0">
              Typescript (proficient)
            </IconText>
            <IconText Icon={FaCode}>Html and css (proficient)</IconText>
            <IconText Icon={FaNodeJs} color="#83be49">
              Node, Express JS (intermediate)
            </IconText>
          </Article>
        </Info>
        <br />
      </TextContent>
    </>
  );
};
