<template>
    <section class="bg-[#F5F6F6]">
      <div class="pt-14 space-y-20 text-[#000405]">
        <!-- first flex -->
        <div
          class="flex flex-col max-w-6xl mx-auto px-10 space-y-14 md:flex-row md:items-center md:justify-between md:space-x-20 md:space-y-0 lg:space-x-6"
          v-aos:fade-up
          data-aos-duration="2000"
        >
          <!-- text -->
          <div class="flex flex-col flex-wrap space-y-8 lg:max-w-md">
            <h2 class="md:text-3xl lg:text-5xl font-semibold">
              The opportunity to
              <span class="text-[#563198]"> Hone your Tech Skills</span> is Here!
            </h2>
            <p class="font-medium md:max-w-md">
              We train interns, connect them to Tech companies that will employ them or give them an opportunity to render their Tech services to companies and brands that are willing to pay for such services.
            </p>
          </div>
          <!-- img -->
          <div class="lg:flex justify-end">
            <img src="../assets/enjoy.png" class="lg:w-[60%]" />
          </div>
        </div>
        <!-- Service -->
        <section class="max-w-6xl mx-auto px-10">
          <div class="space-y-9" v-aos:fade-up data-aos-duration="2000">
            <h2 class="text-center text-2xl font-semibold">Our Services</h2>
            <div class="flex flex-col space-y-9 md:items-center md:justify-between md:flex-row md:space-y-0 md:space-x-20 lg:space-x-6">
              <!-- Image -->
              <div>
                <img src="../assets/ImageIntern.png" class="lg:w-[75%]" />
              </div>
              <div class="lg:w-[50%] justify-start">
                <ul class="lg:w-[70%] md:max-w-md font-semibold text-lg pb-4 cursor-pointer list-disc ">
                  <li>
                    We give our interns real-world tasks to complete so they can hone their skills.
                  </li>
                  <li>
                    We also provide training so they can acquire the knowledge necessary to succeed in the real world.
                  </li>
                  <li>For exemplary work performed, bonuses are given.</li>
                </ul>
                <a class="text-[#341E5C] font-semibold">Learn More</a>
              </div>
            </div>
          </div>
        </section>
        <!-- Hiring -->
        <section class="max-w-6xl mx-auto px-10">
          <div class="flex flex-col-reverse md:flex-row md:items-center md:justify-between md:space-x-20 md:space-y-0 lg:space-x-6" v-aos:fade-up data-aos-duration="2000">
            <!-- text -->
            <div class="flex flex-col flex-wrap space-y-4 pt-12 md:pt-0 lg:max-w-md">
              <p class="font-semibold md:max-w-md">
                We serve as employment contractors for our interns. This we do by connecting them to businesses and organizations that will hire them
              </p>
              <a class="text-[#341E5C] font-semibold">Learn More</a>
            </div>
            <!-- img -->
            <div>
              <img src="../assets/hiring.png" class="lg:w-[60%]" />
            </div>
          </div>
        </section>
  
        <!--  -->
        <section class="bg-[#CCBEE7]">
          <div class="space-y-9 max-w-6xl mx-auto px-10 py-10" v-aos:fade-up data-aos-duration="2000">
            <div class="flex flex-col space-y-9 md:items-center md:justify-between md:flex-row md:space-y-0 md:space-x-20 lg:space-x-6">
              <!-- Image -->
              <div>
                <img src="../assets/handshake.png" class="lg:w-[75%]" />
              </div>
              <div class="lg:w-[50%] justify-start">
                <p class="lg:w-[70%] md:max-w-md font-semibold text-lg pb-4 cursor-pointer list-disc ">
                  We are like training institutions where we create a pathway for earning while learning. We think that learning may be enjoyable while also earning money back. Therefore, we came up with the idea of paying a commission of 40% for any successful project.
                </p>
                <a class="text-[#341E5C] font-semibold">Learn More</a>
              </div>
            </div>
          </div>
        </section>
        <!-- upcoming events -->
        <section>
          <div v-aos:fade-up data-aos-duration="2000">
            <h2 class="text-center text-2xl font-semibold">Upcoming Events</h2>
            <div>
              <HomeEventsCarousel />
            </div>
          </div>
        </section>
  
        <!-- What people are saying about us -->
        <section>
          <div class="max-w-6xl mx-auto px-10">
            <h2 class="text-center text-2xl font-semibold">What people are saying about us</h2>
            <div class="hidden md:block">
              <PeopleCarousel />
            </div>
            <div class="md:hidden">
              <PeopleCarouselMobile />
            </div>
          </div>
        </section>
      </div>
    </section>
  </template>
  
  <script>
  // Import any necessary components and assets
  import AOS from 'aos';
  import HomeEventsCarousel from "../components/Home/HomeEventsCarousel.vue";
  import PeopleCarousel from "../components/People/PeopleCarousel.vue";
  import PeopleCarouselMobile from "../components/People/PeopleCarouselMobile.vue";
  
  export default {
    name: 'Home',
    setup() {
      AOS.init();
    },
  };
  </script>
  
  <style>
  /* Your styles go here */
  </style>
  