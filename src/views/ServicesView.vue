<script setup lang="ts">
import etude from '@/assets/videos/etude.mp4'
import secretariat from '@/assets/videos/secretariat.mp4'
import tech from '@/assets/videos/tech.mp4'
import tourisme from '@/assets/videos/tourisme.mp4'
import travail from '@/assets/videos/travail.mp4'
import voyage from '@/assets/videos/voyage.mp4'
const videos = [etude, secretariat, tech, tourisme, travail, voyage]
</script>
<template>
<div class="isolate px-6 py-24 sm:py-32 lg:px-8">
  <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
    <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[20deg] bg-gradient-to-t from-[#80e1ff] to-[#80e1ff]  opacity-40 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="mx-auto max-w-3xl text-center">
    <div class="font-bold border p-2 rounded-lg text-gray-800">
      {{ $t('servicesTitle') }}
    </div>
    <div class="grid lg:grid-cols-3 mt-5 p-5">
      <div v-for="(video, i) in videos" :key="i" class="border rounded-lg overflow-hidden m-5 shadow-indigo-950 shadow-lg hover:shadow-xl hover:shadow-indigo-950 transition-all ease-in-out duration-700">
        <video autoplay="true" muted loop :src=video></video>
        <h1 class="text-center uppercase font-bold text-indigo-900">{{ $t(`servicesHeader.${i}`) }}</h1>
        <div class="text-sm">
          {{ $t(`servicesBody.${i}`) }}
        </div>
        <div class="border p-3 rounded-full w-fit mt-2 mx-auto animate-pulse bg-indigo-700 font-bold"><a href="https://etude.lorondoservices.com">{{ $t('more') }}</a></div>
      </div>
    </div>
  </div>
</div>
</template>