<template>
  <div>
    <PageTitle icone="logo-dashboard.png" main="Dashboard" sub="Sistema unificado" />
    <div class="stats">
      <Stat
        title="Departamentos"
        :value="stat.dpto"
        icon="fa fa-building"
        color="#d54d50"
      />
      <Stat
        title="Usuários"
        :value="stat.users"
        icon="fa fa-user"
        color="blue"
      />
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import Stat from "./Stat";
import axios from "axios";
import { mapState } from "vuex";


import { baseApiUrl } from "@/global";

export default {
  name: "Home",
  components: { PageTitle, Stat },
  computed: mapState(["user"]),

  data: function () {
    return {
      stat: {},
    };
  },
  methods: {
    getStats() {
      /* --------------------------------------------- TROCAR NO BUILD ----------------------------------- */
      /*   axios.get(`http://localhost:3000/stats`).then(res => this.stat = res.data) */
      axios.get(`${baseApiUrl}/stats`).then((res) => (this.stat = res.data));
    },
  },
  mounted() {
    this.getStats();
  },
};
</script>

<style>
.stats {
  display: flex;
  flex-wrap: wrap;
}
</style>
