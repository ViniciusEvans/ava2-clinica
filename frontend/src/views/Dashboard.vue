<template>
  <div class="dashboard">
    <h2>Dashboard</h2>
    <h3>Appointments</h3>
    <ul class="appointment-list">
      <li v-for="appt in appointments" :key="appt._id" class="appointment-item">
        {{ appt.date }} - {{ appt.time }} - {{ appt.address }} -
        {{ appt.weatherAlert }}
      </li>
    </ul>
    <router-link to="/schedule" class="link">Schedule New</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      appointments: [],
    };
  },
  async mounted() {
    const token = localStorage.getItem("token");
    const res = await axios.get(
      "https://ava2-backend.vercel.app/api/appointments",
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    this.appointments = res.data;
  },
};
</script>

<style scoped>
.dashboard {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2,
h3 {
  color: #333;
  margin-bottom: 20px;
}

.appointment-list {
  list-style: none;
  padding: 0;
}

.appointment-item {
  background-color: #f8f9fa;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  border-left: 4px solid #007bff;
}

.link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.link:hover {
  background-color: #0056b3;
}
</style>
