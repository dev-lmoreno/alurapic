<template>
  <div class="body">
    <h1 class="title">{{ title }}</h1>
    <ul class="list-pictures">
      <li class="list-pictures-item" v-for="picture in pictures" :key="picture.url">
        <panel>
          <img class="responsive-image" :src="picture.url" :alt="picture.title" />
        </panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from './components/shared/panel/Panel.Vue'

export default {
  components: {
    panel: Panel
  },

  data() {
    return {
      title: "VuePic",
      pictures: [],
    };
  },

  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(pictures => this.pictures = pictures, err => console.log(err))
  },
};
</script>

<style>
.body {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.title {
  text-align: center;
}

.list-pictures {
  list-style: none;
}

.list-pictures .list-pictures-item {
  display: inline-block;
}

.responsive-image {
  width: 100%;
}
</style>
