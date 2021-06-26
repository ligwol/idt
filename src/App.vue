<template>
  <div class="main">
    <div class="home__mobile-hder">
      <div class="hder__click-button" @click="showNav = !showNav" :class="{icon__open:showNav}">
        <i id ="hder__icon" class="fas fa-ellipsis-v"></i>
      </div>
      <div class="hder__close" :class="{hder__open:showNav}">
        <HeaderMobile />
      </div>
      <div class="home__mobile">
        <HomeMobile/>
      </div>      
    </div>

    <div class="home" v-if="!mobileView">
        <Header />
    </div>
    <About />
    <OurTechnologies />
    <Contacts />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HeaderMobile from './components/HeaderMobile.vue'
import HomeMobile from './components/HomeMobile.vue'
import About from './components/About.vue'
import OurTechnologies from './components/OurTechnologies.vue'
import Contacts from './components/Contacts.vue'
import Footer from './components/Footer.vue'
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
    HomeMobile,
    About,
    OurTechnologies,
    Contacts,
    Footer,
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
    .home__mobile-hder {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .hder__close {
        display: none;
        &.hder__open {
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
        &.icon__open {
          i {
            transform: rotate(90deg);
          }
        }
      }
    }
    .home__mobile-hder{
          display: none;
    }
    @media screen and (max-width: 1140px){
        .home{
            display: none;
        }
        .home__mobile-hder{
          display: block;
        }
    }
</style>