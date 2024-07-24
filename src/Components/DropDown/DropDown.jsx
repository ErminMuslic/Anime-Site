import React from 'react';
import { DropDownContainer, DropDownItem } from './DropDownStyle.jsx';
import { Link } from 'react-router-dom';
const DropDown = () => {
  return (
    <DropDownContainer>
      <DropDownItem><Link to="/">Home</Link></DropDownItem>
      <DropDownItem><Link to="/Anime">Anime</Link></DropDownItem>
      <DropDownItem><Link to="/Manga">Manga</Link></DropDownItem>
      <DropDownItem><Link to="/About">About</Link></DropDownItem>
      <DropDownItem><Link to="/Favorites">Favorites</Link></DropDownItem>
    </DropDownContainer>
  );
};

export default DropDown;
