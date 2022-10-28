<template>
  <div >
    <RedesSociales/>
    <Welcome Foto="/Manager/Oscar_Jefe_Multimedia/Images/foto.png"/>
    <Name nombre="Oscar Pedraza" cargo="Jefe Multimedia"/>
    <CallToAction Whatsapp="https://api.whatsapp.com/send?phone=573147337724" tel="tel:+573147337724" contacto="/Manager/Oscar_Jefe_Multimedia/Contact/OscarPedraza.vcf" email="mailto:multimedia@agenciamanager.com" web="https://agenciamanager.com/" url="https://mitarjetadigital.co/Manager/Oscar_Jefe_Multimedia"/>
    <Services style="background-color: rgba(111, 111, 110, 0.2)" Whatsapp="https://api.whatsapp.com/send?phone=573147337724"/>
    <Adicionales qr="/Manager/Oscar_Jefe_Multimedia/Images/QR.webp" QrD="/Manager/Oscar_Jefe_Multimedia/Images/TajetaDigitalOscarPedraza.png"/>
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
    title: 'Oscar Pedraza',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Esta es la tarjeta digital de Oscar Pedraza'
      }
    ],
    
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/Manager/Oscar_Jefe_Multimedia/Images/foto.ico' }]
  }
}
</script>
