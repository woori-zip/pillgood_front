<template>
  <HeaderView/>
  <router-view />
  <FooterView/>
</template>

<script>
import HeaderView from './components/HeaderView.vue'
import FooterView from './components/FooterView.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.isLoggedIn,
      user: state => state.user
    })
  },
  methods: {
    ...mapActions(['checkLoginStatus', 'fetchUserInfo']),
  },
  async created() {
    try {
      // 애플리케이션이 처음 로드될 때 세션 상태 확인
      await this.$store.dispatch('checkLoginStatus');
      if (this.isLoggedIn) {
        console.log('세션 로그인 상태: true'); // 세션 상태가 true인 경우 콘솔에 출력
        await this.$store.dispatch('fetchUserInfo');
      } else {
        console.log('세션 로그인 상태: false'); // 세션 상태가 false인 경우 콘솔에 출력
      }

      // 로그인 상태 변화 감지
      this.$watch(
        () => this.isLoggedIn,
        (newVal) => {
          console.log('로그인 상태 변경:', newVal); // 상태 변경 확인
        },
        { immediate: true }
      );

      // 주기적으로 세션 상태 확인
      setInterval(async () => {
        await this.checkLoginStatus();
        if (this.isLoggedIn) {
          await this.$store.dispatch('fetchUserInfo');
          const user = this.$store.state.user;
          if (user) {
            alert(`현재 로그인된 사용자 ID: ${user}`);
          } else {
            alert('로그인된 사용자가 없습니다.');
          }
        } else {
          alert('로그인된 사용자가 없습니다.');
        }
      }, 30000); // 30초마다 실행
    } catch (error) {
      console.error('세션 확인 에러: ', error);
    }
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
