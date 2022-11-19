<template>
  <div >
    <RedesSociales/>
    <Welcome Foto="/Manager/JuanCarlos_Jefe_Operativo/Images/foto.jpg"/>
    <Name nombre="Juan Carlos Sánchez" cargo="Jefe Operativo"/>
    <CallToAction Whatsapp="https://api.whatsapp.com/send?phone=573213240243" tel="tel:+573213240243" contacto="/Manager/JuanCarlos_Jefe_Operativo/Contact/JuanCarlosSanchez.vcf" email="mailto:operaciones@agenciamanager.com" web="https://agenciamanager.com/" url="https://mitarjetadigital.co/Manager/JuanCarlos_Jefe_Operativo"/>
    <Services style="background-color: rgba(111, 111, 110, 0.2)" Whatsapp="https://api.whatsapp.com/send?phone=573213240243"/>
    <Adicionales qr="/Manager/JuanCarlos_Jefe_Operativo/Images/QR.webp" QrD="/Manager/JuanCarlos_Jefe_Operativo/Images/TajetaDigitalJuanCarlos.png"/>
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
    title: 'Juan Carlos Sanches',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Esta es la tarjeta digital de Juan Carlos Sanches'
      }
    ],
    
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/Manager/JuanCarlos_Jefe_Operativo/Images/foto.ico' }]
  }
}
</script>
