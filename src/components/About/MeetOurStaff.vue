<template>
  <div class="mx-10 py-6">
    <div class="flex">
      <h3 class="mx-auto text-md font-semibold py-10" data-aos="fade-down" data-aos-duration="2000">
        Meet our Staff
      </h3>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-10" data-aos="fade-right" data-aos-duration="2000">
      <div>
        <img src="../../assets/about/Amarachi.png" alt="" />
        <div class="flex flex-col justify-center">
          <h3 class="font-bold mx-auto">Amarachi Sylvia</h3>
          <p class="mx-auto">Content Writer</p>
        </div>
      </div>
      <div>
        <img src="../../assets/about/micheal.png" alt="Micheal" />
        <div class="flex flex-col justify-center">
          <h3 class="font-bold mx-auto">Micheal Taiwo</h3>
          <p class="mx-auto">Frontend Developer</p>
        </div>
      </div>
      <div>
        <img src="../../assets/about/austin.png" alt="Austin" />
        <div class="flex flex-col justify-center">
          <h3 class="font-bold mx-auto">Austin Jacobs</h3>
          <p class="mx-auto">Product Designer</p>
        </div>
      </div>
      <div>
        <img src="../../assets/about/kingsley.png" alt="Kingsley" />
        <div class="flex flex-col justify-center">
          <h3 class="font-bold mx-auto">Kingsley Obi</h3>
          <p class="mx-auto">Graphic Designer</p>
        </div>
      </div>
      <div>
        <img src="../../assets/about/mike.png" alt="Mike" />
        <div class="flex flex-col justify-center">
          <h3 class="font-bold mx-auto">Mike Essien</h3>
          <p class="mx-auto">Product Manager</p>
        </div>
      </div>
      <div>
        <img src="../../assets/about/andrew.png" alt="Andrew" />
        <div class="flex flex-col justify-center">
          <h3 class="font-bold mx-auto">Andrew Ali</h3>
          <p class="mx-auto">Mobile Developer</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const props = defineProps();
  AOS.init();
</script>

<style>
/* Your styles go here */
</style>
