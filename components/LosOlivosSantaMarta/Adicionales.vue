<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.333685513264!2d-74.19955298466418!3d11.236845353597502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f5747d7da241%3A0x66df09f09a857b0f!2sCl.%2022%20%2317A-82%2C%20Santa%20Marta%2C%20Magdalena!5e0!3m2!1ses!2sco!4v1666390384125!5m2!1ses!2sco" width="95%" height="300" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </v-col>
        </v-row>
        <div justify="center" align="center" class="pa-2">
            <img class="d-block d-sm-block d-md-none" :src="Qr"  width="82.5%" alt="qr  Los Olivos Santa Marta">
            <img class="d-none d-lg-block d-xl-none" :src="Qr" width="500px"  alt="qr Los Olivos Santa Marta">
            <img class="d-none d-md-block d-lg-none" :src="Qr" width="500px"  alt="qr Los Olivos Santa Marta">
            <img class="d-none d-xl-block " :src="Qr" width="500px"  alt="qr Los Olivos Santa Marta">
        </div>
        <div justify="center" align="center"> 
            <v-btn
                download="TarjetaDigital.jpg"
                height="25px"
                rounded
                class="text-capitalize ma-3"
                style="background: linear-gradient(to right, #EFC45B 0%, #EE943A 100%); color: white; font-size: 12px;font-weight: bold; font-family:'Raleway', sans-serif;"
                :href="QrD"
                target="_blank"
                >
                <v-icon class="mr-1">mdi-cloud-download-outline</v-icon>  Descargar QR
            </v-btn>
        </div>
    </v-container>
</template>
<script>
export default {
    props:{
        Qr:{
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