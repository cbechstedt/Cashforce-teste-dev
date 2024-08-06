<template>
  <div class="container">
    <header>
    </header>
    <div class="content">
      <div class="nfs2">
        <img src="@/assets/hands2.svg" alt="Hands2" class="hands2" />
        <h1>Notas Fiscais</h1>
      </div>
      <p>Visualize as notas fiscais que você tem.</p>
      <OrderTable />
    </div>
  </div>
</template>

<script>
import OrderTable from '@/components/OrderTable.vue'

export default {
  name: 'HomeView',
  components: {
    OrderTable
  }
}
</script>

<style scoped>
.container {
  width: 100%;
}

header {
  width: 100%;
  height: 64px;
  border-bottom: 1px solid gray;
}

.content {
  padding: 30px;
}

h1 {
  text-align: left;
  margin-bottom: 5px;
}

p {
  text-align: left;
  margin-bottom: 20px;
}

.content h1 {
  color: #021B51;
}

.nfs2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 9px;
}

</style>
