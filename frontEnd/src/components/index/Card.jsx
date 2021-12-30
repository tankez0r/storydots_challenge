import { useContext } from "react";
import { Link } from "react-router-dom";
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import Slider from "./Slider";
import AppContextProvider from "../context/appContext";
import {TextBlock, RectShape} from 'react-placeholder/lib/placeholders';



const Card = ({clickeable, id}) => {
  const imagenes = ["imagenes"]
const contentLoaded = useContext(AppContextProvider)




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
      <div>
   {clickeable? 
    <div className= "">
   <div className="bg-slate-200 mx-2 my-2 px-2 py-2  shadow-md hover:shadow-lg max-w-xs">
     
  
   <Slider imagenes={imagenes}  />
   <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}>
     <h1 className="text-center">Titulo ropa</h1>
     <p className="text-sm text-center"> Lorem ipsum dolor sit amet consectetur </p>
    </ReactPlaceholder>
   
   </div>
   </div> 
   :
<Link to={`/forms?id=${id}&type=productos`}>
   <div className="bg-slate-200 mx-2 my-2 px-2 py-2  shadow-md hover:shadow-lg max-w-xs">
   <Slider imagenes={imagenes}  />
   <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}>
     <h1 className="text-center">Titulo ropa</h1>
     <p className="text-sm text-center"> Lorem ipsum dolor sit amet consectetur </p>
     </ReactPlaceholder>

   </div>
   </Link> 
}
</div>
       
      );
}
 
export default Card;