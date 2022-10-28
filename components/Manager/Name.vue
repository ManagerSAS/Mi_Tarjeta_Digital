<template>
    <v-container fluid  class="posicion-contenedores">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">
                <h2 class="text-name ">{{nombre}}</h2>
                <h2 class="text-cargo">{{cargo}}</h2>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    props:{
        nombre:{
            type: String,
            required: true
        },
        cargo:{
            type: String,
            required: true
        },

    }
}
</script>