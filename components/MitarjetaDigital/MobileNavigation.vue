<template>
    <div class="popup-mobile-menu popup-mobile-visiable order-2" id="offcanvas-menu">
        <div @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"></div>
        <div class="inner custom-scrollbar">
            <div class="mobile-header">
                <div class="header-logo">
                    <n-link class="logo" to="/">
                        <nuxt-img format="png" loading="lazy" placeholder="/MiTarjetaDigital/Images/Logo-Manager.png"  quality="70" fit="cover" src="/MiTarjetaDigital/Images/Logo-Manager.png" alt="Agency Logo"></nuxt-img>
                    </n-link>
                </div>
                <button class="mobile-close-btn" @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"></button>
            </div>
            <div class="menu-content">
                <div class="mobile-navigation">
                    <nav class="offcanvas-navigation" id="offcanvas-navigation">
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
                                <n-link style="text-decoration: none" to="/">Adquiere la tuya</n-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            const offCanvasNav = document.querySelector('#offcanvas-navigation');
            const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
            const anchorLinks = offCanvasNav.querySelectorAll('a');
        
            for (let i = 0; i < offCanvasNavSubMenu.length; i++){
                offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
            }
        
            const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
            const numMenuExpand = menuExpand.length;
        
            for (let i = 0; i < numMenuExpand; i++) {
                menuExpand[i].addEventListener("click", (e) => {sideMenuExpand(e)});
            }
        
            for (let i = 0; i < anchorLinks.length; i++) {
                anchorLinks[i].addEventListener("click", () => {closeMobileMenu()});
            }

            const sideMenuExpand = (e) => {
                e.currentTarget.parentElement.classList.toggle('active');
            }
            const closeMobileMenu = () => {
                const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
                offcanvasMobileMenu?.classList.remove('active');
            }
        },
        methods: {
            // offcanvas menu close
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            }
        }
    };
</script>


<style lang="scss">
    .offcanvas-navigation {
        ul {
            padding-left: 0;
            li {
                border-bottom: 1px solid rgba(255, 255, 255, 0.15);
                &.menu-item-has-children {
                    .sub-menu {
                        height: 0;
                        opacity: 0;
                        transition: 0.3s;
                        visibility: hidden;
                    }
                    &.active > {
                        .sub-menu {
                            height: 100%;
                            opacity: 1;
                            visibility: visible;
                            padding-left: 0;
                        }
                    }
                }
                a {
                    text-decoration: none;
                    color: $white;
                    font-size: 16px;
                    font-weight: 500;
                    padding: 10px 0;
                    display: block;
                    &:hover {
                        color: $primary;
                    }
                }
            }
        }
    }
</style>