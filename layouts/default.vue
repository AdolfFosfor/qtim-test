<template>
  <v-app dark>
    <v-main>
      <v-container v-if="loading" id="loading">
        <v-sheet class="d-flex justify-center align-center" color="transparent" height="90vh">
          <v-progress-circular class="mt-4" :size="40" indeterminate :width="8" color="info" />
        </v-sheet>
      </v-container>
      <v-container :class="{ dNone: loading }" fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :class="{ dNone: loading }" absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      loading: true,
    }),
    mounted() {
      this.loading = false;
    },
  };
</script>
