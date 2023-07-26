<template>
    <div class="mx-auto" data-aos="fade-up" data-aos-duration="2000">
        <div>
    <div class="bg-aboutBg mx-auto w-full px-10 py-8">
      <div
        class="outline outline-2 outline-aboutText max-w-6xl mx-auto bg-grayBg rounded-3xl flex flex-col md:flex-row justify-center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div class="md:px-10 md:w-1/4">
          <h3 class="text-aboutText font-bold text-2xl md:mt-[22rem]">
            Our job is not to create content...
          </h3>
        </div>
        <div>
          <img src="../assets/about/unique.png" alt="" />
        </div>
        <div class="md:px-10 md:w-1/4">
          <h3 class="text-aboutText font-bold text-2xl md:mt-[22rem]">
            ...our job is to change the world of people who consume it.
          </h3>
        </div>
      </div>
    </div>
  </div>
      <MeetOurStaff />
    </div>
 </template>
  
  <script>
  import { ref, onMounted } from 'vue';

  import MeetOurStaff from '../components/About/MeetOurStaff.vue';
  import AOS from "aos";
  import "aos/dist/aos.css";
  
  export default {
    components: {
      MeetOurStaff,
    },
    setup() {
      // Initialize AOS on component mount
      onMounted(() => {
        AOS.init();
      });
  
      return {};
    },
  };
  </script>
  
  <style>
  /* Your styles go here */
  </style>
  