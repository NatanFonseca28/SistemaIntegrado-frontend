<template>
  <div class="dpto-admin">
    <b-form>
      <input id="dpto-id" type="hidden" v-model="dpto.id" />
      <b-row>
        <b-col md="6" sm="12">
          <!-- LABEL DPTO NAME -->
          <b-form-group label="Nome:" label-for="dpto-name">
            <b-form-input
              id="dpto-name"
              type="text"
              v-model="dpto.name"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o Nome do Departamento"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <!-- LABEL DPTO Email -->
          <b-form-group label="E-mail:" label-for="dpto-email">
            <b-form-input
              id="dpto-email"
              type="text"
              v-model="dpto.email"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o E-mail do Departamento"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col xs="12">
          <b-button variant="primary" v-if="mode === 'save'" @click="save"
            >Salvar</b-button
          >
          <b-button variant="danger" v-if="mode === 'remove'" @click="remove"
            >Excluir</b-button
          >
          <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-col>
      </b-row>
    </b-form>

    <hr />
    <b-table hover striped :items="dptos" :fields="fields">
      <template slot="cell(actions)" slot-scope="data">
        <b-button variant="warning" @click="loadDpto(data.item)" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadDpto(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>






<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "DptoAdmin",
  data: function () {
    return {
      mode: "save",
      dpto: {},
      dptos: [],
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    loadDptos() {
      const url = `${baseApiUrl}/dpto`;
      axios.get(url).then((res) => {
        this.dptos = res.data;
      });
    },

    reset() {
      this.mode = "save";
      this.dpto = {};
      this.loadDptos();
    },
    save() {
      const method = this.dpto.id ? "put" : "post";
      const id = this.dpto.id ? `${this.dpto.id}` : "";
      axios[method](`${baseApiUrl}/dpto/${id}`, this.dpto)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.dpto.id;
      axios
        .delete(`${baseApiUrl}/dpto/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadDpto(dpto, mode = "save") {
      this.mode = mode;
      this.dpto = { ...dpto };
    },
  },
  mounted() {
    this.loadDptos();
  },
};
</script>

<style>
.checkadmin {
  font-weight: 600;
}
</style>
