<template>
    <div class="intro-slider">
        <VueSlickCarousel v-bind="settings" :arrows="false"  justify="center" align="center">
            <div  v-for="(banner, index) in sliderData" :key="index" >
                <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url(${banner.bgImgSrc})` }">
                    <div class="container">
                        <v-row justify="center" align="center">
                            <v-col  justify="center" align="start">
                                <div class="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                                    <p class="mb-2 titulo" ><strong style="font-weight: bold;">{{banner.text1}}</strong><span style="font-weight: 100;">{{banner.text2}}</span></p>
                                    <div class="desc">
                                        <p>{{banner.text}}</p>
                                    </div>
                                    <div class="desc2">
                                        <p style="font-weight: 500">{{banner.desc}}</p>
                                    </div>
                                    <a style="text-decoration: none;" href="https://api.whatsapp.com/send?phone=573242892413&text=!Hola!%2C%20Quiero%20adquirir%20mi%20tarjeta%20digital" target="_blanck"><button  aria-label="Adquiere tu tarjeta digital" aria-hidden="true"  class="ml-lg-15 mt-lg-15 btn-hover pa-1 pl-2 pr-2">¡ADQUIERE LA TUYA!</button></a>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </div>
        </VueSlickCarousel> 
    </div>
</template>
<style>
.slick-dots {
  background-color: transparent;
  position: relative;
  bottom: 4em;
}
.slick-dots button:before {
  color: white; 
  opacity: .25; 
  background-color: transparent; 
  content: "•"; 
  font-size: 20px; 
}
.slick-dots .slick-active button:before {
     color: white;
     opacity: 1;
     font-size: 20px;
}
</style>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
     components: { VueSlickCarousel },
     data(){
        return{
            sliderData: [
                {
                    text1:'MITARJETA',
                    text2:'DIGITAL.CO',
                    text: "Tarjeta de presentación digital para empresas y profesionales",
                    desc: "Promociona la digitalización inclusiva y ayuda a todos tus empleados facilitando su networking",
                    bgImgSrc: "/MiTarjetaDigital/Images/BANNER-1.png",
                },
                {
                    text2:'Sin papel, sin impresiones, sin complicaciones',
                    text: "Aquí lo tienes todo",
                    desc: "Tarjetas digitales para tu empresa",
                    bgImgSrc: "/MiTarjetaDigital/Images/BANNER-2.png",
                },
                {
                    text2:'CONECTA CON TUS CLIENTES',
                    text: "CON LA TARJETA DIGITAL",
                    bgImgSrc: "/MiTarjetaDigital/Images/BANNER-3.png",
                }
            ],
            settings  :{
                "dots": true,
                "autoplay": true,
                "infinite": true,
                "autoplaySpeed": 4000,
                "slidesToShow": 1,
                "slidesToScroll": 1,
            },            
        }
     }
  }
</script>