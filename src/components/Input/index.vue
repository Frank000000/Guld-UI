<template>
  <div class="search">
    <input type="text" class="search__input" placeholder="Search...">
    <div class="search__icon">
      <!-- <Icon icon="akar-icons:search"></Icon> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
  // import { Icon } from '@iconify/vue';
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