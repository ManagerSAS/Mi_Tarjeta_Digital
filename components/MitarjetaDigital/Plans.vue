<template>
    <v-container fluid id="Plans">
        <v-row justify="center" align="center">
             <v-col  justify="center" align="center">
                  <p class="text-border-white mt-5">CONOCE</p>
                  <p class="text-sobre-puesto-white">NUESTROS PLANES</p>
             </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mb-10">
            <v-col justify="center" align="center" cols="12" sm="10" md="10" lg="8">
                <v-row justify="center" align="center">
                    <v-col cols="12" sm="10" md="4" lg="3">
                        <v-card
                            class="rounded-xl mx-auto hover"
                            max-width="270"
                            height="655"
                        >
                        <v-img
                            src="/MiTarjetaDigital/Images/Plan1.png"
                        >
                            <div class="pa-6">
                                <p class="text-white-f-40">BASIC</p>
                                <v-divider style="background-color: white; width: 50%"></v-divider>
                                <p class="text-white-fw-50">$20</p>
                            </div>
                        </v-img>
                        <div class="ma-2 mb-2">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                            <div class="listPlan">
                                <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <v-btn to="/" rounded class="mb-2">COMPRAR</v-btn>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="10" md="4" lg="3">
                        <v-card
                            class="rounded-xl mx-auto hover"
                            max-width="270"
                            height="655"
                            style="scale: calc(110%)"
                        >
                            <v-img
                            src="/MiTarjetaDigital/Images/Plan2.png"
                            >
                                <div class="ma-6">
                                    <p class="text-white-f-40">STANDARD</p>
                                    <v-divider style="background-color: white; width: 50%"></v-divider>
                                    <p class="text-white-fw-50">$50</p>
                                </div>
                            </v-img>
                            <div class="ma-2 mb-2">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                                <div class="listPlan">
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        <v-btn to="/" rounded class="mb-2">COMPRAR</v-btn>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="10" md="4" lg="3">
                        <v-card
                            class="rounded-xl mx-auto hover"
                            max-width="270"
                            height="655"
                        >
                            <v-img
                            src="/MiTarjetaDigital/Images/Plan3.png"
                            >
                                <div class="ma-6">
                                    <p class="text-white-f-40">PREMIUM</p>
                                    <v-divider style="background-color: white; width: 50%"></v-divider>
                                    <p class="text-white-fw-50">$70</p>
                                </div>
                            </v-img>
                            <div class="ma-2 mb-2">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                                <div class="listPlan">
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                    <p><v-icon color="green">mdi-check-circle-outline</v-icon>Lorem ipsumLorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <v-btn to="/" rounded class="mb-2">COMPRAR</v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<style lang="scss">
.hover:hover{
    scale: 110%;
}
</style>>

</style>