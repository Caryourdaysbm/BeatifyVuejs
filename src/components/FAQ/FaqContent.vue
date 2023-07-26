<template>
    <section class="bg-grayBg px-10 py-16">
      <div class="faq-items">
        <hgroup
          v-for="items in faqData"
          :key="items.title"
          class="bg-white w-[20rem] relative max-w-[19rem] pt-10 px-7 z-20 space-y-2 shadow-xl"
        >
          <p class="text-aboutText text-md font-semibold">{{ items.title }}</p>
          <p class="text-sm">{{ items.content }}</p>
          <p
            class="py-10 flex items-center gap-8 text-aboutText cursor-pointer font-medium"
            @click="showMore(items)"
          >
            See more
            <i class="pi pi-chevron-right text-3xl"></i>
          </p>
        </hgroup>
      </div>
      <div class="flex justify-center mt-24">
        <a
          href="#"
          class="bg-faqBtn py-3 rounded-md text-white px-6 font-bold"
        >
          View more questions
        </a>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import FAQ from '../../assets/data/faq-data';
  
  const faqData = ref(FAQ);
  
  const showMore = (item) => {
    // Add your logic to handle showing more content
  };
  </script>
  
  <style>
  /* Your styles go here */
  </style>
  