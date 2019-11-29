<template>
  <div><a href="#"><span><i :class="company.logo"></i></span>{{ company.title }}</a></div>
</template>

<script>
export default {
  name: 'Branding',
  props: {
    company: Object,
  }
}
</script>

<style lang="scss" scoped>
  a {
    @include normal-block-color;
    @include link-style;
    span {
      padding: 0 5px;
    }
  }

</style>