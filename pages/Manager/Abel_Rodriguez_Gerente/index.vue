<template>
  <div >
    <RedesSociales/>
    <Welcome Foto="/Manager/Abel_Rodriguez_Gerente/Images/foto.png"/>
    <Name nombre="Abel Rodriguez" cargo="Gerente"/>
    <CallToAction Whatsapp="https://api.whatsapp.com/send?phone=573103033752" tel="tel:+573103033752" contacto="/Manager/Abel_Rodriguez_Gerente/Contact/AbelRodriguez.vcf" email="mailto:abelinho26@gmail.com" web="https://agenciamanager.com/" url="https://mitarjetadigital.co/Manager/Abel_Rodriguez_Gerente"/>
    <Services style="background-color: rgba(111, 111, 110, 0.2)" Whatsapp="https://api.whatsapp.com/send?phone=573103033752"/>
    <Adicionales qr="/Manager/Abel_Rodriguez_Gerente/Images/QR.webp" QrD="/Manager/Abel_Rodriguez_Gerente/Images/TajetaDigitalAbel_Manager.png"/>
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
