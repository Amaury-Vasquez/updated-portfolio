import { Helmet } from 'react-helmet-async';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

import { ContactInfo, Email, Icons, Link, Message } from './styles';

interface ContactIcon {
  color: string;
  Icon: React.FC;
  link: string;
}

export const Contact = () => {
  const contactData: ContactIcon[] = [
    {
      color: '#016de5',
      Icon: FaFacebook,
      link: 'https://www.facebook.com/amaury.vasquezenriquez/',
    },
    {
      color: '#23292f',
      Icon: FaGithub,
      link: 'https://github.com/Amaury-Vasquez',
    },
    {
      color: '#dd2a7b',
      Icon: FaInstagram,
      link: 'https://www.instagram.com/vasquezamaury/',
    },
    {
      color: '#1d9bf1',
      Icon: FaTwitter,
      link: 'https://twitter.com/AmauryVasquez11',
    },
  ];

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
