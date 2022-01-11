import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constant';
import './Header.css';

const Header = () => (
  <div className="gericht__header gericht__wrapper section__padding" id="home">
    <div className="gericht__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="gericht__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="gericht__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
