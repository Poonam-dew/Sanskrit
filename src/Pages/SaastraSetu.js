import React from 'react';
import '../Styles/SaastraSetu.css';
import { SaastraList } from '../Helpers/SaastraList.js';
import SaatraSessions from '../components/SaatraSessions.js';

const SaastraSetu=()=>{
  return(
    <div className="saastrasetu" >
     <h1 className="saatra_heading">Shaastra Setu</h1> 
     <div className="session_card">
       {
         SaastraList.map((item,key)=>{
             return <SaatraSessions 
             key={key}
             heading={item.heading}
             subheading={item.subheading}
             para={item.para}
             link_1={item.link_1}
             link_2={item.link_2}/>
           })
       }
     </div>
      </div>
    )
}
export default SaastraSetu;