import React  from 'react';
import '../Styles/FirstPage.css';
import FirstPageImg from '../assets/FirstPage.jpg';
const FirstPage=()=>{

  
  return(
    <div className="firstPage">
      <div className="fContent" >
        <img src={FirstPageImg}/>
        <div className="headings">
         <h1  className="samarkan">Namo Namah!</h1>
        <h1 className="hindi">नमो नमः!</h1>
        <h1 id="margin" className="samarkan">Welcome to Samskrit Club </h1>
        <h1 className="hindi">संस्कृत-मण्डले सुस्वागतम्!</h1>           
        </div>
      
      </div>
    </div>
    )
}
export default FirstPage;