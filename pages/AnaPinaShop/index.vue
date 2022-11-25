<template>
    <div >
      <RedesSociales/>
      <Welcome Foto="/AnaPinaShop/foto.png"/>
      <Name nombre="Ana Piña" cargo="Dueña"/>
      <CallToAction Whatsapp="https://api.whatsapp.com/send?phone=573102386404" tel="tel:+573102386404" contacto="/AnaPinaShop/Contact/AnaPiña.vcf" email="mailto:abelinho26@gmail.com" web="https://anapinashop.com/" url="https://mitarjetadigital.co/AnaPinaShop"/>
      <Services style="background-color: rgba(137 ,143 ,100,.3)" Brochure="/AnaPinaShop/Brochure/Brochure.pdf" Whatsapp="https://api.whatsapp.com/send?phone=573102386404"/>
      <Adicionales qr="/AnaPinaShop/QR.jpg" QrD="/AnaPinaShop/TajetaDigital.png"/>
      <Footer/>
    </div>
  </template>
  
  <script>
  import Welcome from '~/components/AnaPinaShop/Welcome.vue';
  import Name from '~/components/AnaPinaShop/Name.vue';
  import CallToAction from '~/components/AnaPinaShop/CallToAction.vue';
  import Services from '~/components/AnaPinaShop/Services.vue';
  import Adicionales from '~/components/AnaPinaShop/Adicionales.vue';
  import Footer from '~/components/AnaPinaShop/Footer.vue';
  import RedesSociales from '~/components/AnaPinaShop/RedesSociales.vue';
  export default {
      components: { Welcome, Name, CallToAction, Services, Adicionales, Footer, RedesSociales },
      head: {
      title: 'Ana Piña',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Esta es la tarjeta digital de Ana Piña'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/AnaPinaShop/foto.ico' }]
    }
  }
  </script>
  