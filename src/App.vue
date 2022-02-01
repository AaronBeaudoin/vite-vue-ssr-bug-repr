<script setup>
import { ref } from "vue";
import Test from "./Test.vue";

let test = ref(false);
setTimeout(_ => test.value = true, 0);
</script>

<template>
  <Test>
    <transition>
      <div v-if="test">
        Hello minimal reproduction!
      </div>
    </transition>
  </Test>
</template>
