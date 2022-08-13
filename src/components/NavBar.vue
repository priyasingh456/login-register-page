<template>
   <nav class="mt-p color">
        <div class="nav-bar nav-sec" v-show="desktopNav">
            <div class="nav-section">
                <router-link to="/" class="remove-underline">Home</router-link>
            </div>
            <div class="nav-section2">
                <router-link to="/login" class="remove-underline username" >Login</router-link>
                <router-link to="/signup" class="remove-underline username">Sign up</router-link>
            </div>
        </div>
        <i class="fa-solid fa-bars menu-icon" v-show="mobile"  @click="hideNavItems" :class="{'icon-active' : mobileNav}"></i>
        <transition name="mobile-nav" class="nav-bar">
            <div v-show="mobileNav" class="nav-sec">
                <div class="nav-section">
                    <router-link to="/" class="remove-underline">Home</router-link>
                </div>
                <div class="nav-section2">
                        <a to="/login" class="remove-underline cursor">Login</a>
                        <a to="/signup" class="remove-underline cursor">Sign up</a>
                </div>
            </div>
        </transition>
    </nav>
</template>






<script>


export default {
    name: 'NavBar',

    data: function() {
        return {
            mobile: null,
            mobileNav: null,
            desktopNav: null,
            windowWidth: null,
        }
    },

    created(){
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },

    methods: {
        hideNavItems(){
            this.mobileNav = !this.mobileNav;
        },

        checkScreen(){
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 600){
                this.mobile = true;
                this.desktopNav = false;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            this.desktopNav = true;
            return;
        },


    }
}
</script>





<style scoped>

.color{
    background-color: rgb(241, 241, 241);
    margin: 0;
    padding: 0;
}

.nav-bar{
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    background-color: rgb(1, 196, 196);
}

.menu-icon{
    width: 3.2%;
    padding: 1rem;
    font-size: 1.4rem;
}

.nav-sec{
    display: flex;
}

.nav-section{
    margin-left: -10rem;
}

.nav-section, 
.nav-section2{
    display: flex;
    flex-basis: 60%;
    justify-content: center;
    flex-wrap: wrap;
}

.nav-section a, .nav-section2 a{
    padding: 1.1rem 2rem;
    font-size: 1rem;
    color: white;
    font-weight: 500;
}

.nav-section a:hover, .nav-section2 a:hover{
    background-color: rgb(51, 248, 248);
    color: #014b4b;
}

.nav-section2{
    flex-basis: 50%;
}

.cursor{
    cursor: pointer;
}


@media (max-width : 600px){

    .nav-bar, .nav-section, .nav-section2{
        flex-direction: column;
    }

    .menu-icon{
        width: 7%;
        margin: .5rem 0 .5rem 1.5rem;
        padding: .4rem .6rem;
    }

    .menu-icon:hover{
        color: rgb(3, 161, 161);
    }

    .nav-sec{
        display: flex;
        flex-direction: column;
    }

    .nav-section, 
    .nav-section2{
        margin-left: initial;
    }

    i{
        transition: .6s ease all;
    }

    .icon-active{
        transform: rotate(180deg);
    }

    .username{
        display: none;
    }
}

@media ( max-width: 600px ) {
    .dis-none {
        display: none;
    }
}

@media (min-width : 1000px){

    .dis-none{
        display: initial;
    }

    .menu-icon{
        display: none;
    }

    .nav-section{
        margin-left: -5.8rem;
    }

    .nav-section2{
        margin-left: 10rem;
    }
}

</style>