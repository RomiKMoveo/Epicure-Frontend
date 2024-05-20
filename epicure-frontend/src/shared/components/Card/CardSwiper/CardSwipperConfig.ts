import { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper/modules";

const CardSwipperConfig = (spaceBetween: number) => ({
    className: 'swiper',
    modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade],
    initialSlide: 0,
    spaceBetween: spaceBetween,
    slidesPerView: 1,
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    breakpoints: {
        900: {
            autoplay: false,
            spaceBetween: spaceBetween - 10,
            slidesPerView: 2.5,
            touchRatio: 1
        },
    },
    watchOverflow: true
});

export default CardSwipperConfig;