<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible || !user}" >
		<Header title="SGI - Sistema de Gestão Interna" :hideToggle="!user" :hideUserDropdown="!user"></Header>
		<Content></Content>
		<Footer></Footer>

	</div>
</template>

<script>
import { mapState } from 'vuex'
import Header from "./components/template/Header";
import Content from "./components/template/Content";
import Footer from "./components/template/Footer";

import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)



export default {
  name: "App",
  components: { Header, Content, Footer },
  computed: mapState(['isMenuVisible', 'user']),
  
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
#app.hide-menu {
  grid-template-areas:
      "header header"
      "content content"
       "footer footer";
  
  
  

}


</style>
