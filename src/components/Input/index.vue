<template>
  <div class="search">
    <input :type='type' :placeholder="placeholder" :disabled="disabled"
      :class="['search__input',     { 'is-disabled': disabled }]" :readonly="readonly" @input="handleInput"
      @change="handleChange">
    <div class="search__icon">
      <Icon icon="akar-icons:search"></Icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
const emit = defineEmits(['change', 'input'])

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'password'
  }
});

const handleInput = (event: any) => {
  let { value } = event.target
  emit('input', value)
}

const handleChange = (event: any) => {
  let { value } = event.target
  emit('change', value)
}

</script>

<style lang="scss" scoped>
$shadow: .3rem .3rem .6rem var(--greyLight-2),
  -.2rem -.2rem .5rem var(--white);
$inner-shadow: inset .2rem .2rem .5rem var(--greyLight-2),
  inset -.2rem -.2rem .5rem var(--white);

.search {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  position: relative;
  display: flex;
  align-items: center;

  .is-disabled {
    opacity: 0.5;
    // cursor: not-allowed;
  }

  &__input {
    width: 20.4rem;
    height: 4rem;
    border: none;
    border-radius: 1rem;
    font-size: 1.4rem;
    padding-left: 3.8rem;
    box-shadow: $inner-shadow;
    background: none;
    font-family: inherit;
    color: var(--greyDark);

    &::placeholder {
      color: var(--greyLight-3);
    }

    &:focus {
      outline: none;
      box-shadow: $shadow;

      +.search__icon {
        color: var(--primary);
      }
    }
  }

  &__icon {
    height: 2rem;
    position: absolute;
    font-size: 2rem;
    padding: 0 1rem;
    display: flex;
    color: var(--greyDark);
    transition: .3s ease;
  }
}

/* Chrome浏览器 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

/* Firefox浏览器 */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>