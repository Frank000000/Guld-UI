<template>
  <button :class="[
      'btn-style',
      {
          'is-large': size === 'large',
          'is-normal': size === 'normal',
          'is-small': size === 'small',
          'is-primary': type === 'primary',
          'is-success': type === 'success',
          'is-error': type === 'error',
          'is-warn': type === 'warn',
          'is-info': type === 'info',
          'is-disabled': disabled,
          'is-long': long,
          'is-round': round
      }
  ]">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

type sizeType = 'normal' | 'small' | 'large';
type btnType = 'primary' | 'success' | 'error' | 'warn' | 'info';

const props = defineProps({
  size: {
    type: String as PropType<sizeType>,
    default: 'normal'
  },
  type: {
    type: String as PropType<btnType>,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  long: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped lang="scss">
.btn-style {
  position: relative;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  background: transparent;
  font-size: 14px;
  cursor: pointer;
}

.btn-style.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-style.is-long {
  width: 100%;
}

.btn-style.is-round {
  border-radius: 999999999px
}

.btn-style.is-normal {
  padding: 8px 18px;
}

.btn-style.is-small {
  padding: 6px 14px;
}

.btn-style.is-large {
  padding: 10px 22px;
}

.btn-style.is-primary {
  background-color: #2d8cf0;
  border-color: #2d8cf0;
  color: #ffffff;
}

.btn-style.is-success {
  background-color: #47cb89;
  border-color: #47cb89;
  color: #ffffff;
}

.btn-style.is-error {
  background-color: #f16643;
  border-color: #f16643;
  color: #ffffff;
}

.btn-style.is-warn {
  background-color: #f90;
  border-color: #f90;
  color: #ffffff;
}

.btn-style.is-info {
  background-color: #fff;
  border-color: #dcdee2;
  color: #333333;
}
</style>
