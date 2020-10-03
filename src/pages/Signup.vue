<template>
    <div class="page-bg d-flex justify-content-center align-items-center">
        <div class="reg-form bg-white py-4 px-5 rounded shadow" style="height: 90%; width: 430px;">
            <div class="w-100 text-center mb-3">
                <h2>Register</h2>
            </div>

            <!-- Name -->
            <div class="input-group mb-4">
                <div class="input-group-prepend d-flex align-items-center mb-0 pr-3">
                    <label for="name" class="mb-0">
                        <font-awesome-icon icon="grin-wink"/>
                    </label>
                </div>
                <input v-model="$v.fields.name.$model"
                       @input="removeError('name')"
                       type="text"
                       id="name"
                       autocomplete="off"
                       placeholder="Name"
                       class="reg-input form-control border-0 rounded-0 pl-0" autofocus>
                <span v-if="errorsFromApi['name']"
                      class="input-error small">{{errorsFromApi['name'][0]}}</span>
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

            <!-- Confirm Password -->
            <div class="input-group mb-3">
                <div class="input-group-prepend d-flex align-items-center mb-0 pr-3 ">
                    <label for="confirm-password" class="mb-0">
                        <font-awesome-icon icon="lock"/>
                    </label>
                </div>
                <input v-model="$v.fields.password_confirmation.$model"
                       id="confirm-password"
                       class="reg-input form-control border-0 rounded-0 pl-0"
                       type="password"
                       placeholder="Confirm Password">
            </div>

            <!-- Phone -->
            <div class="custom-control custom-checkbox small">
              <div class="input-group-prepend d-flex align-items-center mb-0 pr-3 ">
                    <label for="phone" class="mb-0">
                        <font-awesome-icon icon="phone"/>
                    </label>
                </div>
                <input v-model="$v.fields.phone.$model"
                       id="phone"
                       class="reg-input form-control border-0 rounded-0 pl-0"
                       type="tel"
                       placeholder="Confirm Password">
            </div>
            <span v-if="errorsFromApi['terms']" class="small text-danger">{{errorsFromApi['terms'][0]}}</span>

            <div class="w100 text-center mt-4">
                <button class="get-started-btn"
                        type="button"
                        @click="auth('register')">GET STARTED</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators';
    import authMixin from '../mixins/auth';

    export default {
        name: "Registration",
        mixins: [authMixin],
        data() {
            return {
                fields: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    phone: '',
                },
            }
        },
        validations: {
            fields: {
                name: {required},
                email: {required, email},
                password: {required},
                password_confirmation: {required},
                phone: {required},
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