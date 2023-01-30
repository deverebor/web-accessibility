<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import appLogo from '@/assets/images/logo.svg'

/*
  @note: podemos incrementar a forma com que utilizamos esse componente de dropdown, fazendo uma abstração com pops que recebe os elementos e subelementos do menu
*/

const featureSubMenuClass = ref('app-header__nav__sub-menu__features--hide')
const companySubMenuClass = ref('app-header__nav__sub-menu__company--hide')

function handleShowSubMenu(dynamicClass: string, subMenuName?: string): string {
  return subMenuName === undefined
    ? (featureSubMenuClass.value = dynamicClass)
    : (companySubMenuClass.value = dynamicClass)
}

function handleHideSubMenu(dynamicClass: string, subMenuName?: string): string {
  return subMenuName === undefined
    ? (featureSubMenuClass.value = dynamicClass)
    : (companySubMenuClass.value = dynamicClass)
}
</script>

<template>
  <header class="app-header">
    <nav class="app-header__nav">
      <ul class="app-header__nav__menu">
        <li class="app-header__nav__menu-item">
          <RouterLink to="/">
            <img :src="appLogo" alt="snap logo">
          </RouterLink>
        </li>
        <li aria-expanded="true" class="app-header__nav__menu-item">
          Features
          <button
            aria-expanded="false"
            @mouseover="handleShowSubMenu
              ('app-header__nav__sub-menu__features--show')"
            @mouseleave="handleHideSubMenu('app-header__nav__sub-menu__features--hide')"
          >
            oi
          </button>
          <ul
            class="app-header__nav__sub-menu__features--hide"
            :class="featureSubMenuClass"
          >
            <li class="app-header__nav__sub-menu__features-item">
              Todo List
            </li>
            <li class="app-header__nav__sub-menu__features-item">
              Calendar
            </li>
            <li class="app-header__nav__sub-menu__features-item">
              Reminders
            </li>
            <li class="app-header__nav__sub-menu__features-item">
              Planing
            </li>
          </ul>
        </li>
        <li aria-expanded="true" class="app-header__nav__menu-item">
          Company
          <button
            aria-expanded="false"
            @mouseover="handleShowSubMenu('app-header__nav__sub-menu__company--show', 'company')"
            @mouseleave="handleHideSubMenu('app-header__nav__sub-menu__company--hide', 'company')"
          >
            oi
          </button>
          <ul
            class="app-header__nav__sub-menu__company--hide"
            :class="companySubMenuClass"
          >
            <li class="app-header__nav__sub-menu__company--item">
              History
            </li>
            <li class="app-header__nav__sub-menu__company--item">
              Our Team
            </li>
            <li class="app-header__nav__sub-menu__company--item">
              Blog
            </li>
          </ul>
        </li>
        <li class="app-header__nav__menu-item">
          Careers
        </li>
        <li class="app-header__nav__menu-item">
          About
        </li>
      </ul>
    </nav>

    <nav class="app-header__nav">
      <ul class="app-header__nav__menu">
        <li class="app-header__nav__menu-item">
          <a class="app-header__nav__login" href="#">
            Login
          </a>
        </li>
        <li class="app-header__nav__menu-item">
          <a class="app-header__nav__register" href="#">
            Register
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style src="./AppHeader.scss" lang="scss" scoped />
