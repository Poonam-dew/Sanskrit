import React from 'react';

const SaastraSessions=({ heading ,subheading , para ,link_1 ,link_2 })=>{
  return(
    <div className="saastraSessions">
      <h2 className="saastraHeading">{heading}</h2>
      <h3 className="saastraSubHeading">{subheading}</h3>
      <ul className="saastralinks">
        <li>{para}</li>
        <li className="shaastra_li"> Please click here to watch full talk<span><a className="a" href={link_1} target="_blank"> Click Here</a></span></li>
        <li className="shaastra_li">Please click here to read more<span><a className="a" href={link_2}>Click Here</a></span> </li>
      </ul>
  
      </div>
    )
}
export default SaastraSessions;