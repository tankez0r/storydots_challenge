import MarcasSlider from "./../index/MarcasSlider";
import Card from "./../index/Card"
import { useState, useEffect } from "react";
import { queryGetAll } from "../services/public";

const Index = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
    
    queryGetAll('productos', setCards);
    }, [])
    const cardMaps = cards.map((card) =>{ return (<Card key={card.id} name={card.nombre} descripcion={card.descripcion} id={card.id} images={card.imagenes} clickeable={true} />)} );
    return (  
    <div className="min-h-screen flex flex-col bg-gray-200 justify-start">
            <MarcasSlider clickable={true}/>
    <div className="container">
    <div className="grid justify-center sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 mt-2">
{cardMaps}
    </div>
    </div>
    </div> );
}
 
export default Index;