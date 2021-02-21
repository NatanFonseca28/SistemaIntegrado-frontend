<template>
  <div>
    <PageTitle
      icone="logo-memorando.png"
      main="Memorando"
      sub="Sistema unificado"
    />

    <div class="memorando-page">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Memorando" active v-if="user.admin">
            <ViewMemo />
          </b-tab>
          <b-tab title="Criar Memorando" active>
            <CreateMemo />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../template/PageTitle";
import CreateMemo from "./CreateMemo";
import ViewMemo from "./ViewMemo";
import { mapState } from "vuex";





export default {
  name: "Home",
  computed: mapState(["user"]),
  components: { PageTitle, CreateMemo, ViewMemo },
};
</script>

<style>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
