<template>
  <div id="blogHeader">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">{{ blogTitle }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item href="/">Home</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'BlogHeader',
  data() {
    return {
      blogTitle: 'Vue Blog'
    };
  }
};
</script>
