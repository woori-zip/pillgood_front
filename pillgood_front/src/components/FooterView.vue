<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="left-content">
          <div class="footer-item">
            <router-link to="/">
            <img src="../assets/pillgood_logo2.png" class="pillgood-logo">
            </router-link>
          </div>
        </div>
        <div class="center-content">
          <div class="footer-item gray-text">
            <p><span class="bold-text" style="color: black;">내일의 나를 만드는 [건강메이트]필굿</span></p>
          </div>
          <div class="footer-item gray-text">
            <p><span class="bold-text">(주)필굿 사업자 정보</span></p>
          </div>
          <div class="footer-item gray-text">
            <p>서울특별시 강남구 역삼동, 테헤란로124삼원타워</p>
          </div>
          <div class="footer-item gray-text">
            <p>대표: 홍길동</p>
          </div>
          <div class="footer-item gray-text">
            <p>사업자번호: 759-87-00821</p>
          </div>
        </div>
        <div class="right-content">
          <nav>
            <ul class="footer-nav">
              <!-- 이용약관, 개인정보 처리방침, 고객센터는 삭제하였습니다 -->
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterView'
};
</script>

<style scoped>
.footer {
  background-color: #94B58B; /* 배경색 설정 */
  color: white;
  padding: 20px 0;
  width: 100%;
}

.container {
  max-width: 960px;
  margin: auto;
}

.footer-content {
  display: flex;
  flex-wrap: wrap; /* 반응형을 위해 flex-wrap 추가 */
  align-items: flex-start;
}

.left-content {
  margin-right: 40px; /* 간격을 넓히기 위해 40px로 조정 */
  margin-left: -130px; /* 로고를 더 왼쪽으로 이동 */
}

.center-content {
  display: flex;
  flex-direction: column;
}

.footer-item {
  margin-bottom: -15px; /* 간격을 줄이기 위해 5px로 조정 */
  text-align: left;
}

.pillgood-logo {
  max-width: 100px;
}

/* 반응형 디자인을 위한 미디어 쿼리 */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .left-content {
    margin-right: 0;
    margin-left: 0; /* 작은 화면에서는 음수 마진을 제거 */
    margin-bottom: 20px;
  }
}

.gray-text {
  color: rgba(0, 0, 0, 0.6);
}

.bold-text {
  font-weight: bold;
}
</style>
