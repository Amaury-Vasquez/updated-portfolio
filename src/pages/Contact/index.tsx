import { Helmet } from 'react-helmet-async';

import { useContact } from '../../hooks/useContact';
import { ContactInfo, Email, Icons, Link, Message } from './styles';

export const Contact = () => {
  const contactData = useContact();

  return (
    <>
      <Helmet>
        <title> {`Contact | Amaury Vasquez`} </title>
      </Helmet>
      <ContactInfo>
        <Message>
          I'm currently searching for job opportunities and freelance projects,
          feel free to send me an email if you're interested in my services:
        </Message>
        <Email>amaury.vasquezenriquez@gmail.com</Email>
        <Message>
          <br />
          You can also look for me at social media
        </Message>
        <Icons>
          {contactData.map((item, i) => (
            <Link
              color={item.color}
              href={item.link}
              key={item.link + item.color}
              target="_blank"
            >
              <item.Icon />
            </Link>
          ))}
        </Icons>
      </ContactInfo>
    </>
  );
};
