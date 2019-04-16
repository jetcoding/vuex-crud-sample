<template>
  <div>
    <Header/>
    <main>
      <router-view></router-view>
    </main>
    <Footer/>
  </div>
</template>
<script>
import Header from '@/views/layout/header.vue'
import Footer from '@/views/layout/footer.vue'
export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  },
  created () {
    console.log('component created')
  }
}
</script>
