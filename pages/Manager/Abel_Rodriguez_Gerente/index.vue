<template>
  <div >
    <div class="contenedor-float">
      <div class="flotante pa-1 pb-1" justify="end" align="start" >
          <v-btn
            class="PaginaWeb"
            width="30"
            height="30"
            fab
            href="https://wa.link/q45mbh"
            target="_blank"
            >
          </v-btn><br>
          <v-btn
            class="Facebook mt-2"
            width="30"
            height="30"
            fab
            href="https://www.facebook.com/"
            target="_blank"
            >
          </v-btn><br>
          <v-btn
            class="Instagram mt-2"
            width="30"
            height="30"
            fab
            href="https://www.instagram.com/"
            target="_blank"
            >
          </v-btn>
      </div>
    </div>
    <Welcome/>
    <Name/>
    <CallToAction />
    <Services style="background-color: rgba(111, 111, 110, 0.2)"/>
    <Adicionales />
    <Footer/>
  </div>
</template>

<script>
import Welcome from '~/components/Manager/Abel_Rodriguez_Gerente/Welcome.vue';
import Name from '~/components/Manager/Abel_Rodriguez_Gerente/Name.vue';
import CallToAction from '~/components/Manager/Abel_Rodriguez_Gerente/CallToAction.vue';
import Services from '~/components/Manager/Abel_Rodriguez_Gerente/Services.vue';
import Adicionales from '~/components/Manager/Abel_Rodriguez_Gerente/Adicionales.vue';
import Footer from '~/components/Manager/Abel_Rodriguez_Gerente/Footer.vue';
export default {
    components: { Welcome, Name, CallToAction, Services, Adicionales, Footer },
    head: {
    title: 'Abel Rodríguez',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Esta es la tarjeta digital de Abel Rodríguez'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/Manager/Abel_Rodriguez_Gerente/Images/foto.ico' }]
  }
}
</script>
