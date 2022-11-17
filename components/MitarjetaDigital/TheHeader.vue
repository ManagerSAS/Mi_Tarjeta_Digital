<template>
    <div class="header-section header-transparent" :class="{'is-sticky': isSticky}">
        <div class="header-inner">
            <div class="container position-relative">
                <div class="row justify-content-between align-items-center" >
                    <!-- Header Logo Start -->
                    <div class="col-auto d-flex">
                        <div class="header-logo ma-lg-10">
                            <n-link to="/">
                                <nuxt-img format="webp" loading="lazy" placeholder="/MiTarjetaDigital/Images/Logo-Manager.png"  sizes="sm:100vw md:50vw lg:400px" quality="70" fit="cover" class="dark-logo" src="/MiTarjetaDigital/Images/Logo-Manager.png" alt="Agency Logo"></nuxt-img>
                                <nuxt-img format="png" loading="lazy" placeholder="/MiTarjetaDigital/Images/Logo-Manager.png"  sizes="sm:100vw md:50vw lg:400px" quality="70" fit="cover" class="light-logo" src="/MiTarjetaDigital/Images/Logo-Manager.png" alt="Agency Logo"></nuxt-img>
                            </n-link>
                        </div>
                    </div>
                    <!-- Header Logo End -->
                    <v-spacer ></v-spacer>
                    <!-- Header Main Menu Start -->
                    <div class="col-auto d-flex" >
                        <div class="menu-column-area d-none d-xl-block d-lg-block  position-static">
                            <nav class="site-main-menu">
                                <ul>
                                    <li>
                                        <n-link style="text-decoration: none" to="#Advantage">Ventajas </n-link>
                                    </li>
                                    <li>
                                        <n-link style="text-decoration: none" to="#Presentation">Tarjeta de presentación </n-link>
                                    </li>
                                    <!-- <li>
                                        <n-link style="text-decoration: none" to="#Plans">Planes </n-link>
                                    </li> -->
                                    <li>
                                        <n-link style="text-decoration: none" to="#Tarjeta">Tarejta Fisica </n-link>
                                    </li>
                                    <li>
                                        <n-link style="text-decoration: none" to="#Questions">Preguntas Frecuentes </n-link>
                                    </li>
                                    <li>
                                        <a style="text-decoration: none" target="_blanck" href="https://api.whatsapp.com/send?phone=573242892413&text=¡Hola!%20Quiero%20adquirir%20mi%20tarjeta%20digital">Adquiere la tuya</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                
                        <div class="header-mobile-menu-toggle d-xl-none d-md-none ml-sm-2">
                            <button aria-label="Menu hamburguesa " class="toggle" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <i class="icon-top"></i>
                                <i class="icon-middle"></i>
                                <i class="icon-bottom"></i>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div >
</template>

<script>
    export default {
        

        data() {
            return {
                isSticky: false,
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },

        methods: {
            // offcanvas mobile menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>