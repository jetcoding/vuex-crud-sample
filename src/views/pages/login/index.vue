<template>
  <div>
    <form>
      <div>
        <label>Email</label>
        <input type="email" v-model="user.email" placeholder="Email" required/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="user.password" placeholder="Password" required/>
      </div>
      <div>
        <button @click.prevent="onSubmit()">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: 'test@user.com',
        password: 'Metbank1'
      },
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    onSubmit () {
      if (this.user.email === '' || this.user.password === '') return false
      this.$store.dispatch('user/Login', this.user).then(() => {
        console.log('logged in')
        this.$router.push({path: this.redirect || '/'})
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
