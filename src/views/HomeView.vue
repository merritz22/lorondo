<script setup lang="ts">
import video1 from '@/assets/videos/1.mp4'
import video2 from '@/assets/videos/2.mp4'
</script>

<template>
  <div class="mt-20">
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
      <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[20deg] bg-gradient-to-t from-[#80e1ff] to-[#80e1ff]  opacity-40 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
    <div class="mx-auto max-w-2xl sm:-py-48">
      <div class="sm:mb-8 sm:flex sm:justify-center mb-5 text-center">
        <div class="rounded-full px-3 py-1 text-lg font-bold leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Lorondo Services <label class="text-indigo-700 animate-pulse">{{ $t('HomeTitle') }}</label>.  
        </div>
      </div>
      <div class="text-center">
        <div class="text-center lg:text-lg">
          {{ $t('HomeDef') }}
        </div>
      </div>
      <div class="border p-4 rounded-full w-fit mt-20 mx-auto animate-bounce bg-indigo-700 font-bold">Lorondo Folio</div>
          <video class="rounded-xl mt-4 shadow-lg mx-auto" autoplay="true" muted loop :src="video1"></video>
    </div>
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
    </div>
  </div>
</template>
