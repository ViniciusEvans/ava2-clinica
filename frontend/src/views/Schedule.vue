<template>
  <div>
    <h2>Schedule Appointment</h2>
    <form @submit.prevent="schedule">
      <input v-model="date" type="date" required />
      <input v-model="time" type="time" required />
      <input v-model="cep" placeholder="CEP" required />
      <button type="submit">Schedule</button>
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
