<template>
  <div class="faq">
    <v-container>
      <h1 class>Często zadawane pytania (FAQ)</h1>

      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            1. Czy muszę być pełnoletni, aby założyć konto w aplikacji?
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Oficjalnie, tak.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            2. Czy będzie darmowy alkohol?
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Zależy od wydarzenia. Zazwyczaj, nie.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            3. Czy MeetApp udostępnia moje dane zewnętrznym dostawcom?
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Tak, sprzedajemy dane gdzie się da, i tak są niewiele warte.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- Comment 
  <v-expansion-panel>
      <v-expansion-panel-header>
        4. Dlaczego wyszukując nowe osoby zawsze w proponowanych profilach mam osobę "Dr. Aus"?
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        To całkowcie normalne i wynika z faktu, że osoba ta bardzo często udziela się społecznie, biorąc udział w wielu wydarzeniach, niekiedy w kilku jednocześnie w tym samym momencie.
      </v-expansion-panel-content>
    </v-expansion-panel>-->

        <!-- Comment 
  <v-expansion-panel>
      <v-expansion-panel-header>
        5. Dlaczego nie mogę zaakceptować prośby o udział w wydarzeniu?
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Prosimy zastosować metodę przykładnego informatyka, tzn. wyłączyć i włączyć aplikację. Jeżeli problem nadal występuje prosimy szczegółowo opisać sytuację i podjęte do tej pory działania oraz wysłać na podany adres e-mail: ITakTegoNiePrzeczytam@gmail.com
      </v-expansion-panel-content>
    </v-expansion-panel>-->

        <v-expansion-panel>
          <v-expansion-panel-header>
            4. Dlaczego moja lista wydarzeń nie wyświetla żadnego wydarzenia,
            mimo chęci uczestnictwa przynajmniej w jednym?
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Prosimy zastosować metodę przykładnego informatyka, tzn. wyłączyć i
            włączyć aplikację, a następnie wylogować się i zalogować ponownie.
            Jeżeli problem nadal występuje prosimy szczegółowo opisać sytuację i
            podjęte do tej pory działania oraz wysłać na podany adres e-mail:
            ITakTegoNiePrzeczytam@gmail.com.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            5. Dlaczego wskaźnik na mapie nie pokazuje się dla danego
            wydarzenia?
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Najpewniej wynika to z tego, iż podany został błędny adres. Prosimy
            o sprawdzenie czy dany adres faktycznie istnieje, używając np.
            podstawowego "Google Maps".
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            6. Ile wydarzeń maksymalnie może liczyć moja lista wydarzeń?
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Nie istnieje odgórny limit.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            7. Czy wydarzenia są ograniczone tylko do terenu Polski?
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Nie, wydarzenia mogą odbywać się również w innych krajach.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            8. Dlaczego zamiast mapy jest czarny ekran?
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Prosimy wylogować się, wyłączyć i włączyć aplikację a następnie
            zalogować się ponownie.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            9. Czy w przypadku doznania obrażeń w trakcie trwania wydarzenia,
            mogę domagać się odszkodowania od MeetApp?
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Nie. Nie odpowiadamy za przebieg wydarzeń i nie ponosimy
            odpowiedzialności za to, co się w trakcie wydarzeń dzieje.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            10. Czy można jakoś wspomóc twórców tej jakże użytecznej aplikacji?
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Oczywiście, zachęcamy do wpłacania datków i darowizn na podany numer
            bankowy: 12 1234 1234 1234 1234 1234 1234.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class FAQ extends Vue {}
</script>
