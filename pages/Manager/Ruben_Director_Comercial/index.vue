<template>
  <div >
    <RedesSociales/>
    <Welcome Foto="/Manager/Ruben_Director_Comercial/Images/foto.png"/>
    <Name nombre="Ruben Yepes" cargo="Director Comercial"/>
    <CallToAction Whatsapp="https://api.whatsapp.com/send?phone=573242892413" tel="tel:+573242892413" contacto="/Manager/Ruben_Director_Comercial/Contact/RubenYepes.vcf" email="mailto:ventas@agenciamanager.com" web="https://agenciamanager.com/" url="https://mitarjetadigital.co/Manager/Ruben_Director_Comercial"/>
    <Services style="background-color: rgba(111, 111, 110, 0.2)" Whatsapp="https://api.whatsapp.com/send?phone=573242892413"/>
    <Adicionales qr="/Manager/Ruben_Director_Comercial/Images/QR.webp" QrD="/Manager/Oscar_Jefe_Multimedia/Images/Oscar_Jefe_Multimedia.png"/>
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
    title: 'Ruben Yepes',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Esta es la tarjeta digital de Ruben Yepes'
      }
    ],
    
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/Manager/Ruben_Director_Comercial/Images/foto.ico' }]
  }
}
</script>
