<template>
  <div class="add-comment">
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter Comment..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <b-button variant="primary" @click="submit">Submit</b-button>

    <pre class="mt-3 mb-0">{{ text }}</pre>
  </div>
</template>
<script>
export default {
  name: 'AddComment',
  data() {
    return {
      text: ''
    };
  },
  methods: {
    submit: function() {}
  }
};
</script>
