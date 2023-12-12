<template>
  <div class="slider-container">
    <div
      class="slider"
      :style="{
        transform: `translateX(${slideOffset}px)`,
        width: `${slideWidth}px`,
      }"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div v-for="(photo, index) in photos" :key="index" class="slider__slide">
        <img
          :src="photo.thumbnailUrl"
          alt="Album Thumbnail"
          class="slider__img"
        />
      </div>
    </div>
    <button v-if="!isMobile" @click="prevSlide" class="slider__prev-button button">
      Prev
    </button>
    <button v-if="!isMobile" @click="nextSlide" class="slider__next-button button">
      Next
    </button>
  </div>
</template>
  
  <script>
export default {
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentSlide: 0,
      slideOffset: 0,
      slideWidth: 0,
      isMobile: false,
      touchStartX: 0,
      touchEndX: 0,
      touchThreshold: 50,
    };
  },
  computed: {
    totalSlides() {
      return this.photos.length;
    },
  },
  methods: {
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
      this.updateSlideOffset();
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;

      if (this.currentSlide === 0) {
        this.slideOffset = 0;
      } else {
        this.updateSlideOffset();
      }
    },
    updateSlideOffset() {
      this.slideWidth = this.$el.offsetWidth;
      this.slideOffset = -this.currentSlide * this.slideWidth;
    },
    handleTouchStart(event) {
      this.touchStartX = event.changedTouches[0].clientX;
    },
    handleTouchMove(event) {
      this.touchEndX = event.changedTouches[0].clientX;
    },
    handleTouchEnd() {
      const deltaX = this.touchEndX - this.touchStartX;

      if (Math.abs(deltaX) > this.touchThreshold) {
        if (deltaX > 0) {
          this.prevSlide();
        } else {
          this.nextSlide();
        }
      }
    },
  },
  mounted() {
    this.updateSlideOffset();
    this.isMobile = window.innerWidth <= 768;

    const handleResize = () => {
      this.isMobile = window.innerWidth <= 768;
      this.updateSlideOffset();
    };

    window.addEventListener("resize", handleResize);

    window.dispatchEvent(new Event("resize"));

    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("resize", handleResize);
    });
  },
};
</script>
  
<style scoped lang="scss">
.slider-container {
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
  position: relative;

  &__slide {
    min-width: 100%;
    box-sizing: border-box;
  }

  &__img {
    width: 500px;
    max-width: 100%;
  }

  &__prev-button,
  &__next-button {
    display: inline-block;
    margin-top: 10px;
    margin-left: 20px; 
    &:not(:last-child) {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 768px) {
    &__prev-button,
    &__next-button {
      display: none;
    }
  }
}
</style>

  