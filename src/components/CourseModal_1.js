import React ,{ useState } from 'react';
import '../Styles/CourseModal_1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CourseModal_1=({onClose , AddId })=>{
  
  return(
    <div className="coursemodal_1" >
     <div className="know_more_1"  id={AddId}>
       <div className="detail_wrapper_1">
        <FontAwesomeIcon className="cross" icon={ faTimes } size="4xl" onClick={onClose} />
       <h2>COURSE DETAILS</h2>
       <h3>Overview</h3>
       <ul className="knowlist1">
         <li>In this course, five tools from the Samsaadhanii toolkit viz. Sandhi joiner and splitter, word generator and analyser and sentence analyser, will be introduced.</li>
         <li>At the end of the course, the participants will be asked to read and understand 5 shlokas from some popular text such as Raghuvaṃśa and provide various grammatical analysis such as sandhi, word analysis and sentential analysis.</li>
         <li>This will generate a confidence in the participants that with the help of various online tools they can read and understand the original Sanskrit texts.</li>
         <li>Learning will occur in two modes - Lectures and Project.</li>
         <li>Module-wise evaluation through Multiple Choice Questions (MCQ) will carry 70% weightage, while project work will have 30% weightage of the total evaluation.</li>
         <li>For more details on the project work and the tentative duration/plan of the course, please refer to this document.<a className='cli' href="https://www.dropbox.com/s/jr4l0ijuvkfmhea/Intro_to_Sa%E1%B9%83s%C4%81dhan%C4%AB-IITR.pdf?raw=1" target="_blank">Document</a></li>
       </ul>
       </div>
       <div className='material_wrapper_1'>
        <h2>COURSE MATERIALS</h2>
        <h3>Feel free to access all the course materials here...</h3>
        <ul className="material_links_1>">
          <li ><a className='cli' href="https://drive.google.com/drive/folders/1RsbqGy9rd_1V_c-wEwIwbK0ayp249uRE?usp=sharing" target="_blank">Course study materials</a></li>
           <li ><a className='cli'href="http://sanskrit.uohyd.ac.in/scl" target="_blank">Saṃsādhanī toolkit website (University server)</a></li> 
             <li ><a className='cli' href="http://scl.samsaadhanii.in/scl" target="_blank">Saṃsādhanī toolkit website (Cloud)</a></li>
          
        </ul>
        
       </div>

       
      </div>
      </div>
    )
}
export default CourseModal_1;