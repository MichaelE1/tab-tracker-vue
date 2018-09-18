<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form">
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              label="Password"
              v-model="password"
              :type="'password'"
            ></v-text-field>
            <br>
            <v-alert v-model="error" dismissible type="error" icon="warning">
              {{errorMsg}}
            </v-alert>
            <br>
            <v-btn class="cyan" dark @click="register">Register</v-btn>
          </form>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: false,
      errorMsg: ''
    }
  },
  methods: {
    async register () {
      this.error = false
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = true
        this.errorMsg = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
