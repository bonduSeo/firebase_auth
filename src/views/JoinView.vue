<template>
  <div class="sign-up">
    <p>회원가입</p>
    {{email}} {{password}} <br>
    <input type="text" v-model="email" placeholder="email"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button @click="signUp">가입하기</button>
    <span>또는 로그인으로 돌아가기</span>
  </div>
</template>

<script>
  import firebase from 'firebase/app'
  import {authService} from '../main'
  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import 'firebase/compat/firestore';
  // require('firebase/auth');




  export default {
    name: 'JoinView',
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      async signUp() { 
        
        try {
          console.log(authService)
          const userCredential = await createUserWithEmailAndPassword(
            authService,
            this.email,
            this.passworkd
          );
          console.log(userCredential)
          console.error('왜않돼')
        } catch(error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error)
        };
      }
    }
  }
</script>

<style scoped>
  .signUp {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 20px;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 15px;
  }
</style>