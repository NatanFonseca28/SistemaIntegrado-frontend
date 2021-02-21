<template>
  <div class="page-title">
    <table v-responsive.lg.xl>
      <tr>
        <td>
          <img
            class="icon"
            v-bind:src="require('../../assets/Icones/' + icone)"
          />
        </td>
        <td>
          <h1 class="h1Desktop">{{ main }}</h1>
          <h2 class="h2Desktop">{{ sub }}</h2>
        </td>
      </tr>
    </table>
    <table v-responsive.sm.xs>
      <tr>
        <td>
          <img
            class="iconSMALL"
            v-bind:src="require('../../assets/Icones/' + icone)"
          />
        </td>
        <td>
          <h1 class="h1Smartphone">{{ main }}</h1>
          <h2 class="h2Smartphone"> {{ sub }}</h2>
        </td>
      </tr>
    </table>

    <hr />
  </div>
</template>

<script>
import responsive from 'vue-responsive';
import Vue from 'vue'

Vue.use(responsive)

export default {
  name: "PageTitle",
  props: ["icone", "main", "sub"],
};
</script>

<style>
@font-face {
  font-family: code-block;
  src: url("../../assets/Fonts/CODE-Bold.otf");
}

.icon {
  margin-right: 0;
  zoom: 0.8;
  display: flex;
}
.iconSMALL {
  margin-right: 0;
  zoom: 0.5;
  display: flex;
}
.page-title .h1Desktop {
  font-family: code-block;
  color: aliceblue;
  font-size: 2.5rem;
}

.page-title .h2Desktop {
  font-family: code-block;

  color: #d3cce3;
  margin-top: 5px;
  font-size: 1.1rem;
}
.page-title .h1Smartphone {
  font-family: code-block;
  color: aliceblue;
  font-size: 2.0rem;
}

.page-title .h2Smartphone {
  font-family: code-block;

  color: #d3cce3;
  margin-top: 5px;
  font-size: 0.9rem;
}

hr {
        color: white;
        border: 0;
        width: 100%;
        height: 3.4px;
        background-image: linear-gradient(to right,
            rgba(134, 134, 134, 0),
            rgb(255, 255, 255),
            rgba(120, 120, 120, 0));
    }
</style>
