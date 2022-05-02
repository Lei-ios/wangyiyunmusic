<template>
  <div>
    <van-cell
      :title="name"
      center
      :label="author+ '--' + name"
    >
      <template>
        <van-icon
          name="play-circle-o"
          class="search-icon"
          @touchstart='playFn'
        ></van-icon>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    author: String,
    id: Number,
  },
  methods: {
    playFn() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.id,
        },
      });
    },
  },
};
</script>

<style scoped>
.search-icon {
  font-size: 24px;
}
</style>