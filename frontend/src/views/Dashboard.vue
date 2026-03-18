<template>
  <div>
    <h2>Dashboard</h2>
    <h3>Appointments</h3>
    <ul>
      <li v-for="appt in appointments" :key="appt._id">
        {{ appt.date }} - {{ appt.time }} - {{ appt.address }} -
        {{ appt.weatherAlert }}
      </li>
    </ul>
    <router-link to="/schedule">Schedule New</router-link>
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
    const res = await axios.get("http://localhost:5000/api/appointments", {
      headers: { Authorization: `Bearer ${token}` },
    });
    this.appointments = res.data;
  },
};
</script>
