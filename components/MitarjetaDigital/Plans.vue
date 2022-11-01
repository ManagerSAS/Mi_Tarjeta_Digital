<template>
    <v-container fluid  id="Plans">
        <v-row justify="center" align="center">
             <v-col cols="12" sm="12" md="4" lg="3" justify="center" align="center">
                  <p class="text-sobre-puesto-white ">CONSIGUE LA TUYA</p>
                  <!-- <p class="text-sobre-puesto-white">NUESTROS PLANES</p> -->
             </v-col>
             <v-col cols="12" sm="12" md="4" lg="3" justify="center" align="center">
                <a href="https://api.whatsapp.com/send?phone=573242892413&text=!Hola!%2C%20Quiero%20adquirir%20mi%20tarjeta%20digital" target="_blanck"><button aria-label="Adquiere tu tarjeta digital" aria-hidden="true" to="/" class="mt-lg-10 btnVentajas btn-hover">AQUÍ</button></a>
             </v-col>
        </v-row>
        <!--<v-row justify="center" align="center" class="mb-10">
            <v-col justify="center" align="center" cols="12" sm="12" md="10" lg="8">
                <v-row justify="center" align="center">
                    <v-col cols="12" sm="3" md="4" lg="3" >
                        <v-card
                            class="rounded-xl tamcard mx-auto hover" 
                               
                        >
                        <v-img
                            format="webp" loading="lazy" placeholder="/MiTarjetaDigital/Images/Plan1.webp"  quality="80" fit="cover"
                            src="/MiTarjetaDigital/Images/Plan1.webp" alt="Fondo planes mitarjetadigital.com"
                            sizes="sm:100vw md:50vw lg:400px"
                        >
                            <div class="pa-6">
                                <p class="text-white-f-40">BASIC</p>
                                <v-divider style="background-color: white; width: 50%"></v-divider>
                                <p class="text-white-fw-50">$20</p>
                            </div>
                        </v-img>
                        <div class="ma-2 mb-2">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                            <div class="listPlan">
                                <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <v-btn aria-label="Adquiere tu tarjeta digital" to="/" rounded class="mb-2">COMPRAR</v-btn>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="3" md="4" lg="3">
                        <v-card
                            class="rounded-xl tamcard scale mx-auto hover"
                            alt="Fondo planes mitarjetadigital.com"
                        >
                            <v-img
                            format="webp" loading="lazy" placeholder="/MiTarjetaDigital/Images/Plan2.webp"  quality="80" fit="cover"
                            src="/MiTarjetaDigital/Images/Plan2.webp" alt="Fondo planes mitarjetadigital.com" sizes="sm:100vw md:50vw lg:400px"
                            >
                                <div class="ma-6">
                                    <p class="text-white-f-40">STANDARD</p>
                                    <v-divider style="background-color: white; width: 50%"></v-divider>
                                    <p class="text-white-fw-50">$50</p>
                                </div>
                            </v-img>
                            <div class="ma-2 mb-2">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                                <div class="listPlan">
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        <v-btn aria-label="Adquiere tu tarjeta digital" to="/" rounded class="mb-2">COMPRAR</v-btn>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="3" md="4" lg="3">
                        <v-card
                            class="rounded-xl tamcard mx-auto hover"
                        >
                            <v-img
                                format="webp" loading="lazy" placeholder="/MiTarjetaDigital/Images/Plan3.webp"  quality="80" fit="cover"
                                src="/MiTarjetaDigital/Images/Plan3.webp"
                                alt="Fondo planes mitarjetadigital.com"  sizes="sm:100vw md:50vw lg:400px"
                            >
                                <div class="ma-6">
                                    <p class="text-white-f-40">PREMIUM</p>
                                    <v-divider style="background-color: white; width: 50%"></v-divider>
                                    <p class="text-white-fw-50">$70</p>
                                </div>
                            </v-img>
                            <div class="ma-2 mb-2">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                                <div class="listPlan">
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <v-btn aria-label="Adquiere tu tarjeta digital" to="/" rounded class="mb-2">COMPRAR</v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row> -->
    </v-container>
</template>
<style lang="scss">
.hover:hover{
    scale: 110%;
    @media #{$tablet-device, $large-mobile}{
        z-index: 10;
        scale: 110%;
    }
}
</style>

