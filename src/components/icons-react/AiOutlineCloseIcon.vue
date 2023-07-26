// AiOutlineCloseIcon.vue
<template>
  <div>
    <AiOutlineClose class="text-4xl text-black lg:hidden cursor-pointer" @click="onClick" />
  </div>
</template>

<script>
import { defineComponent, inject, ref } from 'vue';
import { AiOutlineClose } from 'react-icons/ai';

export default defineComponent({
  components: {
    AiOutlineClose,
  },
  setup() {
    const onClick = () => {
      emit('click'); // This emits the 'click' event to the parent component
    };

    return {
      onClick,
    };
  },
});
</script>
