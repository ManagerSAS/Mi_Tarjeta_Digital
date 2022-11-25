<template>
    <v-container fluid class="posicion-contenedores">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">
                <h3 class="font-service" :style="{color:Color}">Servicios</h3>
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
        <v-row justify="center" align="center">
            <v-col cols="12" lg="2" md="2" sm="12" justify="center" align="center" >
                <v-btn
                    width="200px"
                    class="mb-2 mt-2"
                    :style="{backgroundColor:Color, Color: 'white', fontSize: '12px',fontWeight: 'bold'}"
                    :href="Whatsapp"
                    target="_blank"
                    >
                    {{TextBtn1}}
                </v-btn>
            </v-col>
            <v-col cols="12" lg="2" md="2" sm="12" justify="center" align="center" >
                <v-btn
                    width="200px"
                    class="mb-2 mt-lg-2 mt-md-2"
                    :style="{backgroundColor:Color, Color:'white', fontSize: '12px',fontWeight: 'bold'}"
                    :href="Brochure"
                    target="_blank"
                    >
                    {{TextBtn2}}
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
        Brochure:{
            type: String,
            required: true
        },
        Color:{
            type: String,
            required: true
        },
        TextBtn1:{
            type: String,
            required: true
        },
        TextBtn2:{
            type: String,
            required: true
        },
        Sercvicios:{
            type: Array,
            required: true,
        }
    },
    components: { VueSlickCarousel },
    
    data(){
        return{
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