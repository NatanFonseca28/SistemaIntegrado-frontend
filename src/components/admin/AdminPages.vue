<template>
  <div class="admin-pages">
    <PageTitle
      icone="logo-systemadm.png"
      main="Administração do Sistema"
      sub="Cadastro no sistema"
    />
    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Departamentos" active>
            <DptoAdmin />
          </b-tab>
          <b-tab title="Usuários" active>
            <UserAdmin />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
/* -------------------------------------------------------------------------- */
/*                                Apenas ADMIN                                */
/* -------------------------------------------------------------------------- */

import PageTitle from "../template/PageTitle";
import UserAdmin from "./UsersAdmin";
import DptoAdmin from "./DptoAdmin";

export default {
  name: "AdminPages",
  components: { PageTitle, UserAdmin, DptoAdmin },
};
</script>

<style>
</style>
