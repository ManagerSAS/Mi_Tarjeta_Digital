<template>
    <div class="intro-slider">
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" >
                <VueSlickCarousel v-bind="settings"  justify="center" align="center">
                    <div justify="center" align="center" v-for="(banner, index) in sliderData" :key="index" >
                        <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url(${banner.bgImgSrc})` }">

                        </div>
                    </div>
                </VueSlickCarousel>
            </v-col>
        </v-row>

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
                    id: 1,
                    heading: "Designing awesome brands & experiences",
                    text: "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
                    bgImgSrc: "https://coworkingfy.com/wp-content/uploads/2019/11/trabajo-en-equipo-grupo-figurativo-de-equipo-de-trabajo.jpg"
                },
                {
                    id: 2,
                    heading: "Designing awesome brands & experiences",
                    text: "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
                    bgImgSrc: "https://coworkingfy.com/wp-content/uploads/2019/11/trabajo-en-equipo-grupo-figurativo-de-equipo-de-trabajo.jpg"
                }
            ],
            settings  :{
                "dots": false,
                "autoplay": true,
                "infinite": true,
                "autoplaySpeed": 4000,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "responsive": [
                    {
                    "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "infinite": true,
                            "dots": false
                        }
                    },
                    {
                    "breakpoint": 414,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                    "breakpoint": 720,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": false
                        }
                    }
                ]
            },            
        }
     }
  }
</script>