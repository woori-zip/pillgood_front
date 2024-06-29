<template>
  <header>
  <div style="width: 100%; margin-top:20px;">
    <header class="p-3 text-bg-white default-shadow">
      <div class="container">
        <form class="d-flex align-items-center justify-content-center flex-wrap form-container">
          <!-- 로고 이미지 -->
          <div class="logo-container">
            <img src="../assets/pillgood_logo.png" class="logo-img">
          </div>
          <!-- 검색창 -->
          <input type="search" placeholder="검색어를 입력하세요" aria-label="Search"
            class="form-control form-control-white text-bg-white search-input">
          <!-- 아이콘 -->
          <div class="icon-container" style="color: #B4D9A9; font-size: 20px; margin-left: 15px">
            <i class="fa-solid fa-user"></i>&nbsp;
            <i class="fa-solid fa-location-dot"></i>&nbsp;
            <i class="fa-solid fa-heart"></i>&nbsp;
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </form>
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
export default {
  name: 'HeaderView'
};
</script>

<style scoped>
/* header */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.search-input {
  height: 30px;
  margin: 10px;
  flex-grow: 1;
  max-width: 600px;
}

.icon-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-container {
  margin-top: 10px;
}

.default-shadow {
  box-shadow: 0 4px 2px -2px rgba(0,0,0,0.2);
}

.logo-container {
  height: 50px;
  margin: auto;
}

.logo-img {
  height: 50px;
  transition: height 0.3s ease;
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
    margin-left: 0px;
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
