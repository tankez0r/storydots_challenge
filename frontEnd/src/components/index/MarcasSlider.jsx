import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay  } from 'swiper';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import {RectShape} from 'react-placeholder/lib/placeholders';


import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay";
import { useEffect, useState } from 'react';
import { queryGetAll } from '../services/public';



const MarcasSlider = ({clickable}) => {
  const [contentLoaded, setContentLoaded] = useState(true)
  const [marcas, setMarcas] = useState([])

  useEffect(() => {

    queryGetAll('marcas', setMarcas);
    }, [])

  const setTimeTrue = (e)=>{setTimeout(() => {
    setContentLoaded(true)
  }, 3000)};
  const awesomePlaceholder = (
    <div className='my-awesome-placeholder'>
      <RectShape color="#6a7d88"  className="my-1"  style={{width: 250, height: 150}}/>
      </div>
  );
const marcasMap = marcas.map(marca => clickable? 
   <SwiperSlide key={marca.id}>
  <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}><></></ReactPlaceholder>
  <Link className={!contentLoaded? "hidden" : "block"} to={`/forms?id=${marca.id}&type=marcas`}><img  src={marca.logo_imagen} width={300} height={100} alt={marca.nombre}/></Link>
</SwiperSlide>
:
<SwiperSlide key={marca.id}>
     <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}><></></ReactPlaceholder>
     <img className={!contentLoaded? "hidden" : "block"} src={marca.logo_imagen} width={300} height={100}/>
   </SwiperSlide>
)


    return ( 




        <div className="grid pt-2 pb-2 my-1 bg-slate-300 px-5 mx-auto h-64">
            <div className="">
<h2 className="text-center text-gray-600 text-xl font-bold">Marcas Disponibles</h2>
<div  className=" overflow-hidden grid grid-cols-1">
    <div>
 <Swiper onLoad={setTimeTrue}
modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{delay: 3000, stopOnLastSlide: false, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      breakpoints= {{
        100: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    }
    >

{marcasMap}
  
   
    </Swiper>
    </div>
    </div>
</div>

        </div>
     );
}
 
export default MarcasSlider;