import { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import Slider from "./Slider";
import {TextBlock, RectShape} from 'react-placeholder/lib/placeholders';



const Card = ({clickeable, id, name, images, descripcion}) => {
  const imagenes = images
const [contentLoaded, setContentLoaded] = useState(false)
const hideImage = contentLoaded? null: "hidden"
const setTimeTrue = (e)=>{setTimeout(() => {
  setContentLoaded(true)
}, 3000)};


const awesomePlaceholder = (
  <div className='my-awesome-placeholder'>
    <RectShape color="gray"  className="my-1"  style={{width: 220, height: 200}}/>
    <div className="grid grid-cols-12">
    <TextBlock rows={1} className="my-2 w-4 col-start-4 col-span-6" color="#6a7d88"/>
  
    <TextBlock rows={1} className="my-2 col-start-1 col-span-11" color='#90b0c3'/>
    <TextBlock rows={1} className="my-2 col-start-1 col-span-8" color='#90b0c3'/>
    </div>
  </div>
);



    return (
      <div >
   {clickeable? 
    <Link to={`/forms?id=${id}&type=productos`}>
   <div onLoad={setTimeTrue} className="bg-slate-200 mx-2 my-2 px-2 py-2  shadow-md hover:shadow-lg max-w-xs">
   <div className={hideImage}>
   <Slider imagenes={imagenes}  />
   </div>
   <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}>
   <h1 className="text-center text-lg font-bold">{name}</h1>
     <p className="text-sm text-center"> {descripcion} </p>
     </ReactPlaceholder>

   </div>
   </Link> 
   :

   <div className= "">
<div onLoad={setTimeTrue} className="bg-slate-200 mx-2 my-2 px-2 py-2  shadow-md hover:shadow-lg max-w-xs">
  
<div className={hideImage}>
<Slider imagenes={imagenes}  />
</div>
<ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}>
  <h1 className="text-center text-lg font-bold">{name}</h1>
  <p className="text-sm text-center"> {descripcion} </p>
 </ReactPlaceholder>
 </div>
</div> 
}
</div>


       
      );
}
 
export default Card;






