<script setup>
import Test from "./Test.vue";
</script>

<template>
  <Test>
    <transition>
      <div v-if="false"></div>
    </transition>
  </Test>
</template>
