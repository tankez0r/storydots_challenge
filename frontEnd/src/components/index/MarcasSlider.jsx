import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay  } from 'swiper';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import {RectShape} from 'react-placeholder/lib/placeholders';


import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay";
import { useContext } from 'react';
import  AppContextProvider  from '../context/appContext';


const MarcasSlider = ({clickable}) => {
  const contentLoaded = useContext(AppContextProvider)
  

  const awesomePlaceholder = (
    <div className='my-awesome-placeholder'>
      <RectShape color="#6a7d88"  className="my-1"  style={{width: 250, height: 150}}/>
      </div>
  );
    return ( 
        <div className="grid pt-2 pb-2 my-1 bg-slate-300 px-5 mx-auto h-64">
            <div className="">
<h2 className="text-center text-gray-600 text-xl font-bold">Marcas Disponibles</h2>
<div  className=" overflow-hidden grid grid-cols-1">
    <div>
{clickable?
 <Swiper
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
      {

      }
   <SwiperSlide>
     <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}><></></ReactPlaceholder>
     <Link className={!contentLoaded? "hidden" : "block"} to="/"><img src="https://drive.google.com/uc?export=download&id=1nhWvda197wSUx3RsVRRduGssoLaOCEN5" width={300} height={100}/></Link>
   </SwiperSlide>
   <SwiperSlide>
     <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}><></></ReactPlaceholder>
     <Link className={!contentLoaded? "hidden" : "block"} to="/"><img src="https://drive.google.com/uc?export=download&id=1nhWvda197wSUx3RsVRRduGssoLaOCEN5" width={300} height={100}/></Link>
   </SwiperSlide>
   <SwiperSlide>
     <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}><></></ReactPlaceholder>
     <Link className={!contentLoaded? "hidden" : "block"} to="/"><img src="https://drive.google.com/uc?export=download&id=1nhWvda197wSUx3RsVRRduGssoLaOCEN5" width={300} height={100}/></Link>
   </SwiperSlide>
   <SwiperSlide>
     <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}><></></ReactPlaceholder>
     <Link className={!contentLoaded? "hidden" : "block"} to="/"><img src="https://drive.google.com/uc?export=download&id=1nhWvda197wSUx3RsVRRduGssoLaOCEN5" width={300} height={100}/></Link>
   </SwiperSlide>
   <SwiperSlide>
     <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}><></></ReactPlaceholder>
     <Link className={!contentLoaded? "hidden" : "block"} to="/"><img src="https://drive.google.com/uc?export=download&id=1nhWvda197wSUx3RsVRRduGssoLaOCEN5" width={300} height={100}/></Link>
   </SwiperSlide>
   <SwiperSlide>
     <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}><></></ReactPlaceholder>
     <Link className={!contentLoaded? "hidden" : "block"} to="/"><img src="https://drive.google.com/uc?export=download&id=1nhWvda197wSUx3RsVRRduGssoLaOCEN5" width={300} height={100}/></Link>
   </SwiperSlide>
   <SwiperSlide>
     <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}><></></ReactPlaceholder>
     <Link className={!contentLoaded? "hidden" : "block"} to="/"><img src="https://drive.google.com/uc?export=download&id=1nhWvda197wSUx3RsVRRduGssoLaOCEN5" width={300} height={100}/></Link>
   </SwiperSlide>
   
    </Swiper>
    :
<Swiper
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
      {

      }
     <SwiperSlide>
     <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}><></></ReactPlaceholder>
     <img className={!contentLoaded? "hidden" : "block"} src="https://drive.google.com/uc?export=download&id=1nhWvda197wSUx3RsVRRduGssoLaOCEN5" width={300} height={100}/>
   </SwiperSlide>
   <SwiperSlide>
     <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}><></></ReactPlaceholder>
     <img className={!contentLoaded? "hidden" : "block"} src="https://drive.google.com/uc?export=download&id=1nhWvda197wSUx3RsVRRduGssoLaOCEN5" width={300} height={100}/>
   </SwiperSlide>
   <SwiperSlide>
     <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}><></></ReactPlaceholder>
     <img className={!contentLoaded? "hidden" : "block"} src="https://drive.google.com/uc?export=download&id=1nhWvda197wSUx3RsVRRduGssoLaOCEN5" width={300} height={100}/>
   </SwiperSlide>
   <SwiperSlide>
     <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}><></></ReactPlaceholder>
     <img className={!contentLoaded? "hidden" : "block"} src="https://drive.google.com/uc?export=download&id=1nhWvda197wSUx3RsVRRduGssoLaOCEN5" width={300} height={100}/>
   </SwiperSlide>
   <SwiperSlide>
     <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}><></></ReactPlaceholder>
     <img className={!contentLoaded? "hidden" : "block"} src="https://drive.google.com/uc?export=download&id=1nhWvda197wSUx3RsVRRduGssoLaOCEN5" width={300} height={100}/>
   </SwiperSlide>
   <SwiperSlide>
     <ReactPlaceholder showLoadingAnimation={true} customPlaceholder={awesomePlaceholder}  ready={contentLoaded}><></></ReactPlaceholder>
     <img className={!contentLoaded? "hidden" : "block"} src="https://drive.google.com/uc?export=download&id=1nhWvda197wSUx3RsVRRduGssoLaOCEN5" width={300} height={100}/>
   </SwiperSlide>
    </Swiper>

    


    }
    </div>
    </div>
</div>

        </div>
     );
}
 
export default MarcasSlider;