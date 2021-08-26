<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card flat>
        <v-card-title class="text-h4">
          Posts Page
          <v-spacer />
          <v-btn color="primary" large depressed nuxt to="/">home</v-btn>
        </v-card-title>
      </v-card>
    </v-col>
    <v-col v-for="{ image, title, preview, date, id } of pageOfItems" :key="id" cols="12" md="4" lg="3" xl="2">
      <Card :id="id" :image="image" :title="title" :preview="preview" :date="date" />
    </v-col>
    <v-col cols="12">
      <JwPagination id="pagination" :items="posts" :page-size="12" @changePage="pageChange" />
    </v-col>
  </v-row>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'BlogArchive',
    data: () => ({
      pageOfItems: [],
    }),
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
      pageChange(pageOfItems) {
        this.pageOfItems = pageOfItems;
      },
    },
  };
</script>

<style lang="scss">
  .pagination {
    li {
      &.active {
        a {
          background: rgba(255, 255, 255, 0.1);
        }
      }
      a {
        margin: 0 4px;
        padding: 8px 16px !important;
        border-radius: 8px;
        color: rgba(255, 255, 255, 0.8);
        transition: all 150ms ease-in-out;
        &:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
</style>
