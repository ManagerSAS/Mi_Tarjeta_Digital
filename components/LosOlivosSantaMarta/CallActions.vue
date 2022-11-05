<template>
    <v-container fluid >
        <v-row  justify="center" align="center" >
            <v-col cols="9" justify="center" align="center" >
                <v-row justify="center" align="top">
                    <v-col >
                        <a :href="Whatsapp" class="WhatsappOlivos"></a>
                        <p class="textosOlivos">Escríbeme</p>
                    </v-col>
                    <v-col >
                        <a :href="tel"  class="TelefonoOlivos"></a>
                        <p class="textosOlivos">Llámame</p>
                    </v-col>
                    <v-col >
                        <a class="GuardarOlivos mt-sm-1" :href="contacto" target="_blank"></a>
                        <p class="textosOlivos">Guardar mi ontacto</p>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col >
                        <a class="EmailOlivos" :href="email" target="_blank"> </a>
                        <p class="textosOlivos">E-mail</p>
                    </v-col>
                    <v-col >
                        <a class="PagWebOlivos" :href="web" target="_blank"></a>
                        <p class="textosOlivos">Sitio Web</p>
                    </v-col>
                    <v-col >
                        <a class="CompartirOlivos" @click="compartir()" > </a >
                        <p class="textosOlivos">Compartir</p>
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