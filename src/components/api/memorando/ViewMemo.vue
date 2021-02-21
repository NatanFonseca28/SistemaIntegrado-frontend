


<template>
  <!-- Tabelo com todos memorando já criados -->
  <div class="createSolicit">
    <b-table
      hover
      striped
      :items="memos"
      :fields="fields"
      class="tableMemo my-custom-scrollbar"
    >
      <template slot="cell(actions)" slot-scope="data">
        <b-button
          variant="warning"
          @click="loadUser(data.item)"
          class="mr-2"
          v-if="user.admin"
        >
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="remove()" v-if="user.admin">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
  <!-- Tabelo com todos memorando já criados -->
</template>

<script>

/* -------------------------------------------------------------------------- */
/*                                Apenas ADMIN                                */
/* -------------------------------------------------------------------------- */



import { baseApiUrl } from "@/global";
import axios from "axios";
import { VueEditor } from "vue2-editor";
import { mapState } from "vuex";

export default {
  name: "MemoView",
  components: { VueEditor },
  computed: mapState(["Memo", "user"]), //Carrega todos os dados do objeto "User" e "Memo"
  data: function () {
    return {
      mode: "save",
      memo: {},
      memos: [],
      users: [],
      page: 1,
      limit: 0,
      count: 0,
      fields: [
        { key: "_id", label: "id", sortable: true },
        { key: "title", label: "Título", sortable: true },
        { key: "subtitle", label: "Subtítulo", sortable: true },
        { key: "author", label: "Autor", sortable: true },
        { key: "to", label: "Enviado Para", sortable: true },
        { key: "content", label: "Conteúdo", sortable: true },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    loadMemos() {
      const url = `${baseApiUrl}/memos`;
      axios.get(url).then((res) => {
        this.memos = res.data;
      });
    },
    reset() {
      this.mode = "save";
      this.memo = {};
      this.loadMemos();
    },
    loadSolicitation(memo, mode = "save") {
      this.mode = mode;
      this.memo = { ...memo };
    },
  },
  mounted() {
    this.loadMemos();
  },
};
</script>

<style>

.my-custom-scrollbar {
position: relative;
height: 500px;
overflow: auto;
}

.tableMemo{
display: block;
}
</style>