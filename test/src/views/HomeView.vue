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
            <p v-if="index === 0" class="button-container">
              <a class="btn btn-lg btn-primary" :href="slide.link">{{ slide.buttonText }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
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
export default {
  data () {
    return {
      slides: [
        {
          image: require('@/assets/banner1.png'),
          headline: 'Example headline.',
          content: 'Some representative placeholder content for the first slide of the carousel.',
          buttonText: 'Sign up today',
          link: '#',
          captionClass: 'text-start'
        },
        {
          image: 'path/to/your/image2.jpg',
          headline: 'Another example headline.',
          content: 'Some representative placeholder content for the second slide of the carousel.',
          buttonText: 'Learn more',
          link: '#',
          captionClass: ''
        },
        {
          image: 'path/to/your/image3.jpg',
          headline: 'One more for good measure.',
          content: 'Some representative placeholder content for the third slide of this carousel.',
          buttonText: 'Browse gallery',
          link: '#',
          captionClass: 'text-end'
        }
      ]
    }
  }
}
</script>

<style>
.custom-banner {
  height: 400px; /* 원하는 높이로 설정 */
  object-fit: cover; /* 이미지를 배너 크기에 맞게 조정 */
}

.button-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20%;
}

@font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
    }

    .price-red {
      color: red;
    }

    .name-bold {
      font-weight: bold;
      font-family: 'Pretendard-Regular', sans-serif;
    }

    .price-font {
      font-family: 'Pretendard-Regular', sans-serif;
    }

      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }

      .bd-mode-toggle {
        z-index: 1500;
      }

      .bd-mode-toggle .dropdown-menu .active .bi {
        display: block !important;
      }
</style>
