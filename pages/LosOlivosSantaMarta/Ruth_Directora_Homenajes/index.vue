<template>
    <div class="FondoOlivos " >
        <RedesSociales/>
        <Welcome foto="LosOlivosSantaMarta/Ruth_Directora_Homenajes/Images/foto.png" name="RUTH RAMOS" cargo="Directora Homenajes"/>
        <CallActions  Whatsapp="https://api.whatsapp.com/send?phone=573007444922" tel="tel:+573007444922" contacto="/LosOlivosSantaMarta/Ruth_Directora_Homenajes/Contact/ContactoRuthOlivos.vcf" email="mailto:coordinacionsantamarta@losolivos.co" web="https://www.losolivossantamarta.com/" url="https://mitarjetadigital.co/LosOlivosSantaMarta/Ruth_Directora_Homenajes"/>
        <Services Whatsapp="https://api.whatsapp.com/send?phone=573007444922"/>
        <Adicionales Qr="/LosOlivosSantaMarta/Ruth_Directora_Homenajes/Images/QR.png" QrD="/LosOlivosSantaMarta/Ruth_Directora_Homenajes/Images/QR.png"/>
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
        title: "Ruth Directora Homenajes",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Esta es la tarjeta digital de Ruth Directora Homenajes"
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/LosOlivosSantaMarta/Ruth_Directora_Homenajes/Images/foto.ico" }]
    },
}
</script>