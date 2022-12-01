<template>
    <v-container fluid >
        <v-row  justify="center" align="center" class="posicion-contenedores">
            <v-col cols="9" justify="center" align="center" >
                <v-row justify="center" align="top">
                    <v-col >
                        <a :href="Whatsapp" class="Whatsapp" :style="{backgroundColor:Color}"></a>
                        <p class="textos" :style="{color:Color}">Escríbeme</p>
                    </v-col>
                    <v-col >
                        <a :href="tel"  class="Telefono" :style="{backgroundColor:Color}"></a>
                        <p class="textos" :style="{color:Color}">Llámame</p>
                    </v-col>
                    <v-col >
                        <a class="Guardar mt-sm-1" :href="contacto" target="_blank" :style="{backgroundColor:Color}"></a>
                        <p class="textos" :style="{color:Color}">Guardar mi contacto</p>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col >
                        <a class="Email" :href="email" target="_blank" :style="{backgroundColor:Color}"> </a>
                        <p class="textos" :style="{color:Color}">Envia un Email</p>
                    </v-col>
                    <v-col >
                        <a class="PagWeb" :href="web" target="_blank" :style="{backgroundColor:Color}"></a>
                        <p class="textos" :style="{color:Color}">Visita mi sitio Web</p>
                    </v-col>
                    <v-col >
                        <a class="Compartir" @click="compartir()" :style="{backgroundColor:Color}"> </a >
                        <p class="textos" :style="{color:Color}">Comparte mi tarjeta</p>
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
        Color:{
            type: String,
            required: true
        },
    },

    methods:{
        async compartir(){
            // console.log(this.Color)
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