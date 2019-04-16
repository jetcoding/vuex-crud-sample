<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
      >
        <a
          href="#"
          @click.prevent="navTo(item._id)"
        >
          {{item.text}}
        </a>
        <button type="button" @click.prevent="remove(item._id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ItemList',
  data () {
    return {
      items: []
    }
  },
  created () {
    this.loadItems()
  },
  methods: {
    loadItems () {
      this.$store.dispatch('item/getAll').then(() => {
        this.items = this.$store.state.item.data
      })
    },
    navTo (id) {
      this.$router.push({name: 'Edit Item', params: {id: id}})
    },
    remove (id) {
      let r = confirm('Are you sure?')
      if (r) {
        this.$store.dispatch('item/deleteOne', id).then(() => {
          this.items = this.$store.state.item.data
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }

}
</script>
<style lang="scss" scoped>
  ul {
    li {
      margin: 5px;
      padding-bottom: 5px;
      border-bottom: solid 1px #aaa;
      button {
        float: right;
      }
    }
  }
</style>
