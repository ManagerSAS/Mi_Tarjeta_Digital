<template>
    <div class="intro-slider">
        <VueSlickCarousel v-bind="settings" :arrows="false"  justify="center" align="center">
            <div  v-for="(banner, index) in sliderData" :key="index" >
                <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url(${banner.bgImgSrc})` }">
                    <div class="container">
                        <v-row justify="center" align="center">
                            <v-col  justify="center" align="start">
                                <div class="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                                    <p class="mb-2 titulo" ><strong style="font-weight: bold;">MITARJETA</strong><span style="font-weight: 100;">DIGITAL.CO</span></p>
                                    <div class="desc">
                                        <p>{{banner.text}}</p>
                                    </div>
                                    <div class="desc2">
                                        <p style="font-weight: 500">{{banner.desc}}</p>
                                    </div>
                                    <button aria-label="Adquiere tu tarjeta digital" aria-hidden="true" to="/" class="ml-lg-15 mt-lg-15 btn-hover pa-1 pl-2 pr-2">¡ADQUIERE LA TUYA!</button>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </div>
                </div>
        </VueSlickCarousel>
    </div>
</template>
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
                    text: "Tarjeta de presentación digital para empresas y profesionales",
                    desc: "Promociona la digitalización inclusiva y ayuda a todos tus empleados facilitando su networking",
                    bgImgSrc: "/MiTarjetaDigital/Images/BANNER1.png"

                },
                {
                    bgImgSrc: "/MiTarjetaDigital/Images/BANNER2.png"
                },
                {
                    text: "Tarjeta de presentación digital para empresas y profesionales",
                    desc: "Promociona la digitalización inclusiva y ayuda a todos tus empleados facilitando su networking",
                    bgImgSrc: "/MiTarjetaDigital/Images/BANNER3.png"
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