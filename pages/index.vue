<template>
    <div >
        <TheHeader/>
        <MobileNavigation/>
        <Welcome/>
        <Advantage/>
        <Presentation style="background-color: #e6e6e6" class="pa-8"/>
        <NoContact/>
        <Plans class="bg-cover" :style="{ backgroundImage: `url(${bgImgSrc})` }"/>
        <Questions/>
        <TheFooter/>
    </div>
</template>
<script>
// css
import '~/assets/MiTarjetaDigital/Header.scss';
import '~/assets/MiTarjetaDigital/Intro.scss';
import '~/assets/MiTarjetaDigital/style.scss';
// js
import TheHeader from '~/components/MitarjetaDigital/TheHeader.vue';
import Welcome from '~/components/MitarjetaDigital/Welcome.vue';
import TheFooter from '~/components/MitarjetaDigital/TheFooter.vue';
import Advantage from '~/components/MitarjetaDigital/Advantage.vue';
import Presentation from '~/components/MitarjetaDigital/Presentation.vue';
import NoContact from '~/components/MitarjetaDigital/NoContact.vue';
import Plans from '~/components/MitarjetaDigital/Plans.vue';
import Questions from '~/components/MitarjetaDigital/Questions.vue';
import MobileNavigation from '~/components/MitarjetaDigital/MobileNavigation.vue';

  export default {
      components: {
        TheHeader,
        Welcome,
        TheFooter,
        Advantage,
        Presentation,
        NoContact,
        Plans,
        Questions,
        MobileNavigation
    },
    data() {
        return {
          bgImgSrc: 'MiTarjetaDigital/Images/background.png'
        }
      }
  }
</script>
  