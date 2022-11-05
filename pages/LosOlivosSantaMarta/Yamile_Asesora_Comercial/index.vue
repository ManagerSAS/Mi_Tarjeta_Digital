<template>
    <div class="FondoOlivos " >
        <RedesSociales/>
        <Welcome foto="LosOlivosSantaMarta/Yamile_Asesora_Comercial/Images/foto.png" name="YAMILE ANTELIZ" cargo="Asesora Comercial"/>
        <CallActions  Whatsapp="https://api.whatsapp.com/send?phone=573142209327" tel="tel:+573142209327" contacto="/LosOlivosSantaMarta/Yamile_Asesora_Comercial/Contact/DiegoMorales.vcf" email="mailto:comercialsantamarta@losolivos.co" web="https://www.losolivossantamarta.com/" url="https://mitarjetadigital.co/Manager/Abel_Rodriguez_Gerente"/>
        <Services/>
        <Adicionales/>
        <Footer/>
    </div>
</template>
<script>
// // css
// import '~/assets/LosOlivosSantaMarta/style.scss';
// import '~/assets/LosOlivosSantaMarta/responsive-Cel-large.scss';
// import '~/assets/LosOlivosSantaMarta/responsive-Cel-small.scss';
// import '~/assets/LosOlivosSantaMarta/responsive-desktop-device.scss';
// import '~/assets/LosOlivosSantaMarta/responsive-extrabig-device.scss';
// import '~/assets/LosOlivosSantaMarta/responsive-laptop-device.scss';
// import '~/assets/LosOlivosSantaMarta/responsive-tablet-device.scss';
// js
import Welcome from '~/components/LosOlivosSantaMarta/Welcome.vue';
import CallActions from '~/components/LosOlivosSantaMarta/CallActions.vue';
import Services from '~/components/LosOlivosSantaMarta/Services.vue';
import Adicionales from '~/components/LosOlivosSantaMarta/Adicionales.vue';
import Footer from '~/components/LosOlivosSantaMarta/Footer.vue';
import RedesSociales from '~/components/LosOlivosSantaMarta/RedesSociales.vue';
export default {
    components: { Welcome, CallActions, Services, Adicionales, Footer, RedesSociales },
    head: {
        title: "Diego Morales",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Esta es la tarjeta digital de Diego Morales"
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/LosOlivosSantaMarta/Yamile_Asesora_Comercial/Images/foto.ico" }]
    },
}
</script>