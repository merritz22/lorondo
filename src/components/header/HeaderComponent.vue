<script setup lang="ts">
  import { RouterLink } from "vue-router"
  import logo from '@/assets/images/logo.jpg'
import { ref } from "vue"
import router from "@/router";

  const show = ref(false)
  const locale = localStorage.getItem('locale')
  function mainMenu() {
    show.value = ! show.value
    // alert(show.value)
  }

  function changedLocale(e:any) {
    localStorage.setItem('locale',e.target.value)
    router.go(0)
  }
</script>
<template>
    <header class="absolute inset-x-0 top-0 z-50 bg-cyan-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Lorondo Service</span>
          <img class="h-12 w-auto rounded-full hover:opacity-80 transition-all ease-in-out duration-500" :src="logo" alt="Lorondo">
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink class="text-sm border-b-2 border-b-indigo-500 font-bold leading-6 text-indigo-500 uppercase hover:text-indigo-900 hover:border-b-indigo-900 transition-all ease-in-out duration-700" to="/">{{ $t('headerNavLink.0') }}</RouterLink>
        <RouterLink class="text-sm border-b-2 border-b-indigo-500 font-bold leading-6 text-indigo-500 uppercase hover:text-indigo-900 hover:border-b-indigo-900 transition-all ease-in-out duration-700" to="services">{{ $t('headerNavLink.1') }}</RouterLink>
        <RouterLink class="text-sm border-b-2 border-b-indigo-500 font-bold leading-6 text-indigo-500 uppercase hover:text-indigo-900 hover:border-b-indigo-900 transition-all ease-in-out duration-700" to="contact">{{ $t('headerNavLink.2') }}</RouterLink>
        <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a> -->
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <img v-if="locale?.includes('fr-FR')" class="h-5 w-10 rounded-lg" src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/fr.svg">
        <img v-if="locale?.includes('en-US')" class="h-5 w-10 rounded-lg" src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gb.svg">
        <img v-if="locale?.includes('ro-RO')" class="h-5 w-10 rounded-lg" src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/ro.svg">
        <select @change="changedLocale" name="locale" id="locale" class="bg-transparent">
          <option value="fr-FR" :selected="locale?.includes('fr-FR') ? true:false">{{ $t('locale.0') }}</option>
          <option value="en-US" :selected="locale?.includes('en-US') ? true:false">{{ $t('locale.1') }}</option>
          <option value="ro-RO" :selected="locale?.includes('ro-RO') ? true:false">{{ $t('locale.2') }}</option>
        </select>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <nav class="lg:hidden">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-50"></div>
      <div class="fixed inset-y-0 right-0 z-50 w-full h-fit overflow-y-auto bg-cyan-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 rounded-xl">
        <div class="flex items-center justify-between ">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Lorondo Service</span>
            <img class="h-12 w-auto"  :src="logo" alt="">
          </a>
          <div class="">
            <a href="" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"></a>
          </div>
          <button v-if="!show" @click="mainMenu" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button v-if="show" @click="mainMenu" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div v-if="!show" class="mt-6 flow-root">
          <div class="-my-6 divide-y">
            <div class="border p-2 flex justify-between m-2 rounded-lg">
              <RouterLink class="text-sm border-b-2 border-b-indigo-500 font-bold leading-6 text-indigo-500 uppercase hover:text-indigo-900 hover:border-b-indigo-900 transition-all ease-in-out duration-700" to="/">{{ $t('headerNavLink.0') }}</RouterLink>
              <RouterLink class="text-sm border-b-2 border-b-indigo-500 font-bold leading-6 text-indigo-500 uppercase hover:text-indigo-900 hover:border-b-indigo-900 transition-all ease-in-out duration-700" to="services">{{ $t('headerNavLink.1') }}</RouterLink>
              <RouterLink class="text-sm border-b-2 border-b-indigo-500 font-bold leading-6 text-indigo-500 uppercase hover:text-indigo-900 hover:border-b-indigo-900 transition-all ease-in-out duration-700" to="contact">{{ $t('headerNavLink.2') }}</RouterLink>
              <select @change="changedLocale" name="locale" id="locale" class="bg-transparent">
                <option value="fr-FR" :selected="locale?.includes('fr-FR') ? true:false">{{ $t('locale.0') }}</option>
                <option value="en-US" :selected="locale?.includes('en-US') ? true:false">{{ $t('locale.1') }}</option>
                <option value="ro-RO" :selected="locale?.includes('ro-RO') ? true:false">{{ $t('locale.2') }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>