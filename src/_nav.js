export default {
  items: [
    {
      name: 'Home',
      url: '/home',
      meta: {
        auth: false,
        navItem: true
      }
    },
    {
      name: 'Login',
      url: '/login',
      meta: {
        auth: false,
        navItem: true
      }
    },
    {
      name: 'Items',
      url: '/items',
      meta: {
        auth: true,
        navItem: true
      }
    },
    {
      name: 'Edit Item',
      url: '/items/:id/edit',
      meta: {
        auth: true,
        navItem: false
      }
    },
    {
      name: 'New Item',
      url: '/items/new',
      meta: {
        auth: true,
        navItem: true
      }
    }
  ]
}
