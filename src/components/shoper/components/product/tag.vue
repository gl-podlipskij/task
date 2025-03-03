<script setup lang="ts">
const props = defineProps<{tag:string}>();

</script>

<template>
  <span class="tag">{{props.tag}}</span>
</template>

<style scoped lang="scss">
@import "../../../../styles/shoper";

.tag {
  padding : 5px 10px;
  box-shadow: $card;
  color : #fff;
  text-transform: lowercase;
}
</style>