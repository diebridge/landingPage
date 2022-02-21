import Fanztool from '@/constants/svg/fanztool.svg';
import { css, tw } from 'twind/css';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Your Next
      </h1>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-7xl text-center leading-snug text-gray-800`)}>
        Cross Border
      </h1>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-center leading-snug text-gray-800`)}>
        E-Commerce Stop
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Make your journey wonderful and develop beyond your expectations.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        {/* <Button primary>Get started</Button>
        <span className={tw(`mx-2`)}>or</span>
        <Button>Contact us</Button> */}
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>These folks get it</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Fanztool className={tw(`m-12`)} width={230} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
