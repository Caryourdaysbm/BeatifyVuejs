<template>
    <div class="py-9 pl-14">
      <swiper :watch-slides-progress="true" :slides-per-view="3" :navigation="true" class="mySwiper">
        <!-- Slide 1 -->
        <swiper-slide>
          <div class="flex flex-col items-center w-[70%] mx-auto space-y-2">
            <div>
              <img :src="Anthony" />
            </div>
            <div class="text-center">
              <h3 class="font-bold">Anthony Obiora</h3>
              <p>Frontend Developer</p>
              <p class="text-sm pt-1">
                Beatify Internship program was my easiest route into tech. In less than one year, I got a job to work in a
                fintech company.
              </p>
            </div>
          </div>
        </swiper-slide>
  
        <!-- Slide 2 -->
        <swiper-slide>
          <div class="flex flex-col items-center w-[70%] mx-auto space-y-2">
            <div>
              <img :src="Seyi" />
            </div>
            <div class="text-center max-w-md">
              <h3 class="font-bold">Seyi Balogun</h3>
              <p>Product Designer</p>
              <p class="text-sm pt-1">
                As an intern at Beatify, I get paid. That’s not even the best part, I get a commission for each project I
                work on. That’s cool right?
              </p>
            </div>
          </div>
        </swiper-slide>
  
        <!-- Slide 3 -->
        <swiper-slide>
          <div class="flex flex-col items-center w-[70%] mx-auto space-y-2">
            <div>
              <img :src="Marcus" />
            </div>
            <div class="text-center max-w-md">
              <h3 class="font-bold">Anita Marcus</h3>
              <p>Human Resource Manager</p>
              <p class="text-sm pt-1">
                We’ve hired a few interns from Beatify into our company. I will tell you this, those guys are good.
              </p>
            </div>
          </div>
        </swiper-slide>
  
        <!-- Slide 4 -->
        <swiper-slide>
          <div class="flex flex-col items-center w-[70%] mx-auto space-y-2">
            <div>
              <img :src="Ken" />
            </div>
            <div class="text-center">
              <h3 class="font-bold">Ken Ayuba</h3>
              <p>CEO BIDA Networks</p>
              <p class="text-sm pt-1">
                We’ve hired a few interns from Beatify into our company. I will tell you this, those guys are good.
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import 'swiper/swiper-bundle.css'; // Import the main styles from the swiper package

  
  // Import the images
  const Anthony = require("../../assets/Anthony.png");
  const Seyi = require("../../assets/Seyi.png");
  const Marcus = require("../../assets/Marcus.png");
  const Ken = require("../../assets/Ken.png");
  </script>
  
  <style>
  /* Your styles go here */
  </style>
  