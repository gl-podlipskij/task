<script setup lang="ts">
import Fragment, {getShapeCenter} from "./utils/fragment.ts";
import {computed} from "vue";
import Vector2 from "./utils/vector.ts";
import {generateRandomColor} from "./utils/rgb.ts";

export type FragmentProps = {
  fragment : Fragment;
  size : number;
  scale : number;
  maxScale : number;
}

const color = generateRandomColor();

const props = defineProps<FragmentProps>();

const resolution = computed(() => {
  return new Vector2(props.size * props.scale, props.size * props.scale);
});

const points = computed(()=>{
  const vertexes =  props.fragment.vertexes.map(vertex => vertex.mul(resolution.value));
  const center = getShapeCenter(vertexes);

  const offset = (props.maxScale * props.size) / 2 - (props.size * props.scale) / 2;


  const scaledVertexes = vertexes.map(vertex=>{
    const radius = vertex.sub(center);
    const scaledRadius = radius.scl(1 / props.scale);
    return center.pls(scaledRadius);
  });

  return scaledVertexes.map(vertex=>{
    return `${vertex.x + offset} ${vertex.y + offset}`;
  }).join(' ');

});

</script>

<template>
  <polygon
      :fill="color.toString()"
      :points="points"
  />
</template>

<style scoped>

</style>