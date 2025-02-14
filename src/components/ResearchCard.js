import React from 'react';
import '../Styles/ResearchCard.css';
const ResearchCard=({heading ,subheading,para ,links ,iframeSrc})=>{

  return(
    <div className="ResearchCard">
     <h2>{heading}</h2>
     <h4>{subheading}</h4>
      <a  className="an" href={iframeSrc} >Open file</a>

     <ul className="AboutResearch">
       <li className="para">{para}</li>
       <li className="links">Download<a  className="an"href={links[0]} >Article</a></li>
       
     </ul>
      
      </div>
    )
}
export default ResearchCard;