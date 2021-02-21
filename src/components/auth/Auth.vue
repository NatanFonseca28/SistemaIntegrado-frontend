<template>
    <div class="auth-content">
        <div class="auth-modal">
            <img src="@/assets/Icones/iconLogoAuth.png" class="logoAuth" width="" alt="Logo" />
            <img src="@/assets/Icones/RSAicon-type2.png" class="logorsa" width="" alt="Logo" /> 
        <hr>
            <div class="auth-title"> Login </div>
            <input v-model="user.nickname" name="nickname" type="text" placeholder="Nome de usuário" v-on:keyup.enter="signin">
            <input v-model="user.password" name="password" type="password" placeholder="Senha" v-on:keyup.enter="signin">


            <button @click="signin">Entrar</button>
        </div>
    </div>  
</template>

<script>
import { baseApiUrl, showError, userKey } from "@/global";
import axios from "axios";

export default {
  name: "Auth",
  data: function() {
    return {
      showSignup: false,
      user: {},
    };
  },
  methods: {
        signin() {
            axios.post(`${baseApiUrl}/signin`, this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.$router.push({ path: '/' })

                })
                .catch(showError)
    },
  },
};
</script>

<style>

.auth-modal .logoAuth{

  zoom: 0.7;
  padding-bottom: 8%;

}
.auth-modal .logorsa{

  zoom: 0.7;

}

.auth-content {
  margin-top: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-modal {
  background-color: #fff;
  widows: 350px;
  padding: 35px;
box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-title {
  font-size: 1.2rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
}

.auth-modal input {
  border: 1px solid #bbb;
  width: 100%;
  margin-bottom: 15px;
  padding: 3px 8px;
  outline: none;
}

.auth-modal button {
  box-shadow: inset 0px 1px 0px 0px #97c4fe;
  background: linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
  background-color: #3d94f6;
  border-radius: 6px;
  border: 1px solid #337fed;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #1570cd;
}

.auth-model button:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #1e62d0),
    color-stop(1, #3d94f6)
  );
  background: -moz-linear-gradient(top, #1e62d0 5%, #3d94f6 100%);
  background: -webkit-linear-gradient(top, #1e62d0 5%, #3d94f6 100%);
  background: -o-linear-gradient(top, #1e62d0 5%, #3d94f6 100%);
  background: -ms-linear-gradient(top, #1e62d0 5%, #3d94f6 100%);
  background: linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e62d0', endColorstr='#3d94f6',GradientType=0);
  background-color: #1e62d0;
}
    .auth-modal hr {
        border: 0;
        width: 100%;
        height: 3.4px;
        background-image: linear-gradient(to right,
            rgba(120, 120, 120, 0),
            rgba(120, 120, 120, 0.75),
            rgba(120, 120, 120, 0));
    }
</style>
