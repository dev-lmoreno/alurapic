<template>
  <div class="body">
    <h1 class="title">{{ title }}</h1>
    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="filter by title">
    {{filter}}
    <ul class="list-pictures">
      <li class="list-pictures-item" v-for="picture in pictureWithFilter" :key="picture.url">
        <panel :title="picture.titulo">
          <image-responsive :url="picture.url" :title="picture.titulo"/>
        </panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from './components/shared/panel/Panel'
import ImageResponsive from './components/shared/image-responsive/ImageResponsive'

export default {
  components: {
    panel: Panel,
    'image-responsive': ImageResponsive
  },

  computed: {
    pictureWithFilter() {
      if (this.filter) {
        let exp = new RegExp(this.filter.trim(), 'i')
        return this.pictures.filter(picture => exp.test(picture.titulo));
      } else {
        return this.pictures
      }
    }
  },

  data() {
    return {
      title: 'VuePic',
      pictures: [],
      filter: ''
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

.filter {
  display: block;
  width: 100%;
}
</style>
