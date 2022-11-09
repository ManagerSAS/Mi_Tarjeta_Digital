<template>
    <div class="FondoOlivos " >
        <RedesSociales/>
        <Welcome foto="LosOlivosSantaMarta/Vanessa_Coordinadora_Comercial/Images/foto.png" name="VANESSA LONDOÑO" cargo="Coordinadora Comercial"/>
        <CallActions  Whatsapp="https://api.whatsapp.com/send?phone=573015087182" tel="tel:+573015087182" contacto="/LosOlivosSantaMarta/Vanessa_Coordinadora_Comercial/Contact/ContactoVanessaOlivos.vcf" email="mailto:comercialsantamarta@losolivos.co" web="https://www.losolivossantamarta.com/" url="https://mitarjetadigital.co/Manager/Abel_Rodriguez_Gerente"/>
        <Services/>
        <Adicionales Qr="/LosOlivosSantaMarta/Vanessa_Coordinadora_Comercial/Images/QR.jpg" QrD="/LosOlivosSantaMarta/Vanessa_Coordinadora_Comercial/Images/QRDowload.jpg"/>
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
        title: "Vanessa Coordinadora Comercial",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Esta es la tarjeta digital de Vanessa Coordinadora Comercial"
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/LosOlivosSantaMarta/Vanessa_Coordinadora_Comercial/Images/foto.ico" }]
    },
}
</script>