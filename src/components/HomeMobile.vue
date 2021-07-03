<template>
    <div class="home__page">
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
    name: "HomeMobile",
        components: {
            FormCall,
        }
    
}
</script>

<style lang="scss" scoped>
    @import "./../assets/style-mobile.scss";
    @media screen and (max-width: 540px){
        .home__page{
            .home__text{
                h1{
                    font-size: 25px;
                    b{
                        font-size: 50px;
                    }
                }
            }
            .home__form{
                margin: 0;
                display: flex;
                flex-direction: row;
                justify-content: start;
                padding: 50px 0;
                width: 100%;
            }
        }
    }
</style>