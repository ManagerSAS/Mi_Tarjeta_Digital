<template>
    <div class="FondoOlivos " >
        <div class="contenedor-float">
            <div class="flotante pa-1 pb-1"  >
                <a class="Facebook ma-1" href="https://www.facebook.com/LosOlivosSantaMarta" target="_blank"> </a>
                <a class="Instagram ma-1" href="https://www.instagram.com/losolivossantamarta/" target="_blank" > </a>
                <a class="PaginaWeb ma-1" href="https://www.losolivossantamarta.com/" target="_blank"> </a>
            </div>
        </div>
        <Welcome/>
        <CallActions/>
        <Services/>
        <Adicionales/>
        <Footer/>
    </div>
</template>
<script>
// css
import '~/assets/LosOlivosSantaMarta/style.scss';
import '~/assets/LosOlivosSantaMarta/responsive-Cel-large.scss';
import '~/assets/LosOlivosSantaMarta/responsive-Cel-small.scss';
import '~/assets/LosOlivosSantaMarta/responsive-desktop-device.scss';
import '~/assets/LosOlivosSantaMarta/responsive-extrabig-device.scss';
import '~/assets/LosOlivosSantaMarta/responsive-laptop-device.scss';
import '~/assets/LosOlivosSantaMarta/responsive-tablet-device.scss';
// js
import Welcome from '~/components/LosOlivosSantaMarta/Diego_Morales_Gerente/Welcome.vue';
import CallActions from '~/components/LosOlivosSantaMarta/Diego_Morales_Gerente/CallActions.vue';
import Services from '~/components/LosOlivosSantaMarta/Diego_Morales_Gerente/Services.vue';
import Adicionales from '~/components/LosOlivosSantaMarta/Diego_Morales_Gerente/Adicionales.vue';
import Footer from '~/components/LosOlivosSantaMarta/Diego_Morales_Gerente/Footer.vue';
export default {
    components: { Welcome, CallActions, Services, Adicionales, Footer },
    head: {
        title: "Diego Morales",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Esta es la tarjeta digital de Diego Morales"
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/LosOlivosSantaMarta/Diego_Morales_Gerente/Images/foto.ico" }]
    },
}
</script>