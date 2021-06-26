<template>
    <div class="contacts" id="contacts">
        <h2>Contacts</h2>
        <div class="contacts__info">
            <div class="contacts__block">
                <div class="contacts__icon">
                    <i class="fas fa-phone"></i>                    
                </div>
                <p>+422 2222222</p>
            </div>
            <div class="contacts__block">
                <div class="contacts__icon">
                    <i class="fas fa-map-marker"></i>                    
                </div>
                <p>Praha 8, Troja, Pomořanská 475/8</p>
            </div>
            <div class="contacts__block">
                <div class="contacts__icon">
                    <i class="fas fa-envelope"></i>                    
                </div>
                <p>josef.novotny@ltd.com</p>
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
                <input class="button" type="submit" value="contact us" >
            </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contacts",
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