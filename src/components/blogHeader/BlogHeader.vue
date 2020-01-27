<template>
  <div id="blogHeader">
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Vue Blog</b-navbar-brand>

    

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
       <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
      </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'BlogHeader'
};
</script>
