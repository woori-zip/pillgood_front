<template>
  <div class="main-container">
    <p class="title">CSS Preview</p>
    <!-- CSS preview content goes here -->
    <p>content가 들어가는 부분은 <span class="font-bolder">.content-container</span>로 묶어줍니다.</p>
    <p>편의상 <span class="font-bolder">.border</span>를 추가했지만, 실제 사용 시에는 붙이지 않습니다.</p>
    <p class="highlight">.content-container 예시</p>
    <div class="content-container">
      <p class="highlight">로그인</p>
      <input type="text"> 
    </div>
</div>
</template>

<script>
// import '../assets/template.css'
export default {
  name: 'CssPreview',
};
</script>
