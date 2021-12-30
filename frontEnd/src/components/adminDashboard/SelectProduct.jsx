import MarcasSlider from "./../index/MarcasSlider";
import Card from "./../index/Card"
const Index = () => {

    return (  
    <div className="min-h-screen flex flex-col bg-gray-200 justify-start">
            <MarcasSlider clickable={true}/>
    <div className="container">
    <div className="grid justify-center sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 mt-2">
 <Card clickable={true}/>
    </div>
    </div>
    </div> );
}
 
export default Index;