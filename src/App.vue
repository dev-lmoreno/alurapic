<template>
  <div class="body">
    <menu-vue :routes="routes"/>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from './routes'
import Menu from './components/shared/menu/Menu'

export default {
  components: {
    'menu-vue': Menu
  },
  data() {
    return {
      routes
    }
  }
}
</script>

<style>
.body {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.page-enter, .page-leave-active {
  opacity: 0;
}

.page-enter-active, .page-leave-active {
  transition: opacity .4s;
}
</style>
