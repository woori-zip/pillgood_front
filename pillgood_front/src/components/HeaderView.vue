<template>
  <header>
    <div style="width: 100%; margin-top:20px;">
      <header class="p-3 text-bg-white default-shadow">
        <div class="container">
          <div class="form-container">
            <!-- 로고 이미지 -->
            <div class="logo-container">
              <router-link to="/">
              <img src="../assets/pillgood_logo.png" class="logo-img">
              </router-link>
            </div>
            <!-- 검색창 -->
            <div class="search-container">
              <input type="search" placeholder="검색어를 입력하세요" aria-label="Search"
                class="form-control form-control-white text-bg-white search-input">
            </div>
            <!-- 아이콘 -->
            <div class="icon-container">
              <router-link v-if="!isLoggedIn" to="/login" class="icon-link"><i class="fa-solid fa-user"></i></router-link>
              <router-link v-else to="/mypage" class="icon-link"><i class="fa-solid fa-user"></i></router-link>
              &nbsp;
              <i class="fa-solid fa-location-dot"></i>&nbsp;
              <i class="fa-solid fa-heart"></i>&nbsp;
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
          <!-- 카테고리 -->
          <nav class="nav-container">
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li class="nav-item"><a href="#" class="nav-link px-2 text-black">카테고리</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-black">신제품</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-black">베스트</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-black">필굿리포트</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HeaderView',
  computed: {
    ...mapState({
      isLoggedIn: state => state.isLoggedIn,
      user: state => state.user
    })
  },
  watch: {
    isLoggedIn(newVal) {
      console.log('로그인 상태 변경:', newVal) // 상태 변경 확인
    }
  },
  created() {
    console.log('초기 isLoggedIn 상태:', this.isLoggedIn); // 초기 상태 확인
  }
};
</script>

<style scoped>
/* header */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.form-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logo-container {
  flex: 0 0 auto; /* flex-grow를 0으로 설정 */
}

.logo-img {
  height: 60%;
}

.search-container {
  flex: 1 1 auto;
  margin: 0 20px; /* 좌우에 20px 여백 추가 */
}

.search-input {
  width: 100%;
  height: 30px;
  margin: 10px 0; /* 상하 여백 10px, 좌우 여백 0 */
}

.icon-container {
color: #B4D9A9;
font-size: 20px;
display: flex;
align-items: center;
gap: 20px;
}

.icon-link {
color: inherit; /* 상위 요소의 색상을 상속받습니다 */
text-decoration-line: none; /* 밑줄을 제거합니다 */
display: flex; /* 아이콘을 flex 컨테이너로 감싸서 아이콘 위치를 조정합니다 */
align-items: center; /* 아이콘을 중앙에 정렬합니다 */
}

.nav-container {
  margin-top: 0px;
  margin-bottom: -10px;
}

.default-shadow {
  box-shadow: 0 4px 2px -2px rgba(0,0,0,0.1);
}

.nav-item {
  margin-right: 20px; /* 텍스트 간의 간격 조절 */
}

.nav-item:last-child {
  margin-right: 0; /* 마지막 아이템의 오른쪽 마진 제거 */
}

.nav-link {
  font-size: 20px; /* 폰트 사이즈 조절 */
}

@media (max-width: 1200px) {
  .search-input {
    max-width: 100%;
  }

  .nav-container {
    margin-top: 20px;
  }

  .icon-container {
    justify-content: center;
    width: 100%;
    margin-top: 10px;
  }

  .form-container {
    flex-direction: column; /* flex-direction을 column으로 변경 */
  }

  .nav-item {
    margin-right: 10px; /* 태블릿 PC 크기에서 텍스트 간의 간격 조절 */
  }

  .nav-link {
    font-size: 20px; /* 태블릿 PC 크기에서 폰트 사이즈 조절 */
  }
}
/* header end */
</style>
