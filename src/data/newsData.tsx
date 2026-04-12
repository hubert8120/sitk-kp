import type { NewsItem } from "@/components/NewsCard";

import walneZebranie1 from "@/assets/news/walne-zebranie-2026-1.jpg";
import walneZebranie2 from "@/assets/news/walne-zebranie-2026-2.jpg";
import walneZebranie3 from "@/assets/news/walne-zebranie-2026-3.jpg";
import parisMontmartre from "@/assets/news/paris-montmartre.jpg";
import parisVersailles from "@/assets/news/paris-versailles.jpg";
import viennaChurch from "@/assets/news/vienna-church.jpg";
import viennaSchoenbrunn from "@/assets/news/vienna-schoenbrunn.jpg";
import forumMain from "@/assets/news/forum-main.jpg";
import forum1 from "@/assets/news/forum-1.jpg";
import forumPoster from "@/assets/news/forum-poster.jpg";
import forumDay1 from "@/assets/news/forum-program-day1.jpg";
import forumDay2 from "@/assets/news/forum-program-day2.jpg";
import forumDay3 from "@/assets/news/forum-program-day3.jpg";
import makroregionMain from "@/assets/news/makroregion-main.jpg";
import makroregionKarykatury from "@/assets/news/makroregion-karykatury.jpg";
import makroregionDay1 from "@/assets/news/makroregion-day1.jpg";
import makroregionDay2 from "@/assets/news/makroregion-day2.jpg";
import makroregionDay3 from "@/assets/news/makroregion-day3.jpg";
import wimedImage from "@/assets/news/WIMED 2.jpg";

const WimedTripDescription = () => (
  <div className="space-y-6">
    <h3 className="font-serif text-xl md:text-2xl text-foreground font-bold leading-snug">
      Informacja o planowanym wyjeździe technicznym
    </h3>

    <p>
      W dniach 17 - 23 maja 2026r. planowany jest wyjazd techniczny dla wszystkich członków naszego Oddziału.
    </p>

    <p>
      Na zaproszenie firmy <strong>WIMED Sp. z o.o. Sp.k. z Tuchowa</strong> będziemy mogli zwiedzić siedzibę jednej z najbardziej liczących się polskich firm związanych z bezpieczeństwem na drogach, której produkty są cenione w całej Europie. Poznamy, z bezpośredniej relacji, tajniki projektowania oraz produkcji elementów BRD, z których słynie firma WIMED.
    </p>

    <figure className="max-w-3xl mx-auto my-8">
      <img loading="lazy"
        src={wimedImage} srcSet={`${wimedImage} 1x, ${wimedImage} 2x`}
        alt="Siedziba firmy WIMED"
        className="w-full rounded-2xl shadow-lg object-cover"
      />
      <figcaption className="text-sm text-muted-foreground mt-3 text-center">źródło: https://www.google.com/maps</figcaption>
    </figure>

    <p>
      Dla naszych uczestników przedstawiciele firmy <strong>EUROVIA Polska S.A.</strong> zaprezentują i omówią powstanie i budowę jednego ze swoich najnowszych pomysłów, instalację <strong>Power Road®</strong> w Ropczycach.
    </p>
    
    <p>
      Ponadto, podczas wyjazdu planowane jest spotkanie z przedstawicielami krajowej i samorządowej administracji drogowej w Rzeszowie oraz wizyty na budowach drogowych woj. podkarpackiego.
    </p>

    <p>
      Oczywiście nie zabraknie również części turystycznej, w której uczestnicy odwiedzą najbardziej znane atrakcje turystyczne Rzeszowa, Tarnowa i okolic.
    </p>

    <div className="pt-6 relative">
      <div className="absolute inset-0 bg-gold/10 blur-xl rounded-full" />
      <p className="relative font-bold text-gradient text-center text-xl md:text-2xl pt-4">
        Serdecznie zapraszamy do udziału w wyjeździe!
      </p>
    </div>
  </div>
);

