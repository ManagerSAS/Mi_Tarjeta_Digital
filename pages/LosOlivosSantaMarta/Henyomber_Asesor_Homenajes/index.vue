<template>
    <div class="FondoOlivos " >
        <RedesSociales/>
        <Welcome foto="LosOlivosSantaMarta/Henyomber_Asesor_Homenajes/Images/foto.png" name="HENYOMBER LISCANO" cargo="Asesor de Homenajes"/>
        <CallActions  Whatsapp="https://api.whatsapp.com/send?phone=573008519064" tel="tel:+573008519064" contacto="/LosOlivosSantaMarta/Henyomber_Asesor_Homenajes/Contact/ContactoHenyomberOlivos.vcf" email="mailto:coordinacionsantamarta@losolivos.co" web="https://www.losolivossantamarta.com/" url="https://mitarjetadigital.co/Manager/Abel_Rodriguez_Gerente"/>
        <Services/>
        <Adicionales Qr="/LosOlivosSantaMarta/Henyomber_Asesor_Homenajes/Images/QR.jpg" QrD="/LosOlivosSantaMarta/Henyomber_Asesor_Homenajes/Images/QRDowload.jpg"/>
        <Footer/>
    </div>
</template>
<script>
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
        title: "Henyomber Asesor Homenajes",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Esta es la tarjeta digital de Henyomber Asesor Homenajes"
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/LosOlivosSantaMarta/Henyomber_Asesor_Homenajes/Images/foto.ico" }]
    },
}
</script>