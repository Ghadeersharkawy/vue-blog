<template>
  <div class="details">
    <b-container>
      <b-row>
        <!-- post details -->
        <b-col lg="12">
          <b-img :src="post.imgUrl" fluid class="details_img"></b-img>
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
            <add-comment :comment="comments" />
            <!-- current-comments  -->
            <div class="current-comments my-3">
              <b-list-group v-for="comment in post.comments" :key="comment.postId">
                <b-list-group-item class="mb-2">
                  <!-- current-comment text  -->

                  <p>
                    <quote>{{ comment.body }}</quote>
                  </p>
                  <!-- current-comment author & email -->
                  <p>
                    <strong>posted by</strong>
                    :{{ comment.name }}
                  </p>
                  <p>
                    <strong>email</strong>
                    : {{ comment.email }}
                  </p>
                </b-list-group-item>
              </b-list-group>
            </div>
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
