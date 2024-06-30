<template>
  <div class="main-container">
    <h1>Template</h1>
    <!-- CSS preview content goes here -->
    <p>content가 들어가는 부분은 <span class="font-bolder">.main-container</span>로 묶어줍니다.</p>
    <p>편의상 <span class="font-bolder">.border</span>를 추가했지만, 실제 사용 시에는 붙이지 않습니다.</p>
    <p class="highlight">.content-container 예시</p>
    <div class="box-container">
      <p class="text-melon">로그인</p>
      <input type="text"> 
    </div>
</div>
</template>

<script>
// import { mapActions } from 'vuex'
import '../assets/styles.css'

export default {
  name: 'CssPreview'
}
</script>
