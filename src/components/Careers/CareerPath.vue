<template>
  <div>
    <div
      class="mx-auto py-5 px-2 lg:py-10 lg:px-[26rem]"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h3 class="text-center font-bold text-2xl lg:px-[6rem]">
        Choose Your <span class="text-lighterPurple">Career</span> Path With Us
      </h3>
      <p class="text-center font-semibold">
        We are looking for dynamic and creative individuals who are willing to
        learn and advance their knowledge in the following fields.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
});
</script>

<style>
/* Your styles go here */
</style>
