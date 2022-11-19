<template>
  <div >
    <RedesSociales/>
    <Welcome Foto="/Manager/Karina_Jefe_Marketing/Images/foto.jpg"/>
    <Name nombre="Karina Villamil" cargo="Jefe Marketing"/>
    <CallToAction Whatsapp="https://api.whatsapp.com/send?phone=573003106787" tel="tel:+573003106787" contacto="/Manager/Karina_Jefe_Marketing/Contact/KarinaVillamil.vcf" email="mailto:marketing@agenciamanager.com" web="https://agenciamanager.com/" url="https://mitarjetadigital.co/Manager/Karina_Jefe_Marketing"/>
    <Services style="background-color: rgba(111, 111, 110, 0.2)" Whatsapp="https://api.whatsapp.com/send?phone=573003106787"/>
    <Adicionales qr="/Manager/Karina_Jefe_Marketing/Images/QR.webp" QrD="/Manager/Karina_Jefe_Marketing/Images/TajetaDigitalKarinaVillamil.png"/>
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
    title: 'Karina Villamil',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Esta es la tarjeta digital de Karina Villamil'
      }
    ],
    
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/Manager/Karina_Jefe_Marketing/Images/foto.ico' }]
  }
}
</script>
