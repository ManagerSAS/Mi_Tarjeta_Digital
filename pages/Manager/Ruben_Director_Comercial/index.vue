<template>
  <div >
    <Welcome/>
    <Name/>
    <CallToAction/>
    <Services/>
    <Adicionales/>
    <Footer/>
  </div>
</template>

<script>
import Welcome from '~/components/Manager/Ruben_Director_Comercial/Welcome.vue';
import Name from '~/components/Manager/Ruben_Director_Comercial/Name.vue';
import CallToAction from '~/components/Manager/Ruben_Director_Comercial/CallToAction.vue';
import Services from '~/components/Manager/Ruben_Director_Comercial/Services.vue';
import Adicionales from '~/components/Manager/Ruben_Director_Comercial/Adicionales.vue';
import Footer from '~/components/Manager/Ruben_Director_Comercial/Footer.vue';
export default {
    components: { Welcome, Name, CallToAction, Services, Adicionales, Footer }
}
</script>
