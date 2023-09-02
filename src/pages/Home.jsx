import { H2, HomeWraper } from 'components/App/App.styled';
// import picture1 from '../images/picture1.png';
import picture2 from '../images/picture2.webp';

export const Home = () => {
  return (
    <HomeWraper>
      <H2>"All your contacts are always at hand from anywhere."</H2>
      {/* <img src={picture1} alt="contacts" /> */}
      <img src={picture2} alt="contacts" />
    </HomeWraper>
  );
};
