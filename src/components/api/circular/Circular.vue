<template>
  <div>
    <PageTitle
      icone="logo-circular.png"
      main="Circular"
      sub="Sistema unificado"
    />

    <div class="memorando-page">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Memorando" active>
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

export default {
  
  name: "Home",
  components: { PageTitle },
};
</script>

<style>
</style>