import React ,{useState} from "react";
import { NavLink ,useLocation} from 'react-router-dom'

import "../Styles/Footer.css";

const Footer = () => {
  const [FootBg, setFootBg] = React.useState("pink");
  const location = useLocation();
 React.useEffect(()=> {
   if (window.location.pathname === "/") {
      setFootBg("white");
    } else {
      setFootBg('rgba(255, 125, 41, 1)')
    }
  }, [location]);
  
  
  return (
    
    <div></div>
  );
};

export default Footer;
