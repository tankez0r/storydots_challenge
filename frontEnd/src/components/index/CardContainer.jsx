import Card from "./Card";
import { useEffect, useState } from "react";
import { queryGetAll  } from "../services/public";


const CardContainer = () => {
const [Cards, setCards] = useState([])

useEffect(() => {

queryGetAll('productos', setCards);
}, [])
console.log(Cards)

    return (
         <div className="grid justify-center sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 mt-2">
 <Card clickeable={true}/>
    </div> );
}
 
export default CardContainer;