<template>
    <v-container fluid>
        <v-row>
            <v-col cols="7">
                <nuxt-img class="fotoOlivos" :src="foto" sizes="sm:100vw md:50vw lg:600px"/>
            </v-col>
            <v-col cols="4" style="position: relative; left: -4.5em; top: 5em">
                <h2 class="text-nameOlivos">{{name}}</h2>
                <h2 class="text-cargoOlivos">{{cargo}}</h2>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    props:{
        foto:{
            type: String,
            required: true
        },
        name:{
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
