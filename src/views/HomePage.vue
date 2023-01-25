<template>
  <h1>salam</h1>
<button @click="change">click me</button>
</template>

<script>
import router from "@/router";

export default {
  name: "HomePage",
  data() {
    return {
    }
  },
  methods: {
    change(){
      router.push('/next')
    }
  }
}
</script>

<style scoped>
</style>