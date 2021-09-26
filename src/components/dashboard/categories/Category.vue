<template>
  <div class="category">
    <div class="category-top-line">
      <div class="detail-close" @click="$router.push('/products/categories/')">
        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.162909 6.42922L4.70779 11.3243C4.8129 11.4376 4.95323 11.5 5.10285 11.5C5.25247 11.5 5.39279 11.4376 5.49791 11.3243L5.83261 10.9639C6.0504 10.729 6.0504 10.3473 5.83261 10.1128L2.01616 6.00228L5.83684 1.88715C5.94196 1.77384 6 1.6228 6 1.46173C6 1.30049 5.94196 1.14944 5.83684 1.03604L5.50215 0.67573C5.39695 0.562422 5.25671 0.5 5.10708 0.5C4.95746 0.5 4.81714 0.562422 4.71202 0.67573L0.162909 5.57525C0.0575425 5.68892 -0.000329774 5.84068 2.08512e-06 6.00201C-0.000329813 6.16397 0.0575425 6.31564 0.162909 6.42922Z" fill="#5893D4"/>
        </svg>
        <span>Назад</span>
      </div>
      <div class="progress">
        <div class="progress-item">
          <div class="progress-number">40%</div>
          <v-progress-linear value="40"></v-progress-linear>
        </div>
        <div class="progress-item">
          <div class="progress-number">40%</div>
          <v-progress-linear value="40"></v-progress-linear>
        </div>
      </div>
      <div class="change-history">
        <span>История изменения категории</span>
      </div>
    </div>
    <div class="category-content" v-if="category">
      <v-skeleton-loader
          :loading="loading"
          type="list-item-avatar, list-item-three-line, card-heading, image, actions"
      >
        <div class="category-header">
          <div class="category-photo">
            <img v-if="category.image" :src="category.image" alt="">
            <span v-else>Загрузите фото</span>
          </div>
          <div class="category-info">
            <div class="switch-nesting">
              <span class="switch-text">Скрыть</span>
              <v-switch color="#4ECA80" v-model="switchShow" inset></v-switch>
              <span class="switch-text">Показать на сайте</span>
            </div>
            <div class="breadcrumbs">
              <a href="#">{{category.title}}</a>
            </div>
          </div>
        </div>
        <div class="label-title">Единица измерения</div>
        <div class="unit">Шт</div>
        <p class="category-description">
          {{category.desc}}
        </p>
        <div class="category-characteristics" v-if="category.characteristics.length">
          <div class="label-title">Характеристики товаров</div>
          <div class="values-list">
            <div class="value-item" v-for="(value, i) in category.characteristics" :key="i">
              <span style="margin-right: 15px">{{value.title}}</span>
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="edit"><path data-v-4f6ba5be="" d="M16 4.27778L13.2222 1.5L2.11111 12.6111L1 16.5L4.88889 15.3889L16 4.27778ZM11 3.72222L13.7778 6.5L11 3.72222ZM2.11111 12.6111L4.88889 15.3889L2.11111 12.6111Z" stroke="#BBDBFE" stroke-width="1.39565" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
          </div>
        </div>
        <div class="category-properties" v-if="category.properties.length">
          <div class="label-title">Свойства товаров</div>
          <div class="values-list">
            <div class="value-item" v-for="(value, i) in category.properties" :key="i">
              <span style="margin-right: 15px">{{value.title}}</span>
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="edit"><path data-v-4f6ba5be="" d="M16 4.27778L13.2222 1.5L2.11111 12.6111L1 16.5L4.88889 15.3889L16 4.27778ZM11 3.72222L13.7778 6.5L11 3.72222ZM2.11111 12.6111L4.88889 15.3889L2.11111 12.6111Z" stroke="#BBDBFE" stroke-width="1.39565" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
          </div>
        </div>
      </v-skeleton-loader>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
export default {
  name: "Category",
  props: {
    closeDetails: {
      type: Function
    }
  },
  data: () => ({
    photo: false,
    switchShow: true,
    loading: true
  }),

  created () {
    this.fetchData()
  },

  computed: {
    ...mapGetters([
      'category'
    ])
  },

  watch: {
    $route: 'fetchData'
  },

  methods: {
    async fetchData () {
      await this.$store.dispatch('fetchCategory', this.$route.params.id)
    }

  },

  beforeDestroy() {
    this.closeDetails()
  },

  async mounted() {
    this.closeDetails()
    await this.$store.dispatch('fetchCategory', this.$route.params.id)
    this.loading = false
    //console.log(this.category.id)
  }
}
</script>

<style scoped>

</style>