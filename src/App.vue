<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">bezKoder</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/veemenu" class="nav-link">Vee-Validate4Training</router-link>
        </li>
      </div>
    </nav>
    <!-- Vuex追加 -->
      <input type="button" v-on:click="ondecrement" value="-" />
  {{count}}
  <input type="button" v-on:click="onincrement" value="+" />
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
// import { computed } from '@vue/reactivity';
export default {
  name: "app",
  computed: {
      count() {
        return this.$store.state.count
      }
  },
  methods:{
    onincrement() {
      this.$store.commit('increment')
    },
    ondecrement(){
      this.$store.commit('decrement')
    }
  }
};
</script>