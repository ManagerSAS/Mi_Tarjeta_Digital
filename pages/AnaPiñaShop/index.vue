<template>
    <div >
      <RedesSociales/>
      <Welcome Foto="/AnaPiñaShop/foto.png"/>
      <Name nombre="Ana Piña" cargo="Dueña"/>
      <CallToAction Whatsapp="https://api.whatsapp.com/send?phone=573102386404" tel="tel:+573102386404" contacto="/AnaPiñaShop/Contact/AnaPiña.vcf" email="mailto:abelinho26@gmail.com" web="https://anapinashop.com/" url="https://mitarjetadigital.co/AnaPiñaShop"/>
      <Services style="background-color: rgba(137 ,143 ,100,.3)" Brochure="/AnaPiñaShop/Brochure/Brochure.pdf" Whatsapp="https://api.whatsapp.com/send?phone=573102386404"/>
      <Adicionales qr="/AnaPiñaShop/QR.jpg" QrD="/AnaPiñaShop/TajetaDigital.png"/>
      <Footer/>
    </div>
  </template>
  
  <script>
  import Welcome from '~/components/AnaPiñaShop/Welcome.vue';
  import Name from '~/components/AnaPiñaShop/Name.vue';
  import CallToAction from '~/components/AnaPiñaShop/CallToAction.vue';
  import Services from '~/components/AnaPiñaShop/Services.vue';
  import Adicionales from '~/components/AnaPiñaShop/Adicionales.vue';
  import Footer from '~/components/AnaPiñaShop/Footer.vue';
  import RedesSociales from '~/components/AnaPiñaShop/RedesSociales.vue';
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
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/AnaPiñaShop/foto.ico' }]
    }
  }
  </script>
  