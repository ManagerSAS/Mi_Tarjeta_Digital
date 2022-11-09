<template>
    <div class="FondoOlivos " >
        <RedesSociales/>
        <Welcome foto="LosOlivosSantaMarta/Cristina_Asesora_Comercial/Images/foto.png" name="ANA CRISTINA PACHECO " cargo="Asesora Comercial"/>
        <CallActions  Whatsapp="https://api.whatsapp.com/send?phone=573114021782" tel="tel:+573114021782" contacto="/LosOlivosSantaMarta/Cristina_Asesora_Comercial/Contact/ContactoCristinaOlivos.vcf" email="mailto:comercialsantamarta@losolivos.co " web="https://www.losolivossantamarta.com/" url="https://mitarjetadigital.co/Manager/Abel_Rodriguez_Gerente"/>
        <Services/>
        <Adicionales Qr="/LosOlivosSantaMarta/Cristina_Asesora_Comercial/Images/QR.jpg" QrD="/LosOlivosSantaMarta/Cristina_Asesora_Comercial/Images/QRDowload.jpg"/>
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
        title: "Cristina Asesora Comercial",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Esta es la tarjeta digital de Cristina Asesora Comercial"
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/LosOlivosSantaMarta/Cristina_Asesora_Comercial/Images/foto.ico" }]
    },
}
</script>