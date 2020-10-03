<template>
    <div class="page-bg d-flex justify-content-center align-items-center">
        <div class="login-form bg-white py-4 px-5 rounded shadow" style="width: 430px;">

            <div class="w-100 text-center mb-3 position-relative">
                <h2>Login</h2>
            </div>

            <!-- Email -->
            <div class="input-group mb-4">
                <div class="input-group-prepend d-flex align-items-center mb-0 pr-3 ">
                    <label for="email" class="mb-0">
                        <font-awesome-icon icon="envelope"/>
                    </label>
                </div>
                <input v-model="$v.fields.email.$model"
                       @input="removeError('email')"
                       type="email"
                       id="email"
                       placeholder="Email"
                       class="reg-input form-control border-0 rounded-0 pl-0">
                <span v-if="errorsFromApi['email']"
                      class="input-error small">{{errorsFromApi['email'][0]}}</span>
            </div>

            <!-- Password -->
            <div class="input-group mb-4">
                <div class="input-group-prepend d-flex align-items-center mb-0 pr-3 ">
                    <label for="password" class="mb-0">
                        <font-awesome-icon icon="lock"/>
                    </label>
                </div>
                <input v-model="$v.fields.password.$model"
                       @input="removeError('password')"
                       type="password"
                       id="password"
                       placeholder="Password"
                       class="reg-input form-control border-0 rounded-0 pl-0">
                <span v-if="errorsFromApi['password']" class="input-error small">{{errorsFromApi['password'][0]}}</span>
            </div>

             <!-- Error message from api -->
            <div class="w-100 text-center">
                <span v-if="errorMsgFromApi" class="text-danger">{{errorMsgFromApi}}</span>
            </div>

            <div class="w-100 text-center mt-5">
                <button class="get-started-btn"
                        type="button"
                        @click="auth('login')">Let's Go</button>
            </div>

            <div class="w-100 text-center mt-3">
                <span class="small">Don't have an account? <router-link to="/register">Create Account</router-link></span>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators';
    import authMixin from '../mixins/auth';

    export default {
        name: "Login",
        mixins: [authMixin],
        data() {
            return {
                errorsFromApi: [], //temporary
                fields: {
                    email: '',
                    password: '',
                },
            }
        },
        validations: {
            fields: {
                email: {required, email},
                password: {required},
            }
        }
    }
</script>

<style scoped>
    .page-bg {
        width: 100%;
        height: 100vh;
        background: #9370db;
    }
    .reg-input {
        outline: none !important;
        border-bottom: 1px solid lightgray !important;

    }
    .get-started-btn {
        border: none;
        height: 2.5rem;
        border-radius: 1.25rem;
        padding: 0 1.5rem;
        background: #9370db;
        color: #fff;
        outline: none;
    }
    .input-error {
        background: #fff;
        position: absolute;
        z-index: 99;
        bottom: -20px;
        right: 0;
        color: crimson;
    }
</style>