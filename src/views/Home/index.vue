<template>
  <div>
    <div>
      <p class="title">热门歌单推荐</p>
      <van-row
        gutter="20"
        type="flex"
        justify="space-between"
      >
        <van-col
          v-for="item in remengedan"
          :key="item.id"
          span="8"
        >
          <van-image
            width="100%"
            height="3rem"
            :src="item.picUrl"
          />
          <p class="song_name">{{ item.name }}</p>
        </van-col>
      </van-row>
    </div>
    <p class="title">新歌推荐</p>
    <SongItem
      v-for="item1 in hotMusic"
      :key="item1.id"
      :name="item1.name"
      :author="item1.song.artists[0].name"
      :id="item1.id"
    ></SongItem>
    <!-- <van-cell
      v-for="item1 in hotMusic"
      :key="item1.id"
      :title="item1.name"
      center
      :label="item1.song.artists[0].name + '--' + item1.name"
    >
      <template>
        <van-icon
          name="play-circle-o"
          class="search-icon"
        ></van-icon>
      </template>
    </van-cell> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import SongItem from "@/components/SongItem";
export default {
  data() {
    return {};
  },
  components: {
    SongItem,
  },
  computed: {
    ...mapState({
      remengedan: (state) => state.myHome.remengedan,
      hotMusic: (state) => state.myHome.zuixinyinyue,
    }),
  },
  mounted() {
    this.$store.dispatch("rementuijiangequ");
    this.$store.dispatch("huoquzuixinyinyue");
  },
};
</script>

<style scoped>
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
  text-align: center;
}
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>
