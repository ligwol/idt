<template>
    <div class="about-us" id="about-us">
        <section class="about-us__section">
            <p>About us</p>
        </section>
        <aside class="about-us__aside">
            <div class="about-us__list">
                <div class="about-us__point">
                    <div class="about-us__big-point"></div>
                    <div class="about-us__icon">
                        <i class="fas fa-globe"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis.
                    </p>
                </div>
                <div class="about-us__bullets">
                    <div class="bullet"></div>
                    <div class="bullet"></div>
                    <div class="bullet"></div>
                </div>
                <div class="about-us__point">
                    <div class="about-us__big-point"></div>
                    <div class="about-us__icon">
                    <i class="fas fa-handshake"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis.
                    </p>
                </div>
                <div class="about-us__bullets">
                    <div class="bullet"></div>
                    <div class="bullet"></div>
                    <div class="bullet"></div>
                </div>
                <div class="about-us__point">
                    <div class="about-us__big-point"></div>
                    <div class="about-us__icon">
                    <i class="fas fa-laptop"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis.
                    </p>
                </div>
                <div class="about-us__bullets">
                    <div class="bullet"></div>
                    <div class="bullet"></div>
                    <div class="bullet"></div>
                </div>
                <div class="about-us__point">
                    <div class="about-us__big-point"></div>
                    <div class="about-us__icon">
                    <i class="fas fa-user-plus"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis.
                    </p>
                </div>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    name: "About",
}
</script>

<style lang="scss" scoped>
    @import "./../assets/style.scss";
    @media  screen and(max-width: 1140px) {
    .about-us{
        display: flex;
        flex-direction: column;
        align-items: start;
        padding-bottom: 20px;
        .about-us__section{
            background-image: none;
            padding-bottom: 40px;
        }
        
    }
}
@media  screen and(max-width:600px) {
    .about-us{
       margin-top: 0;
       padding: 0 40px;
        .about-us__section{
            background-image: none;
            padding-bottom: 40px;
        }
        .about-us__aside{
            display: flex;
            justify-content: start;
            padding: 0;
            .about-us__list{
                .about-us__point{
                    padding-bottom: 20px;
                    .about-us__big-point{
                        display: none;
                    }
                }
                .about-us__bullets{
                    display: none;
                }
            }
        }
    }
}
@media  screen and(max-width:450px) {
    .about-us{
        .about-us__aside{
            .about-us__list{
                .about-us__point{
                    .about-us__icon{
                        display: none;
                    }
                }
            }
        }
    }
}
</style>