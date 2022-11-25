<template>
    <v-container fluid >
        <v-row  justify="center" align="center" class="posicion-contenedoresAnaPiña">
            <v-col cols="9" justify="center" align="center" >
                <v-row justify="center" align="top">
                    <v-col >
                        <a :href="Whatsapp" class="WhatsappAnaPiña"></a>
                        <p class="textosAnaPiña">Escríbeme</p>
                    </v-col>
                    <v-col >
                        <a :href="tel"  class="TelefonoAnaPiña"></a>
                        <p class="textosAnaPiña">Llámame</p>
                    </v-col>
                    <v-col >
                        <a class="GuardarAnaPiña mt-sm-1" :href="contacto" target="_blank"></a>
                        <p class="textosAnaPiña">Guardar mi contacto</p>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col >
                        <a class="EmailAnaPiña" :href="email" target="_blank"> </a>
                        <p class="textosAnaPiña">Envia un Email</p>
                    </v-col>
                    <v-col >
                        <a class="PagWebAnaPiña" :href="web" target="_blank"></a>
                        <p class="textosAnaPiña">Visita mi sitio Web</p>
                    </v-col>
                    <v-col >
                        <a class="CompartirAnaPiña" @click="compartir()" > </a >
                        <p class="textosAnaPiña">Comparte mi tarjeta</p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row> 
    </v-container>
</template>
<script>
export default {
    props:{
        Whatsapp:{
            type: String,
            required: true
        },
        tel:{
            type: String,
            required: true
        },
        contacto:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        },
        web:{
            type: String,
            required: true
        },
    },
    methods:{
        async compartir(){
            const url = {url: window.location.href}
            try {
                await navigator.share(url);
            } catch (err) {
                console.log({err})
            }
        }
    }
}
</script>