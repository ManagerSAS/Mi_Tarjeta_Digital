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
                {pregunta:'1. ¿Necesito contrato?', respuesta:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'},
                {pregunta:'2. ¿Puedo incluir todas las redes sociales?', respuesta:'¡Claro que sí! Podrás integrar todas las redes sociales que tu empresa necesita, tendrás una estructura habilitada para incorporar cada una de ellas e interactuar directamente con tus clientes'},
                {pregunta:'3. ¿Yo elijo qué información se comparte?', respuesta:'Sí, estructuramos cada parte para proporcionarte un espacio directo de comunicación e información. La información que desees incorporar estará establecida acorde a los lineamientos de tu empresa. ¡Tú eliges!'},
                {pregunta:'4. ¿Debo actualizar la información?', respuesta:'Si así lo deseas, puedes realizar actualizaciones acordes a la modificación dentro de tus colaboradores, ya sea de cambio o elaboración de una nueva tarjeta. ¡Lo hacemos por ti!'},
                {pregunta:'5. ¿Necesito tener una App? ', respuesta:'No necesitas ninguna aplicación para el funcionamiento de la Tarjeta Digital. Solo necesitas lector QR en tu celular y tendrás toda la información que necesitas. Solo con un simple paso ¡Escanea y listo!'},
            ],
        }
    }
})
</script>