const ForumDescription = () => (
  <div className="space-y-6">
    <h3 className="font-serif text-xl md:text-2xl text-foreground font-bold leading-snug">
      XXIV Forum Drogownictwa Zachodniopomorskiego o wiodącym tytule:
    </h3>
    <p className="text-foreground font-semibold text-lg italic text-center">
      „Tunele i obiekty inżynieryjne, innowacyjne technologie i materiały nawierzchniowe
      w infrastrukturze drogowo-mostowej"
    </p>

    <img width={1916} height={1165} loading="lazy"
      src={forumPoster} srcSet={`${forumPoster} 1x, ${forumPoster} 2x`}
      alt="Plakat konferencji XXIV Forum Drogownictwa Zachodniopomorskiego"
      className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
    />

    <p>
      W dniach 1-3 października 2025 r. odbyła się w hotelu FERRY w Mielnie, kolejna Konferencja
      Naukowo-Techniczna w ramach XXIV Forum Drogownictwa Zachodniopomorskiego o wiodącym
      tytule: „Tunele i obiekty inżynieryjne, innowacyjne technologie i materiały nawierzchniowe w
      infrastrukturze drogowo-mostowej".
    </p>

    <img width={1920} height={1080} loading="lazy"
      src={forumDay1} srcSet={`${forumDay1} 1x, ${forumDay1} 2x`}
      alt="Program konferencji - Dzień 1"
      className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
    />

    <p>
      Uczestniczyło w niej ok. 110 osób - Przedstawicieli drogowej administracji krajowej (GDDKiA) i
      samorządowej (drogi wojewódzkie, powiatowe i gminne), Przedstawiciele wielu wiodących jednostek
      Wykonawczych, Biur Projektowych i Nadzoru oraz Przedstawiciele Samorządu w tym z Urzędu
      Marszałkowskiego w Szczecinie, Starostwa w Koszalinie i innych.
    </p>

    <p>
      W ramach trzydniowej Konferencji, przedstawiono 22 tematy - prezentacje techniczne, dotyczące
      szerokiego spektrum zagadnień zawodowych drogowo-mostowo-tunelowych, w tym nowoczesnych,
      innowacyjnych technologii robót i materiałów ujętych w Programie Konferencji.
    </p>

    <p>Przedstawiono również poza w/w Programem dwa dodatkowe tematy:</p>
    <ul className="list-disc pl-6 space-y-1">
      <li>innowacyjne progi zwalniające zrealizowane na drodze Powiatowego Zarządu Dróg w Koszalinie</li>
      <li>tymczasowe nawierzchnie z tworzyw sztucznych do każdego rodzaju obciążenia w tym b. ciężkiego.</li>
    </ul>

    <p>
      W dniu 3.10.2025 zaprezentowano uczestnikom Konferencji w ramach wyjazdu na budowę, realizację
      zadania inwestycyjnego „Budowa drogi S11 na odcinku Koszalin - Szczecinek: węzeł „Bobolice" (bez
      węzła) - węzeł „Szczecinek Północ" (z węzłem)" realizowanego dla GDDKiA Oddział Szczecin przez
      INTERCOR Sp. z o.o.
    </p>

    <p>
      Pierwszy dzień Konferencji zakończono uroczystą kolacją integracyjną, bankietową z DJ, zaś drugi
      dzień Konferencji kolacją grillową z degustacją różnego rodzaju piwa a zakończenie Konferencji
      nastąpiło obiadem, po powrocie do hotelu FERRY z w/w budowy.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <img width={1920} height={1080} loading="lazy"
        src={forumDay2} srcSet={`${forumDay2} 1x, ${forumDay2} 2x`}
        alt="Program konferencji - Dzień 2"
        className="w-full rounded-2xl shadow-lg"
      />
      <img width={1920} height={1080} loading="lazy"
        src={forumDay3} srcSet={`${forumDay3} 1x, ${forumDay3} 2x`}
        alt="Program konferencji - Dzień 3"
        className="w-full rounded-2xl shadow-lg"
      />
    </div>
  </div>
);

