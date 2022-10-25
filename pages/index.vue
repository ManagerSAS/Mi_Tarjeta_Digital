<template>
    <div >
        <TheHeader/>
        <Welcome/>
        <Advantage/>
        <Presentation/>
        <NoContact/>
        <Plans/>
        <Questions/>
        <TheFooter/>
    </div>
</template>
<script>
// css
import '~/assets/MiTarjetaDigital/Header.scss';
// js
import TheHeader from '~/components/MitarjetaDigital/TheHeader.vue';
import Welcome from '~/components/MitarjetaDigital/Welcome.vue';
import TheFooter from '~/components/MitarjetaDigital/TheFooter.vue';
import Advantage from '~/components/MitarjetaDigital/Advantage.vue';
import Presentation from '~/components/MitarjetaDigital/Presentation.vue';
import NoContact from '~/components/MitarjetaDigital/NoContact.vue';
import Plans from '~/components/MitarjetaDigital/Plans.vue';
import Questions from '~/components/MitarjetaDigital/Questions.vue';

  export default {
      components: {
        TheHeader,
        Welcome,
        TheFooter,
        Advantage,
        Presentation,
        NoContact,
        Plans,
        Questions
    },
  }
</script>
  