<template>
    <div class="FondoOlivos " >
        <RedesSociales/>
        <Welcome foto="LosOlivosSantaMarta/Alvis_Asesor_Homenajes/Images/foto.png" name="ALVIS MERCADO" cargo="Asesor de Homenajes"/>
        <CallActions  Whatsapp="https://api.whatsapp.com/send?phone=573008519064" tel="tel:+573008519064" contacto="/LosOlivosSantaMarta/Alvis_Asesora_Homenajes/Contact/ContactoAlvisOlivos.vcf" email="mailto:coordinacionsantamarta@losolivos.co" web="https://www.losolivossantamarta.com/" url="https://mitarjetadigital.co/Manager/Abel_Rodriguez_Gerente"/>
        <Services/>
        <Adicionales Qr="/LosOlivosSantaMarta/Alvis_Asesor_Homenajes/Images/Images/QR.jpg" QrD="/LosOlivosSantaMarta/Alvis_Asesor_Homenajes/Images/Images/QRDowload.jpg"/>
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
        title: "ALVIS MERCADO",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Esta es la tarjeta digital de ALVIS MERCADO"
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/LosOlivosSantaMarta/Alvis_Asesora_Homenajes/Images/foto.ico" }]
    },
}
</script>