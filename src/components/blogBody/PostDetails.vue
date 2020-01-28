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
            <template v-slot:lead>{{ post.body}}</template>
          </b-jumbotron>
        </b-col>
          <!--rlated comments  -->
     <section class="related comments">
    
        <b-col lg="12">
           <h3>related Comments</h3>
            <!-- current-comments  -->
            
        </b-col>
     </section>
      </b-row>
    
      
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'PostDetails',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
