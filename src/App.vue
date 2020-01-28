<template>
  <div id="app">
    <!-- component header with logo and home link -->
    <blog-header />
    <router-view />
  </div>
</template>
<script>
import BlogHeader from '@/components/blogHeader/BlogHeader';
export default {
  name: 'app',
  components: {
    BlogHeader
  }
};
</script>
