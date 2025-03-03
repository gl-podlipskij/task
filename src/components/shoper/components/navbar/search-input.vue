<script setup lang="ts">
import {useTemplateRef} from "vue";
import Button from "../lib/button.vue";

const query = defineModel();
const emit = defineEmits(['onSubmit']);

const searchInput = useTemplateRef('searchInput');
const focus = ()=>{
  if (searchInput.value) {
    searchInput.value.focus();
  }
}
const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    emit('onSubmit', query.value);
  }
}

</script>

<template>
  <div @keydown="onKeyDown" ref="searchInput" class="search-input">
    <input

        v-model="query"
        @focus="focus"
        placeholder='Шукати...'
    />
    <Button
        @click="emit('onSubmit', query)"
    >Пошук</Button>
  </div>
</template>

<style scoped lang="scss">
@import "../../../../styles/shoper";
.search-input {
  display: flex;
  border-radius: 5px;
  border-width: 1px;
  border-color: $grey;
  &.focus {
    background-color: #009e4a;
  }
  input {
    margin : 12px 15px;
    flex-grow: 1;
    background: transparent;
    font-size: 0.9em;
    color : #fff;
  }

}
</style>