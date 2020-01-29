/* eslint-disable no-console */
<template>
  <div id="blogPosts">
    <b-container>
      <b-row>
        <!-- loop over posts -->
        <b-col lg="6" sm="12" v-for="(post, index) in posts" :key="post.id">
          <!-- display posts as cards -->
          <b-card
            :title="post.title"
            :img-src="post.thumbnailUrl"
            img-alt="Image"
            img-top
            tag="article"
            class="my-4 post_card"
            @click="
              $router.push({
                name: 'postdetails',
                params: { id: post.id, post: posts[index] }
              })
            "
          ></b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'BlogPosts',
  data() {
    return {
      //posts data
      posts: []
    };
  },
  mounted() {
    axios
      .get('https://my-json-server.typicode.com/Ghadeersharkawy/vue-blog/posts')
      .then(response => {
        if (response.status) {
          this.posts = response.data;
        }
        // eslint-disable-next-line no-console
        console.log(response.status);
      })
      .catch(function(error) {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }
};
</script>
