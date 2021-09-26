export default {
  state: {
    menu:  {
      products: [
        {
          id: 'nomenclature',
          title: 'Номенклатура',
          url: '/products/nomenclature',
          bookmark: false,
          icon: `<svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0L0 6.70833L1.63 7.92542L9 13.4167L16.36 7.92542L18 6.70833L9 0ZM16.37 10.2829L9 15.7837L1.62 10.2925L0 11.5L9 18.2083L18 11.5L16.37 10.2829ZM16.37 15.0746L9 20.5754L1.62 15.0842L0 16.2917L9 23L18 16.2917L16.37 15.0746Z" fill="white"/>
              </svg>`
        },
        {
          id: 'categories',
          title: 'Категории',
          url: '/products/categories',
          bookmark: false,
          icon: `<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 3H0V13.5C0 14.3325 0.67125 15 1.5 15H15V13.5H1.5V3ZM16.5 1.5H10.5L9 0H4.5C3.6675 0 3 0.6675 3 1.5V10.5C3 10.8978 3.15804 11.2794 3.43934 11.5607C3.72064 11.842 4.10218 12 4.5 12H16.5C16.8978 12 17.2794 11.842 17.5607 11.5607C17.842 11.2794 18 10.8978 18 10.5V3C18 2.1675 17.3325 1.5 16.5 1.5ZM14.955 9.75L12.75 8.4525L10.545 9.75L11.13 7.245L9.1875 5.565L11.745 5.3475L12.75 3L13.755 5.3475L16.3125 5.565L14.37 7.245L14.955 9.75Z" fill="#fff"/>
              </svg>`
        },
        {
          id: 'properties',
          title: 'Свойства товаров',
          url: '/products/properties',
          bookmark: false,
          icon: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.72727 4.77273C3.45059 4.77273 4.14428 5.06006 4.65575 5.57153C5.16721 6.08299 5.45455 6.77668 5.45455 7.5C5.45455 8.22332 5.16721 8.91701 4.65575 9.42847C4.14428 9.93994 3.45059 10.2273 2.72727 10.2273C2.00396 10.2273 1.31026 9.93994 0.7988 9.42847C0.287337 8.91701 0 8.22332 0 7.5C0 6.77668 0.287337 6.08299 0.7988 5.57153C1.31026 5.06006 2.00396 4.77273 2.72727 4.77273ZM7.5 0C8.22332 0 8.91701 0.287337 9.42847 0.7988C9.93994 1.31026 10.2273 2.00396 10.2273 2.72727C10.2273 3.45059 9.93994 4.14428 9.42847 4.65575C8.91701 5.16721 8.22332 5.45455 7.5 5.45455C6.77668 5.45455 6.08299 5.16721 5.57153 4.65575C5.06006 4.14428 4.77273 3.45059 4.77273 2.72727C4.77273 2.00396 5.06006 1.31026 5.57153 0.7988C6.08299 0.287337 6.77668 0 7.5 0ZM7.5 9.54545C8.22332 9.54545 8.91701 9.83279 9.42847 10.3443C9.93994 10.8557 10.2273 11.5494 10.2273 12.2727C10.2273 12.996 9.93994 13.6897 9.42847 14.2012C8.91701 14.7127 8.22332 15 7.5 15C6.77668 15 6.08299 14.7127 5.57153 14.2012C5.06006 13.6897 4.77273 12.996 4.77273 12.2727C4.77273 11.5494 5.06006 10.8557 5.57153 10.3443C6.08299 9.83279 6.77668 9.54545 7.5 9.54545ZM12.2727 4.77273C12.996 4.77273 13.6897 5.06006 14.2012 5.57153C14.7127 6.08299 15 6.77668 15 7.5C15 8.22332 14.7127 8.91701 14.2012 9.42847C13.6897 9.93994 12.996 10.2273 12.2727 10.2273C11.5494 10.2273 10.8557 9.93994 10.3443 9.42847C9.83279 8.91701 9.54545 8.22332 9.54545 7.5C9.54545 6.77668 9.83279 6.08299 10.3443 5.57153C10.8557 5.06006 11.5494 4.77273 12.2727 4.77273Z" fill="#fff"/>
                </svg>`
        },
        {
          id: 'characteristic',
          title: 'Характеристики товаров',
          url: '/products/characteristic',
          bookmark: false,
          icon: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.464 0H8.57135C8.42929 3.13887e-05 8.29306 0.0564996 8.19262 0.156975L0.15712 8.19247C-0.052211 8.40155 -0.0523994 8.74074 0.156712 8.95007C0.156837 8.9502 0.156994 8.95035 0.15712 8.95048L6.04981 14.8432C6.25901 15.0523 6.59811 15.0523 6.80728 14.8432L14.8428 6.80767C14.9434 6.7071 14.9998 6.57065 14.9998 6.4284V0.53571C14.9998 0.239841 14.7599 0 14.464 0ZM11.2498 4.8213C10.6581 4.8213 10.1785 4.34162 10.1785 3.74991C10.1785 3.1582 10.6581 2.67852 11.2498 2.67852C11.8416 2.67852 12.3212 3.1582 12.3212 3.74991C12.3212 4.34162 11.8416 4.8213 11.2498 4.8213Z" fill="#fff"/>
                </svg>`
        },
        {
          id: 'warehouses',
          title: 'Склады',
          url: '/products/warehouses',
          bookmark: false,
          icon: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5312 15H12.0312C11.7725 15 11.5625 14.79 11.5625 14.5312V13.75H9.6875V14.5312C9.6875 14.79 9.4775 15 9.21875 15H5.78125C5.5225 15 5.3125 14.79 5.3125 14.5312V13.75H3.4375V14.5312C3.4375 14.79 3.2275 15 2.96875 15H0.46875C0.21 15 0 14.79 0 14.5312V12.5H15V14.5312C15 14.79 14.79 15 14.5312 15Z" fill="#fff"/>
                <path d="M10 0H8.125V1.25C8.125 1.595 7.845 1.875 7.5 1.875C7.155 1.875 6.875 1.595 6.875 1.25V0H5C4.655 0 4.375 0.28 4.375 0.625V4.375C4.375 4.72 4.655 5 5 5H10C10.345 5 10.625 4.72 10.625 4.375V0.625C10.625 0.28 10.345 0 10 0Z" fill="#fff"/>
                <path d="M6.25 6.25H4.375V7.5C4.375 7.845 4.095 8.125 3.75 8.125C3.405 8.125 3.125 7.845 3.125 7.5V6.25H1.25C0.905 6.25 0.625 6.53 0.625 6.875V10.625C0.625 10.97 0.905 11.25 1.25 11.25H6.25C6.595 11.25 6.875 10.97 6.875 10.625V6.875C6.875 6.53 6.595 6.25 6.25 6.25Z" fill="#fff"/>
                <path d="M13.75 6.25H11.875V7.5C11.875 7.845 11.595 8.125 11.25 8.125C10.905 8.125 10.625 7.845 10.625 7.5V6.25H8.75C8.405 6.25 8.125 6.53 8.125 6.875V10.625C8.125 10.97 8.405 11.25 8.75 11.25H13.75C14.095 11.25 14.375 10.97 14.375 10.625V6.875C14.375 6.53 14.095 6.25 13.75 6.25Z" fill="#fff"/>
                </svg>`
        },
        {
          id: 'purchases',
          title: 'Закупки',
          url: '/products/purchases',
          bookmark: false,
          icon: `<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5333 10.0001H14.5667C14.7904 10.0001 14.9866 9.85215 15.0472 9.6373L17.0473 2.63722C17.0902 2.48631 17.0608 2.3242 16.9662 2.19881C16.8714 2.07381 16.724 1.99999 16.5667 1.99999H4.37901L4.02159 0.391664C3.97081 0.162629 3.76768 0 3.53331 0H0.499997C0.223696 0 0 0.223696 0 0.499997C0 0.776427 0.223696 0.999993 0.499997 0.999993H3.13201L4.9376 9.12494C4.40635 9.35593 4.03331 9.8847 4.03331 10.5001C4.03331 11.3271 4.70622 12 5.5333 12H14.5667C14.8431 12 15.0667 11.7765 15.0667 11.5001C15.0667 11.2238 14.8431 11.0001 14.5667 11.0001H5.5333C5.25791 11.0001 5.0333 10.776 5.0333 10.5001C5.0333 10.2241 5.25791 10.0001 5.5333 10.0001Z" fill="#fff"/>
                <path d="M5.0332 13.5C5.0332 14.3272 5.70612 15 6.53332 15C7.3604 15 8.03331 14.3272 8.03331 13.5C8.03331 12.6729 7.3604 12 6.53332 12C5.70612 12 5.0332 12.6729 5.0332 13.5Z" fill="#fff"/>
                <path d="M12.0664 13.5C12.0664 14.3272 12.7393 15 13.5664 15C14.3936 15 15.0664 14.3272 15.0664 13.5C15.0664 12.6729 14.3936 12 13.5664 12C12.7393 12 12.0664 12.6729 12.0664 13.5Z" fill="#fff"/>
                </svg>`
        },
        {
          id: 'suppliers',
          title: 'Поставщики',
          url: '/products/suppliers',
          bookmark: false,
          icon: `<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8125 10.5625H7.3125V9.75C7.3125 8.66938 9.48188 8.125 10.5625 8.125C11.6431 8.125 13.8125 8.66938 13.8125 9.75V10.5625ZM10.5625 4.0625C10.9935 4.0625 11.4068 4.23371 11.7115 4.53845C12.0163 4.8432 12.1875 5.25652 12.1875 5.6875C12.1875 6.11848 12.0163 6.5318 11.7115 6.83655C11.4068 7.14129 10.9935 7.3125 10.5625 7.3125C10.1315 7.3125 9.7182 7.14129 9.41345 6.83655C9.10871 6.5318 8.9375 6.11848 8.9375 5.6875C8.9375 5.25652 9.10871 4.8432 9.41345 4.53845C9.7182 4.23371 10.1315 4.0625 10.5625 4.0625ZM14.625 1.625H8.125L6.5 0H1.625C0.723125 0 0 0.723125 0 1.625V11.375C0 11.806 0.171205 12.2193 0.475951 12.524C0.780698 12.8288 1.19402 13 1.625 13H14.625C15.056 13 15.4693 12.8288 15.774 12.524C16.0788 12.2193 16.25 11.806 16.25 11.375V3.25C16.25 2.81902 16.0788 2.4057 15.774 2.10095C15.4693 1.7962 15.056 1.625 14.625 1.625Z" fill="#fff"/>
                </svg>`
        },
        {
          id: 'import-export',
          title: 'Импорт/экспорт',
          url: '/products/import-export',
          bookmark: false,
          icon: ` <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.4 11L0 4.55469H2.3705V0H6.4295V4.55469H8.8L4.4 11Z" fill="#BBDBFE"/>
                <path d="M13.2016 2.29201e-06L17.6016 6.44531L15.2311 6.44531L15.2311 11L11.1721 11L11.1721 6.44531L8.80156 6.44531L13.2016 2.29201e-06Z" fill="#fff"/>
                </svg>`
        },
        {
          id: 'delivery',
          title: 'Доставки',
          url: '/products/delivery',
          bookmark: false,
          icon: `<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.25 3H12V0H1.5C0.675 0 0 0.675 0 1.5V9.75H1.5C1.5 10.995 2.505 12 3.75 12C4.995 12 6 10.995 6 9.75H10.5C10.5 10.995 11.505 12 12.75 12C13.995 12 15 10.995 15 9.75H16.5V6L14.25 3ZM3.75 10.875C3.1275 10.875 2.625 10.3725 2.625 9.75C2.625 9.1275 3.1275 8.625 3.75 8.625C4.3725 8.625 4.875 9.1275 4.875 9.75C4.875 10.3725 4.3725 10.875 3.75 10.875ZM13.875 4.125L15.345 6H12V4.125H13.875ZM12.75 10.875C12.1275 10.875 11.625 10.3725 11.625 9.75C11.625 9.1275 12.1275 8.625 12.75 8.625C13.3725 8.625 13.875 9.1275 13.875 9.75C13.875 10.3725 13.3725 10.875 12.75 10.875Z" fill="#fff"/>
                </svg>`
        }
      ]
    },
    selectedBookmarks: JSON.parse(localStorage.getItem('selectedBookmarks') || '[]')
  },

  mutations: {
    initialiseMenu(state) {
      if (localStorage.getItem('menu')) {
        state.menu = null,
        state.menu = JSON.parse(localStorage.getItem('menu'))
      }
    },
    setBookmarks(state, content) {
      state.selectedBookmarks = []
      state.selectedBookmarks = content
      localStorage.setItem('selectedBookmarks', JSON.stringify(state.selectedBookmarks))
      localStorage.setItem('menu', JSON.stringify(state.menu))
    },
  },
  actions: {
    updateBookmarks({commit}, [bookmarks]) {
      commit('setBookmarks', bookmarks)
    },
  },
  getters: {
    menu: s => s.menu,
    selectedBookmarks: s => s.selectedBookmarks
  }

}