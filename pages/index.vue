<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card flat>
        <v-card-title class="text-h4">
          Main Page
          <v-spacer />
          <v-btn color="primary" large depressed nuxt to="/posts">See All Posts</v-btn>
        </v-card-title>
      </v-card>
    </v-col>
    <v-col v-for="{ image, title, preview, date, id } of posts" :key="id" cols="12" md="4" lg="3" xl="2">
      <Card :id="id" :image="image" :title="title" :preview="preview" :date="date" />
    </v-col>
  </v-row>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import Card from '~/components/Card';

  export default {
    components: { Card },
    async fetch() {
      if (!this.posts.length)
        try {
          await this.fetchPosts();
        } catch (e) {
          console.log(e);
        }
    },
    computed: {
      ...mapGetters({
        posts: 'posts/posts',
      }),
    },
    methods: {
      ...mapActions({
        fetchPosts: 'posts/fetchPosts',
      }),
    },
  };
</script>
