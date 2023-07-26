<template>
  <div class="mx-auto" data-aos="fade-up" data-aos-duration="2000">
    <Unique />
    <MeetOurStaff />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Unique from '../components/About/Unique.vue';
import MeetOurStaff from '../components/About/MeetOurStaff.vue';
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  components: {
    Unique,
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
