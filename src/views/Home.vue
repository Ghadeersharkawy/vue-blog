<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <blog-header />

    <b-container fluid>
      <blog-posts :posts="posts" />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogHeader from '@/components/blogHeader/BlogHeader';
import BlogPosts from '@/components/blogBody/BlogPosts';
export default {
  name: 'home',
  components: {
    BlogHeader,
    BlogPosts
  }
};
</script>
