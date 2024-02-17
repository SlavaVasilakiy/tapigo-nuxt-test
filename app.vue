<template>
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk: any) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
  }
})
</script>


<style>

</style>