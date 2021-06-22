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
    name: "HomeMobile",
}
</script>

<style lang="scss" scoped>
    @import "./../assets/style-mobile.scss";
</style>