<template>
  <div>
    <!-- <g-button type="error" size="large" :disabled="false" round>button</g-button>
    <g-input style="margin-top:20px" type="number" @input="handleInput" @change="handleChange" v-model="inputVal"
      :readonly='true'>
    </g-input>
    <g-calendar style="margin-top: 30px;"></g-calendar> -->
    <g-dropdown style="margin-top: 30px;" :options="animalOptions"></g-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const inputVal = ref('啊好😄')
const animalOptions = ref()
animalOptions.value = [
  {
    title: 'mouse',
    id: '1'
  },
  {
    title: 'dog',
    id: '2'
  },
  {
    title: 'cat',
    id: '3'
  }
]


const handleInput = (e: any): void => {
  // let { value } = e.target
  // inputVal.value=value
  // console.log('input==', value,inputVal)
  console.log('input==', e);
}
const handleChange = (value: any): void => {
  console.log('change==', value);
}
</script>

<style scoped lang="scss">

</style>