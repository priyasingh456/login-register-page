<template>
  <main class="main-signIn">
        <div class="SignIn-container">
            <form class="left-side" id="form" @submit.prevent="handleSubmit" >
                <div><h1>Create an account</h1></div>
                <div class="mt-p">
                    <input type="text" placeholder="Name" class="border" id="name" v-model="name">
                </div>
                <div>
                    <input type="email" placeholder="Email" class="border" id="email" v-model="email">
                </div>
                <div>
                    <input type="password" placeholder="Password" class="border" id="password" v-model="password">
                </div>
                <div>
                    <input type="password" placeholder="Confirm password" class="border" id="Con-password" v-model="confirmPass">
                </div>
                <div>
                    <button type="submit" class="signup-btn"><strong>SIGN UP</strong></button>
                </div>
                <div>
                    <p class="font-size-sm">Or Signup with</p>
                </div>
                <div>
                    <i class="fa-brands fa-google icons"></i>
                    <i class="fa-brands fa-facebook-f icons"></i>
                    <i class="fa-brands fa-linkedin-in icons"></i>
                </div>
                <div>
                    <p><span class="font-size-lar">Already have an account?</span> <strong><router-link to="/login" class="plain-link remove-underline white-txt">LOGIN</router-link></strong></p>
                </div>
                <div>
                    <p class="font-size-sm">Copyright © 2022, Meeting-App All Rights Reserved</p>
                </div>
                <div>
                    <p class="font-size-sm mt-n"><span class="blue-color">Terms od Use</span> | <span class="blue-color">Privacy Policy</span></p>
                </div>
            </form>
            <div class="right-side">
              <img src="https://cdn.wallpapersafari.com/56/73/K5SDWh.png" class="right-img"/>
            </div>
        </div>
    </main>
</template>




<script>

import axios from 'axios';

export default {
    name: 'RegisterPage',

    data(){
        return {
            name: '',
            email: '',
            password: '',
            confirmPass: ''
        }

    },

    methods: {

        validateFormData(data) {

            const name = data.name;
            const email = data.email;
            const password = data.password;
            const confirmPassword = data.confirmPass;

            if (name === '') {
                this.$toast.error('Username Field Required');
                return false;
            }
            if (email === '') {
                this.$toast.error('Email Field Required');
                return false;
            }
            let passValid = () => {
                var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                return re.test(password);
            };
            if (password == '') {
                this.$toast.error('Plese enter the password field');
                return false;
            }
            let passvalid = passValid();
            if (!passvalid) {
                this.$toast.error(
                'Password must be at least eight characters and include a mix of upper and lower case letters, numbers, and symbols'
                );
                return false;
            }
            if (confirmPassword == '') {
                this.$toast.error('Please enter confirm password field');
                return false;
            }
            if (password.localeCompare(confirmPassword) != 0) {
                this.$toast.error('your Confirm password not matching');
                return false;
            }
            return true;
        },

        async handleSubmit(){
            
            const data = {
                name: this.name,
                email: this.email,
                password: this.password,
                confirmPass: this.confirmPass
            };


            //console.log(data)
            
            if(this.validateFormData(data)) {

                const registerData = {
                    name: data.name,
                    email: data.email,
                    password: data.password
                }

                const response = await axios.post(`https://mymeetingsapp.herokuapp.com/api/auth/register`, registerData)
                    .then((response) => {
                        console.log(response);
                        this.$toast.success('Successfully Registered');
                        this.$router.push('/login');
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });

                console.log(response)
                
            }
            
        }
    }

}
</script>




<style scoped>

.main-signIn{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    box-sizing: border-box;
    color: white;
    background-color: rgb(247, 245, 245);
}

.SignIn-container{
    width: 60%;
    background-image: linear-gradient( 178.6deg,  rgba(2,224,224,1) -5.3%, rgba(12,82,92,1) 92.7% );
    display: flex;
    align-items: center;
    margin-top: -.6rem;
    border-radius: 4px;
}

.left-side{
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}

.left-side div input{
    width: 18rem;
    padding: .7rem;
    margin: .4rem 0;
    background-color: initial;
    border-radius: 4px;
    color: white;
}

::placeholder{
    color: white;
    opacity: 1;
    font-size: .8rem;
}

.icons{
    font-size: .8rem;
    margin: .5rem;
}

.white-txt:hover{
    color: #7ffbfb;
}

.signup-btn{
    width: 19.5rem;
    padding: .7rem;
    margin: .4rem 0;
    border-radius: 4px;
    border: none;
    color: #01515c;
    cursor: pointer;
}

.signup-btn:hover{
    background-color: rgb(255, 255, 255);
}

.right-side{
    width: 41%;
    padding: 0;
    margin: 0;
}

.right-side img{
    width: 100%;
}

.right-img{
  width: 100%;
  height: 33rem;
  border-radius: 0 4px 4px 0;
  margin-bottom: -.2rem;
}


@media (max-width: 600px){

    .SignIn-container{
        width: 85%;
    }

    .left-side{
        width: 100%;
    }

    .left-side div input{
        width: 15rem;
    }

    ::placeholder{
        font-size: .8rem;
    }

    .signup-btn{
        width: 16.5rem;
    }

    .right-side{
        display: none;
    }
}


.error-username{
    border: 1.2px solid rgb(222, 3, 3);
}

</style>