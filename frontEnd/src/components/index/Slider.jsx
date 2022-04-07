       // Import Swiper styles
       import 'swiper/css';
       import "swiper/css/pagination";
   // Import Swiper React components
    import { Swiper, SwiperSlide } from 'swiper/react';
    import {Pagination, Scrollbar, A11y, Autoplay, Zoom} from 'swiper';
import { memo } from 'react';

const Slider = memo ( ({imagenes}) =>  {

  const imageList = imagenes.map((url) =>  <SwiperSlide key={url.id}><img  src={url.image_url} alt="asd"/></SwiperSlide> )
    return ( <div className=" overflow-hidden grid grid-cols-1">
    <div>

      <Swiper
         modules={[Pagination, Scrollbar, A11y, Autoplay ]}
         spaceBetween={0}
         slidesPerView={1}
         autoplay={{delay: 3000, stopOnLastSlide: false, disableOnInteraction: false }}
         pagination={{ clickable: true }}
       
      >
    
        {imageList}
      </Swiper>
      </div>
      </div> );
})
 
export default Slider;