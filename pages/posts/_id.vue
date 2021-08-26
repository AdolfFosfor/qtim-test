<template>
  <v-row>
    <v-col cols="12">
      <v-card flat>
        <v-card-title class="text-h4">
          Posts Page
          <v-spacer />
          <v-btn class="mr-2" color="primary" large depressed nuxt to="/posts">
            <v-icon left v-text="`mdi-chevron-left`" />
            all posts
          </v-btn>
          <v-btn color="primary" large depressed nuxt to="/">home</v-btn>
        </v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card flat>
        <v-img :src="singlePost.image" max-height="60vh" />
        <v-card-subtitle class="d-flex justify-space-between align-center">
          <span class="text-h3 white--text" v-text="singlePost.title" />
        </v-card-subtitle>
        <v-card-text>
          {{ singlePost.description }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'SinglePostPage',
    async fetch() {
      try {
        await this.fetchSinglePost(this.$route.params.id);
      } catch (e) {}
    },
    computed: {
      ...mapGetters({
        singlePost: 'posts/singlePost',
      }),
    },
    methods: {
      ...mapActions({
        fetchSinglePost: 'posts/fetchSinglePost',
      }),
    },
  };
</script>
