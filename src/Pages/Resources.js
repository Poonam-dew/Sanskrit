import React ,{ useState } from 'react';
import HiddenResource_1 from '../components/HiddenResource_1.js';
import HiddenResource_2 from '../components/HiddenResource_2.js';
import ResourceCard from '../components/ResourceCard.js';
import {ResourceInfo} from '../Helpers/ResourceInfo.js';
import '../Styles/Resources.css';

const Resources=()=>{
      const [showBtn_1,setBtn_1]=useState(false);
      const [showBtn_2,setBtn_2]=useState(false);
      const [transiton ,setTransition]=useState('');
    
  return(
    <div className="resources">
     <div className="resourceList">
       {/**Card_1**/}
       <ResourceCard id={ResourceInfo[0].id} heading={ResourceInfo[0].heading} subheading={ResourceInfo[0].subheading} showBtn_1={showBtn_1} setBtn_1={setBtn_1}/>
        {/*hidden resource link 1*/}
     { showBtn_1 &&<HiddenResource_1 AddId={setTransition ? 'transition' : 'notransition'} />}
       {/**Card 2**/}
       <ResourceCard id={ResourceInfo[1].id} heading={ResourceInfo[1].heading} subheading={ResourceInfo[1].subheading} showBtn_1={showBtn_2} setBtn_1={setBtn_2}/>
        {/*hidden resource link 2*/}
       { showBtn_2 &&<HiddenResource_2 AddId={setTransition ? 'transition' : 'notransition'} />}
     </div>
    </div>
    )
}
export default Resources;