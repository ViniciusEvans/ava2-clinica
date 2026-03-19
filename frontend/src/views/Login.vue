<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login" class="form">
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
      <button type="submit" class="button">Login</button>
    </form>
    <router-link to="/register" class="link">Register</router-link>
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
        const res = await axios.post(
          "https://ava2-backend.vercel.app/api/login",
          {
            email: this.email,
            password: this.password,
          },
        );
        localStorage.setItem("token", res.data.token);
        this.$router.push("/dashboard");
      } catch (err) {
        alert("Login failed");
      }
    },
  },
};
</script>

<style scoped>
.login {
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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.button:hover {
  background-color: #0056b3;
}

.link {
  display: block;
  text-align: center;
  margin-top: 15px;
  color: #007bff;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
