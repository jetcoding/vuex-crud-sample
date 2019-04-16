<template>
  <div>
    <header>
      <h2 @click.prevent="navTo('Home')">Header</h2>
      <ul>
        <li
          v-for="(nav, index) in navs"
          :key="index"
          v-if="nav.meta.auth === authenticated && nav.meta.navItem"
        >
          <a
            href="#"
            @click.prevent="navTo(nav.name)"
          >
            {{nav.name}}
          </a>
        </li>
        <li v-if="authenticated">
          <a
            href="#"
            @click.prevent="logout"
          >
            Logout
          </a>
        </li>
      </ul>
    </header>
  </div>
</template>
<script>
import nav from '@/_nav'
export default {
  name: 'Header',
  data () {
    return {
      navs: nav.items,
      authenticated: false
    }
  },
  created () {
    this.authenticated = this.$store.state.user.authenticated
  },
  methods: {
    navTo (routeName) {
      this.$router.push({name: routeName})
    },
    logout () {
      this.$store.dispatch('user/LogOut').then(() => {
        location.reload()
      })
    }
  }
}
</script>
<style lang="scss">
  header {
    height: 40px;
    border-bottom: solid 1px;
    h2 {
      float: left;
      margin: 5px;
      cursor: pointer;
    }
    ul {
      float: right;
      list-style: none;
      li {
        display: inline-block;
        margin-right: 10px;
      }
    }
  }
</style>
