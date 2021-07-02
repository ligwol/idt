<template>
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
                <input class="button" type="submit" value="contact us" >
            </form>
    </div>
</template>


<script>
export default {
    name: "FormCall",
    data: function () {
        return{
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "./../assets/style.scss";
</style>
