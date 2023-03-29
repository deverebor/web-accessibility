<script setup lang="ts">
import {
  ArrowUpIcon,
  CalendarIcon,
  LogoImage,
  PlanningIcon,
  RemindersIcon,
  TodoIcon,
} from "@/helper/files";
import { ref } from "vue";
import { RouterLink } from "vue-router";

/*
  @note: podemos incrementar a forma com que utilizamos esse componente de dropdown, fazendo uma abstração com pops que recebe os elementos e subelementos do menu
*/

const featureSubMenuClass = ref("app-header__nav__sub-menu__features--hide");
const companySubMenuClass = ref("app-header__nav__sub-menu__company--hide");

function handleShowSubMenu(dynamicClass: string, subMenuName?: string): string {
  return subMenuName === undefined
    ? (featureSubMenuClass.value = dynamicClass)
    : (companySubMenuClass.value = dynamicClass);
}

function handleHideSubMenu(dynamicClass: string, subMenuName?: string): string {
  return subMenuName === undefined
    ? (featureSubMenuClass.value = dynamicClass)
    : (companySubMenuClass.value = dynamicClass);
}
</script>

<template>
  <header class="app-header">
    <nav class="app-header__nav">
      <ul class="app-header__nav__menu">
        <li class="app-header__nav__menu-item">
          <RouterLink to="/">
            <img :src="LogoImage" alt="snap logo" />
          </RouterLink>
        </li>
        <li
          tabindex="0"
          aria-expanded="true"
          class="app-header__nav__menu-item"
          @mouseover="
            handleShowSubMenu('app-header__nav__sub-menu__features--show')
          "
          @focus="
            handleShowSubMenu('app-header__nav__sub-menu__features--show')
          "
          @blur="handleHideSubMenu('app-header__nav__sub-menu__features--hide')"
        >
          <span class="app-header__span">
            Features
            <img
              class="app-header__span__arrow-icon"
              :src="ArrowUpIcon"
              alt=""
            />
          </span>
          <ul
            :class="featureSubMenuClass"
            @mouseleave="
              handleHideSubMenu('app-header__nav__sub-menu__features--hide')
            "
          >
            <li class="app-header__nav__sub-menu__features-item">
              <img
                class="app-header__nav__sub-menu__features__icon"
                :src="TodoIcon"
                alt=""
              />
              <a
                class="app-header__nav__link"
                arai-label="Todo List page"
                href="#"
              >
                Todo List
              </a>
            </li>
            <li class="app-header__nav__sub-menu__features-item">
              <img
                class="app-header__nav__sub-menu__features__icon"
                :src="CalendarIcon"
                alt=""
              />
              <a
                class="app-header__nav__link"
                arai-label="Calendar page"
                href="#"
              >
                Calendar
              </a>
            </li>
            <li class="app-header__nav__sub-menu__features-item">
              <img
                class="app-header__nav__sub-menu__features__icon"
                :src="RemindersIcon"
                alt=""
              />
              <a
                class="app-header__nav__link"
                aria-label="Reminders Page"
                href="#"
              >
                Reminders
              </a>
            </li>
            <li class="app-header__nav__sub-menu__features-item">
              <img
                class="app-header__nav__sub-menu__features__icon"
                :src="PlanningIcon"
                alt=""
              />
              <a
                class="app-header__nav__link"
                aria-label="Planing page"
                href="#"
              >
                Planing</a
              >
            </li>
          </ul>
        </li>
        <li
          tabindex="0"
          aria-expanded="true"
          class="app-header__nav__menu-item"
          @mouseover.stop="
            handleShowSubMenu(
              'app-header__nav__sub-menu__company--show',
              'company'
            )
          "
          @focus="
            handleShowSubMenu(
              'app-header__nav__sub-menu__company--show',
              'company'
            )
          "
          @blur="
            handleHideSubMenu(
              'app-header__nav__sub-menu__company--hide',
              'company'
            )
          "
        >
          <span class="app-header__span">
            Company
            <img
              class="app-header__span__arrow-icon"
              :src="ArrowUpIcon"
              alt=""
            />
          </span>
          <ul
            :class="companySubMenuClass"
            @mouseleave.stop="
              handleHideSubMenu(
                'app-header__nav__sub-menu__company--hide',
                'company'
              )
            "
          >
            <li class="app-header__nav__sub-menu__company--item">
              <a
                class="app-header__nav__link"
                aria-label="History of company page"
                href="#"
              >
                History
              </a>
            </li>
            <li class="app-header__nav__sub-menu__company--item">
              <a
                class="app-header__nav__link"
                aria-label="Our Team page"
                href="#"
              >
                Our Team
              </a>
            </li>
            <li class="app-header__nav__sub-menu__company--item">
              <a class="app-header__nav__link" aria-label="Blog page" href="#">
                Blog
              </a>
            </li>
          </ul>
        </li>
        <li class="app-header__nav__menu-item">
          <a class="app-header__nav__link" aria-label="Careers page" href="#">
            Careers
          </a>
        </li>
        <li class="app-header__nav__menu-item">
          <a class="app-header__nav__link" aria-label="About page" href="#">
            About
          </a>
        </li>
      </ul>
    </nav>

    <nav class="app-header__nav">
      <ul class="app-header__nav__menu">
        <li class="app-header__nav__menu-item">
          <a aria-label="Login page" class="app-header__nav__login" href="#">
            Login
          </a>
        </li>
        <li class="app-header__nav__menu-item">
          <a
            aria-label="Register page"
            class="app-header__nav__register"
            href="#"
          >
            Register
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style src="./AppHeader.scss" lang="scss" scoped />
