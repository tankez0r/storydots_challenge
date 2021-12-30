       // Import Swiper styles
       import 'swiper/css';
       import "swiper/css/pagination";
   // Import Swiper React components
    import { Swiper, SwiperSlide } from 'swiper/react';
    import {Pagination, Scrollbar, A11y} from 'swiper';
import { memo, useContext } from 'react';
import AppContextProvider from '../context/appContext';

const Slider = memo ( ({imagenes}) =>  {
  const contentLoaded = useContext(AppContextProvider)
  const imageList = imagenes.map(url =>   <SwiperSlide><img src={url} alt="asd"/></SwiperSlide> )
    return ( <div className=" overflow-hidden grid grid-cols-1">
    <div>

      <Swiper
         modules={[Pagination, Scrollbar, A11y]}
         spaceBetween={0}
         slidesPerView={1}
         pagination={{ clickable: true }}
         className={!contentLoaded?"hidden" : "block"}
      >
    
        <SwiperSlide>
          <img src="https://drive.google.com/uc?id=15xOmCdbwVFB4gAf3CbKrjS8Oq1Kc535Q"/></SwiperSlide>
        <SwiperSlide><img src="https://drive.google.com/uc?id=1GhNK0d-3ZnjjGO_aK2pekVubqKpFZB8f" /></SwiperSlide>
        {/* {imageList} */}
      </Swiper>
      </div>
      </div> );
})
 
export default Slider;