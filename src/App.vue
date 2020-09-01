<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Form</router-link>
      <router-link class="ml20" to="/game">Game</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="scss">
#nav {
  display: flex;
  justify-content: center;
  align-items: center;

  .ml20 {
    margin-left: 20px;
  }
}
</style>
