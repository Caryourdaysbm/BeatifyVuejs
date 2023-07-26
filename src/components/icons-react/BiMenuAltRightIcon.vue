// BiMenuAltRightIcon.vue
<template>
  <div>
    <BiMenuAltRight class="nav-icons" @click="onClick" />
  </div>
</template>

<script setup>
import { BiMenuAltRight } from 'react-icons/bi';

const onClick = () => {
  emit('click'); // This emits the 'click' event to the parent component
};
</script>
