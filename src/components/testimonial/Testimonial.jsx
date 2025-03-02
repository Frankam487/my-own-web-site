import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Data } from "./Data"; // Assure-toi que le fichier Data.js existe
import "./testimonial.css";

const Testimonial = () => {
  return (
    <section className="testi container section">
      <h2 className="section__title">
        Mes clients disent <strong>...</strong>
      </h2>
      <span className="section__subtitle">Témoignages 🤞</span>

      <Swiper
        className="testi__container"
        loop={true}
        grabCursor={true}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2, spaceBetween: 48 },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => (
          <SwiperSlide className="testi__card" key={id}>
            <img src={image} alt={title} className="testi__img" />
            <h3 className="testi__name">{title}</h3>
            <p className="testi__description">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
