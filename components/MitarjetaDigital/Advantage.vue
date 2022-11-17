<template>
    <v-container fluid id="Advantage">
        <div justify="start" align="center">
            <div class="text-border-ventajas">VENTAJAS DE USAR</div>
            <div class="text-mitarjeta">MITARJETADIGITAL.CO</div>
        </div>
        <v-row justify="center" align="center">
            <v-col justify="start" align="center" cols="12" xl="4"  md="5" sm="11">
                <div justify="center" align="start" class="contenedorPresent mt-5">
                    <p class="text-blue-f-2em">Ahora la tarjeta de presentacion.</p>
                    <p class="text-blue-f-4em">es virtual.</p>
                </div><br>
                <div  class="list" justify="center" align="start">
                    <p><v-icon color="green">mdi-check-circle</v-icon>Marca la diferencia en el mercado.</p>
                    <p><v-icon color="green">mdi-check-circle</v-icon>Brinda seguridad y confianza.</p>
                    <p><v-icon color="green">mdi-check-circle</v-icon>Integra toda tu información.</p>
                    <p><v-icon color="green">mdi-check-circle</v-icon>Actualiza perfiles.</p>
                    <p><v-icon color="green">mdi-check-circle</v-icon>Diles adiós a las tarjetas tradicionales.</p>
                </div>
                <div justify="center" align="start">
                    <p class="text-blue-f-2em mt-5 mt-lg-5">A un touch puedes tenerlo TODO.</p> 
                    <p class="text-blue-f-4em">¡Actualízate!</p>
                </div>
            </v-col>
            <v-col  justify="center" align="center" cols="12" xl="6" lg="5" md="5" sm="9">
                <nuxt-img format="webp" loading="lazy" placeholder="/MiTarjetaDigital/Images/ventajas].png" quality="70" fit="cover" class="imgventajas" src="/MiTarjetaDigital/Images/ventajas].png" alt="Ventajas de usar mitarjetadigital.co"></nuxt-img>
                <div justify="center" align="center">
                    <a href="https://api.whatsapp.com/send?phone=573242892413&text=!Hola!%2C%20Quiero%20adquirir%20mi%20tarjeta%20digital" target="_blanck"><button aria-label="Adquiere tu tarjeta digital" aria-hidden="true" class="rounded-pill btnVentajas btn-hover-advantage  pa-2">¡ADQUIERE LA TUYA!</button></a>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>