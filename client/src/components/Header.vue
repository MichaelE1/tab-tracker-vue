<template>
  <v-toolbar fixed class="cyan" dark>
    <router-link to="/" tag="v-toolbar-title" class="mr-4 home">TabTracker</router-link>
    <!-- <v-toolbar-title class="mr-4" to="root">
      TabTracker
    </v-toolbar-title> -->

    <!-- TO DO: Implement -->
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark to="login">
        Login
        <!-- <router-link to="register">Sign Up</router-link> -->
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <v-btn flat dark to="register">
        Sign Up
        <!-- <router-link to="register">Sign Up</router-link> -->
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style scoped>
  .home {
    cursor: pointer;
  }
</style>
