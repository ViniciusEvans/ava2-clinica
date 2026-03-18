<template>
  <div class="schedule">
    <h2>Schedule Appointment</h2>
    <form @submit.prevent="schedule" class="form">
      <input v-model="date" type="date" required class="input" />
      <input v-model="time" type="time" required class="input" />
      <input v-model="cep" placeholder="CEP" required class="input" />
      <button type="submit" class="button">Schedule</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      date: "",
      time: "",
      cep: "",
    };
  },
  methods: {
    async schedule() {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          "http://localhost:5000/api/appointments",
          { date: this.date, time: this.time, cep: this.cep },
          { headers: { Authorization: `Bearer ${token}` } },
        );
        this.$router.push("/dashboard");
      } catch (err) {
        alert("Scheduling failed");
      }
    },
  },
};
</script>

<style scoped>
.schedule {
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
