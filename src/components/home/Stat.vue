<template>
    <div class="stat">
        <div class="stat-icon">
            <i :class="icon" :style="style"></i>
        </div>
        <div class="stat-info">
            <span class="stat-title"> {{title}} </span>
                    <div class="stat-info">

            <span class="stat-value"> {{value}} </span>

                    </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Stat",
  props: ["title", "value", "icon", "color"],
  computed: {
    style() {
      return "color: " + (this.color || "#000");
    },
  },
};
</script>

<style>
.stat {
    flex: 1;
    display: flex;
    border-radius: 99px;
    margin-right: 20px;
    margin-bottom: 20px;
background-color: rgb(245, 245, 245);
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.76);
}

.stat-icon{
    display: flex;
    align-items: center;

}

.stat-icon i{
    font-size: 2rem;

}

.stat-info{
    flex: 1;
    display: flex;
/*     flex-direction: column;
 */    align-items: flex;
    
}
.stat-title{
    
    margin-left: 3% ;
    font-size: 1.2rem;
    font-weight: 100;
}
.stat-value{
    font-weight: 900;
    margin-left: 94%;
    align-items: flex-end;
    font-size: 1.3rem;
}
</style>
