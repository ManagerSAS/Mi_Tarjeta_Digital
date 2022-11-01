<template>
    <v-container fluid id="Advantage">
        <div justify="center" align="center">
            <div class="text-border mt-2">VENTAJAS DE USAR</div>
            <div class="text-sobre-puesto">MITARJETADIGITAL.CO</div>
        </div>
        <v-row justify="center" align="center">
            <v-col justify="start" align="start" cols="12" xl="5" lg="5" md="5" sm="11">
                <p class="text-blue-f-2em mt-10 mt-lg-0">Ahora la tarjeta de presentacion.</p>
                <p class="text-blue-f-4em">es virtual.</p>
                <v-row  class="list  mt-10">
                    <v-col cols="12" xl="10" lg="6" md="6" sm="11" justify="center" align="start">
                        <p><v-icon color="green">mdi-check-circle</v-icon>Marca la diferencia en el mercado.</p>
                        <p><v-icon color="green">mdi-check-circle</v-icon>Brinda seguridad y confianza.</p>
                        <p><v-icon color="green">mdi-check-circle</v-icon>Integra toda tu información.</p>
                        <p><v-icon color="green">mdi-check-circle</v-icon>Actualiza perfiles.</p>
                        <p><v-icon color="green">mdi-check-circle</v-icon>Diles adiós a las tarjetas tradicionales.</p>
                    </v-col>
                </v-row>
                <p class="text-blue-f-1em mt-10 mt-lg-15">A un touch puedes tenerlo TODO. ¡Actualízate!</p>
            </v-col>
            <v-col  justify="center" align="center" cols="12" xl="5" lg="5" md="5" sm="9">
                <nuxt-img format="webp" loading="lazy" placeholder="/MiTarjetaDigital/Images/ventajas].webp"  quality="70" fit="cover" class="imgventajas" src="/MiTarjetaDigital/Images/ventajas].webp" alt="Ventajas de usar mitarjetadigital.co"></nuxt-img>
                <a href="https://api.whatsapp.com/send?phone=573242892413&text=!Hola!%2C%20Quiero%20adquirir%20mi%20tarjeta%20digital" target="_blanck"><button aria-label="Adquiere tu tarjeta digital" aria-hidden="true"  class="btnVentajas btn-hover-advantage">¡ADQUIERE LA TUYA!</button></a>
            </v-col>
        </v-row>
    </v-container>
</template>