<template>
  <div class="add-comment">
    <b-form-textarea
      id="textarea"
      placeholder="Enter Comment..."
      rows="3"
      max-rows="6"
      class="mb-2"
    ></b-form-textarea>
    <b-button variant="primary" @click="submit">Submit</b-button>
  </div>
</template>
<script>
export default {
  name: 'AddComment',
  data() {
    return {};
  },
  methods: {
    submit: function() {}
  }
};
</script>
