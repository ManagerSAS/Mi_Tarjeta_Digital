<template>
    <v-container fluid id="Tarjeta">
        <div justify="center" align="center" >
            <div class="text-border mt-5">TARJETA</div>
            <div class="text-sobre-puesto">SIN CONTACTO</div>
            <div class="text-blue-f-1em mt-10 containerContact pa-3" >
                ¡El futuro es ahora! Con la tecnología NFC cada usuario podrá tener una tarjeta 
                física para realizar cualquier acercamiento
            </div>
        </div>
        <v-row justify="center" align="center">
            <v-col cols="12" xl="5" lg="5" md="5" sm="10" justify="center" align="center" >
                <v-img width="80%" class="imgPresent" src="/MiTarjetaDigital/Images/tarjetaContacto.png" alt="Adquiere tarjeta sin contacto" srcset=""></v-img>
            </v-col>
            <v-col cols="12" xl="5" lg="5" md="5" sm="10" justify="center" align="start">
                <div class="list">
                    <p><v-icon color="green">mdi-check-circle</v-icon>Código QR para lectura del micrositio.</p>
                    <p><v-icon color="green">mdi-check-circle</v-icon>Chip NFC de acercamiento</p>
                    <p><v-icon color="green">mdi-check-circle</v-icon>Compatible con Andriod y iPhone 7 en adelante</p>
                    <p><v-icon color="green">mdi-check-circle</v-icon>Este producto puede ser opcional</p>
                    <br><br>
                    <div justify="center" align="center">
                        <a href="https://api.whatsapp.com/send?phone=573242892413&text=¡Hola!%2C%20Quiero%20adquirir%20mi%20tarjeta%20digital" target="_blanck"><button aria-label="Adquiere tu tarjeta digital" aria-hidden="true" class="rounded-pill mb-2 pa-2 btnContac pl-10 pr-10 pa-1  btn-hover-advantage">Contáctanos</button></a>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>