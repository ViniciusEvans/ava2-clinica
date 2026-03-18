<template>
  <div id="app">
    <header class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="navbar-brand">Sistema Médico</router-link>
        <nav class="navbar-nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link v-if="!isLoggedIn" to="/login" class="nav-link"
            >Login</router-link
          >
          <router-link v-if="!isLoggedIn" to="/register" class="nav-link"
            >Register</router-link
          >
          <router-link v-if="isLoggedIn" to="/dashboard" class="nav-link"
            >Dashboard</router-link
          >
          <router-link v-if="isLoggedIn" to="/schedule" class="nav-link"
            >Schedule</router-link
          >
          <button v-if="isLoggedIn" @click="logout" class="nav-link logout-btn">
            Logout
          </button>
        </nav>
      </div>
    </header>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem("token");
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: #007bff;
  color: white;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
}

.navbar-brand {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.navbar-brand:hover {
  color: #e9ecef;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.1);
}

.logout-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f8f9fa;
}

@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    height: auto;
    padding: 10px 20px;
  }

  .navbar-nav {
    margin-top: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .main-content {
    padding: 10px;
  }
}
</style>
