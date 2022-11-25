<template>
    <v-container fluid >
        <v-row  justify="center" align="center" class="posicion-contenedoresAnaPina">
            <v-col cols="9" justify="center" align="center" >
                <v-row justify="center" align="top">
                    <v-col >
                        <a :href="Whatsapp" class="WhatsappAnaPina"></a>
                        <p class="textosAnaPina">Escríbeme</p>
                    </v-col>
                    <v-col >
                        <a :href="tel"  class="TelefonoAnaPina"></a>
                        <p class="textosAnaPina">Llámame</p>
                    </v-col>
                    <v-col >
                        <a class="GuardarAnaPina mt-sm-1" :href="contacto" target="_blank"></a>
                        <p class="textosAnaPina">Guardar mi contacto</p>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col >
                        <a class="EmailAnaPina" :href="email" target="_blank"> </a>
                        <p class="textosAnaPina">Envia un Email</p>
                    </v-col>
                    <v-col >
                        <a class="PagWebAnaPina" :href="web" target="_blank"></a>
                        <p class="textosAnaPina">Visita mi sitio Web</p>
                    </v-col>
                    <v-col >
                        <a class="CompartirAnaPina" @click="compartir()" > </a >
                        <p class="textosAnaPina">Comparte mi tarjeta</p>
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