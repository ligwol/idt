<template>
    <div class="first-page">
        <header class="hder"
        :class="{change_color: scrollPosition > 100}"
        >
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
                    <a href="#contakts">contakts</a>
                </nav>
            </div>
            <div class="hder__phone"
            :class="{change_color: scrollPosition > 100}"
            >
                <p>+422 2222222</p> 
                <i class="fas fa-phone"></i>
            </div>
        </header>
    </div>
    <main>
    </main>
</template>

<script>
    export default {
        name: "landing",
        data: function () {
            return{
                scrollPosition: null
            }
        },
        methods: {
            updateScroll() {
                this.scrollPosition = window.scrollY
            }
        },
        mounted() {
            window.addEventListener('scroll', this.updateScroll);
        }
    }
</script>

<style lang="scss">
    @import "./../assets/style.scss";
    .change_color {
       background-color:#fff;
       color: #269f58 !important;
   }
</style>