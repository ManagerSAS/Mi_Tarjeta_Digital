<template>
    <v-container fluid id="Tarjeta">
        <div justify="center" align="center">
            <div class="text-border mt-5">TARJETA</div>
            <div class="text-sobre-puesto">SIN CONTACTO</div>
            <div class="text-blue-f-1em mt-10">¡El futuro es ahora! Con la tecnología NFC cada usuario podrá tener una tarjeta física para realizar cualquier acercamiento.</div>
        </div>
        <v-row justify="center" align="center">
            <v-col cols="12" xl="5" lg="5" md="5" sm="10" justify="center" align="center" >
                <nuxt-img  class="imgPresent" format="webp"  sizes="sm:100vw md:50vw lg:400px" loading="lazy" placeholder="/MiTarjetaDigital/Images/tarjetaContacto.webp"  quality="70" fit="cover" src="/MiTarjetaDigital/Images/tarjetaContacto.webp" alt="Adquiere tarjeta sin contacto" srcset=""></nuxt-img>
            </v-col>
            <v-col cols="12" xl="5" lg="5" md="5" sm="10" justify="center" align="start">
                <p class="text-blue-f-2em">Ahora la tarjeta de presentacion.</p>
                <p class="text-blue-f-4em">es virtual.</p>
                <div class="list ml-xl-15 ml-lg-15 mt-xl-15 mt-lg-15 mt-md-10">
                    <p><v-icon color="green">mdi-check-circle</v-icon>Código QR para lectura del micrositio.</p>
                    <p><v-icon color="green">mdi-check-circle</v-icon>Chip NFC de acercamiento</p>
                    <p><v-icon color="green">mdi-check-circle</v-icon>Compatible con Andriod y iPhone 7 en adelante</p>
                    <p><v-icon color="green">mdi-check-circle</v-icon>Este producto puede ser opcional</p>
                </div>
                <a href="https://api.whatsapp.com/send?phone=573242892413&text=!Hola!%2C%20Quiero%20adquirir%20mi%20tarjeta%20digital" target="_blanck"><button aria-label="Adquiere tu tarjeta digital" aria-hidden="true" class="mt-lg-10 mr-md-10 mt-md-10 mr-lg-10 mb-2 btnContac btn-hover-advantage ">CONTÁCTANOS</button></a>
            </v-col>
        </v-row>
    </v-container>
</template>