<template>
    <div class="header-section header-transparent" :class="{'is-sticky': isSticky}">
        <div class="header-inner">
            <div class="container position-relative">
                <div class="row justify-content-between align-items-center">

                    <!-- Header Logo Start -->
                    <div class="col-xl-2 col-auto order-0">
                        <div class="header-logo">
                            <n-link to="/">
                                <img class="dark-logo" src="../../static/MiTarjetaDigital/Images/Logo-Manager.png" alt="Agency Logo">
                                <img class="light-logo" src="../../static/MiTarjetaDigital/Images/Logo-Manager.png" alt="Agency Logo">
                            </n-link>
                        </div>
                    </div>
                    <!-- Header Logo End -->
                    <v-spacer>  </v-spacer>
                    <!-- Header Main Menu Start -->
                    <div class="col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-2">
                        <div class="menu-column-area d-none d-xl-block d-lg-block  position-static">
                            <nav class="site-main-menu">
                                <ul>
                                    <li>
                                        <n-link to="/">Acerca de </n-link>
                                    </li>
                                    <li>
                                        <n-link to="/about">Ventajas </n-link>
                                    </li>
                                    <li>
                                        <n-link to="/service">Planes </n-link>
                                    </li>
                                    <li>
                                        <n-link to="/project">Contáctanos </n-link>
                                    </li>
                                    <li>
                                        <n-link to="/blog">Adquiere la tuya</n-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <!-- Header Search Start -->
                        <div class="header-search-area">
                            <!-- Header Login Start -->
                            <div class="header-search">
                                <button class="header-search-toggle" @click="toggleClass('addClass', 'search-popup-open')">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                            <!-- Header Login End -->
                        </div>
                        <!-- Header Search End -->

                        <!-- Header Mobile Menu Toggle Start -->
                        <div class="header-mobile-menu-toggle d-xl-none ml-sm-2">
                            <button class="toggle" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <i class="icon-top"></i>
                                <i class="icon-middle"></i>
                                <i class="icon-bottom"></i>
                            </button>
                        </div>
                        <!-- Header Mobile Menu Toggle End -->
                    </div>
                    <!-- Header Main Menu End -->
                </div>
            </div>
        </div>
    </div>
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

            //offcanvas search 
            toggleClass(addRemoveClass, className) {
                const el = document.querySelector('#search-popup');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>