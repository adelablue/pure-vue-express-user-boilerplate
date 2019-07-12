<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link  class="navbar-brand" to="/">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample07">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
            <div class="form-inline nav-item dropdown my-2 my-md-0">
              <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Login/Register</a>
              <div class="dropdown-menu" aria-labelledby="dropdown07">
                <router-link  class="dropdown-item" to="/login">Login</router-link>
                <router-link  class="dropdown-item" to="/register">Register</router-link>
              </div>
            </div>
        </div>
      </div>
    </nav>
    <main role="main">
      <div class="container">
    <router-view/>
      </div>
    </main>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<script>
import {EventBus} from './event-bus';
export default {
  data() {
    return {
      isAuthenticated: false,
      isAdmin: false
    }
  },
  created() {
    EventBus.$on('login', this.login);

    if (localStorage.getItem('token')) {
      this.isAuthenticated = true;
    }

    let user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.isAdmin = user.isAdmin;
    }
  },
  methods: {
    login(data) {
      this.error = '';

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      this.isAuthenticated = true;
      this.isAdmin = data.user.isAdmin;

      this.$router.push('/profile');
    }
  }
  
}
</script>