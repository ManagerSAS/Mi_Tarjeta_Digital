<template>
  <div style="font-family: 'Quicksand', sans-serif;">
    <RedesSociales Color="#10303B" ColorFloat="#fff"/>
    <Welcome Foto="/Manager/Karina_Jefe_Marketing/Images/foto.jpg"/>
    <Name Color="#10303B" nombre="Karina Villamil" cargo="Jefe Marketing"/>
    <CallToAction Color="#10303B" Whatsapp="https://api.whatsapp.com/send?phone=573003106787" tel="tel:+573003106787" contacto="/Manager/Karina_Jefe_Marketing/Contact/KarinaVillamil.vcf" email="mailto:marketing@agenciamanager.com" web="https://agenciamanager.com/" url="https://mitarjetadigital.co/Manager/Karina_Jefe_Marketing"/>
    <Services Color="#10303B" style="background-color: rgba(111, 111, 110, 0.2)" Whatsapp="https://api.whatsapp.com/send?phone=573003106787" TextBtn1="Contáctanos" :Sercvicios="SercviciosFotos"/>
    <Adicionales Color="#10303B" qr="/Manager/Karina_Jefe_Marketing/Images/QR.png" QrD="/Manager/Karina_Jefe_Marketing/Images/QR.png"/>
    <Footer Color="#10303B"/>
  </div>
</template>

<script>
import Welcome from '~/components/Manager/Welcome.vue';
import Name from '~/components/Content/NameOne.vue';
import CallToAction from '~/components/Content/CallToAction.vue';
import Services from '~/components/Content/ServicesOne.vue';
import Adicionales from '~/components/Content/Adicionales.vue';
import Footer from '~/components/Content/Footer.vue';
import RedesSociales from '~/components/Content/RedesSociales3Btn.vue';
export default {
  data(){
      return{
        SercviciosFotos:[
            {src:'../../Manager/ImgStatics/Agencia.png'},
            {src:'../../Manager/ImgStatics/Desarrollo-Web.png'},
            {src:'../../Manager/ImgStatics/Diseno-Grafico.png'},
            {src:'../../Manager/ImgStatics/Estratega-Digital.png'},
        ],
      }
    },
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
