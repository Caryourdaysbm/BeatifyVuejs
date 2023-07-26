<template>
    <nav>
      <figure>
        <img src="../../assets/beatify-logo.png" alt="Beatify Logo" class="w-16 cursor-pointer" />
      </figure>
      <template v-if="!showExtension">
        <!-- Use PrimeIcons here -->
        <div class="nav-icons">
            <i class="pi pi-align-right nav-icons" @click="showNavHandler"></i>
        </div>
      </template>
      <template v-else>
        <!-- Use PrimeIcons here -->
        <div class="text-4xl text-black lg:hidden cursor-pointer">
            <i class="pi pi-times" @click="closeNavHandler"></i>
        </div>
      </template>
      <ul :class="{ 'mobile-nav nav-link-container': showExtension, 'nav-link-container hidden-class': !showExtension }">
        <li class="nav-links" @click="closeNavHandler">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-links" @click="closeNavHandler">
          <router-link to="/services">Services</router-link>
        </li>
        <li class="nav-links" @click="closeNavHandler">
          <router-link to="/events">Events</router-link>
        </li>
        <li class="nav-links" @click="closeNavHandler">
          <router-link to="/careers">Careers</router-link>
        </li>
        <li class="nav-links" @click="closeNavHandler">
          <router-link to="/about">About Us</router-link>
        </li>
        <li class="nav-links mb-3 lg:mb-0" @click="closeNavHandler">
          <router-link to="/faq">FAQ</router-link>
        </li>
        <li class="text-white bg-navBtn px-5 py-3 rounded-lg" @click="closeNavHandler">
          <router-link to="/contactus">Contact Us</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const showExtension = ref(false);
  
  const showNavHandler = () => {
    showExtension.value = true;
  };
  
  const closeNavHandler = () => {
    showExtension.value = false;
  };
  </script>
  
  <style>
  /* Your styles go here */
  </style>
  