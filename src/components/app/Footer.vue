<template>
  <div class="app-footer" v-click-outside="hide">
    <div class="bookmarks">
      <div class="bookmarks-menu-wrap" v-if="isOpenMenu">
        <div class="menu-title">
          <div class="title">Добавить закладку</div>
          <div class="bookmarks-count">{{ selectedBookmarks.length}} / 7</div>
        </div>
        <ul class="bookmarks-menu">
          <li>
            <input type="checkbox" :checked="bookmarks.length" class="custom-input">
            <a href="#">Товары</a>
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83709 5.07078L1.29221 0.17573C1.1871 0.0624223 1.04677 0 0.897152 0C0.74753 0 0.607207 0.0624223 0.50209 0.17573L0.167391 0.536134C-0.0503999 0.770977 -0.0503999 1.15267 0.167391 1.38715L3.98384 5.49772L0.163156 9.61285C0.0580385 9.72616 -3.12529e-07 9.8772 -3.17625e-07 10.0383C-3.22727e-07 10.1995 0.0580385 10.3506 0.163156 10.464L0.497855 10.8243C0.603055 10.9376 0.743295 11 0.892917 11C1.04254 11 1.18286 10.9376 1.28798 10.8243L5.83709 5.92475C5.94246 5.81108 6.00033 5.65932 6 5.49799C6.00033 5.33603 5.94246 5.18436 5.83709 5.07078Z" fill="#5893D4"/>
            </svg>
            <div class="sub-bookmarks-menu">
              <div v-for="(link, index) in menu.products" :key="index">
                <input
                    :id="link.url" type="checkbox"
                    @change="updateSelectedBookmarks(link)"
                    :disabled="bookmarks.length > 6 && bookmarks.indexOf(link) === -1"
                    :value="link"
                    v-model="bookmarks">
                <label :for="link.url">{{link.title}}</label>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="bookmark-btn" @click="toggleMenu">
        <img src="@/assets/icons/bookmark.svg" alt="">
      </div>
      <div class="bookmarks-list" v-if="selectedBookmarks.length">
        <router-link v-for="(link, index) in selectedBookmarks" :key="index" :to="link.url">
          {{ link.title }}
        </router-link>
      </div>
    </div>
    <div class="footer-actions">
      <div class="calendar" @click="toggleCalendar">
        <img src="@/assets/icons/calendar.svg" alt="">
      </div>
      <v-date-picker
          v-if="isOpenCalendar"
          v-model="datePicker"
          color="orange lighten-1"
          locale="ru-Ru"
      ></v-date-picker>
      <calculator :isOpenCalculator="isOpenCalculator" />
      <div class="lang-switch">
        <div class="lang-btn"
             v-for="(lang, index) in languages"
             :class="{ active: lang.code === currentLanguage() }"
             @click="setLocale(lang.code)"
             :key="index"
        >
          {{ lang.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calculator from "@/components/ui/calculator/Calculator";
import ClickOutside from 'vue-click-outside'
import {mapGetters} from 'vuex'
export default {
  name: "Footer",
  components: {
    Calculator
  },
  data: () => ({
    bookmarks: [],
    isOpenMenu: false,
    isOpenCalendar: false,
    isOpenCalculator: false,
    orange: '#FF9F2F',
    datePicker: new Date().toISOString().substr(0, 7),
    languages: [
      {
        code: 'ru',
        name: 'Рус',
      },
      {
        code: 'ua',
        name: 'Укр',
      },
    ]
  }),
  beforeCreate() {
    this.$store.commit('initialiseMenu')
  },
  methods: {
    setLocale(locale){
      this.$i18n.locale = locale
      console.log(this.$i18n.locale)
      localStorage.setItem('locale', this.$i18n.locale )
    },
    currentLanguage(){
      return this.$i18n.locale
    },
    toggleMenu() {
      this.isOpenMenu = !this.isOpenMenu
    },
    toggleCalendar() {
      this.isOpenCalculator = false
      this.isOpenCalendar = !this.isOpenCalendar
    },
    toggleCalculator() {
      this.isOpenCalendar = false
      this.isOpenCalculator = !this.isOpenCalculator
    },
    hide () {
      this.isOpenMenu = false
    },
    updateSelectedBookmarks(link) {
      link.bookmark = !link.bookmark
      this.$store.dispatch('updateBookmarks', [this.bookmarks, link])
    },
  },
  computed: {
    ...mapGetters([
      'menu',
      'selectedBookmarks'
    ]),
  },
  mounted() {
   this.bookmarks = this.selectedBookmarks
  },

  directives: {
    ClickOutside
  }

}
</script>

<style scoped>

</style>