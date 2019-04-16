<template>
  <div>
    <Form
      :form="form"
      @v-save="save"
      @v-change="change"
    />
  </div>
</template>
<script>
import Form from './shared/form'
export default {
  name: 'ItemEdit',
  components: {
    Form
  },
  data () {
    return {
      form: {
        text: '',
        check: false
      }
    }
  },
  created () {
    this.loadItem()
  },
  methods: {
    loadItem () {
      let id = this.$route.params.id
      this.$store.dispatch('item/getOne', id).then(() => {
        this.form = this.$store.state.item.item
      }).catch(err => {
        console.log(err)
      })
    },
    save () {
      this.$store.dispatch('item/updateOne', this.form).then(() => {
        this.$router.push({name: 'Items'})
      }).catch(err => {
        console.log(err)
      })
    },
    change () {
      this.$store.dispatch('item/updateOne', this.form).then(() => {
        alert('Updated')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
