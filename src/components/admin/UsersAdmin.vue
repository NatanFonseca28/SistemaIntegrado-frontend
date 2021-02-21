<template>
  <div class="user-admin">
    <b-form>
      <input id="user-id" type="hidden" v-model="user.id" />
      <b-row>
        <b-col md="6" sm="12">
          <!-- LABEL USERNAME -->
          <b-form-group label="Nome:" label-for="user-name">
            <b-form-input
              id="user-name"
              type="text"
              v-model="user.name"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o Nome de usuário"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <!-- LABEL NICKNAME -->
          <b-form-group label="Apelido:" label-for="user-nickname">
            <b-form-input
              id="user-nickname"
              type="text"
              v-model="user.nickname"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o Nome de usuário"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <!-- LABEL EMAIL -->
        <b-col sm="6">
          <b-form-group label="E-mail:" label-for="user-email">
            <b-form-input
              id="user-email"
              type="text"
              v-model="user.email"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o E-mail de usuário"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <!-- LABEL DEPARTAMENTO -->

        <b-col sm="6">
          <b-form-group label="Departamento" label-for="user-dpto">
            <select 
              class="form-control" 
              id="user-dpto" 
              v-model="user.idDpto">
              <option v-for="item in dptos" :key="item.name" :value="item.id">
                {{ item.name }}
              </option>
            </select>
          </b-form-group>
        </b-col>
      </b-row>
        <!-- CHECKBOX ADMINISTRADOR -->

      <b-form-checkbox
        id="user-admin"
        v-show="mode === 'save'"
        v-model="user.admin"
        class="mt-3 mb-3 checkadmin"
        >Administrador?</b-form-checkbox
      >
        <!-- LABEL SENHA -->

      <b-row v-show="mode === 'save'">
        <b-col md="6" sm="12">
          <b-form-group label="Senha:" label-for="user-password">
            <b-form-input
              id="user-password"
              type="password"
              v-model="user.password"
              required
              placeholder="Informe a senha de usuário"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group
            label="Confirmação de Senha:"
            label-for="user-confirmPassword"
          >
            <b-form-input
              id="user-confirmPassword"
              type="password"
              v-model="user.confirmPassword"
              required
              placeholder="Confirme a senha de usuário"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
        <!-- BOTÃO SAVE/DEL -->

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


            <!-- TABELA DE USUÁRIOS -->

    <b-table sticky-header hover striped :items="users" :fields="fields" class="tableUser my-custom-scrollbar">
      <template slot="cell(actions)" slot-scope="data">
        <b-button variant="warning" @click="loadUser(data.item)" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadUser(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";
import { mapState } from "vuex";


export default {
  name: "UserAdmin",
  computed: mapState(["dpto"]),

  data: function () {
    return {
      mode: "save",
      user: {},
      users: [],
      dpto: {},
      dptos: [],
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "nickname", label: "Apelido", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        { key: "idDpto", label: "ID Departamento", sortable: true },

/*         {
          key: "Admin",
          label: "Administrador",
          sortable: true,
          formatter: (value) => (value ? "Sim" : "Não"),
        }, */
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

    loadDpto(dpto, mode = "save") {
      this.mode = mode;
      this.dpto = { ...dpto };
    },
    loadUsers() {
      const url = `${baseApiUrl}/users`;
      axios.get(url).then((res) => {
        this.users = res.data;
      });
    },
    reset() {
      this.mode = "save";
      this.user = {};
      this.loadUsers();
    },
    save() {
      const method = this.user.id ? "put" : "post";
      const id = this.user.id ? `${this.user.id}` : "";
      axios[method](`${baseApiUrl}/users/${id}`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.user.id;
      axios
        .delete(`${baseApiUrl}/users/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadUser(user, mode = "save") {
      this.mode = mode;
      this.user = { ...user };
    },
  },
  mounted() {
    this.loadUsers();
    this.loadDptos();
  },
};
</script>

<style>
.my-custom-scrollbar {
position: relative;
height: 500px;
overflow: auto;
}

.tableUser{
display: block;
}
.checkadmin {
  font-weight: 600;
}
</style>