const MakroregionDescription = () => (
  <div className="space-y-6">
    <h3 className="font-serif text-xl md:text-2xl text-foreground font-bold leading-snug text-center">
      Spotkanie międzyoddziałowe członków Oddziałów SITK RP oraz Konferencja Techniczna
    </h3>
    <p className="text-foreground font-semibold text-lg italic text-center">
      „Tunele i obiekty inżynieryjne, nawierzchnie - w Infrastrukturze Drogowej i Kolejowej"
    </p>

    <p>
      W dniach 17 – 19 września w Hotelu Ferry i Hotelu Royal Park w Mielnie Oddział SITK RP w Koszalinie
      we współpracy z Oddziałem SITK RP w Szczecinie zorganizował spotkanie międzyoddziałowe członków
      SITK RP z całej Polski „Makroregion 2025".
    </p>

    <p>
      W spotkaniu uczestniczyło łącznie 102 osoby z 21 oddziałów SITK RP, członkowie Zarządu Krajowego
      SITK RP oraz przedstawiciele jednostek wykonawczych i zaproszeni goście.
    </p>

    <p>
      W trakcie Makroregionu zaprezentowano i omówiono działalności 18 z przybyłych 21 Oddziałów SITK
      RP z Polski oraz przedyskutowano kierunki rozwoju dalszej działalności SITK RP.
    </p>

    <img width={1046} height={768} loading="lazy"
      src={makroregionDay1} srcSet={`${makroregionDay1} 1x, ${makroregionDay1} 2x`}
      alt="Program spotkania - Dzień 1 (17.09.2025)"
      className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
    />

    <p>
      Podsumowaniem pierwszego dnia Makroregionu - 17.09.2025, była kolacja grillowa z muzyką
      „Nadmorskie Barbecue" oraz warsztaty techniczne „Tajemnice Świata Piwa".
    </p>

    <p>
      Podsumowaniem drugiego dnia Makroregionu - 18.09.2025, była uroczysta kolacja bankietowa z
      DJ-em oraz wręczeniem portretów karykatur Prezesów Oddziałów z Koszalina i Szczecina.
    </p>

    <p>Ponadto w ramach Makroregionu omówiono tematy merytoryczne SITK RP:</p>
    <ul className="list-disc pl-6 space-y-1">
      <li>Działalność Rady Krajowej</li>
      <li>Przygotowania do Zjazdu w 2026 r.</li>
      <li>Wnioski o wyróżnienia, odznaczenia honorowe, medale, Ernesty</li>
      <li>Współpraca z uczelniami i organami samorządowymi, inne</li>
    </ul>

    <img width={1166} height={915} loading="lazy"
      src={makroregionDay2} srcSet={`${makroregionDay2} 1x, ${makroregionDay2} 2x`}
      alt="Program spotkania - Dzień 2 (18.09.2025)"
      className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
    />

    <img width={1175} height={893} loading="lazy"
      src={makroregionDay3} srcSet={`${makroregionDay3} 1x, ${makroregionDay3} 2x`}
      alt="Program spotkania - Dzień 3 (19.09.2025)"
      className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
    />

    <p>
      Należy podkreślić, że pierwszy raz w historii działalności SITK RP, po dwóch uczestników z każdego
      Oddziału SITK RP z Polski (było 21 oddziałów), uczestniczyło w całej trzydniowej imprezie, łącznie z
      noclegami i dodatkowym transportem z Koszalina i do Koszalina <strong>nieodpłatnie</strong> — staraniem
      organizatorów Makroregionu — Oddziału SITK RP Koszalin i Szczecin.
    </p>

    <p>
      W ramach „Makroregionu 2025" odbyła się Konferencja Naukowo-Techniczna pod tytułem: „Tunele i
      obiekty inżynieryjne, nawierzchnie - w Infrastrukturze Drogowej i Kolejowej".
    </p>

    <p>W trzech blokach Konferencji zaprezentowano:</p>
    <ul className="list-disc pl-6 space-y-1">
      <li>wszystkie wybudowane tunele drogowe w Polsce — 17 obiektów,</li>
      <li>14 tuneli kolejowych realizowanych przez PKP PLK,</li>
      <li>budowę tunelu kolei dużych prędkości w Łodzi z Przedstawicielem Firmy PORR,</li>
      <li>wybrane nowoczesne technologie do utrzymania nawierzchni na sieci dróg w Polsce.</li>
    </ul>

    <p className="font-semibold text-foreground">
      Prezentacja wybranych tuneli i obiektów inżynieryjnych, zrealizowanych oraz planowanych na terenie
      kraju, a związanych z rozwojem infrastruktury drogowo-mostowej sieci dróg krajowych i samorządowych:
    </p>
    <ul className="list-disc pl-6 space-y-1">
      <li>Wystąpienie Przedstawiciela Generalnej Dyrekcji Dróg Krajowych i Autostrad Oddział Szczecin</li>
      <li>Tunel w Świnoujściu — Przedstawiciel Firmy PORR S.A.</li>
      <li>Trasa Łagiewnicka w Krakowie — Przedstawiciel Firmy BUDIMEX S.A.</li>
      <li>S19 Jawornik - Lutcza — Przedstawiciel Firmy BUDIMEX S.A.</li>
      <li>S1 Węgierska Górka — Przedstawiciel Firmy MIRBUD S.A.</li>
      <li>S19 Rzeszów-Babica — Przedstawiciel Firmy MOSTOSTAL S.A.</li>
    </ul>

    <p className="font-semibold text-foreground">
      Prezentacja wybranych technologii do nawierzchni dróg krajowych i samorządowych:
    </p>

    <p className="font-medium text-foreground">
      Przedłużenie okresu użytkowania nawierzchni asfaltowej — najbardziej efektywne technologie
      utrzymaniowe. Cienkie dywaniki emulsyjne (CWZ) oraz rejuvenatory w praktyce.
    </p>
    <ul className="list-disc pl-6 space-y-1">
      <li>dlaczego warto zajmować się przedłużaniem trwałości nawierzchni</li>
      <li>degradacja nawierzchni asfaltowej — przyczyny i mechanizmy</li>
      <li>cienkie dywaniki emulsyjne (CWZ) — zasada działania i zastosowanie</li>
      <li>kolorowe cienkie dywaniki emulsyjne</li>
      <li>studium przypadków — realizacje w praktyce</li>
      <li>rekomendacje i dobre praktyki</li>
      <li>rejuvenatory („odmładzacze") lepiszcza asfaltowego, zasada działania, technologia aplikacji, efekty</li>
    </ul>

    <p className="font-medium text-foreground">
      Zatrzymać spękania u źródła: asfaltowe membrany przeciwspękaniowe w infrastrukturze drogowej
    </p>
    <ul className="list-disc pl-6 space-y-1">
      <li>znaczenie trwałości nawierzchni asfaltowej</li>
      <li>mechanizmy powstawania spękań w nawierzchniach asfaltowych</li>
      <li>technologia stosowania membran przeciwspękaniowych</li>
      <li>efektywność membran przeciwspękaniowych</li>
      <li>studium przypadków i praktyczne doświadczenia</li>
    </ul>
    <p>Przedstawiciele Firm: INRECO-Emulsja Sp. z o.o., Pankas A/S, Pankas Sp. z o.o.</p>

    <p>
      Realizacje i plany inwestycyjne PKP PLK S.A. w tym tunele — Wystąpienie Przedstawiciela PKP
      Polskie Linie Kolejowe S.A.
    </p>

    <p>
      Budowa Tunelu kolei Dużych Prędkości w Łodzi — Przedstawiciel Firmy PORR S.A.
    </p>
  </div>
);

const WalneZebraniaDescription = () => (
  <div className="space-y-6">
    <h3 className="font-serif text-xl md:text-2xl text-foreground font-bold leading-snug">
      Walne Zwyczajne Zebranie sprawozdawczo-wyborcze Delegatów Oddziału SITK RP w Koszalinie
    </h3>

    <p>
      W dniu 27.02.2026 r. odbyło się Walne Zwyczajne Zebranie sprawozdawczo-wyborcze Delegatów
      Oddziału SITK RP w Koszalinie, na którym Zarząd Oddziału przedstawił delegatom oraz członkom Komisji
      Rewizyjnej i przewodniczącym klubów sprawozdanie z działalności Oddziału w kadencji 2022– 2025 r.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <img loading="lazy"
        src={walneZebranie1} srcSet={`${walneZebranie1} 1x, ${walneZebranie1} 2x`}
        width={4000} height={2252}
        alt="Walne Zebranie Delegatów SITK RP w Koszalinie 2026 – obrady"
        className="w-full rounded-2xl shadow-lg object-cover"
        style={{ objectPosition: '85% center' }}
      />
      <img loading="lazy"
        src={walneZebranie2} srcSet={`${walneZebranie2} 1x, ${walneZebranie2} 2x`}
        width={4000} height={2252}
        alt="Wanie Zebranie SITK RP 2026 – wręczenie odznaczeń"
        className="w-full rounded-2xl shadow-lg object-cover"
      />
    </div>

    <p>
      Ustępujący Zarząd, w drodze głosowania uzyskał jednogłośnie absolutorium od delegatów.
      W drodze głosowania wybrano Prezesa Oddziału, którym na kolejną kadencję został{" "}
      <strong>Janusz Komorowski</strong>. Delegaci wybrali również nowy skład Zarządu Oddziału,
      skład Komisji Rewizyjnej Oddziału oraz swoich delegatów na XXXIV Zwyczajny Walny Zjazd
      Delegatów SITK RP, który odbędzie się w dniach 11–12.05.2026 r. w Warszawie.
    </p>

    <p>
      Prezes Oddziału przedstawił plany działalności statutowej na rok 2026, w tym przede wszystkim:
    </p>
    <ul className="list-disc pl-6 space-y-1">
      <li><strong>18–22.05.2026</strong> – wyjazd techniczny do Tuchowa (wizyta w firmie WIMED) i Rzeszowa</li>
      <li><strong>12–14.06.2026</strong> – 30. Piknik Techniczny w Mielnie (organizowany przez Klub w Koszalinie)</li>
      <li><strong>I połowa września</strong> – wycieczka techniczna do krajów Beneluksu</li>
      <li><strong>30.09–02.10.2026</strong> – XXV Forum Drogownictwa Województwa Zachodniopomorskiego</li>
      <li>Spływ kajakowy organizowany przez Klub w Szczecinku</li>
    </ul>

    <img loading="lazy"
      src={walneZebranie3} srcSet={`${walneZebranie3} 1x, ${walneZebranie3} 2x`}
      width={4000} height={2252}
      alt="Walne Zebranie SITK RP 2026 – wręczenie tytułów Zasłużony Senior"
      className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg"
    />

    <p>
      Podczas Zebrania wręczono czterem członkom Oddziału{" "}
      <strong>Srebrne Odznaczenia SITK RP</strong>, a także uhonorowano czworo z naszych członków
      tytułami <strong>Zasłużony Senior SITK RP</strong>.
    </p>
  </div>
);

export const newsItems: NewsItem[] = [
  {
    id: "wimed-trip-2026",
    title: "Planowany wyjazd techniczny - WIMED, Tuchów, Rzeszów",
    date: "17 - 23 maja 2026",
    location: "Tuchów, Rzeszów, Tarnów",
    participants: 0,
    category: "wyjazd",
    images: [wimedImage],
    shortDescription: "Informacja o planowanym wyjeździe technicznym dla wszystkich członków naszego Oddziału. Odwiedzimy firmę WIMED, zapoznamy się z instalacją Power Road® w Ropczycach oraz spotkamy się z administracją drogową.",
    fullDescription: <WimedTripDescription />,
    highlights: [
      "Wizyta w siedzibie WIMED Sp. z o.o.",
      "Prezentacja instalacji Power Road®",
      "Spotkanie z administracją drogową",
      "Wizyty na budowach drogowych",
      "Atrakcje Rzeszowa i Tarnowa"
    ]
  },
  {
    id: "walne-zebranie-2026",
    title: "Walne Zwyczajne Zebranie sprawozdawczo-wyborcze Delegatów",
    date: "27 lutego 2026",
    location: "Koszalin",
    participants: 40,
    category: "wydarzenie",
    images: [walneZebranie1, walneZebranie2, walneZebranie3],
    shortDescription: "Walne Zebranie Delegatów Oddziału SITK RP w Koszalinie podsumowujące kadencję 2022–2025. Wybrano nowy Zarząd, Prezesa Janusza Komorowskiego oraz delegatów na Zjazd SITK RP w Warszawie.",
    fullDescription: <WalneZebraniaDescription />,
    highlights: [
      "Absolutorium dla ustępującego Zarządu",
      "Reelekcja Prezesa J. Komorowskiego",
      "Nowy skład Zarządu i Komisji Rewizyjnej",
      "Srebrne Odznaczenia SITK RP ×4",
      "Tytuł Zasłużony Senior SITK RP ×4",
      "Plany na rok 2026"
    ],
    imagePositions: ["85% center", undefined, undefined]
  },

  {
    id: "forum-2025",
    title: "XXIV Forum Drogownictwa Zachodniopomorskiego",
    date: "1-3 października 2025",
    location: "Hotel FERRY, Mielno",
    participants: 110,
    category: "wydarzenie",
    images: [forumMain, forum1],
    shortDescription: "Konferencja Naukowo-Techniczna o wiodącym tytule: Tunele i obiekty inżynieryjne, innowacyjne technologie i materiały nawierzchniowe w infrastrukturze drogowo-mostowej.",
    fullDescription: <ForumDescription />,
    highlights: [
      "22 prezentacje techniczne",
      "110 uczestników",
      "Wizyta na budowie S11",
      "Tunele i obiekty inżynieryjne",
      "Innowacyjne technologie",
      "Materiały nawierzchniowe"
    ]
  },
  {
    id: "makroregion-2025",
    title: "Spotkanie międzyoddziałowe członków Oddziałów SITK RP",
    date: "17-19 września 2025",
    location: "Hotel Ferry i Royal Park, Mielno",
    participants: 102,
    category: "wydarzenie",
    images: [makroregionMain, makroregionKarykatury],
    imagePositions: [undefined, "center 30%"],
    shortDescription: 'Konferencja Techniczna pn.: \u201ETunele i obiekty inżynieryjne, nawierzchnie - w Infrastrukturze Drogowej i Kolejowej\u201D. Spotkanie \u201EMakroregion 2025\u201D z udziałem 102 osób z 21 oddziałów SITK RP z całej Polski.',
    fullDescription: <MakroregionDescription />,
    highlights: [
      "102 uczestników z 21 oddziałów",
      "Tunele drogowe w Polsce",
      "14 tuneli kolejowych PKP PLK",
      "Konferencja Naukowo-Techniczna",
      "Makroregion 2025",
      "Technologie nawierzchniowe"
    ]
  },
  {
    id: "paris-2025",
    title: "Wyjazd techniczny do Francji",
    date: "22-29 czerwca 2025",
    location: "Paryż, Francja",
    participants: 40,
    category: "wyjazd",
    images: [parisMontmartre, parisVersailles],
    shortDescription: "Odwiedziny w centrum badawczo-rozwojowym Core Center firmy COLAS oraz zwiedzanie najpiękniejszych zabytków Paryża.",
    fullDescription: `W dniach 22-29 czerwca 2025 r. odbył się oddziałowy wyjazd techniczny Oddziału SITK RP w Koszalinie do Francji. W wyjeździe brali udział członkowie Kół: w Białogardzie, w Chojnie, w Drawsku Pom., w Koszalinie, przy RDK w Koszalinie, w Starych Bielicach oraz w Szczecinku.

Głównym punktem programu technicznego były odwiedziny w centrum badawczo-rozwojowym Core Center firmy COLAS w Magny-les-Hameaux we Francji. Uczestnicy wyjazdu zapoznali się z jednym z największych na świecie prywatnych ośrodków badawczo-rozwojowych branży drogowej.

Mieliśmy okazję zobaczyć wielkie i wspaniale wyposażone laboratoria prowadzące prace nad nowatorskimi rodzajami nawierzchni, w tym warstwy nawierzchniowe uzyskujące barwę poprzez stosowanie materiałów organicznych, nawierzchnie z wbudowanymi ogniwami fotowoltaicznymi, czy nawierzchnie z wbudowanymi znakami świetlnymi.`,
    highlights: [
      "Centrum badawczo-rozwojowe COLAS",
      "Nowoczesne laboratoria drogowe",
      "Wieża Eiffela i Łuk Triumfalny",
      "Katedra Notre Dame",
      "Muzeum Luwru",
      "Pałac w Wersalu"
    ]
  },
  {
    id: "vienna-2023",
    title: "Wyjazd techniczny do Austrii",
    date: "6-14 października 2023",
    location: "Wiedeń, Austria",
    participants: 40,
    category: "wyjazd",
    images: [viennaChurch, viennaSchoenbrunn],
    shortDescription: "Wizyta w wiedeńskiej centrali firmy STRABAG AG oraz zwiedzanie zabytków Wiednia.",
    fullDescription: `W dniach 6-14 października 2023 r. Oddział SITK RP w Koszalinie zorganizował wyjazd techniczny do Austrii. W wyjeździe wzięło udział 40 osób z kół w Białogardzie, Chojnie, Drawsku Pom., Szczecinku, oraz w Koszalinie: przy RDK, przy RDW, przy ZZDW.

W części technicznej wyjazdu uczestnicy odwiedzili wiedeńską centralę firmy STRABAG AG oraz wykonany w nowoczesnych technologiach budynek oddziału STRABAG AG w Hausleiten, należącą do tej firmy wytwórnię mas bitumicznych, laboratoria firmy TPA w Trumau, firmę STRABAG BMTI w Trumau oraz obwód utrzymania autostrad państwowej spółki ASFINAG w Stockerau.

W turystycznej części wyjazdu uczestnicy zwiedzili Wiedeń, odwiedzając wspaniałe zabytki, przepiękne cesarskie rezydencje, muzea, pomniki i kościoły.`,
    highlights: [
      "Centrala STRABAG AG",
      "Wytwórnia mas bitumicznych",
      "Muzeum Komunikacji",
      "Pałac Schönbrunn",
      "Katedra św. Szczepana",
      "Hofburg"
    ]
  }
];
