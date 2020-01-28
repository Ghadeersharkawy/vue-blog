<template>
  <div class="details">
    <b-container>
      <b-row>
        <!-- post details -->
        <b-col lg="12">
          <b-img :src="post.url" fluid class="details_img"></b-img>
          <!-- post-title -->
          <h2 class="my-3 post-title">{{ post.title }}</h2>
          <!-- post-content -->
          <b-jumbotron>
            <template v-slot:lead>{{ post.body }}</template>
          </b-jumbotron>
          <!--rlated comments  -->
          <section class="related comments">
            <h4 class="rlated-title mb-2">related Comments</h4>
            <!-- add new comment -->
            <add-comment />
            <!-- current-comments  -->
          </section>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import AddComment from '@/components/comments/AddComment';
export default {
  name: 'PostDetails',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    AddComment
  },
  data() {
    return {};
  }
};
</script>
