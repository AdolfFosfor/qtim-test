export const state = () => ({
  posts: [],
  singlePost: {},
});

export const actions = {
  async fetchPosts({ commit }) {
    try {
      const posts = await this.$axios.$get('/posts/');
      commit('setPosts', posts);
    } catch (e) {
      console.log(e);
    }
  },
  async fetchSinglePost({ commit }, id) {
    try {
      const post = await this.$axios.$get(`/posts/${id}`);
      commit('setSinglePost', post);
    } catch (e) {
      console.log(e);
    }
  },
};

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setSinglePost(state, post) {
    state.singlePost = post;
  },
};

export const getters = {
  posts: (s) => s.posts,
  singlePost: (s) => s.singlePost,
};
