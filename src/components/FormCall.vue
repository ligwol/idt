<template>
    <div class="home__form">
            <form>
                <div class="form__put-in">
                    <div class="form__label">
                        <label for="fname">Name</label>
                        <input class="fome__input fname" type="text" v-model="name" @keydown="nameKeydown($event)" placeholder="Lorem ipsum" maxlength="32" minlength="6"/>
                    </div>
                    <div class="form__label">
                        <label for="fphone">Phone number</label>
                        <InputMask mask="+9999-99999999" v-model="val1" placeholder="+4333 33333333" class="fome__input fphone" />
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
            name: "",
        }
    }, 
    watch: {
        name(val) {
        this.name = val.replace(/\W/g, "");
        },
    },
    methods: {
        nameKeydown(e) {
        if (/^\W$/.test(e.key)) {
            e.preventDefault();
        }
    },
  },
}
</script>

<style lang="scss" scoped>
    @import "./../assets/style.scss";

    @media screen and (max-width: 540px) {
        .home__page {
            form {
                display: flex;
                flex-direction: column;

                .form__put-in {
                    display: flex;
                    flex-direction: column;

                    .form__label {
                        padding-top: 20px;

                        label {
                            font-weight: 500;
                        }
                    }
                }

                .button {
                    width: 250px;
                }
            }
        }
    }
    @media screen and (max-width: 900px) {
            form {
                display: flex;
                flex-direction: column;

                .form__put-in {
                    display: flex;
                    flex-direction: column;

                    .form__label {
                        padding-top: 20px;

                        label {
                            font-weight: 500;
                        }
                    }
                }
                .button {
                    width: 200px;
                }
            }
    }
</style>
