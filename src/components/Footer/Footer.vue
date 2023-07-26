<template>
    <footer class="bg-[#CCBEE7] text-[#000405] w-full px-10 py-8">
      <div class="space-y-2 lg:flex lg:flex-col lg:justify-between lg:items-center mb-8">
        <p class="font-semibold">
          Subscribe to our Newsletter for more updates
        </p>
        <div class="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-4 md:space-y-0">
          <input
            type="email"
            placeholder="Email Address"
            class="px-4 py-1.5 border-[#563198] border-2 rounded-md focus:outline-none"
          />
          <button class="bg-[#563198] text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
      <div class="flex max-w-6xl mx-auto flex-col space-y-9 lg:space-y-0 lg:flex-row lg:items-start lg:justify-between">
        <!-- Logo -->
        <div>
          <img src="../../assets/beatify-logo.png" class="w-16" />
        </div>
  
        <!-- Beatify is for -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold">Beatify is for</h3>
          <div>
            <ul>
              <li>Startups</li>
              <li>People seeking to develop Tech skills</li>
              <li>Tech companies</li>
              <li>People seeking internship roles</li>
              <li>Brands and organizations</li>
            </ul>
          </div>
        </div>
        <!-- Support -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold capitalize">Support</h3>
          <div>
            <ul>
              <li>Contact Support</li>
              <li>Documentation</li>
              <li>Report Spam</li>
            </ul>
          </div>
        </div>
        <!-- Community -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold capitalize">Community</h3>
          <div>
            <ul>
              <li>Partners</li>
              <li>Blog</li>
              <li>Events</li>
              <li>Github</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>
        <!-- Socials Icon -->
        <div>
          <div class="flex space-x-6 lg:flex-col lg:space-x-0 lg:space-y-9">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div class="pt-16 max-w-6xl mx-auto">
        <div class="border border-[#241F2A]"></div>
        <p class="pt-8 text-center">Beatify © 2022. All Rights Reserved</p>
      </div>
    </footer>
  </template>
  
  <script>
  import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
  
  export default {
    components: {
      FaFacebookF,
      FaTwitter,
      FaInstagram,
      FaLinkedinIn,
    },
  };
  </script>
  
  <style>
  /* Your global styles go here */
  </style>
  