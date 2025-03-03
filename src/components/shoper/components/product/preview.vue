<script setup lang="ts">
export type PreviewProps = {
  src : string;
}
const props = defineProps<PreviewProps>();
</script>

<template>
  <div class="container">
    <img :src="props.src" alt=""/>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  overflow: hidden;
}
</style>