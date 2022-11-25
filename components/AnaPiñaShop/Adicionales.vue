<template>
    <v-container fluid class="posicion-contenedoresAnaPiña">
        <v-row justify="center" align="center" >
            <v-col justify="center" align="center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.4234384421325!2d-73.64482458529237!3d4.136806296992219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2e0605bad0d9%3A0xab65bccf6f4cd642!2sCra.%2043%20%2315-101%2C%20Villavicencio%2C%20Meta!5e0!3m2!1ses!2sco!4v1669339033540!5m2!1ses!2sco" width="95%" height="300" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" >
            <v-col justify="center" align="center">
                <img class="d-block d-sm-block d-md-none" :src="qr"  width="100%" alt="qr manager">
                <img class="d-none d-lg-block d-xl-none" :src="qr" width="500px" height="300px" alt="qr manager">
                <img class="d-none d-md-block d-lg-none" :src="qr" width="500px" height="300px" alt="qr manager">
                <img class="d-none d-xl-block " :src="qr" width="500px" height="300px" alt="qr manager">
            </v-col>
        </v-row>
        <v-row justify="center" align="center"> 
            <v-col cols="6" justify="center" align="center">
                <v-btn
                    download="TajetaDigital.png"
                    height="25px"
                    rounded
                    class="text-capitalize "
                    style="background-color: #977124; color: white; font-size: 12px;font-weight: bold; font-family: 'Quicksand', sans-serif;"
                    :href="QrD"
                    target="_blank"
                    >
                    <v-icon class="mr-1">mdi-cloud-download-outline</v-icon>  Descargar QR
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template> 
<script>
export default {
    props:{
        qr:{
            type: String,
            required: true
        },
        QrD:{
            type: String,
            required: true
        },
    }
}
</script>