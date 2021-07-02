<template>
    <div class="contacts" id="contacts">
        <h2>Contacts</h2>
        <div class="contacts__info">
            <div class="contacts__block">
                <div class="contacts__icon">
                    <i class="fas fa-phone"></i>                    
                </div>
                <a href="tel:+4222222222">+422 2222222</a>
            </div>
            <div class="contacts__block">
                <div class="contacts__icon">
                    <i class="fas fa-map-marker"></i>                    
                </div>
                <a href="https://goo.gl/maps/X1cGQU61G8mrkNc39">Praha 8, Troja, Pomořanská 475/8</a>
            </div>
            <div class="contacts__block">
                <div class="contacts__icon">
                    <i class="fas fa-envelope"></i>                    
                </div>
                <a href="mailto:josef.novotny@ltd.com">josef.novotny@ltd.com</a>
            </div>
        </div>
        <div class="contacts__links">
            <div class="contacts__sns">
                <a href="#">
                    <img src="../../images/facebook.png" alt="facebook">
                </a>
                <a href="#">
                    <img src="../../images/youtube.png" alt="facebook"></a>
                <a href="#">
                    <img src="../../images/instagram.png" alt="facebook"></a>
            </div>

            <div class="contacts__form">
                <FormCall/>
            </div>
        </div>
    </div>
</template>

<script>
import FormCall from './FormCall'
export default {
    name: "Contacts",
    components: {
        FormCall,
    }

}
</script>

<style lang="scss" scoped>
    @import "./../assets/style.scss";
    @media  screen and (max-width: 1160px) {
        .contacts{
            .contacts__info{
                flex-direction: column;
                align-items: flex-start;
                .contacts__block{
                    padding-bottom: 20px;
                }
            }

            .contacts__links{
                flex-direction: column;
                align-items: center;
                .contacts__sns{
                    padding-bottom: 80px;
                }
                 .contacts__form{
                    form{
                        .form__put-in{
                            flex-direction: column;
                            align-items: center;   
                        }
                    }
                }
            }

        }
    }
</style>