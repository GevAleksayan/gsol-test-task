<template>
  <h2>Profile</h2>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    caterogories() {
      return this.$store.getters.categories
    }
  },
  mounted() {
    this.$store.dispatch('getCategories')
  },
}
</script>