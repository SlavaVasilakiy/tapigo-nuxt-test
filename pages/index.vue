<template>
  <main class="main">
    <FigmaPart1small />
    <FigmaPart2small />
  </main>
</template>

<script setup>
useHead({
  titleTemplate: () => {
    return 'Tapigo figma';
  }
});

</script>

<style>
@import "~/assets/css/tapigoFigmaMain.css";
@import "~/assets/css/tapigoFigmaLinks.css";
</style>