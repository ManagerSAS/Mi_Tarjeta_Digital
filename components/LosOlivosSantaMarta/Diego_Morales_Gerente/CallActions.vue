<template>
    <v-container fluid >
        <v-row  justify="center" align="center" >
            <v-col cols="9" justify="center" align="center" >
                <v-row justify="center" align="top">
                    <v-col >
                        <a href="https://api.whatsapp.com/send?phone=573008504730" class="Whatsapp"></a>
                        <p class="textos">Escríbenos</p>
                    </v-col>
                    <v-col >
                        <a href="tel:+573008504730"  class="Telefono"></a>
                        <p class="textos">Llámanos</p>
                    </v-col>
                    <v-col >
                        <a class="Guardar mt-sm-1" href="/LosOlivosSantaMarta/Diego_Morales_Gerente/Contact/DiegoMorales.vcf" target="_blank"></a>
                        <p class="textos">Guardar Contacto</p>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col >
                        <a class="Email" href="mailto:gerenciasantamarta@losolivos.co" target="_blank"> </a>
                        <p class="textos">E-mail</p>
                    </v-col>
                    <v-col >
                        <a class="PagWeb" href="https://www.losolivossantamarta.com/" target="_blank"></a>
                        <p class="textos">Sitio Web</p>
                    </v-col>
                    <v-col >
                        <a class="Compartir" @click="compartir()" > </a >
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
            const url = {url: 'https://mitarjetadigital.co/LosOlivosSantaMarta/Diego_Morales_Gerente/'}
            try {
                await navigator.share(url);
            } catch (err) {
                console.log({err})
            }
        },
    }
}
</script>  