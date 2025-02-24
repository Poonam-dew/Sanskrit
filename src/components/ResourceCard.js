import React ,{ useState } from 'react';
import '../Styles/ResourceCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const ResourceCard=({heading ,subheading ,showBtn_1 ,setBtn_1})=>{
  
  
  return(
    
        <div className="resource_card">
         <div className='leftResource'>
           <h2>{heading}</h2>
           <h4>{subheading}</h4>
         </div>
          <div className='rightResource'>
            <FontAwesomeIcon icon={showBtn_1 ? faChevronUp :faChevronDown} onClick={()=>{setBtn_1(!showBtn_1)
             }} size="2xl" />
          </div>

       </div>
    )
}
export default ResourceCard;