<template>
    <v-container fluid class="fondoFooter posicion-contenedores" :style="{backgroundColor:Color}">
        <v-row justify="center" align="center">
            <v-col justify="center" align="center">
                <a href="https://agenciamanager.com/" style="text-decoration: none; "> <span class="text-footer">© Copyright 2022 | Desarrollado por Manager SAS</span><br>
                <span class="text-footer"> Adquiere la tuya <a href="https://api.whatsapp.com/send?phone=573242892413">Aquí</a></span> </a>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    props:{
      Color:{
            type: String,
            required: true
        },
      }
    }
</script>