<template>
    <v-container fluid  class="posicion-contenedoresAnaPina">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">
                <!-- <h2 class="text-name-AnaPina">{{nombre}}</h2>
                <h2 class="text-cargo-AnaPina">{{cargo}}</h2> -->
                <img height="30" src="/AnaPinaShop/name.png"/>
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