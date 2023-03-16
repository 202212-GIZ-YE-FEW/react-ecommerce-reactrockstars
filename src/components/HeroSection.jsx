import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectFade, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/effect-fade"

function HeroSection() {
  return (
    <Swiper
      className="swiper-container mySwiper"
      effect={"fade"}
      loop={true}
      navigation={{
        nextEl: ".swiper-next-button",
        prevEl: ".swiper-prev-button"
      }}
      pagination={{
        el: ".swiper-pagination",
        type: "fraction",
      }}
      modules={[Navigation, EffectFade, Pagination]}
    >
      <SwiperSlide className="main" id="beach">
        <div className="left-side">
          <div className="main-wrapper">
            <h3 className="main-header">Closca Bottle</h3>
            <h1 className="main-title">Beach</h1>
            <h2 className="main-subtitle">€ 39.90</h2>
          </div>
          <div className="main-content">
            <div className="main-content__title">In 20 years, there could be more plastic in our oceans than fish.</div>
            <div className="main-content__subtitle">Plastic pollution injures more than 100.000 marine animals every year.It takes around 450 years for one plastic bottle to decompose.</div>
            <div className="more-menu">
              Shop Now
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="-5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
              </svg>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="right-side__img">
            <img className="bottle-bg" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Beach_1920.jpg?v=1029210661698833530" alt="" />
            <img className="bottle-img" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="main" id="savanna">
        <div className="left-side">
          <div className="main-wrapper">
            <h3 className="main-header">Closca Bottle</h3>
            <h1 className="main-title">Savanna</h1>
            <h2 className="main-subtitle">€ 39.90</h2>
          </div>
          <div className="main-content">
            <div className="main-content__title">The Earth’s area affected by desertification is approx 11 times India’s size.
            </div>
            <div className="main-content__subtitle">The Savannas act as a carbon sink, absorbing CO2 from the atmosphere and helping to maintain the balance of global temperatures.</div>
            <div className="more-menu">
              Shop Now
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="-5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
              </svg>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="right-side__img">
            <img className="bottle-bg" src="https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="" />
            <img className="bottle-img" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/savanna_OK.png?v=4783820813181844557" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="main" id="glacier">
        <div className="left-side">
          <div className="main-wrapper">
            <h3 className="main-header">Closca Bottle</h3>
            <h1 className="main-title">Glacier</h1>
            <h2 className="main-subtitle">€ 39.90</h2>
          </div>
          <div className="main-content">
            <div className="main-content__title">Glaciers contain 75% of the World's freshwater.
            </div>
            <div className="main-content__subtitle">The effects of melting ice glaciers are biodiversity loss, the rising of the sea level and the deficiency of freshwater, among others.</div>
            <div className="more-menu">
              Shop Now
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="-5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
              </svg>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="right-side__img">
            <img className="bottle-bg" src="https://www.discover-the-world.com/app/uploads/2018/05/chile-patagonia-calving-glacier-is-1150x863-c-default.jpg" alt="" />
            <img className="bottle-img" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Glacier_OK.png?v=7185877315400411030" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="main" id="coral">
        <div className="left-side">
          <div className="main-wrapper">
            <h3 className="main-header">Closca Bottle</h3>
            <h1 className="main-title">Coral</h1>
            <h2 className="main-subtitle">€ 39.90</h2>
          </div>
          <div className="main-content">
            <div className="main-content__title">We will have lost 60% of our coral reefs by 2030.
            </div>
            <div className="main-content__subtitle">Coral reefs are essential to humans, as they protect the shorelines and are a source of
              nutrients and habitat for thousands of marine species.</div>
            <div className="more-menu">
              Shop Now
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="-5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
              </svg>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="right-side__img">
            <img className="bottle-bg" src="https://images.unsplash.com/photo-1546500840-ae38253aba9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3260&q=80" alt="" />
            <img className="bottle-img" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Coral_OK.png?v=14596995446202437119" />
          </div>
        </div>
      </SwiperSlide>
      <div className="button-wrapper">
        <div className="swiper-button swiper-prev-button">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </div>
        <div className="swiper-button swiper-next-button">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </Swiper>
  )
}

export default HeroSection