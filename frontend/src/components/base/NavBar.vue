<template>
  <nav>
    <sub-menu 
      class="col"
      v-for="(subMenu, i) in subMenus" :key="i"
      :list="subMenu"
      :index="i"
    />
  </nav>
</template>

<script>
import SubMenu from '@/components/base/SubMenu.vue';

export default {
  name: 'NavBar',
  components: {
    SubMenu,
  },
  props: {
    subMenus: Array,
  }
}
</script>

<style>

</style>