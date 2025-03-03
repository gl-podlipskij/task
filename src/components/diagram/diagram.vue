<script setup lang="ts">
import {computed, reactive, ref, watchEffect} from "vue";
import Fragment, {generateFragments} from "./utils/fragment.ts";
import FragmentPath from "./fragmentPath.vue";
import gsap from 'gsap';
import {Linear} from "gsap/gsap-core";

export type DiagramProps = {
  size?: number;
  maxScale?: number;
  animationSpeed ?: number;
}

const props = defineProps<DiagramProps>();

const size = props.size ?? 400;
const maxScale = props.maxScale ?? 2;


const scale = reactive({
  value : 1,
});
const fragments = ref(generateFragments(60));

const maxSize = computed(()=>{
  return size * maxScale;
});

watchEffect(()=>{
  gsap.to(scale, {
    value : maxScale,
    duration : 1,
    stagger :{
      //each : 0.5,
      repeatDelay : 0.5,
      repeat : -1,
      yoyo : true,
      ease : Linear.easeIn,
    }
  });
});

</script>

<template>
    <svg :style="{width:maxSize + 'px', height:maxSize + 'px'}" class="diagram">
      <fragment-path
          v-for="fragment in fragments"
          :fragment="fragment as Fragment"
          :size="size"
          :max-scale="maxScale"
          :scale="scale.value"
      />
    </svg>
</template>

<style scoped>
.diagram {
  background-color: black;
}
</style>