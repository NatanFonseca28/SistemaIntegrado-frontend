<template>
  <div class="content">
    <div class="container-fluid">
      <transition name="fade" mode="out-in">
        <!-- your content here -->
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style>
.content {
  margin-top: 0.1%;
  margin-left: 0.1%;
  margin-right: 0.1%;
  margin-bottom: 0.1%;
  grid-area: content;


    background-image: url("../../assets/Fundo/Fundo-2.png");
    background-size: cover;

  padding: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
  .fade-leave-to
  /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>