<template>
  <div>
    <h2>
      <div v-if="$route.name === 'home'">
        User {{ id }}
      </div>
      <div v-else>
        <router-link :to="{ path: '/user/' + id}">User {{ id }}</router-link>
      </div>
    </h2>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    props: ['id'],
  }
</script>