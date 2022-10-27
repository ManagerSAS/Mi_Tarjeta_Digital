<template>
    <v-container fluid  id="Questions">
        <div  justify="center" align="center">
            <p class="text-border mt-5">PREGUNTAS</p>
            <p class="text-sobre-puesto">FRECUENTES</p>
        </div>
        <v-row justify="center" align="center">
            <v-col cols="12" lg="7" xl="7" md="10" sm="10">
                <v-expansion-panels popout>
                    <v-expansion-panel 
                        :readonly="readonly"
                        multiple 
                        height="200"
                        v-for="({pregunta,respuesta},index) in preguntas"
                        :key="index"
                        class="mb-6 text-blue-f-1em">
                        <v-expansion-panel-header style="color:#003B4C;" class="ma-3">{{pregunta}}</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{respuesta}}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default ({
    data() {
        return{
            readonly: false,
            preguntas: [
                {pregunta:'1. ¿Lorem ipsum dolor sit amet, consectetuer adipiscing elit,?', respuesta:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'},
                {pregunta:'2. ¿Lorem ipsum dolor sit amet, consectetuer adipiscing elit,?', respuesta:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'},
                {pregunta:'3. ¿Lorem ipsum dolor sit amet, consectetuer adipiscing elit,?', respuesta:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'},
                {pregunta:'4. ¿Lorem ipsum dolor sit amet, consectetuer adipiscing elit,?', respuesta:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'},
                {pregunta:'5. ¿Lorem ipsum dolor sit amet, consectetuer adipiscing elit,?', respuesta:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'},
            ],
        }
    }
})
</script>