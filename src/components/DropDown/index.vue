<template>
  <div class="it-select" @click="openSelect">
    <span class="it-select-input" @click.stop="openSelect">{{ fillName }}</span>
    <span :class="['triangle-down', { rotate: rotate }]" @click="openSelect"></span>
    <div :class="[
      'it-select-options-panel',
      showOptions ? 'show' : 'hidden',
    ]">
      <p class="it-select-option" v-for="(item, idx) in options" :key="idx" @click="getValue(item.title, item.pkid)">
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const options = ref([
  {
    title: '苹果',
    pkid: '1'
  },
  {
    title: '栗子',
    pkid: '2'
  },
  {
    title: '橘子',
    pkid: '3'
  }
])
let fillName = ref()
let rotate = ref(false)
let showOptions = ref(false)

const openSelect = () => {
  showOptions.value = !showOptions.value
  rotate.value = !rotate.value
}
const getValue = (title: any, pkid: any) => {
  fillName.value = title
  console.log('title,pkid::', title.value);
}
</script>

<style scoped lang="scss">
.it-select {
  width: 100px;
  height: 30px;
  border: 1px solid rgba(0, 22, 93, 0.2);
  box-shadow: none !important;
  border-radius: 10px;
  position: relative;

  .it-select-input {
    width: calc(100% - 20px);
    height: 100%;
    line-height: 100%;
    text-align: center;
    cursor: pointer;
    border: none;
    padding: 10px;
    display: flex;
    align-items: center;
  }

  .triangle-down {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 6px solid rgba(201, 201, 201, 1);
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%) rotate(0deg);
    transition: transform 0.3s ease-in-out;
  }

  .rotate {
    transform: translateY(-50%) rotate(180deg);
  }

  .it-select-options-panel {
    position: absolute;
    width: 100%;
    top: calc(100% + 15px);
    left: 0;
    background: #ffffff;
    box-shadow: 0px 0px 15px rgba(32, 110, 242, 0.15);
    border-radius: 10px;
    max-height: 264px;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 99;

    .it-select-option {
      padding: 0 22px;
      cursor: pointer;
      height: 44px;
      line-height: 44px;
      font-size: 18px;
      color: #333333;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .it-select-option.check {
      color: #206ef2;
      background: #f5f7fe;
    }

    .it-select-option:hover {
      background: #f5f7fe;
      color: #206ef2;
    }
  }

  .show {
    display: block;
  }

  .hidden {
    display: none;
  }
}
</style>

