import MarcasSlider from "./MarcasSlider";
import CardContainer from "./CardContainer"
const Index = () => {
  let taza ;
  const vaso = 1432124;
 taza= "té"
 taza= "sopa"
 taza="agua"

    return (  
    <div className="min-h-screen flex flex-col bg-gray-200 justify-start">
            <MarcasSlider/>
    <div className="container">
 <CardContainer/> 
 {
 

 
 console.log({vaso, taza})
 
 }
    </div>
    </div> );
}
 
export default Index;