<template>
  <div >
    <RedesSociales/>
    <Welcome Foto="/Manager/Felipe_Jefe_Creativo/Images/foto.png"/>
    <Name nombre="Felipe Barahona" cargo="Jefe Creativo"/>
    <CallToAction Whatsapp="https://api.whatsapp.com/send?phone=573147337724" tel="tel:+573147337724" contacto="/Manager/Felipe_Jefe_Creativo/Contact/FelipeBarahona.vcf" email="mailto:creativo@agenciamanager.com" web="https://agenciamanager.com/" url="https://mitarjetadigital.co/Manager/Felipe_Jefe_Creativo"/>
    <Services style="background-color: rgba(111, 111, 110, 0.2)" Whatsapp="https://api.whatsapp.com/send?phone=573147337724"/>
    <Adicionales qr="/Manager/Felipe_Jefe_Creativo/Images/QR.webp" QrD="/Manager/Felipe_Jefe_Creativo/Images/TajetaDigitalFelipeBarahona.png"/>
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
    title: 'Felipe Barahona',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Esta es la tarjeta digital de Felipe Barahona'
      }
    ],
    
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/Manager/Felipe_Jefe_Creativo/Images/foto.ico' }]
  }
}
</script>
