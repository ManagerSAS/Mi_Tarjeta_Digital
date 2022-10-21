<template>
    <v-container fluid >
        <v-row justify="center" align="center">
            <v-col cols="12"  justify="center" align="center">
                <div style="font-size: 1.5em;  line-height : 20px;  font-weight: 700;" class="font-service font-weight-black">Planes Exequiales </div>
                <div style="font-size: 1.5em;  line-height : 20px;  font-weight: 700;" class="font-service mb-2 font-weight-black">y Asistencias</div>
                <p style="font-size: 0.8em">Queremos protegerte y acompañarte en cada momento, por eso y pensando en tu bienestar y en el de los que amas hemos diseñados gran variedad de productos que se ajustan a tus necesidades.</p>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="10" sm="12" md="8" lg="8" xl="8">
                <VueSlickCarousel v-bind="settings"  justify="center" align="center">
                    <div justify="center" align="center" v-for="({src},index) in Servicios"
                    :key="index" >
                        <img :lazy-src="src" :src="src" width="95%">
                    </div>
                </VueSlickCarousel>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" >
            <v-col cols="5" justify="center" align="center" >
                <v-btn
                    width="125px"
                    height="20px"
                    rounded
                    class="text-capitalize"
                    style="background: linear-gradient(to right, #EFC45B 0%, #EE943A 100%); color: white; font-size: 12px;font-weight: bold; font-family: 'Raleway', sans-serif;"
                    href="https://api.whatsapp.com/send?phone=573242892413"
                    target="_blank"
                    >
                    Ver planes
                </v-btn>
            </v-col>
            <v-col cols="5" justify="center" align="center" >
                <v-btn
                    width="125px"
                    height="20px"
                    rounded
                    class="text-capitalize"
                    style=" background: linear-gradient(to right, #EFC45B 0%, #EE943A 100%); color: white; font-size: 12px;font-weight: bold; font-family: Raleway, sans-serif;"
                    href="https://api.whatsapp.com/send?phone=573242892413"
                    target="_blank"
                    >
                    Ver asistencias
                </v-btn>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="10" sm="12" md="8" lg="8" xl="8">
                <h1 style="font-size: 1.5em;  line-height : 20px;  font-weight: 700;" class="font-service mb-2 font-weight-black ">
                    Salas de Homenajes
                </h1>
                <VueSlickCarousel v-bind="settingsSalas"  justify="center" align="center">
                    <div justify="center" align="center" v-for="({src},index) in Salas"
                    :key="index" >
                        <img :lazy-src="src" :src="src" width="95%">
                    </div>
                </VueSlickCarousel>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="5" justify="center" align="center" >
                <v-btn
                    width="130px"
                    height="30px"
                    rounded
                    style=" background: linear-gradient(to right, #EFC45B 0%, #EE943A 100%); color: white; font-size: 12px;font-weight: bold; font-family: Raleway, sans-serif;"
                    href="https://api.whatsapp.com/send?phone=573242892413"
                    target="_blank"
                    >
                    Contáctanos
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
     components: { VueSlickCarousel },
     data(){
        return{
            Servicios:[
                {src:'Images/service1.png'},
                {src:'Images/service2.png'},
                {src:'Images/service1.png'},
                {src:'Images/service2.png'},
            ],
            Salas:[
                {src:'Images/Sala1.jpeg'},
                {src:'Images/Sala2.jpeg'},
                {src:'Images/Sala3.jpeg'},
                {src:'Images/Sala4.jpeg'},
                {src:'Images/Sala5.jpeg'},
            ],
            settingsSalas  :{
                "dots": false,
                "autoplay": true,
                "focusOnSelect": true,
                "infinite": true,
                "autoplaySpeed": 4000,
                "slidesToShow": 2,
                "slidesToScroll": 2,
                prevArrow: '<button class="slick-prev"></button>',
                nextArrow: '<button class="slick-next"></button>',
                "responsive": [
                    {
                    "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 1,
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
                            "dots": false
                        }
                    },
                    {
                    "breakpoint": 720,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": false
                        }
                    }
                ]
            },
            settings  :{
                "dots": false,
                "autoplay": true,
                "focusOnSelect": true,
                "infinite": true,
                "autoplaySpeed": 4000,
                "slidesToShow": 4,
                "slidesToScroll": 2,
                prevArrow: '<button class="slick-prev"></button>',
                nextArrow: '<button class="slick-next"></button>',
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
                            "slidesToShow": 2,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                    "breakpoint": 720,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": false
                        }
                    }
                ]
            },
        }   
    },
  }
</script>