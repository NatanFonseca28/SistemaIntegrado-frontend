<template>
  <header class="header">
    <!-- MENU BOTTOM  -->

    <div>
      <b-button v-b-toggle.sidebar-backdrop v-show="isMenuVisible"
        ><i class="fa fa-bars" aria-hidden="true"></i>
      </b-button>

      <b-sidebar
        id="sidebar-backdrop"
        :backdrop-variant="variant"
        backdrop
        shadow
      >
        <!-- CABEÇALHO MENU -->
        <header class="logo">
          <router-link to="/">
            <img
              class="rsalogo"
              src="../../assets/Icones/Logo-RSA-type2.png"
              alt="logoRSA"
            />
          </router-link>
        </header>
        <hr class="hrseparate" />
        <!--  FIM CABEÇALHO MENU -->

        <!-- MENU -->

        <div class="" id="sidebar-wrapper" v-if="!hideUserDropdown">
          <div class="list-group">
            <router-link to="/"
              ><span class="list-group-item-action"
                >Dashboard</span
              ></router-link
            >
            <router-link to="/memorando"
              ><span class="list-group-item-action"
                >Memorando</span
              ></router-link
            >
            <router-link to="/circular"
              ><span class="list-group-item-action">Circular</span></router-link
            >
            <router-link to="/"
              ><span class="list-group-item-action"
                >Aplicação 4</span
              ></router-link
            >
            <router-link to="/"
              ><span class="list-group-item-action"
                >Aplicação 5</span
              ></router-link
            >
            <router-link to="/"
              ><span class="list-group-item-action"
                >Aplicação 6</span
              ></router-link
            >
            <!--  FIM MENU -->
          </div>
        </div>
      </b-sidebar>
    </div>

    <!-- FIM MENU BUTTON -->

    <h1 class="title">
      <router-link to="/">
        {{ title }}
      </router-link>
    </h1>
    <UserDropdown v-if="!hideUserDropdown" />
  </header>
</template>

<script>
import UserDropdown from "./UserDropdown";
import { mapState } from "vuex";

export default {
  name: "Header",
  components: { UserDropdown },
  props: {
    title: String,
    hideToggle: Boolean,
    hideUserDropdown: Boolean,
  },
  computed: mapState(["isMenuVisible"]),

  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
    data() {
      return {
        variant: "dark",
      };
    },
  },
};
</script>

<style>
@font-face {
  font-family: nuvel;
  src: url("../../assets/Fonts/Nuvel.otf");
}

.hrseparate {
  border: 0;
  width: 100%;
  height: 3.4px;
  background-image: linear-gradient(
    to right,
    rgba(120, 120, 120, 0),
    #003171,
    rgba(120, 120, 120, 0)
  );
}

.list-group-item-action:hover {
  text-decoration: none !important;
  background-color: #f5f5f500 !important;
  transition: 2s;
}
.list-group-item-action {
  text-decoration: none !important;

  background-color: #ffffff00 !important;
  color: #041938 !important;
  transition: 2s;
}

.list-group a {
  text-decoration: none !important;

  padding-top: 9%;
  padding-bottom: 9%;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  transition: 0.1s;
}
.list-group a:hover {
  text-decoration: none !important;

  padding-top: 9%;
  padding-bottom: 9%;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;

  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  background: radial-gradient(
    circle,
    rgba(0, 95, 176, 0.6026785714285714) 11%,
    rgba(250, 250, 250, 0.028448879551820738) 100%
  );
  padding: 45px 45px;
  text-align: center;
  transition: 0.1s;
}

.logo {
  grid-area: logo;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
}

#sidebar-backdrop {
  text-decoration: none !important;

  background: linear-gradient(180deg, #ffffff 0%, #ffffff 100%);
}

.btn-secondary {
  color: #fff;
  background-color: #00408a !important;
}

.header {
  grid-area: header;
  background: #f5f5f5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #d5dbe7,
    #ffffff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #d5dbe7,
    #ffffff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 0px 11px 6px rgba(0, 0, 0, 0.212);
}

.logo {
  margin-left: 2%;
}

.logo .rsalogo {
  zoom: 0.5;
}

.title {
  font-size: 1.2rem;
  color: #2d1a97;
  font-weight: 200;
  flex-grow: 1;
  text-align: center;
  font-family: nuvel !important;
}

.title a {
  color: #2d1a97;
  font-display: flex;
  text-decoration: none;
  font-family: nuvel !important;
}

.title a:hover {
  color: #2d1a97;
  text-decoration: none;
  font-family: nuvel !important;
}

header.header > a.toggle {
  width: 60px;
  height: 100%;
  color: #2d1a97;
  justify-self: flex-start;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
}

header.header > a.toggle:hover {
  background-color: #32209642;
}
</style>
