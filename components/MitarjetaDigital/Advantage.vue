<template>
    <v-container fluid id="Advantage">
        <div justify="center" align="center">
            <p class="text-border">VENTAJAS DE USAR</p>
            <p class="text-sobre-puesto">MITARJETADIGITAL.CO</p>
        </div>
        <v-row justify="center" align="center">
            <v-col justify="center" align="start" cols="12" xl="5" lg="5" md="5" sm="11">
                <p class="text-blue-f-2em">Ahora la tarjeta de presentacion.</p>
                <p class="text-blue-f-4em">es virtual.</p>
                <v-row  class="list  ma-1">
                    <v-col cols="12" xl="6" lg="6" md="6" sm="11" justify="center" align="start">
                        <p><v-icon color="green">mdi-check-circle</v-icon>Tu empresa marcará la diferencia en el mercado con tecnología y eficacia</p>
                        <p><v-icon color="green">mdi-check-circle</v-icon>Brindarás seguridad y credibilidad a tus clientes.</p>
                        <p><v-icon color="green">mdi-check-circle</v-icon>Tendrás un espacio integral con toda tu información a la mano.</p>
                        <p><v-icon color="green">mdi-check-circle</v-icon>Podrás actualizar el perfil las veces que sean necesarias.</p>
                        <p><v-icon color="green">mdi-check-circle</v-icon>¡No más impresiones de tarjeta tradicionales</p>
                    </v-col>
                </v-row>
                <p class="text-blue-f-1em mt-xl-15 mt-lg-15">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </v-col>
            <v-col justify="center" align="center" cols="12" xl="5" lg="5" md="5" sm="9">
                <nuxt-img format="webp" loading="lazy" placeholder="/MiTarjetaDigital/Images/ventajas].webp"  quality="70" fit="cover" class="imgventajas" src="/MiTarjetaDigital/Images/ventajas].webp" alt="Ventajas de usar mitarjetadigital.co"></nuxt-img>
                <button aria-label="Adquiere tu tarjeta digital" aria-hidden="true" to="/" class="btnVentajas btn-hover-advantage">¡ADQUIERE LA TUYA!</button>
            </v-col>
        </v-row>
    </v-container >
</template>