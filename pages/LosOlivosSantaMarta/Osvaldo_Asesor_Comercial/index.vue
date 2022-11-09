<template>
    <div class="FondoOlivos " >
        <RedesSociales/>
        <Welcome foto="LosOlivosSantaMarta/Osvaldo_Asesor_Comercial/Images/foto.png" name="OSVALDO LIZARAZO" cargo="Asesor Comercial"/>
        <CallActions  Whatsapp="https://api.whatsapp.com/send?phone=573006686341" tel="tel:+573006686341" contacto="/LosOlivosSantaMarta/Osvaldo_Asesor_Comercial/Contact/ContactoOsvaldoOlivos.vcf" email="mailto:gerenciasantamarta@losolivos.co" web="https://www.losolivossantamarta.com/" url="https://mitarjetadigital.co/Manager/Abel_Rodriguez_Gerente"/>
        <Services/>
        <Adicionales Qr="/LosOlivosSantaMarta/Osvaldo_Asesor_Comercial/Images/QR.jpg" QrD="/LosOlivosSantaMarta/Osvaldo_Asesor_Comercial/Images/QRDowload.jpg"/>
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
        title: "Osvaldo Asesor Comercial",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Esta es la tarjeta digital de Osvaldo Asesor Comercial"
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/LosOlivosSantaMarta/Osvaldo_Asesor_Comercial/Images/foto.ico" }]
    },
}
</script>