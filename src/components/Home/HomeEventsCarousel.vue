<template>
    <div class="py-9">
      <swiper
        :space-between="30"
        :centered-slides="true"
        :autoplay="{ delay: 7000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :modules="[Autoplay, Pagination]"
        class="mySwiper"
      >
        <!-- slide 1 -->
        <swiper-slide>
          <div class="event-container">
            <div>
              <img src="../../assets/event 1.svg" class="lg:w-[75%]" />
            </div>
            <div class="event-carousel-text">
              <h3 class="font-semibold">TECH-A-THON</h3>
              <p>
                January 2023, we will be having a competition across all units
                (Tech-a-thon).
              </p>
              <!-- <p>
                This is going to run from the second week of January till the
                end of January. Then on the 25th of February, we will have our
                Tech-a-thon festival at Victoria Island.{" "}
              </p> -->
              <a href="#" class="event-readmore">Learn more</a>
            </div>
          </div>
        </swiper-slide>
  
        <!-- slide 2 -->
        <swiper-slide>
          <div class="event-container">
            <div>
              <img src="../../assets/event 2.svg" class="lg:w-[75%]" />
            </div>
            <div class="event-carousel-text">
              <h3 class="font-semibold">BOOT CAMP</h3>
              <p>
                March 2023, we will be heading off to a boot camp session with
                Microsoft senior devs!!!
              </p>
              <!-- <p>
                This is going to be a great opportunity to learn, share your
                Tech experience, meet & greet, and much more.
              </p> -->
              <a href="#" class="event-readmore">Learn more</a>
            </div>
          </div>
        </swiper-slide>
  
        <!-- slide 3 -->
        <swiper-slide>
          <div class="event-container">
            <div>
              <img src="../../assets/event 3.svg" class="lg:w-[75%]" />
            </div>
            <div class="event-carousel-text">
              <h3 class="font-semibold">VACATION</h3>
              <p>April is going to be a vacation season for us at Beatify!!!</p>
              <!-- <p>
                All work and no play makes whatever a dull dude, so we are
                moving out!!! It promises to be fun and exciting.
              </p> -->
              <a href="#" class="event-readmore">Learn more</a>
            </div>
          </div>
        </swiper-slide>
  
        <!-- slide 4 -->
        <swiper-slide>
          <div class="event-container">
            <div>
              <img src="../../assets/event 4.svg" class="lg:w-[75%]" />
            </div>
            <div class="event-carousel-text">
              <h3 class="font-semibold">SEMINAR</h3>
              <p>
                The month of May is going to be a busy one for us at Beatify.
              </p>
              <!-- <p>
                We are going to have a seminar training on AI from the first
                week of April.
              </p> -->
              <a href="#" class="event-readmore">Learn more</a>
            </div>
          </div>
        </swiper-slide>
  
        <!-- slide 5 -->
        <swiper-slide>
          <div class="event-container">
            <div>
              <img src="../../assets/event 5.svg" class="lg:w-[75%]" />
            </div>
            <div class="event-carousel-text">
              <h3 class="font-semibold">AWARD PARTY</h3>
              <p>
                While we wrap up the month of May, we have got a party and
                awards night coming up!!!
              </p>
              <a href="#" class="event-readmore">Learn more</a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import 'swiper/swiper-bundle.css'; // Import the main styles from the swiper package
  import { Autoplay, Pagination } from 'swiper'; // Import additional Swiper modules
  </script>
  
  <style>
  /* Your styles go here */
  </style>
  