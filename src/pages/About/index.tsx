import { Helmet } from 'react-helmet-async';

import { InfoSection, Quote } from './styles';
import { Article, BoldText, TextContent } from '../../styles/templates';

export const About = () => {
  return (
    <>
      <Helmet>
        <title> About | Amaury Vasquez </title>
      </Helmet>
      <TextContent>
        <Article>
          <Quote>
            "Knowing others is intelligence, knowing yourself is true wisdom.
            Mastering others is strength, mastering yourself is true power. "
          </Quote>
          <BoldText> -Lao Tzu, Tao Te Ching</BoldText>
        </Article>
        <InfoSection>
          <Article>
            <BoldText> About me </BoldText>
            <p>
              Sports man, soccer enthusiast. <br />
              High performance chess player. <br />
              Love new and exciting experiences. <br />
              Fan of meeting new and interesting kind of people. <br />
              <br />
            </p>
          </Article>
          <Article>
            <BoldText> Experience </BoldText>
            <p>
              Proficient at c++. <br />
              2+ years of css experience. <br />
              2+ years of experience using React(TypeScript). <br />
              Currently working on different personal projects.
            </p>
          </Article>
        </InfoSection>
        <Article>
          <BoldText> Proyection </BoldText>
          <p>
            Looking forward to specialize in data science and machine learning.
            <br />
            I learn and practice with different things everyday so I can become
            a better developer. <br />
            <br />
          </p>
          <BoldText> Thoughts </BoldText>
          <p>
            Happines comes from trying to become a better person than the one
            you were the day before. <br />
            Developers are the people behind the construction of future, I
            believe that we must use this power to make people life easier and
            better.
          </p>
        </Article>
      </TextContent>
    </>
  );
};
