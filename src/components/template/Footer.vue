<template>
  <footer class="footer">
    <span>
      Desenvolvido por <strong><span id="red">NFS</span>Enterprise</strong>
      <i> - </i> version: 2.0.0
    </span>
  </footer>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style>
#red {
  color: red;
}
.footer {
  margin-left: 0.1%;
  margin-right: 0.1%;
  grid-area: footer;

  background: #ffffff;
  background: -webkit-linear-gradient(
    to left,
    #d5dbe7,
    #ffffff
  );
  background: linear-gradient(
    to left,
    #d5dbe7,
    #ffffff
  );
  color: #333;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;

  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
}
</style>
