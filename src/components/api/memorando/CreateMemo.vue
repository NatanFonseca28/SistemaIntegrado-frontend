<template>
  <div class="memo-admin">
    <b-form>
      <input id="memo-id" type="hidden" v-model="memo.id" />

      <!-- Título memorando -->

      <b-form-group label="Título:" label-for="memo-title">
        <b-form-input
          id="memo-title"
          type="text"
          v-model="memo.title"
          required
          placeholder="Informe o título do Memorando"
        />
      </b-form-group>

      <!--/ Título memorando -->
      <!-- Subtítulo memorando -->

      <b-form-group label="Subtítulo" label-for="memo-subtitle">
        <b-form-input
          id="memo-subtitle"
          type="text"
          v-model="memo.subtitle"
          placeholder="Informe subtítulo do memorando"
        />
      </b-form-group>
      <!-- /Subtítulo memorando -->

      <!-- Autor memorando -->

      <b-form-group v-if="mode === 'save'" label="Autor:"
        ><b-form-input
          id="memo-author"
          type="text"
          v-model="memo.author"
          :value="user.name"
          required
          readonly
        ></b-form-input>
      </b-form-group>

      <!--/ Autor memorando -->

      <!-- Departamento de destino -->
      <b-form-group label="Departamento de destino:" label-for="memo-dpto-email">
        <select class="form-control" id="dpto-email" v-model="memo.to">
          <option v-for="item in dptos" :key="item.name" :value="item.email">
            {{ item.email }}
          </option>
        </select>
      </b-form-group>

      <!--/ Departamento de destino -->

      <!-- Conteúdo -->

      <b-form-group
        v-if="mode === 'save'"
        label="Conteúdo"
        label-for="memo-content"
      >
        <VueEditor
          v-model="memo.content"
          placeholder="Informe o Conteúdo do Memorando"
        />
      </b-form-group>

      <!-- /Conteúdo -->

      <b-button variant="primary" v-if="mode === 'save'" @click="save"
        >Salvar</b-button
      >
      <b-button variant="danger" v-if="mode === 'remove'" @click="remove"
        >Excluir</b-button
      >
      <b-button class="ml-2" @click="reset">Cancelar</b-button>
    </b-form>
    <hr />
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { baseApiUrl, showError } from "@/global";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "CreateMemo",
  computed: mapState(["user", "dpto"]), //Carrega todos os dados do objeto "User" e "Dpto"

  components: { VueEditor },
  data: function () {
    return {
      mode: "save",
      memo: {},
      users: [],
      dptos: [],
      dpto: {},
    };
  },
  methods: {
    // Função carrega memorando
    loadMemo() {
      const url = `${baseApiUrl}/memos?page=${this.page}`;
      axios.get(url).then((res) => {
        this.memo = res.data.data;
        this.count = res.data.count;
        this.limit = res.data.limit;
      });
    },

    // Função resetar campos
    reset() {
      this.mode = "save";
      this.memo = {};
      this.loadMemo();
    },

    // Função salvar
    save() {
      const method = this.memo.id ? "put" : "post";
      const id = this.memo.id ? `/${this.memo.id}` : "";
      axios[method](`${baseApiUrl}/memos${id}`, this.memo)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },

    /* -------------------------------------------------------------------------- */
    /*                          Função enviar e-mail aqui                         */
    /* -------------------------------------------------------------------------- */

    //Função carregar usuários
    loadUsers() {
      const url = `${baseApiUrl}/users`;
      axios.get(url).then((res) => {
        this.users = res.data.map((user) => {
          return { value: user.id, text: `${user.name} - ${user.email}` };
        });
      });
    },
    loadDptos() {
      const url = `${baseApiUrl}/dpto`;
      axios.get(url).then((res) => {
        this.dptos = res.data
      });
    },
    loadDpto(dpto, mode = "save") {
      this.mode = mode;
      this.dpto = { ...dpto };
    },
  },
  mounted() {
    this.loadUsers();
    this.loadDptos();
  },
};
</script>

<style>
</style>