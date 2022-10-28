<template>
    <v-container fluid id="Tarjeta">
        <div justify="center" align="center">
            <p class="text-border mt-5">TARJETA</p>
            <p class="text-sobre-puesto">SIN CONTACTO</p>
        </div>
        <v-row justify="center" align="center">
             <v-col cols="12" lg="6" xl="6" md="6" sm="11" justify="center" align="center">
                  <p class="text-blue-f-1em">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
             </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="12" xl="5" lg="5" md="5" sm="10" justify="center" align="center" >
                <nuxt-img  class="imgPresent" format="webp"  sizes="sm:100vw md:50vw lg:400px" loading="lazy" placeholder="/MiTarjetaDigital/Images/tarjetaContacto.webp"  quality="70" fit="cover" src="/MiTarjetaDigital/Images/tarjetaContacto.webp" alt="Adquiere tarjeta sin contacto" srcset=""></nuxt-img>
            </v-col>
            <v-col cols="12" xl="5" lg="5" md="5" sm="10" justify="center" align="start">
                <p class="text-blue-f-2em">Ahora la tarjeta de presentacion.</p>
                <p class="text-blue-f-4em">es virtual.</p>
                <div class="list ml-xl-15 ml-lg-15 mt-xl-15 mt-lg-15">
                    <p><v-icon color="green">mdi-check-circle</v-icon>¡El futuro es ahora! Con la tecnología NFC cada usuario podrá tener una tarjeta física para realizar cualquier acercamiento.</p>
                    <p><v-icon color="green">mdi-check-circle</v-icon>Código QR para lectura del micrositio.</p>
                    <p><v-icon color="green">mdi-check-circle</v-icon>Chip NFC de acercamiento</p>
                    <p><v-icon color="green">mdi-check-circle</v-icon>Compatible con Andriod y iPhone 7 en adelante</p>
                    <p><v-icon color="green">mdi-check-circle</v-icon>Este producto puede ser opcional</p>
                </div>
                <button aria-label="Adquiere tu tarjeta digital" aria-hidden="true" to="/" class="mt-lg-10 mr-md-10 mt-md-10 mr-lg-10 mb-2 btnContac btn-hover-advantage ">CONTÁCTANOS</button>
            </v-col>
        </v-row>
    </v-container>
</template>