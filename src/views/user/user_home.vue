<template>
  <div>
    <h3>User Home</h3>

    <ul>
      <li>
        <router-link :to="{path: '/user/' + id + '/profile'}">Profile</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    props: ['id'],
  }
</script>