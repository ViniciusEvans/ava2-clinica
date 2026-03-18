<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
    <router-link to="/register">Register</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const res = await axios.post("http://localhost:5000/api/login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", res.data.token);
        this.$router.push("/dashboard");
      } catch (err) {
        alert("Login failed");
      }
    },
  },
};
</script>
