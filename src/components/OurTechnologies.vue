<template>
    <div class="our-technologies" id="our-technologies">
        <section class="our-technologies__section">
            <h2>
                Our technologies
            </h2>
            <div class="our-technologies__list">
                <div class="technologies__logo" v-for="(item, index) in tech_item" :key="index" @click="activeIndex = index" :class="{active: activeIndex === index}">
                    <!-- <img src="{{ item.src }}" alt="{{ item.alt }}"/> -->
                    <img :src="item.src" :alt="item.alt" />
                    <p>{{item.title}}</p>
                </div>
            </div>
        </section>
        <aside class="our-technologies__aside" >
            <div class="our-technologies__block" v-for="(item, index) in tech_item" :key="index">
                <div class="technologies__info" v-if="activeIndex === index">
                    <transition class="animate__animated animate__fadeInRight animate__delay-.3s">
                    <div class="technologies__text">
                        <h2>{{item.title}}</h2>
                        <p>{{item.text}}</p>
                    </div>
                    </transition>
                </div>
            </div>
        </aside>
    </div>
</template>


<script>
export default {
    name: "OurTechnologies",
    data: function () {
        return{
            tech_item: [
                { 
                    title: 'Twilio',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum magnam nemo nesciunt placeat neque maiores adipisci magni explicabo praesentium aut, sapiente iste tempora sunt eaque, quaerat corrupti, voluptatem vero aliquid!', 
                    src: '/images/twilio.png', 
                    alt: 'Twilio' 
                },
                { 
                    title: 'Android', 
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
                    src: '/images/android.png', 
                    alt: 'Android' 
                },
                { 
                    title: 'Raspberry', 
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.', 
                    src: '/images/raspberry.png', 
                    alt: 'Raspberry' 
                },
                { 
                    title: 'Vue', 
                    text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 
                    src: '/images/vue.png', 
                    alt: 'Vue' 
                },
                { 
                    title: 'Tesseract', 
                    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.', 
                    src: '/images/tesseract.png', 
                    alt: 'Tesseract' 
                },
                { 
                    title: 'Mongoose', 
                    text:  
                       `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.                  

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
                    
                    src: '/images/mongoose.png', 
                    alt: 'Mongoose' 
                },
                { 
                    title: 'Python', 
                    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.', 
                    src: '/images/python.png', 
                    alt: 'Python' 
                },
                { 
                    title: 'Django', 
                    text: 'To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?', 
                    src: '/images/django.png', 
                    alt: 'Django' 
                },
                { 
                    title: 'MariaDB', 
                    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.', 
                    src: '/images/mariadb.png', 
                    alt: 'MariaDB' 
                },
                { 
                    title: 'Spring', 
                    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
                    src: '/images/spring.png', 
                    alt: 'Spring' 
                },
                { 
                    title: 'MongoDB', 
                    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
                    src: '/images/mongodb.png', 
                    alt: 'MongoDB' 
                },
            ],
            activeIndex: 5,
        } 
    },
}
</script>

<style lang="scss" scoped>
    @import "./../assets/style.scss";
    /*@media screen and (max-width: 1140px){
        .our-technologies{
            display: flex;
            flex-direction: column;
            background: none;
            margin: 0 auto;
            padding: 40px;
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
    }*/
</style>