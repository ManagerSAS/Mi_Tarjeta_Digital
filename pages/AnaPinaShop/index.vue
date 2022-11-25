<template>
    <div >
      <RedesSociales Color="#977124" ColorFloat="#fff"/>
      <Welcome Foto="/AnaPinaShop/foto.png" />
      <Name nombre="Ana Piña" cargo="Dueña" src="/AnaPinaShop/name.png"/>
      <CallToAction Color="#977124" Whatsapp="https://api.whatsapp.com/send?phone=573102386404" tel="tel:+573102386404" contacto="/AnaPinaShop/Contacto/AnaPina.vcf" email="mailto:anapinaclothing@gmail.com" web="https://anapinashop.com/" url="https://mitarjetadigital.co/AnaPinaShop" />
      <Services Color="#977124" style="background-color: rgba(137 ,143 ,100,.3)" Brochure="/AnaPinaShop/Brochure/Brochure.pdf" Whatsapp="https://api.whatsapp.com/send?phone=573102386404" TextBtn1="Contáctanos" TextBtn2="Descargar Brochure" :Sercvicios="SercviciosFotos"/>
      <Adicionales Color="#977124" qr="/AnaPinaShop/QR.png" QrD="/AnaPinaShop/QR.png"/>
      <Footer Color="#977124"/>
    </div>
  </template>
  
  <script>
  import Welcome from '~/components/AnaPinaShop/Welcome.vue';
  import Name from '~/components/Content/NameTwo.vue';
  import CallToAction from '~/components/Content/CallToAction.vue';
  import Services from '~/components/Content/ServicesTwo.vue';
  import Adicionales from '~/components/Content/Adicionales.vue';
  import Footer from '~/components/Content/Footer.vue';
  import RedesSociales from '~/components/Content/RedesSociales2Btn.vue';
  export default {
      data(){
        return{
          SercviciosFotos:[
            {src:'../../AnaPinaShop/Gallery/digital_nueva_coleccion.jpg'},
            {src:'../../AnaPinaShop/Gallery/digital_blusas.jpg'},
            {src:'../../AnaPinaShop/Gallery/digital_faldas.jpg'},
            {src:'../../AnaPinaShop/Gallery/digital_vestidos.jpg'},
            {src:'../../AnaPinaShop/Gallery/digital_sets.jpg'},
          ],
        }
      },
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
  