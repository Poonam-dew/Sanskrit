import React from 'react';
import '../Styles/HiddenResource_2.css';
import ResearchCard from './ResearchCard.js';
const HiddenResource_2=({AddId})=>{
    let researchInfo=[
    {
      id:50,
      heading:"AKSHARA",
      subheading:"R. N. Iyengar",
      iframeSrc:"https://www.dropbox.com/s/vxa0a4j8axpj5tn/Akara_the_Basic_Unit_of_Time_Measure_in.pdf?raw=1",
      para:"The Basic Unit of Time Measure in Ancient India.",
      links:["Article link"],
    },
    {
       id:51,
      heading:"AKSHARA",
      subheading:"R. N. Iyengar",
      iframeSrc:"https://www.dropbox.com/s/vxa0a4j8axpj5tn/Akara_the_Basic_Unit_of_Time_Measure_in.pdf?raw=1",
      para:"The Basic Unit of Time Measure in Ancient India.",
      links:["Article link"],
    },
        {
       id:52,
      heading:"AKSHARA",
      subheading:"R. N. Iyengar",
      iframeSrc:"https://www.dropbox.com/s/vxa0a4j8axpj5tn/Akara_the_Basic_Unit_of_Time_Measure_in.pdf?raw=1",
      para:"The Basic Unit of Time Measure in Ancient India.",
      links:["Article link"],
    }
    ]
  return(
    <div className="HiddenResource_2" id={AddId} >
        <h2>Research Articles</h2>
      <div class="article_container">

       {
         researchInfo.map((item)=>{
             return <ResearchCard 
             id={item.id}
             heading={item.heading}
             iframeSrc={item.iframeSrc}
             subheading={item.subheading}
             para={item.para}
             links={item.links}
             />
           })
       }          
      </div>

        
      </div>
    )
}
export default HiddenResource_2;