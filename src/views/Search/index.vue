<template>
  <div>
    <van-search
      shape="round"
      v-model="searchValue"
      placeholder="请输入关键词"
    > </van-search>
    <div
      class="search_wrap"
      v-if="resultList.length===0"
    >
      <p class="hot_title">热门搜索</p>
      <ul class="hot_name_wrap">
        <li
          @click="btnHot(item.first)"
          v-for="(item, index) in hotList"
          :key="index"
          class="hot_item"
        >{{ item.first }}</li>
      </ul>
    </div>
    <div
      class="search_wrap"
      v-else
    >
      <p class="hot_title">最佳匹配</p>
      <SongItem
        v-for="item1 in resultList"
        :key="item1.id"
        :name="item1.name"
        :author="item1.ar[0].name"
        :id="item1.id"
      ></SongItem>
    </div>
  </div>
</template>

<script>
import SongItem from "@/components/SongItem";
import { searchResoltApi } from "@/api";
import { mapState } from "vuex";
export default {
  data() {
    return {
      searchValue: "",
      resultList: [],
      timer: null,
    };
  },
  components: {
    SongItem,
  },

  computed: {
    ...mapState({
      hotList: (state) => state.mySearch.hotMusicList.hots,
    }),
  },
  mounted() {
    this.$store.dispatch("hotSraechList");
  },
  methods: {
    async btnHot(str) {
      this.searchValue = str;
      const res = await searchResoltApi({
        type: 1,
        keywords: this.searchValue,
      });
      this.resultList = res.data.result.songs;
      setTimeout(() => {
        clearTimeout(this.timer);
      }, 1000);
    },
  },
  watch: {
    searchValue(val) {
      clearTimeout(this.timer);
      if (val.length === 0) return (this.resultList = []);
      this.timer = setTimeout(async () => {
        const res = await searchResoltApi({
          type: 1,
          keywords: val,
        });
        this.resultList = res.data.result.songs;
      }, 500);
    },
  },
};
</script>

<style scoped lang="less">
/deep/ .van-field__control {
  font-size: 10px;
}
.hot_title {
  font-size: 0.32rem;
  color: #666;
}
.search_wrap {
  padding: 0.266667rem;
}
/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>
