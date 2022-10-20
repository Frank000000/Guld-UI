<template>
  <div class="search">
    <input :type='type' :placeholder="placeholder" :disabled="disabled"
      :class="['search__input',{ 'is-disabled': disabled }]" :readonly="disabled" @input="handleInput"
      @change="handleChange">
    <div class="search__icon">
      <Icon icon="akar-icons:search"></Icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { PropType, ref, defineEmits, defineProps } from 'vue';
const emit = defineEmits(['change'])

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: '请输入...'
  },
  type: {
    type: String,
    default: 'password'
  }
});

const handleInput = (event: any) => {
  let { value } = event.target
}

const handleChange = (event: any) => {
  emit('change', event.target.value)
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
</style>