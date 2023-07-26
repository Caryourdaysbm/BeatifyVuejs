<template>
    <section class="bg-grayBg">
      <PurpleGradient>
        <h1 class="mb-6">FAQ</h1>
        <p class="text-xl">Frequently Asked Questions</p>
      </PurpleGradient>
      <FaqContent />
    </section>
  </template>
  
  <script setup>
  import FaqContent from "../components/FAQ/FaqContent.vue";
  import PurpleGradient from "../components/UI/PurpleGradient.vue";
  </script>
  
  <style>
  /* Your styles go here */
  </style>
  