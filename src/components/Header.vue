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
                    <a href="#contakts">contakts</a>
                </nav>
            </div>
            <div class="hder__phone" :class="{change_color: scrollPosition > 100}">
                <p>+422 2222222</p>
                <i class="fas fa-phone"></i>
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

        <div class="home__form">
            <form>
                <div class="form__put-in">
                    <div class="form__label">
                        <label for="fname">Name</label>
                        <input class="fome__input fname" type="text" placeholder="Lorem ipsum">

                    </div>
                    <div class="form__label">
                        <label for="fphone">Phone number</label>
                        <input class="fome__input fphone" type="tel" placeholder="+4333 33333333"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
                    </div>
                </div>
                <input class="home__button" type="submit" value="contact us" >
            </form>
        </div>
    </div>
</template>

<script>
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
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../assets/style.scss";
</style>