<template>
  <div class="item-container" :class="{hide: !visible }">
    <DraggableTree :data="categories" draggable="draggable">
      <div class="item" slot-scope="{data, store}" @click="store.toggleOpen(data)">
        <router-link class="item-link"  :to="'/products/categories/' + data.id">
          <input type="checkbox" >
          <template v-if="!data.isDragPlaceHolder">
            <svg :class="{open: data.open}" v-if="data.children &amp;&amp; data.children.length" class="icon"  width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.31216 4.86424L7.8722 1.07685C7.9546 0.989247 8 0.872312 8 0.747627C8 0.622941 7.9546 0.506006 7.8722 0.418408L7.61008 0.139492C7.43929 -0.0419999 7.1617 -0.0419999 6.99116 0.139492L4.00166 3.31986L1.00884 0.135963C0.926432 0.0483651 0.816579 -5.41291e-07 0.699441 -5.50118e-07C0.582174 -5.58954e-07 0.472322 0.0483651 0.389851 0.135963L0.127804 0.414879C0.0453982 0.502546 4.49762e-07 0.619412 4.44312e-07 0.744097C4.38861e-07 0.868782 0.0453982 0.985718 0.127804 1.07332L3.69109 4.86424C3.77376 4.95205 3.88413 5.00028 4.00146 5C4.11925 5.00028 4.22956 4.95205 4.31216 4.86424Z" fill="#5893D4"/>
            </svg>
            <span>{{data.title}}</span>
          </template>
        </router-link>
      </div>
    </DraggableTree>
<!--    <vueTree v-model="nodes"/>-->
  </div>
</template>

<script>
  let nodes = [
    {title: 'Item1', isLeaf: true},
    {title: 'Item2', isLeaf: true, data: { visible: false }},
    {title: 'Folder1'},
    {
      title: 'Folder2', isExpanded: true, children: [
        {title: 'Item3', isLeaf: true},
        {title: 'Item4', isLeaf: true}
      ]
    }
  ];
export default {
  name: "categories-list",
  data: () => ({
    visible: true,
    nodes: nodes
  }),

  methods: {

  },

  computed: {
    categories: {
      get() {
        return this.$store.getters['categories']
      },
      set(value) {
        this.$store.dispatch("updateCategories", value)
      }
    }
  },

  mounted() {

  }
};
</script>

<style lang="sass">

.draggable-placeholder-inner
  border: 1px dashed #0088f8
  box-sizing: border-box
  background: rgba(0, 136, 249, 0.09)
  background: #c8ebfb
  color: #0088f9
  text-align: center
  padding: 0
  display: flex
  align-items: center

</style>