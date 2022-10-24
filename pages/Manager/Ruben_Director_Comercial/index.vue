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
            href="https://www.facebook.com/ManagerColombia"
            target="_blank"
            >
          </v-btn><br>
          <v-btn
            class="Instagram mt-2"
            width="30"
            height="30"
            fab
            href="https://www.instagram.com/managercolombia/"
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
// css
import '~/assets/Manager/style.scss';
import '~/assets/Manager/responsive-Cel-large.scss';
import '~/assets/Manager/responsive-Cel-small.scss';
import '~/assets/Manager/responsive-desktop-device.scss';
import '~/assets/Manager/responsive-extrabig-device.scss';
import '~/assets/Manager/responsive-laptop-device.scss';
import '~/assets/Manager/responsive-tablet-device.scss';
// js
import Welcome from '~/components/Manager/Ruben_Director_Comercial/Welcome.vue';
import Name from '~/components/Manager/Ruben_Director_Comercial/Name.vue';
import CallToAction from '~/components/Manager/Ruben_Director_Comercial/CallToAction.vue';
import Services from '~/components/Manager/Ruben_Director_Comercial/Services.vue';
import Adicionales from '~/components/Manager/Ruben_Director_Comercial/Adicionales.vue';
import Footer from '~/components/Manager/Ruben_Director_Comercial/Footer.vue';
export default {
    components: { Welcome, Name, CallToAction, Services, Adicionales, Footer },
    head() {
      return{
        title: 'Rubén Yepes',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Esta es la tarjeta digital de Rubén Yepes'
          }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/Manager/Ruben_Director_Comercial/Images/foto.ico' },
        ]
      }
  }
}
</script>

