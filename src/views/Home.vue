<template>
  <div class="home">
    <b-container fluid>
      <!-- display all posts in blog home page -->
      <blog-posts />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogPosts from '@/components/blogBody/BlogPosts';
export default {
  name: 'home',
  components: {
    BlogPosts
  }
};
</script>
