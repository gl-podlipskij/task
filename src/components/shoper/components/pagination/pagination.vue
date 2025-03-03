<script setup lang="ts">
import {computed} from "vue";
import {useRoute} from "vue-router";

const props = defineProps({
  pageCount : {
    type: Number,
    default : 5,
  },
  page : Number,
});

const route = useRoute();

const pageIndexes = computed(()=>{
  return new Array(props.pageCount).fill(0).map((_, i) => i+1)
});



</script>

<template>
  <div class="pages">
    <router-link
        v-for="pageIndex in pageIndexes" :key="pageIndex"
        :to="{path:'',query: {
          ...route.query,
          page:pageIndex,
        }}"
        :class="`page-item ${pageIndex === page ? 'current' : ''}`"
    >
      {{pageIndex}}
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@import "../../../../styles/shoper";

.pages {
  display: flex;
  gap : 10px;
  .page-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 3px;
    border-width: 1px;
    border-color: $primary-main;
    color : #fff;
    cursor: pointer;
  }
  .current {
    background-color: $primary-main;
    color : #000;

  }
}
</style>