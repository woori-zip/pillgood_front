<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" :data-bs-slide-to="index" :class="{ active: index === 0 }" aria-current="true" :aria-label="'Slide ' + (index + 1)" v-for="(slide, index) in slides" :key="index"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item" :class="{ active: index === 0 }" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" class="d-block w-100 custom-banner" alt="Slide image">
        <div class="container">
          <div class="carousel-caption" :class="slide.captionClass">
            <h1>{{ slide.headline }}</h1>
            <p>{{ slide.content }}</p>
<<<<<<< Updated upstream
            <p v-if="index === 0" class="button-container">
              <a class="btn btn-lg btn-primary" :href="slide.link">{{ slide.buttonText }}</a>
=======
            <p v-if="slide.route" class="button-container"> <!-- 버튼이 있을 때만 표시 -->
              <router-link class="btn btn-lg btn-primary" :to="slide.route">{{ slide.buttonText }}</router-link>
>>>>>>> Stashed changes
            </p>
          </div>
        </div>
      </div>
    </div>
    <button id="carousel-control" class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span id="carousel-control-icon" class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button id="carousel-control" class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span id="carousel-control-icon" class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
<main>

<div class="album py-5 bg-body-tertiary">
<div class="container">
<h4 style="margin-bottom: 30px;">🔥Best!</h4>
<div class="row">
  <div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3">
  <svg class="bd-placeholder-img" width="140" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
  </svg>
  <h6 class="fw-normal mt-3 name-bold">Name</h6>
  <p class="price-red price-font">가격</p>
</div>
<<<<<<< Updated upstream
     <div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3">
=======
<div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3">
>>>>>>> Stashed changes
  <svg class="bd-placeholder-img" width="140" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
  </svg>
  <h6 class="fw-normal mt-3 name-bold">Name</h6>
  <p class="price-red price-font">가격</p>
</div>
<div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3">
  <svg class="bd-placeholder-img" width="140" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
  </svg>
  <h6 class="fw-normal mt-3 name-bold">Name</h6>
  <p class="price-red price-font">가격</p>
</div>
<div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3">
  <svg class="bd-placeholder-img" width="140" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
  </svg>
  <h6 class="fw-normal mt-3 name-bold">Name</h6>
  <p class="price-red price-font">가격</p>
</div>
<div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3">
  <svg class="bd-placeholder-img" width="140" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
  </svg>
  <h6 class="fw-normal mt-3 name-bold">Name</h6>
  <p class="price-red price-font">가격</p>
</div>
<div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3">
  <svg class="bd-placeholder-img" width="140" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
  </svg>
  <h6 class="fw-normal mt-3 name-bold">Name</h6>
  <p class="price-red price-font">가격</p>
</div>
</div> <!--row end -->
<hr style="color: #94B58B; margin-bottom: 50px;">
<h4 style="margin-bottom: 30px;">🔥New!</h4>
<div class="row">
  <div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3">
  <svg class="bd-placeholder-img" width="140" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
  </svg>
  <h6 class="fw-normal mt-3 name-bold">Name</h6>
  <p class="price-red price-font">가격</p>
</div>
     <div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3">
  <svg class="bd-placeholder-img" width="140" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
  </svg>
  <h6 class="fw-normal mt-3 name-bold">Name</h6>
  <p class="price-red price-font">가격</p>
</div>
<div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3">
  <svg class="bd-placeholder-img" width="140" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
  </svg>
  <h6 class="fw-normal mt-3 name-bold">Name</h6>
  <p class="price-red price-font">가격</p>
</div>
<div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3">
  <svg class="bd-placeholder-img" width="140" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
  </svg>
  <h6 class="fw-normal mt-3 name-bold">Name</h6>
  <p class="price-red price-font">가격</p>
</div>
<div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3">
  <svg class="bd-placeholder-img" width="140" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
  </svg>
  <h6 class="fw-normal mt-3 name-bold">Name</h6>
  <p class="price-red price-font">가격</p>
</div>
<div class="col-lg-2 col-md-4 col-sm-6 text-center mb-3">
  <svg class="bd-placeholder-img" width="140" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
  </svg>
  <h6 class="fw-normal mt-3 name-bold">Name</h6>
  <p class="price-red price-font">가격</p>
</div>
</div> <!--row end -->
</div>
</div>
</main>
</template>

<script>
import '../assets/main.css'
export default {
  data () {
    return {
      slides: [
        {
          image: require('@/assets/banner1.png'),
          headline: 'Example headline.',
          content: 'Some representative placeholder content for the first slide of the carousel.',
<<<<<<< Updated upstream
          buttonText: 'Sign up today',
          link: '#',
=======
          buttonText: '설문 조사 바로 가기',
          route: '/survey', // 라우터 경로 설정
>>>>>>> Stashed changes
          captionClass: 'text-start'
        },
        {
          image: require('@/assets/banner2.jpg'),
          headline: 'Another example headline.',
          content: 'Some representative placeholder content for the second slide of the carousel.',
          buttonText: 'Learn more',
<<<<<<< Updated upstream
          link: '#',
=======
          route: '#', // 라우터 경로 설정
>>>>>>> Stashed changes
          captionClass: ''
        },
        {
          image: require('@/assets/banner3.jpg'),
          headline: 'One more for good measure.',
          content: 'Some representative placeholder content for the third slide of this carousel.',
          buttonText: 'Browse gallery',
<<<<<<< Updated upstream
          link: '#',
=======
          route: '#', // 라우터 경로 설정
>>>>>>> Stashed changes
          captionClass: 'text-end'
        }
      ]
    }
  }
}
</script>

<style>

</style>
