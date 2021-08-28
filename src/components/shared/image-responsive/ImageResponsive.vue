<template>
    <img class="responsive-image" :src="url" :alt="title" />
</template>

<script>
export default {
    props: ['url', 'title']
}    
</script>

<style scoped>
.responsive-image {
  width: 100%;
}
</style>
