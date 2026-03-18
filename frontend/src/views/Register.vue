<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="name" placeholder="Name" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <select v-model="role">
        <option value="patient">Patient</option>
        <option value="secretary">Secretary</option>
      </select>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      role: "patient",
    };
  },
  methods: {
    async register() {
      try {
        await axios.post("http://localhost:5000/api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role,
        });
        this.$router.push("/login");
      } catch (err) {
        alert("Registration failed");
      }
    },
  },
};
</script>
