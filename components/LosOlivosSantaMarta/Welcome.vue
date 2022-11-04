<template>
    <v-container fluid>
        <v-row>
            <v-col cols="7">
                <nuxt-img format="webp" quality="70" fit="cover" loading="lazy"  class="fotoOlivos" :src="foto" width="200em"  alt="" srcset=""/>
            </v-col>
            <v-col cols="4" style="position: relative; left: -4.5em; top: 5em">
                <h2 class="text-name">{{name}}</h2>
                <h2 class="text-cargo">{{cargo}}</h2>
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
