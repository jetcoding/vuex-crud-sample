<template>
  <div>
    <Form
      :form="form"
      @v-save="save"
    />
  </div>
</template>
<script>
import Form from './shared/form'
export default {
  name: 'ItemNew',
  data () {
    return {
      form: {
        text: '',
        check: false
      }
    }
  },
  components: {
    Form
  },
  methods: {
    save () {
      this.$store.dispatch('item/createOne', this.form)
        .then(() => {
          this.$router.push({name: 'Items'})
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
