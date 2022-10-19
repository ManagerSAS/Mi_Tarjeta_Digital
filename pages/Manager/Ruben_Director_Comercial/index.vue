<template>
  <div >
    <div class="flotante" justify="end" align="end">
      <v-btn
        class="PaginaWeb"
        width="40"
        height="40"
        fab
        href="https://api.whatsapp.com/send?phone=573155804703&text=Hola%20%F0%9F%96%90%EF%B8%8F%2C%20necesito%20asesoria%20online%20de%20Emcoofun%20Los%20Olivos%20por%20favor%20%F0%9F%99%8F%F0%9F%98%80"
        target="_blank"
        >
      </v-btn><br>
			<v-btn
				class="Facebook mt-2"
				width="40"
				height="40"
				fab
				href="https://www.facebook.com/"
				target="_blank"
				>
			</v-btn><br>
			<v-btn
				class="Instagram mt-2"
				width="40"
				height="40"
				fab
				href="https://www.instagram.com/"
				target="_blank"
				>
			</v-btn>
		</div>	
    <Welcome/>
    <Name/>
    <CallToAction />
    <Services style="background-color: rgba(111, 111, 110, 0.2)"/>
    <Adicionales />
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
