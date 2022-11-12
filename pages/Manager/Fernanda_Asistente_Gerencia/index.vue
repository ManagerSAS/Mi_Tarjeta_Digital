<template>
  <div >
    <RedesSociales/>
    <Welcome Foto="/Manager/Fernanda_Asistente_Gerencia/Images/foto.png"/>
    <Name nombre="Fernanda Manchola" cargo="Asistente Gerencia"/>
    <CallToAction Whatsapp="https://api.whatsapp.com/send?phone=573012122944" tel="tel:+573012122944" contacto="/Manager/Fernanda_Asistente_Gerencia/Contact/FernandaManchola.vcf" email="mailto:gerencia@agenciamanager.com" web="https://agenciamanager.com/" url="https://mitarjetadigital.co/Manager/Fernanda_Asistente_Gerencia"/>
    <Services style="background-color: rgba(111, 111, 110, 0.2)" Whatsapp="https://api.whatsapp.com/send?phone=573012122944"/>
    <Adicionales qr="/Manager/Fernanda_Asistente_Gerencia/Images/QR.png" QrD="/Manager/Fernanda_Asistente_Gerencia/Images/TajetaDigitalEdnaManchola.png"/>
    <Footer/>
  </div>
</template>

<script>
import Welcome from '~/components/Manager/Welcome.vue';
import Name from '~/components/Manager/Name.vue';
import CallToAction from '~/components/Manager/CallToAction.vue';
import Services from '~/components/Manager/Services.vue';
import Adicionales from '~/components/Manager/Adicionales.vue';
import Footer from '~/components/Manager/Footer.vue';
import RedesSociales from '~/components/Manager/RedesSociales.vue';
export default {
    components: { Welcome, Name, CallToAction, Services, Adicionales, Footer, RedesSociales },
    head: {
    title: 'Fernanda Manchola',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Esta es la tarjeta digital de Fernanda Manchola'
      }
    ],
    
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/Manager/Fernanda_Asistente_Gerencia/Images/foto.ico' }]
  }
}
</script>
