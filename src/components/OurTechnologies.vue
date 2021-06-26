<template>
    <div class="our-technologies" id="our-technologies">
        <section class="our-technologies__section">
            <p>
                Our technologies
            </p>
            <div class="technologies">
                <div class="technologies__logo" @click="showTwilioFun" :class="showTwilio? {active:showFull}: null">
                    <img src="../../images/twilio.png" alt="Twilio">
                    <p>Twilio</p>
                </div>
                <div class="technologies__logo" @click="showAndroidFun" :class="showAndroid? {active:showFull}: null">
                    <img src="../../images/android.png" alt="Android">
                    <p>Android SDK</p>
                </div>
                <div class="technologies__logo" @click="showRaspberryFun" :class="showRaspberry? {active:showFull}: null">
                    <img src="../../images/raspberry.png" alt="Raspberry">
                    <p>Raspberry</p>
                </div>
                <div class="technologies__logo"  @click="showVueFun" :class="showVue? {active:showFull}: null">
                    <img src="../../images/vue.png" alt="Vue">
                    <p>Vue</p>
                </div>
                <div class="technologies__logo" @click="showTesseractFun" :class="showTesseract? {active:showFull}: null">
                    <img src="../../images/tesseract.png" alt="Tesseract">
                    <p>Tesseract</p>
                </div>
                <div class="technologies__logo" @click="showMongooseFun" :class="showMongoose? {active:showFull}: null">
                    <img src="../../images/mongoose.png" alt="Mongoose">
                    <p>Mongoose</p>
                </div>
                <div class="technologies__logo" @click="showPythonFun" :class="showPython? {active:showFull}: null">
                    <img src="../../images/python.png" alt="Python">
                    <p>Python</p>
                </div>
                <div class="technologies__logo" @click="showDjangoFun" :class="showDjango? {active:showFull}: null">
                    <img src="../../images/django.png" alt="Django">
                    <p>Django</p>
                </div>
                <div class="technologies__logo" @click="showMariaDBFun" :class="showMariaDB? {active: showFull}: null">
                    <img src="../../images/mariaDB.png" alt="MariaDB">
                    <p>MariaDB</p>
                </div>
                <div class="technologies__logo" @click="showSpringFun" :class="showSpring? {active: showFull}: null">
                    <img src="../../images/spring.png" alt="django">
                    <p>Django</p>
                </div>
                <div class="technologies__logo" @click="showMongoDBFun" :class="showMongoDB? { active : showFull }: null">
                    <img src="../../images/mongodb.png" alt="mongoDB">
                    <p>MongoDB</p>
                </div>
            </div>
        </section>
        <aside class="our-technologies__aside">
            <div class="technologies__info" v-if="showTwilio">
                <h2> Twilio </h2>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Minima cum, sunt eveniet, vero modi, amet sed ipsa eum officia recusandae consectetur! Eius nisi maxime
                reprehenderit magni natus vero saepe et.
                Minus nam dicta accusantium voluptate facilis atque minima, rerum dolor nesciunt qui quasi quibusdam
                deleniti, accusamus magnam id fuga aut nobis, dignissimos delectus maxime veniam! Praesentium porro
                deleniti doloribus suscipit!<br><br>
                Labore sint sequi placeat hic, eius exercitationem debitis nam voluptate distinctio vero a totam ipsam,
                consequatur amet. Facere libero, iste quasi nam tenetur neque, similique, perspiciatis ipsam cupiditate
                dolores consectetur!
                Totam reprehenderit omnis hic praesentium impedit obcaecati alias laborum id eveniet odio repellat eaque
                nemo error, beatae officiis quibusdam? Velit magnam ea numquam quidem, odit reprehenderit repudiandae?
                Est, quae placeat?
                </p>
            </div>

            <div class="technologies__info" v-if="showAndroid">
                <h2> Android SDK </h2>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, fuga! Dicta quaerat ex maxime
                deserunt quis obcaecati placeat, officia aspernatur quae maiores culpa sed reiciendis esse unde quasi
                harum nam.
                Dolores veritatis, tempora iusto ad voluptatum neque, eligendi facilis vel illo asperiores libero et
                accusantium id ab sapiente sequi sit sed rem aspernatur architecto quis quibusdam. Illum sit quidem
                autem!
                </p>
            </div>

            <div class="technologies__info" v-if="showRaspberry">
                <h2>
                    Raspberry
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum earum eos ab fuga quod doloribus repudiandae nemo voluptas ipsam dolor corrupti, modi consectetur illum tempora dolorem libero nisi harum?
                </p>
            </div>

            <div class="technologies__info" v-if="showVue">
                <h2>
                    Vue.js
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ullam officia corrupti aliquid ipsam deleniti, nostrum laboriosam saepe temporibus deserunt? Eveniet enim quam ex ab soluta. Enim mollitia fugiat quasi!<br><br>
                    Odit consectetur ipsa voluptate autem accusamus natus vitae, in, neque blanditiis eos dignissimos beatae, minus sit aspernatur veniam quisquam velit corrupti aliquid? Tempore tenetur et dolorum perferendis, veritatis temporibus repellat.<br><br>
                    Quasi quis eveniet aliquam dolorum quae nemo maiores aspernatur asperiores sequi. Eum dolore ipsum minus id fuga modi tenetur provident quisquam minima nam, quis amet possimus voluptates, iste quae labore.
                </p>
            </div>

            <div class="technologies__info" v-if="showTesseract">
                <h2>
                    Tesseract
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus nisi, quos facilis officia optio a maxime quam amet itaque consectetur praesentium cumque ex! Quos earum non provident molestiae ut.
                </p>
            </div>

            <div class="technologies__info" v-if="showMongoose">
                <h2>
                    Mongoose
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. <br><br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.<br><br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                </p>
            </div>

            <div class="technologies__info" v-if="showPython">
                <h2>
                    Phyton
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis veniam perspiciatis quaerat pariatur sint, porro eaque praesentium, officia, aliquam fuga nulla impedit sequi dolor hic accusamus! Fugiat minus sed veritatis?
                </p>
            </div>

            <div class="technologies__info" v-if="showDjango">
                <h2>
                    Django
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus repudiandae perferendis magnam dignissimos. Quam enim fugit natus molestias, mollitia dolor perferendis ex exercitationem iusto quia in non dignissimos nesciunt facilis?
                </p>
            </div>

            <div class="technologies__info" v-if="showMariaDB">
                <h2>
                    MariaDB
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis rerum ea. Aut repudiandae eligendi deleniti. Aliquam expedita provident a doloribus illo quia veniam, quo voluptatibus quae! Amet, facilis consequatur.
                </p>
            </div>

            <div class="technologies__info" v-if="showSpring">
                <h2>
                    Spring
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci necessitatibus sapiente, iure officiis non modi possimus delectus architecto, at iste sed cum autem animi quae, odio labore rem? Illo, doloribus!
                </p>
            </div>

            <div class="technologies__info" v-if="showMongoDB">
                <h2>
                    MongoDB
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores pariatur harum sequi recusandae velit ab excepturi porro voluptates facilis numquam mollitia neque saepe amet, adipisci quisquam, minima quod repudiandae in.
                </p>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    name: "OurTechnologies",
    data: function () {
        return{
        showTwilio: false,
        showAndroid: false,
        showRaspberry: false,
        showVue: false,
        showTesseract: false,
        showMongoose: true,
        showPython: false,
        showDjango: false,
        showMariaDB: false,
        showSpring: false,
        showMongoDB: false,
        showFull: true,
        } 
    },
    methods: {
        showTwilioFun(){
            this.showTwilio = !this.showTwilio;
            this.showAndroid = false;
            this.showRaspberry = false;
            this.showVue = false;
            this.showTesseract = false;
            this.showMongoose = false;
            this.showPython = false;
            this.showDjango = false;
            this.showMariaDB = false;
            this.showSpring = false;
            this.showMongoDB = false;
        },
        showAndroidFun(){
            this.showAndroid = !this.showAndroid;
            this.showTwilio = false;
            this.showRaspberry = false;
            this.showVue = false;
            this.showTesseract = false;
            this.showMongoose = false;
            this.showPython = false;
            this.showDjango = false;
            this.showMariaDB = false;
            this.showSpring = false;
            this.showMongoDB = false;
        },
        showRaspberryFun(){
            this.showRaspberry = !this.showRaspberry;
            this.showTwilio = false;
            this.showAndroid = false;
            this.showVue = false;
            this.showTesseract = false;
            this.showMongoose = false;
            this.showPython = false;
            this.showDjango = false;
            this.showMariaDB = false;
            this.showSpring = false;
            this.showMongoDB = false;
        },
        showVueFun(){
            this.showVue = !this.showVue;
            this.showTwilio = false;
            this.showRaspberry = false;
            this.showAndroid = false;
            this.showTesseract = false;
            this.showMongoose = false;
            this.showPython = false;
            this.showDjango = false;
            this.showMariaDB = false;
            this.showSpring = false;
            this.showMongoDB = false;
        },
        showTesseractFun(){
            this.showTesseract = !this.showTesseract;
            this.showTwilio = false;
            this.showRaspberry = false;
            this.showVue = false;
            this.showAndroid = false;
            this.showMongoose = false;
            this.showPython = false;
            this.showDjango = false;
            this.showMariaDB = false;
            this.showSpring = false;
            this.showMongoDB = false;
        },
        showMongooseFun(){
            this.showMongoose = !this.showMongoose;
            this.showTwilio = false;
            this.showRaspberry = false;
            this.showVue = false;
            this.showTesseract = false;
            this.showAndroid = false;
            this.showPython = false;
            this.showDjango = false;
            this.showMariaDB = false;
            this.showSpring = false;
            this.showMongoDB = false;
        },
        showPythonFun(){
            this.showPython = !this.showPython;
            this.showTwilio = false;
            this.showRaspberry = false;
            this.showVue = false;
            this.showTesseract = false;
            this.showMongoose = false;
            this.showAndroid = false;
            this.showDjango = false;
            this.showMariaDB = false;
            this.showSpring = false;
            this.showMongoDB = false;
        },
        showDjangoFun(){
            this.showDjango = !this.showDjango;
            this.showTwilio = false;
            this.showRaspberry = false;
            this.showVue = false;
            this.showTesseract = false;
            this.showMongoose = false;
            this.showPython = false;
            this.showAndroid = false;
            this.showMariaDB = false;
            this.showSpring = false;
            this.showMongoDB = false;
        },
        showMariaDBFun(){
            this.showMariaDB = !this.showMariaDB;
            this.showTwilio = false;
            this.showRaspberry = false;
            this.showVue = false;
            this.showTesseract = false;
            this.showMongoose = false;
            this.showPython = false;
            this.showDjango = false;
            this.showAndroid = false;
            this.showSpring = false;
            this.showMongoDB = false;
        },
        showSpringFun(){
            this.showSpring = !this.showSpring;
            this.showTwilio = false;
            this.showRaspberry = false;
            this.showVue = false;
            this.showTesseract = false;
            this.showMongoose = false;
            this.showPython = false;
            this.showDjango = false;
            this.showAndroid = false;
            this.showMariaDB = false;
            this.showMongoDB = false;
        },
        showMongoDBFun(){
            this.showMongoDB = !this.showMongoDB;
            this.showTwilio = false;
            this.showRaspberry = false;
            this.showVue = false;
            this.showTesseract = false;
            this.showMongoose = false;
            this.showPython = false;
            this.showDjango = false;
            this.showAndroid = false;
            this.showMariaDB = false;
            this.showSpring = false;
        },
    }
}
</script>

<style lang="scss" scoped>
    @import "./../assets/style.scss";
    @media screen and (max-width: 1140px){
        .our-technologies{
            display: flex;
            flex-direction: column;
            background: none;
            margin: 0 auto;
            padding: 50px;
            .our-technologies__section{
                .technologies{
                    .technologies__logo{
                        &.active{
                            p{
                                @include text($tertiaryColor, none, normal, 500, 0.5rem);
                                padding-top: 0.1rem;
                            }
                        }
                    }
                    
                }
            }
            .our-technologies__aside{
                .technologies__info.technologies__info{
                    padding: 70px;
                    background-image: url(../../images/background-3.png);
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    border-radius: 50px;
                }
            }
        }
    }
</style>