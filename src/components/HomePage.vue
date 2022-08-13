<template>
  <div>
    <NavBar />
    <div class="bodyEle">
        <div class="box">
            <h1>Hello, {{userName}}</h1>
        </div>
    </div>
  </div>
</template>




<script>
import NavBar from './NavBar.vue';

export default {
    name: 'HomePage',

    data(){
        return {
            userName: ''
        }
    },

    created(){
        this.userName = localStorage.getItem('name');
    },

    components: { NavBar }
}
</script>




<style scoped>

.bodyEle{
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: rgb(226, 227, 227);
    box-sizing: border-box;
}

.box{
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient( 178.6deg,  rgba(2,224,224,1) -5.3%, rgba(12,82,92,1) 92.7% );
    padding: 5rem 12rem;
    margin: 11.2rem 0;
    border-radius: 8px;
    color: white;
}

</style>