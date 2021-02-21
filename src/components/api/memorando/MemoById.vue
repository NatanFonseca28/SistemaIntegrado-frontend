<template>
  <div class="memo-by-id">
    <PageTitle icon="fa fa-file-o" :main="memo.name" :sub="memo.description" />
    <div class="memo-content" v-html="memo.content"></div>
  </div>
</template>

<script>
import { baseApiUrl } from "@/global";
import axios from "axios";
import PageTitle from "../../template/PageTitle";

export default {
  name: "MemoById",
  components: { PageTitle },
  data: function () {
    return {
      memo: {},
    };
  },
  methods: {
    loadMemosById() {
      const url = `${baseApiUrl}/memos/:_id`;
      axios.get(url).then((res) => {
        this.memos = res.data;
      });
    },
  },
  mounted() {
    this.loadMemosById();
  },
};
</script>

<style>
.memo-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 25px;
}

.memo-content pre {
  padding: 20px;
  border-radius: 8px;
  font-size: 1.2rem;
  background-color: #1e1e1e;
  color: #fff;
}

.memo-content img {
  max-width: 100%;
}

.memo-content :last-child {
  margin-bottom: 0px;
}
</style>
