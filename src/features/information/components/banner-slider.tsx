import { Swiper, SwiperSlide } from "swiper/react";
import { useBanners } from "../hooks/use-banner";
export default function BannerSlider() {
  const { data: banners } = useBanners();
  return (
    <div className="mt-8 md:mt-10 lg:mt-12">
      <Swiper
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4.3,
            spaceBetween: 24,
          },
        }}
        slidesPerView={1.15}
        spaceBetween={16}
      >
        {banners?.data?.map((banner) => (
          <SwiperSlide key={banner.banner_name}>
            <img alt={banner.banner_name} className="h-full w-full object-cover" src={banner.banner_image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
