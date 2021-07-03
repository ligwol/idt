<template>
    <div class="fter">
        <div class="fter__menu">
            <div class="fter__nav">
                <div class="fter__logo">
                    <img src="../../images/logo-inverse.png" alt="logo">
                </div>
                <div class="fter__links">
                    <a href="#">
                        <i class="fas fa-home"></i>
                        home
                    </a>
                    <a href="#about-us">about us</a>
                    <a href="#our-technologies">our technologies</a>
                    <a href="#contacts">contakts</a>
                </div>
            </div>
            <div class="fter__line">
                <a href="#" class="fter__anchor">
                    <i class="fas fa-arrow-up"></i>
                </a>

                <div class="fter__sns">
                    <a href="#">
                        <img src="../../images/facebook.png" alt="facebook">
                    </a>
                    <a href="#">
                        <img src="../../images/youtube.png" alt="facebook"></a>
                    <a href="#">
                        <img src="../../images/instagram.png" alt="facebook"></a>
                </div>

                <div class="fter__copyright">
                    <p>All rights reserved</p>                    
                </div>
            </div>
        </div>
        <div class="fter__info">
            <div class="fter__block">
                <div class="fter__icon">
                    <i class="fas fa-map-marker"></i>
                </div>
                <a href="https://goo.gl/maps/X1cGQU61G8mrkNc39">Praha 8, Troja, Pomořanská 475/8</a>
            </div>
            <div class="fter__block">
                <div class="fter__icon">
                    <i class="fas fa-phone"></i>
                </div>
                <a href="tel:+4222222222">+422 2222222</a>
            </div>
            <div class="fter__block">
                <div class="fter__icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <a href="mailto:josef.novotny@ltd.com">josef.novotny@ltd.com</a>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
    @import "./../assets/style.scss";

    @media screen and (max-width: 1140px) {
        .fter {
            display: flex;
            flex-direction: column;

            .fter__menu {
                padding: 20px;

                .fter__nav {
                    display: flex;
                    flex-direction: column;
                    .fter__logo{
                        padding-bottom: 20px;
                    }

                    .fter__links {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        a {
                            padding-bottom: 20px;
                            &:hover::before{
                                opacity: 0;
                            }
                        }
                    }
                }

                .fter__line {
                    position: static;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    .fter__anchor{
                        position: static;

                    }
                    .fter__sns{
                        position: static;
                        padding: 0;
                    }
                    .fter__copyright{
                        position: static;
                    }

                }

                .fter__info {
                    padding: 0;
                }
            }
        }
    }
    @media screen and (max-width: 430px) {
        
        .fter {
            .fter__menu {
                .fter__line{
                    display: flex;
                    flex-direction: column;
                }
            }
            .fter__info{
                .fter__block{
                    .fter__icon{
                        background-color: transparent;
                        i{
                            padding-left: 12px;
                            padding-top: 12px;
                            @include text($secondaryColor, none, normal, 600, 20px);
                        }
                    }
                }
            } 
        }
    }
</style>
