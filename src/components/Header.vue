<template>
    <div class="home__page">
        <header class="hder" :class="{change_color: scrollPosition > 100}">
            <div class="hder__menu">
                <a href="#">
                    <img class="hder__logo" src="../../images/logo.png" alt="">
                </a>
                <nav class="hder__nav">
                    <a href="#">
                        <i class="fas fa-home"></i>
                        home
                    </a>
                    <a href="#about-us">about us</a>
                    <a href="#our-technologies">our technologies</a>
                    <a href="#contacts">contakts</a>
                </nav>
            </div>
            <div class="hder__phone" >
                <a href="tel:+422 2222222" :class="{change_color: scrollPosition > 100}">+422 2222222</a>
                <i class="fas fa-phone" :class="{change_color: scrollPosition > 100}"></i>
            </div>
        </header>

        <div class="home__text">
            <h1>
                web technologies <br>
                <b>for business</b>
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
        </div>
        <FormCall/>
    </div>
</template>

<script>
import FormCall from './FormCall'
    export default {
        name: "Header",
        data: function () {
            return{
                scrollPosition: null,
                mobileView: true,
                showNav: false
            }
        },
        methods: {
            updateScroll() {
                this.scrollPosition = window.scrollY
            },
            handleView() {
                this.mobileView = window.innerWidth <= 1140
            }
        },
        created() {
            this.handleView()
        },
        mounted() {
            window.addEventListener('scroll', this.updateScroll);
        },
        components: {
            FormCall,
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../assets/style.scss";
    @media screen and (max-width: 1140px){
        .hder{
            display: none;
        }
    }
</style>