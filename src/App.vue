<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img
      alt="Vue logo" class="logo" height="125" src="@/assets/logo.svg"
      width="125"
    >

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/about">
          About
        </RouterLink>
      </nav>
    </div>
  </header>

  <!--  <RouterView /> -->

  <label for="tac">
    <input id="tac" name="terms-and-conditions" type="checkbox">
    I agree to the Terms and Conditions.
  </label>
  <p><a href="tac.html">Read our Terms and Conditions</a>.</p>
</template>

<style lang="scss" scoped src="./App.scss" />
