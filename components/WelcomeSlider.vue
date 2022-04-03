<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        caption="Hello ;)"
        img-src="https://picsum.photos/1024/480/?image=10"
      ></b-carousel-slide
    ></b-carousel>
  </div>
</template>

<script>
export default {
  name: 'WelcomeSlider',
}
</script>

<style></style>
