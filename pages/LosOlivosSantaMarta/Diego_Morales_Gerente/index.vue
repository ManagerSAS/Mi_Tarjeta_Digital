<template>
    <div class="FondoOlivos " >
        <RedesSociales/>
        <Welcome foto="LosOlivosSantaMarta/Diego_Morales_Gerente/Images/foto.png" name="DIEGO MORALES" cargo="Gerente"/>
        <CallActions  Whatsapp="https://api.whatsapp.com/send?phone=573008504730" tel="tel:+573008504730" contacto="/LosOlivosSantaMarta/Diego_Morales_Gerente/Contact/DiegoMorales.vcf" email="mailto:gerenciasantamarta@losolivos.co" web="https://www.losolivossantamarta.com/" url="https://mitarjetadigital.co/LosOlivosSantaMarta/Diego_Morales_Gerente/"/>
        <Services />
        <Adicionales Qr="/LosOlivosSantaMarta/Diego_Morales_Gerente/Images/QR.jpg" QrD="/LosOlivosSantaMarta/Diego_Morales_Gerente/Images/QRDowload.jpg"/>
        <Footer/>
    </div>
</template>
<script>

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
        link: [{ rel: "icon", type: "image/x-icon", href: "/LosOlivosSantaMarta/Diego_Morales_Gerente/Images/foto.ico" }]
    },
}
</script>