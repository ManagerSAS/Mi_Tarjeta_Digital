<template>
    <div class="footer-section" :style="{backgroundColor: '#030e22'}">
        <div class="container">
            <!-- Footer Top Widgets Start -->
            <div class="row section-padding pt-0 mtn-30">
                <!-- Footer Widget Start -->
                <div class="col-md-4 col-sm-6 col-12 mt-30">
                    <div class="footer-widget">
                        <div class="footer-logo">
                            <n-link to="/">
                                <v-img src="/MiTarjetaDigital/Images/Logo-Manager.png" width="200px" alt="Logo"/>
                            </n-link>
                        </div>
                        <div style="font-family: 'Quicksand', sans-serif;" class="footer-widget-content">
                            <div class="content">
                                <span style="font-family: 'Quicksand', sans-serif;">CONTÁCTANOS</span><br>
                                <p style="font-family: 'Quicksand', sans-serif;">Dirección: Cra 39 #34-38 2do Piso Villavicencio-Meta</p>
                                <span style="font-family: 'Quicksand', sans-serif;" >Teléfono Ventas: +57-3242892413</span><br>
                                <a style="font-family: 'Quicksand', sans-serif; color: #748494;" href="mailto:ventas@agenciamanager.com">ventas@agenciamanager.com</a>
                            </div>
                            <div class="footer-social-inline ">
                                <a href="https://www.behance.net/creativmanager1" target="_blank">
                                    <i class="fab fa-behance fa-lg"></i>
                                </a> 
                                <a href="https://www.facebook.com/ManagerColombia/" target="_blank">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                                <a href="https://www.instagram.com/managercolombia" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->
            
                <!-- Footer Widget Start -->
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30">
                    <div class="footer-widget">
                        <h4 style="font-family: 'Quicksand', sans-serif;" class="footer-widget-title">Servicios</h4>
                        <div class="footer-widget-content">
                            <ul>
                                <li style="font-family: 'Quicksand', sans-serif;" v-for="(nav, index) in footerDataServices" :key="index">
                                    <a target="_blanck" style="font-family: 'Quicksand', sans-serif; color: #748494;" :href="nav.navUrl">{{ nav.navTitle }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->

                <!-- Footer Widget Start -->
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30">
                    <div class="footer-widget">
                        <h4 style="font-family: 'Quicksand', sans-serif;" class="footer-widget-title">Líneas de negocios</h4>
                        <div class="footer-widget-content">
                            <ul>
                                <li v-for="(nav, index) in footerDataLineas" :key="index">
                                    <a target="_blanck" style="font-family: 'Quicksand', sans-serif;color: #748494;" :href="nav.navUrl">{{ nav.navTitle }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->
               
                <!-- Footer Widget Start -->
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-30">
                    <div class="footer-widget">
                        <h4 style="font-family: 'Quicksand', sans-serif;" class="footer-widget-title ">Agremiaciones</h4>
                        
                        <span style="font-family: 'Quicksand', sans-serif;  color: white;" >Miembros del consejo directivo nacional de la Asociación Colombiana de la Industria de la Comunicación Gráfica</span>
                        <div class="footer-widget-content">
                            <img src="https://res.cloudinary.com/dhl17zanz/image/upload/c_scale,h_60/v1647033742/images/logos/Andigraf_s8fnzm.png" alt="" srcset="">
                        </div><br>
                        <span style="font-family: 'Quicksand', sans-serif;  color: white;" >Miembros de la Federación Nacional de Comerciantes - seccional villavicencio</span>
                        <div class="footer-widget-content ">
                            <img src="https://res.cloudinary.com/dhl17zanz/image/upload/c_scale,h_50/v1647033742/images/logos/Fenalco_1_ihqrys.png" alt="" srcset="">
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer Top Widgets End -->

            <!-- Footer Copyright Start -->
            <div class="row">
                <div class="col">
                    <p class="copyright white--text">&copy; 2022 Manager <i class="fa fa-heart text-danger"></i> by <a href="www.agenciamanager.com" target="_blank">Agencia Manager</a></p>
                </div>
            </div>
            <!-- Footer Copyright End -->
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                footerDataLineas:[
                    {
                        navTitle: "Agencia",
                        navUrl: "https://agenciamanager.com/" 
                    },
                    {
                        navTitle: "Capacitaciones",
                        navUrl: "https://agenciamanager.com/" 
                    },
                    {
                        navTitle: "Imprenta",
                        navUrl: "https://agenciamanager.com/" 
                    }
                ],
                footerDataServices:[
                    {
                        navTitle: "Diseño",
                        navUrl: "https://agenciamanager.com/" 
                    },
                    {
                        navTitle: "Creación de marca",
                        navUrl: "https://agenciamanager.com/" 
                    },
                    {
                        navTitle: "Desarrollo de software",
                        navUrl: "https://agenciamanager.com/" 
                    },
                    {
                        navTitle: "Multmedia",
                        navUrl: "https://agenciamanager.com/" 
                    },
                    {
                        navTitle: "Redes sociales",
                        navUrl: "https://agenciamanager.com/" 
                    },
                    {
                        navTitle: "Proteccion de datos",
                        navUrl: "https://agenciamanager.com/poticadeDatos" 
                    }
                ]
            }
        },
    };
</script>