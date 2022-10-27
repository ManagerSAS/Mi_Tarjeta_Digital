<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.333685513264!2d-74.19955298466418!3d11.236845353597502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f5747d7da241%3A0x66df09f09a857b0f!2sCl.%2022%20%2317A-82%2C%20Santa%20Marta%2C%20Magdalena!5e0!3m2!1ses!2sco!4v1666390384125!5m2!1ses!2sco" width="95%" height="300" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" >
            <v-col justify="center" align="center">
                <img class="d-block d-sm-block d-md-none" src="/LosOlivosSantaMarta/Diego_Morales_Gerente/Images/QR.jpg"  width="100%" alt="qr manager">
                <img class="d-none d-lg-block d-xl-none" src="/LosOlivosSantaMarta/Diego_Morales_Gerente/Images/QR.jpg" width="500px" height="300px" alt="qr manager">
                <img class="d-none d-md-block d-lg-none" src="/LosOlivosSantaMarta/Diego_Morales_Gerente/Images/QR.jpg" width="500px" height="300px" alt="qr manager">
                <img class="d-none d-xl-block " src="/LosOlivosSantaMarta/Diego_Morales_Gerente/Images/QR.jpg" width="500px" height="300px" alt="qr manager">
            </v-col>
        </v-row>
        <v-row justify="center" align="center"> 
            <v-col cols="6" justify="center" align="center">
                <v-btn
                    download="TarjetaDiegoMorales_LosOlivos.jpg"
                    height="25px"
                    rounded
                    class="text-capitalize "
                    style="background: linear-gradient(to right, #EFC45B 0%, #EE943A 100%); color: white; font-size: 12px;font-weight: bold; font-family: 'Raleway', sans-serif;"
                    href="/LosOlivosSantaMarta/Diego_Morales_Gerente/Images/QRDowload.jpg"
                    target="_blank"
                    >
                    <v-icon class="mr-1">mdi-cloud-download-outline</v-icon>  Descargar QR
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>