<template>
    <div class="hder__menu" id="HeaderMobile">
        <nav class="hder__nav">
            <a href="#">home</a>
            <a href="#about-us">about us</a>
            <a href="#our-technologies">our technologies</a>
            <a href="#contakts">contakts</a>
        </nav>
        <div class="hder__phone">
            <i class="fas fa-phone"></i>
            <p>+422 2222222</p>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>

    .hder__menu {
        padding: 70px;
        width: calc(100%-60px);
        height: 100vh;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        background-color: #fff;
        z-index: 5;

        .hder__nav {
            display: flex;
            flex-direction: column;

            a {
                font-size: 18px;
                color: #232323;
                text-decoration: none;
                font-weight: 600;
                padding-bottom: 20px;
            }
        }

        .hder__phone {
            display: flex;
            flex-direction: row;
            font-size: 18px;
            color: #232323;
            text-decoration: none;
            font-weight: 600;

            i {
                padding-right: 10px;
            }
        }
    }
</style>