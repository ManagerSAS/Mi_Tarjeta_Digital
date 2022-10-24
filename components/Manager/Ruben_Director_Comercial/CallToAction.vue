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
                            href="https://wa.link/q45mbh"
                            target="_blank"
                            >
                        </v-btn>
                        <p class="textos">Escríbenos</p>
                    </v-col>
                    <v-col >
                        <v-btn
                            class="Telefono"
                            width="50"
                            height="50"
                            depressed
                            fab
                            href="tel:+573242892413"
                            target="_blank"
                            >
                        </v-btn>
                        <p class="textos">Llamanos</p>
                    </v-col>
                    <v-col >
                        <v-btn
                            class="Guardar mt-sm-1"
                            width="50"
                            height="50"
                            depressed
                            fab
                            href="/Manager/Ruben_Director_Comercial/Contact/RubenYepes.vcf"
                            target="_blank"
                            >
                        </v-btn>
                        <p class="textos">Guardar Contacto</p>
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
                            href="mailto:ventas@agenciamanager.com"
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
                            href="https://agenciamanager.com/"
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
    methods:{
        async compartir(){
            const url = {url: 'https://mitarjetadigital.co/Manager/Ruben_Director_Comercial'}
            try {
                await navigator.share(url);
            } catch (err) {
                console.log({err})
            }
        }
    }
}
</script>