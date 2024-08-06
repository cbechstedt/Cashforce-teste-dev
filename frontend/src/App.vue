<template>
  <div id="app">
    <div class="sidebar">
      <div class="sidebar-content">
        <img src="@/assets/logo.svg" alt="Logo" class="logo" />
        <div class="nfs">
          <img src="@/assets/hands.svg" alt="Hands" class="hands" />
          <h2>Notas Fiscais</h2>
        </div>
      </div>
    </div>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

#app {
  display: flex;
  width: 100%;
  height:900px;
}

.sidebar {
  width: 288px;
  background-color: #f8f8f8;
  text-align: center;
  height: 100%;
}

.main-content {
  flex: 1;
  padding: 20px;
}

h2 {
  color: #333;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 144px;
}

.nfs {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.nfs h2 {
  color: #00AD8C;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  
}

</style>
