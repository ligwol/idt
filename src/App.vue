<template>
  <div class="main">

    <div class="home__mobile" v-if="mobileView">
      <div class="hder__click-button" @click="showNav = !showNav" :class="{icon__open:showNav}">
        <i id ="hder__icon" class="fas fa-ellipsis-v"></i>
      </div>
      <div class="hder__close" :class="{hder__open:showNav}">
        <HeaderMobile />
      </div>
    </div>

    <div class="home" v-if="!mobileView">
        <Header />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HeaderMobile from './components/HeaderMobile.vue'
export default {
  name: 'Page',
  data: function (){
    return{
      mobileView: false,
      showNav: false
    }
  }, 
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 1140
    }
  },
  components: {
    Header,
    HeaderMobile,
  },
  created() {
    this.handleView();
  }
}
</script>

<style lang="scss">
    :root {
      font-family: 'Montserrat', sans-serif;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      scroll-behavior: smooth;
    }

    .home__mobile {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .hder__close{
        display: none;
        &.hder__open{
          display: block;
        }
      }

      /*Mobile icon*/
      .hder__click-button {
        padding: 20px;
        cursor: pointer;
        z-index: 100;

        #hder__icon {
          font-size: 30px;
          color: #232323;
          z-index: 100;
          transition: 300ms ease;
        }
        &.icon__open{
          i{
            transform: rotate(90deg);
          }
        }
      }
    }
</style>
