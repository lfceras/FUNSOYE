import data from "../../../me_protegen.json";
import "./Me_Protegen.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { FreeMode, Navigation, Thumbs, Autoplay, Pagination } from "swiper";
import { useState, useEffect } from "react";
import { storage } from "../../../firebase/firebaseConfig";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const Me_Educan = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  // console.log(imageUrls);
  useEffect(() => {
    const imagesx = async () => {
      const urls = [];
      const images = ref(storage, "todos_educados/");
      const allImages = await listAll(images);
      for (const imageRef of allImages.items) {
        const url = await getDownloadURL(imageRef);
        urls.push(url);
      }
      setImageUrls(urls);
    };
    imagesx();
  }, []);
  return (
    <div className="principal_C">
      <div className="inter_c">
        <h2>{data[1].title1}</h2>
        <span>{data[1].title2}</span>
        <span>{data[1].title3}</span>
        <span>{data[1].title4}</span>
        <p>{data[1].description}</p>
        {data[1].description2.map((el, index) => (
          <div key={index}>
            <ul>
              <li>{el}</li>
            </ul>
          </div>
        ))}
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          grabCursor={true}
          loop={true}
          spaceBetween={10}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay, Pagination]}
          className="mySwiper2"
        >
          {imageUrls?.map((el, index) => (
            <SwiperSlide key={index}>
              <img src={el} alt="Not found" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {imageUrls?.map((el, index) => (
            <SwiperSlide key={index}>
              <img src={el} alt="Not found" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Me_Educan;
