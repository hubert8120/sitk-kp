import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParallaxHero } from "@/components/animations/ParallaxHero";
import { ScrollSection } from "@/components/animations/ScrollSection";
import heroImage from "@/assets/hero-services.jpg";
import { SEO } from "@/components/SEO";

const Rodo = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="RODO – ochrona danych osobowych SITK"
        description="Informacja o przetwarzaniu danych osobowych w SITK RP Oddział w Koszalinie zgodnie z RODO. Prawa członków i kontakt."
        canonical="/rodo"
      />
      <Navbar />

      <ParallaxHero backgroundImage={heroImage} backgroundAlt="Informacja RODO">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4">
          Informacja RODO
        </h1>
        <p className="text-white text-lg text-center max-w-2xl mx-auto">
          Ochrona danych osobowych w SITK RP Oddział w Koszalinie
        </p>
      </ParallaxHero>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollSection>
            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border/50">
              <div className="text-center mb-10">
                <p className="font-serif text-lg font-semibold text-foreground">
                  STOWARZYSZENIE INŻYNIERÓW<br />
                  I TECHNIKÓW KOMUNIKACJI RP<br />
                  ODDZIAŁ W KOSZALINIE
                </p>
                <p className="text-muted-foreground mt-2">
                  ul. Kupiecka 5<br />
                  75-671 Koszalin
                </p>
              </div>

              <div className="mb-8 text-muted-foreground text-sm space-y-1">
                <p className="font-semibold text-foreground">Otrzymują:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>członkowie Oddziału SITK RP w Koszalinie oraz rzeczoznawcy SITK RP za pośrednictwem zarządów swoich macierzystych kół i klubów,</li>
                  <li>członkowie Zarządu Oddziału SITK RP w Koszalinie,</li>
                  <li>strona internetowa sitkkoszalin.pl</li>
                </ol>
                <p className="mt-2">
                  <span className="font-semibold text-foreground">Do wiadomości:</span> Zarząd Krajowy SITK RP
                </p>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
                INFORMACJA
              </h2>

              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  W związku z wejściem w życie w dniu 25 maja 2018 r. Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 roku w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO – Rozporządzenie o ochronie danych), Stowarzyszenie Inżynierów i Techników Komunikacji Rzeczpospolitej Polskiej Oddział w Koszalinie informuje, że wprowadziło zmiany w zasadach przechowywania i przetwarzania danych osobowych:
                </p>

                <ol className="list-decimal list-outside ml-6 space-y-3">
                  <li>Administratorem Państwa danych osobowych jest Stowarzyszenie Inżynierów i Techników Komunikacji Rzeczpospolitej Polskiej Oddział w Koszalinie, ul. Kupiecka 5, 75-671 Koszalin (zwane dalej SITK Koszalin).</li>
                  <li>Dane osobowe w rozumieniu RODO to dane umożliwiające identyfikację osób fizycznych.</li>
                  <li>Przetwarzanie Państwa danych jest realizowane przez SITK Koszalin i wynika z prowadzonej działalności.</li>
                  <li>Dane osobowe członków Stowarzyszenia zawarte w deklaracjach członkowskich służą wyłącznie do prowadzenia ewidencji wewnętrznej Oddziału i mogą być wymieniane z zarządami macierzystych kół i klubów. W uzasadnionych przypadkach dane te mogą być udostępnione Zarządowi Krajowemu SITK RP, a także zarządom pozostałych Oddziałów SITK RP. Dane osobowe członków SITK Koszalin nie są udostępniane w celach marketingowych.</li>
                  <li>Dane rzeczoznawców SITK RP oraz osób związanych z prowadzeniem działalności gospodarczej SITK Koszalin przekazywane są urzędom, do których ciąży obowiązek ich przekazywania w związku z zawieraniem umów cywilno-prawnych lub przekazywania sprawozdań.</li>
                  <li>Celem przetwarzania danych jest prowadzona działalność, jej promocja, wysyłka ofert świadczonych usług (w tym: szkolenia, kursy, konferencje, forum), itp.</li>
                  <li>Dane osób, o których mowa w pkt. 5 mogą być profilowane w celach marketingowych. W każdej chwili mają Państwo prawo zrezygnować z przetwarzania danych na te potrzeby. Podanie przez Państwo danych jest dobrowolne, lecz konieczne do zawarcia umów z SITK Koszalin, złożenia zamówienia na usługę/usług itp.</li>
                  <li>SITK Koszalin przetwarza je przez okres niezbędny do realizacji czynności wynikających z prowadzonej działalności.</li>
                  <li>SITK Koszalin przechowuje Państwa dane w sposób bezpieczny i mają do nich dostęp jedynie upoważnieni pracownicy. Dane będą przekazywane innym podmiotom wyłącznie w celach związanych z prowadzoną działalnością oraz w celu realizacji usługi/usług.</li>
                  <li>Mają Państwo prawo do wglądu, edycji, sprostowania, usunięcia, przeniesienia lub ograniczenia przetwarzania swoich danych osobowych i przypisanych do nich danych profilowych.</li>
                  <li>Dodatkowo przysługuje Państwu prawo do sprzeciwu i skargi do organu nadzorczego.</li>
                  <li>
                    W przypadku, gdy nie akceptują Państwo powyższych zmian zasad prosimy o poinformowanie nas o tym w sposób opisany poniżej. Przesłanie rezygnacji będzie skutkowało usunięciem danych z naszej bazy. We wszystkich sprawach związanych z przetwarzaniem przez SITK Koszalin Państwa danych osobowych, mogą Państwo się kontaktować w następujący sposób:
                    <ol className="list-[lower-alpha] list-outside ml-6 mt-2 space-y-1">
                      <li>za pośrednictwem poczty e-mail na adres: <a href="mailto:biuro@sitkkoszalin.pl" className="text-primary hover:underline">biuro@sitkkoszalin.pl</a> w temacie wpisując RODO;</li>
                      <li>za pośrednictwem poczty tradycyjnej na adres: Stowarzyszenie Inżynierów i Techników Komunikacji Rzeczpospolitej Polskiej Oddział w Koszalinie, ul. Kupiecka 5, 75-671 Koszalin</li>
                    </ol>
                  </li>
                </ol>

                <div className="text-right mt-10 pt-6 border-t border-border/50">
                  <p className="font-semibold text-foreground">
                    Zarząd<br />
                    Oddziału SITK RP<br />
                    w Koszalinie
                  </p>
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rodo;
