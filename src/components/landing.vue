<template>
    <h1>
        hello
        <h2>
            world
        </h2>
    </h1>
    <header class="hder">
        <nav class="hder__nav">
           <a href="#">
               <img class="hder__logo" src="../../images/logo.png" alt="">
           </a>
           <a href="#">
               <i class="fas fa-home"></i>
               home
            </a>
           <a href="#our-technologies">our technologies</a>
           <a href="#contakts">contakts</a>
           <a href="call">
                +422 2222222
                <i class="fas fa-phone"></i>   
            </a>
        </nav>

    </header>
    <main>
    </main>
</template>

<script>
export default{
    name: "landing"
}
</script>

<style lang="scss" scoped>
    @import url(../assets/style.scss);
</style>