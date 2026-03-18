<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="register" class="form">
      <input v-model="name" placeholder="Name" required class="input" />
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
        class="input"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
        class="input"
      />
      <select v-model="role" class="input">
        <option value="patient">Patient</option>
        <option value="secretary">Secretary</option>
      </select>
      <button type="submit" class="button">Register</button>
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

<style scoped>
.register {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
}

.input {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.button:hover {
  background-color: #218838;
}
</style>
