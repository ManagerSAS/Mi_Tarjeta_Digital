<template>
    <v-container fluid class="posicion-contenedores">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">
                <h3 class="font-service">Servicios</h3>
                <p style="font-family: 'Montserrat', sans-serif; font-size:14px">Somos un equipo de visionarios y queremos que tu marca tenga voz propia.</p>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="8" lg="8" xl="8">
                <VueSlickCarousel :arrows="false" v-bind="settings"  justify="center" align="center">
                    <div justify="center" align="center" v-for="({src},index) in Sercvicios"
                    :key="index" >
                        <img :lazy-src="src" :src="src" width="95%">
                    </div>
                </VueSlickCarousel>
            </v-col>
        </v-row>
        <v-row>
            <v-col justify="center" align="center" >
                <v-btn
                    width="150px"
                    class="mb-2 mt-2"
                    style="background: #0c2c3f;color:white; font-size: 12px;font-weight: bold; font-family: 'Quicksand', sans-serif;"
                    :href="Whatsapp"
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
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    props:{
        Whatsapp:{
            type: String,
            required: true
        },
    },
     components: { VueSlickCarousel },
     data(){
        return{
            Sercvicios:[
                  {src:'../../Manager/ImgStatics/Agencia.png'},
                  {src:'../../Manager/ImgStatics/Desarrollo-Web.png'},
                  {src:'../../Manager/ImgStatics/Diseno-Grafico.png'},
                  {src:'../../Manager/ImgStatics/Estratega-Digital.png'},
              ],
            settings  :{
                "autoplay": true,
                
                "infinite": true,
                "autoplaySpeed": 4000,
                "slidesToShow": 4,
                "slidesToScroll": 2,
                "responsive": [
                    {
                    "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": true
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
                            "dots": true
                        }
                    }
                ]
            },
        }   
    },
  }
</script>