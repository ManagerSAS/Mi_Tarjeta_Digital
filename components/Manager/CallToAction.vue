<template>
    <v-container fluid >
        <v-row  justify="center" align="center" class="posicion-contenedores">
            <v-col cols="9" justify="center" align="center" >
                <v-row justify="center" align="top">
                    <v-col >
                        <v-btn
                            class="Whatsapp"
                            width="50"
                            height="50"
                            depressed
                            fab
                            :href="Whatsapp"
                            target="_blank"
                            >
                        </v-btn>
                        <p class="textos">Escríbeme</p>
                    </v-col>
                    <v-col >
                        <v-btn
                            class="Telefono"
                            width="50"
                            height="50"
                            depressed
                            fab
                            :href="tel"
                            target="_blank"
                            >
                        </v-btn>
                        <p class="textos">Llámame</p>
                    </v-col>
                    <v-col >
                        <v-btn
                            class="Guardar mt-sm-1"
                            width="50"
                            height="50"
                            depressed
                            fab
                            :href="contacto"
                            target="_blank"
                            >
                        </v-btn>
                        <p class="textos">Guardar mi contacto</p>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col >
                        <v-btn
                            class="Email"
                            width="50"
                            height="50"
                            depressed
                            fab
                            :href="email"
                            target="_blank"
                            >
                        </v-btn>
                        <p class="textos">E-mail</p>
                    </v-col>
                    <v-col >
                        <v-btn
                            class="PagWeb"
                            width="50"
                            height="50"
                            depressed
                            fab
                            :href="web"
                            target="_blank"
                            >
                        </v-btn>
                        <p class="textos">Sitio Web</p>
                    </v-col>
                    <v-col >
                        <v-btn
                            class="Compartir"
                            width="50"
                            height="50"
                            depressed
                            fab
                            @click="compartir()"
                            target="_blank"
                            >
                        </v-btn>
                        <p class="textos">Compartir</p>
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