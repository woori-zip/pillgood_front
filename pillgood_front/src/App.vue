<template>
  <HeaderView/>
  <router-view />
  <FooterView/>
</template>

<script>
import HeaderView from './components/HeaderView.vue'
import FooterView from './components/FooterView.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView
  },
  methods: {
    ...mapActions(['checkLoginStatus']),
  },
  created() {
    this.checkLoginStatus();
    setInterval(() => {
      this.checkLoginStatus().then(() => {
        const user = this.$store.state.user;
        if (user) {
          alert(`현재 로그인된 사용자: ${user.email}`);
        } else {
          alert('로그인된 사용자가 없습니다.');
        }
      });
    }, 30000); // 30초마다 실행
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
