<script setup lang="ts">
import etude from '@/assets/videos/etude.mp4'
import secretariat from '@/assets/videos/secretariat.mp4'
import tech from '@/assets/videos/tech.mp4'
import tourisme from '@/assets/videos/tourisme.mp4'
import travail from '@/assets/videos/travail.mp4'
import voyage from '@/assets/videos/voyage.mp4'
</script>
<template>
<div class="isolate px-6 py-24 sm:py-32 lg:px-8">
  <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
    <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[20deg] bg-gradient-to-t from-[#80e1ff] to-[#80e1ff]  opacity-40 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="mx-auto max-w-3xl text-center">
    <div class="font-bold border p-2 rounded-lg text-gray-800">Nous offrons a nos clients une gamme de services variée et de qualité superieure, 
      conscient de la nécéssité de ce qu'est votre besoin, nous vous accompagnons fièrement dans son obtention.
    </div>
    <div class="grid lg:grid-cols-3 mt-5 p-5">
      <div class="border rounded-lg overflow-hidden m-5 shadow-indigo-950 shadow-lg hover:shadow-xl hover:shadow-indigo-950 transition-all ease-in-out duration-700">
        <video autoplay="true" muted loop :src=etude></video>
        <h1 class="text-center uppercase font-bold text-indigo-900">Etudes</h1>
        <div class="text-sm">
          Vous désirez continuer vos études à l'étranger? Dans des écoles offrants des diplômes reconnues à l'internationale?
          Nous vous accompagnons dans le choix de votre école, votre filière et votre intégration.
        </div>
        <div class="border p-3 rounded-full w-fit mt-2 mx-auto animate-pulse bg-indigo-700 font-bold"><a href="https://etude.lorondoservices.com">Voir Plus</a></div>
      </div>
      <div class="border rounded-lg overflow-hidden m-5 shadow-indigo-950 shadow-lg hover:shadow-xl hover:shadow-indigo-950 transition-all ease-in-out duration-700">
        <video autoplay="true" muted loop :src=secretariat></video>
        <h1 class="text-center uppercase font-bold text-indigo-900">Art</h1>
        <div class="text-sm">
          Vous êtes un amoureux des oeuvres artistiques? vous aimez produire des oeuvres de toutes beautées? vous voulez vendre ou
          exposer vos réalisations? N'hésitez pas à nous contactez pour vos besoin artistiques.
        </div>
        <div class="border p-3 rounded-full w-fit mt-2 mx-auto animate-pulse bg-indigo-700 font-bold"><a href="https://art.lorondoservices.com">Voir Plus</a></div>
      </div>
      <div class="border rounded-lg overflow-hidden m-5 shadow-indigo-950 shadow-lg hover:shadow-xl hover:shadow-indigo-950 transition-all ease-in-out duration-700">
        <video autoplay="true" muted loop :src=tech></video>
        <h1 class="text-center uppercase font-bold text-indigo-900">Technologies</h1>
        <div class="text-sm">
          De nos jours, la technologie est devenue notre un réel omniscient, elle contribue
          à notre epanouissement. Rejoignez les plus grands abris technologiques de notre monde.
        </div>
        <div class="border p-3 rounded-full w-fit mt-2 mx-auto animate-pulse bg-indigo-700 font-bold"><a href="https://techs.lorondoservices.com">Voir Plus</a></div>
      </div>
      <!-- <div class="border rounded-lg overflow-hidden m-5 shadow-indigo-950 shadow-lg hover:shadow-xl hover:shadow-indigo-950 transition-all ease-in-out duration-700">
        <video autoplay="true" muted loop :src=tourism></video>
        <h1 class="text-center uppercase font-bold">tourisme</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae illo qui praesentium. 
          Officia voluptate autem nesciunt dignissimos itaque minima excepturi, cum repudiandae facere ex 
          perspiciatis corporis nihil inventore eligendi accusamus?
        </div>
      </div> -->
      <div class="border rounded-lg overflow-hidden m-5 shadow-indigo-950 shadow-lg hover:shadow-xl hover:shadow-indigo-950 transition-all ease-in-out duration-700">
        <video autoplay="true" muted loop :src=tourisme></video>
        <h1 class="text-center uppercase font-bold text-indigo-900">tourisme</h1>
        <div class="text-sm">
          Une destination touristique? Visitez des lieux naturels qui vont vous marquer, prenez des vacances méritées et aller
          vers des destinations inoubliables. Créer vous des souvenirs.
        </div>
        <div class="border p-3 rounded-full w-fit mt-2 mx-auto animate-pulse bg-indigo-700 font-bold"><a href="https://tourisme.lorondoservices.com">Voir Plus</a></div>
      </div>
      <div class="border rounded-lg overflow-hidden m-5 shadow-indigo-950 shadow-lg hover:shadow-xl hover:shadow-indigo-950 transition-all ease-in-out duration-700">
        <video autoplay="true" muted loop :src=travail></video>
        <h1 class="text-center uppercase font-bold text-indigo-900">travail</h1>
        <div class="text-sm">
          De nombreux pays du monde sont en chantier et n'attendent que vous, des travailleurs expérimentés et désireux de faire vos preuves
          Le monde proffessionnel vous attends.
        </div>
        <div class="border p-3 rounded-full w-fit mt-2 mx-auto animate-pulse bg-indigo-700 font-bold"><a href="https://travail.lorondoservices.com">Voir Plus</a></div>
      </div>
      <div class="border rounded-lg overflow-hidden m-5 shadow-indigo-950 shadow-lg hover:shadow-xl hover:shadow-indigo-950 transition-all ease-in-out duration-700">
        <video autoplay="true" muted loop :src=voyage></video>
        <h1 class="text-center uppercase font-bold text-indigo-900">voyages</h1>
        <div class="text-sm">
          Notre monde regorge de nombreuse ressources qui n'attendent que vous. Sport, Esport, Tourisme, ...
          Comme beaucoup d'autre aventurer vous et faite le tour du monde.
        </div>
        <div class="border p-3 rounded-full w-fit mt-2 mx-auto animate-pulse bg-indigo-700 font-bold"><a href="https://voyages.lorondoservices.com">Voir Plus</a></div>
      </div>
    </div>
  </div>
</div>
</template>