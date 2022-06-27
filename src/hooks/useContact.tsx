import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

interface ContactIcon {
  color: string;
  Icon: React.FC;
  link: string;
}

export const useContact = () => {
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

  return contactData;
};
