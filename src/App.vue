<template>
  <div>
    <g-button type="error" size="large" disabled round>button</g-button>
    <g-input style="margin-top:20px" type="number" placeholder="请输入密码" @input="handleInput" @change="handleChange">
    </g-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const handleInput = (e: any): void => {
  let { value } = e.target
  console.log('input==', value)
}
const handleChange = (value: any) => {
  console.log('change==', value);
}
</script>

<style scoped lang="scss">

</style>