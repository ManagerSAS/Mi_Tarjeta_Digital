<template>
    <v-container fluid class="posicion-contenedores">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">.
                <h3 class="font-service">Servicios</h3>
                <p style="font-family: 'Montserrat', sans-serif; font-size:14px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam Lorem ipsum, Quisquam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam</p>
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
                    href="https://api.whatsapp.com/send?phone=573155804703&text=Hola%20%F0%9F%96%90%EF%B8%8F%2C%20necesito%20asesoria%20online%20de%20Emcoofun%20Los%20Olivos%20por%20favor%20%F0%9F%99%8F%F0%9F%98%80"
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
     components: { VueSlickCarousel },
     data(){
        return{
            Sercvicios:[
                  {src:'Images/Agencia.webp'},
                  {src:'Images/Desarrollo-Web.webp'},
                  {src:'Images/Diseno-Grafico.webp'},
                  {src:'Images/Estratega-Digital.webp'},
              ],
            settings  :{
                "autoplay": true,
                "focusOnSelect": true,
                "infinite": true,
                "autoplaySpeed": 4000,
                "slidesToShow": 4,
                "slidesToScroll": 2,
                "responsive": [
                    {
                    "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "infinite": true,
                            "dots": true
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
                            "dots": true
                        }
                    }
                ]
            },
        }   
    },
  }
</script>