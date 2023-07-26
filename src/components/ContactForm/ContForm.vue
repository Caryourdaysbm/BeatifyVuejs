<template>
    <div>
      <div class="block p-8 mx-4 mb-7 rounded-2xl shadow-lg bg-white max-w-md md:ml-40 lg:ml-96">
        <form class="pb-6" @submit.prevent="submitForm">
          <div class="form-group mb-6">
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-600 focus:outline-none"
              v-model="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div class="form-group mb-6">
            <input
              type="email"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-600 focus:outline-none"
              v-model="email"
              placeholder="Enter Your Email address"
            />
          </div>
          <div class="form-group mb-6">
            <textarea
              class="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 resize-none focus:text-gray-700 focus:bg-white focus:border-fuchsia-600 focus:outline-none"
              v-model="message"
              rows="3"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              class="w-32 px-2 py-2 block float-right bg-fuchsia-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-fuchsia-700 hover:shadow-lg focus:bg-fuchsia-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-fuchsia-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const submitForm = () => {
    // Add your form submission logic here
  };
  </script>
  
  <style>
  /* Your styles go here */
  </style>
  