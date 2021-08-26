<template>
  <v-card class="rounded-xl">
    <v-img :src="image" :alt="title" />
    <v-card-title v-text="title" />
    <v-card-subtitle v-text="preview" />
    <v-card-text class="d-flex justify-space-between align-center">
      <v-btn color="primary" depressed rounded nuxt :to="`/posts/${id}`"> See More </v-btn>
      <div>
        {{ $dateFns.format(date, 'dd-MM-yyyy') }}
        <v-icon right v-text="`mdi-calendar`" />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      image: {
        type: String,
        default: 'http://lorempixel.com/640/480/technics',
      },
      title: {
        type: String,
        default: 'Licensed Granite Chair',
      },
      preview: {
        type: String,
        default: "programming the port won't do anything, we need to copy the auxiliary USB system!",
      },
      date: {
        type: String,
        default: '2021-04-23T05:11:54.250Z',
      },
      id: {
        type: String,
        default: '1',
      },
    },
    asyncData({ $dateFns }) {
      return {
        dateFormatted: $dateFns.format(new Date()),
      };
    },
  };
</script>
