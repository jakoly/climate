const icons = document.querySelectorAll('.onClick');
const texts = {
  shrimp: {
    headline: 'Garnelen',
    eat: '1',         // ~1 kg/Kopf/Jahr in Deutschland
    water: '3.500',   // Liter/kg (Aquakultur, inkl. Futtermittel)
    co2: '12',        // kg CO₂-Äquivalente/kg (Aquakultur, Mangrovenrodung eingerechnet)
    description: 'Garnelen wirken harmlos, haben aber einen enormen ökologischen Fußabdruck. Für ihre Aquakultur werden in Südostasien und Lateinamerika großflächig Mangrovenwälder gerodet – wichtige Ökosysteme, die bis zu fünfmal mehr CO₂ speichern als tropische Regenwälder. Hinzu kommt der hohe Energieaufwand für Pumpen, Belüftung und Kühlung in den Farmen sowie der weite Transportweg nach Europa. Wildfang-Garnelen sind oft kaum besser: Beim Schleppnetzfischen wird der Meeresboden zerstört und enorme Mengen Beifang getötet.',
  },
  avocado: {
    headline: 'Avocado',
    eat: '2',         // ~2 kg/Kopf/Jahr in Deutschland (stark gestiegen)
    water: '540',     // Liter/kg
    co2: '0.6',       // kg CO₂-Äquivalente/kg (niedrig, aber Wasserknappheit & Rodung)
    description: 'Die Avocado hat einen vergleichsweise niedrigen CO₂-Fußabdruck, ist aber aus anderen Gründen ökologisch problematisch. Für ein einziges Kilogramm werden rund 540 Liter Wasser benötigt – und das meist in ohnehin trockenen Anbauregionen wie Chile oder Mexiko, wo der Anbau zu massiver Wasserknappheit führt. Für neue Plantagen werden jährlich tausende Hektar Wald gerodet. In Mexiko hat zudem das organisierte Verbrechen den lukrativen Avocado-Handel infiltriert, was die sozialen und ökologischen Schäden weiter verschärft.',
  },
  cocoa: {
    headline: 'Kakao',
    eat: '3',         // ~3 kg/Kopf/Jahr Kakaobohnenäquivalent (Deutsche essen ~9 kg Schokolade)
    water: '20.000',  // Liter/kg (einer der höchsten Werte überhaupt)
    co2: '4',         // kg CO₂-Äquivalente/kg Kakao (inkl. Rodung)
    description: 'Kakao gehört zu den wasserintensivsten Lebensmitteln der Welt: Für ein Kilogramm werden über 20.000 Liter Wasser benötigt. Der Anbau findet fast ausschließlich in tropischen Regionen Westafrikas und Südamerikas statt, wo dafür in großem Maßstab Regenwälder gerodet werden. Als Grundzutat von Schokolade ist Kakao für erhebliche CO₂-Emissionen verantwortlich – verstärkt durch den häufigen Einsatz von Palmöl in der Verarbeitung, das seinerseits mit weiterer Abholzung verbunden ist.',
  },
  rice: {
    headline: 'Reis',
    eat: '7',         // ~6,6–7 kg/Kopf/Jahr in Deutschland
    water: '2.500',   // Liter/kg
    co2: '3',         // kg CO₂-Äquivalente/kg
    description: 'Reis ist das Grundnahrungsmittel für die Hälfte der Weltbevölkerung, hat aber einen für ein pflanzliches Produkt überraschend hohen Klimaeinfluss. Überflutete Reisfelder sind ideale Brutstätten für Methan-produzierende Bakterien, da organisches Material unter Sauerstoffabschluss zerfällt. Methan ist als Treibhausgas rund 25-mal wirksamer als CO₂. Reisfelder sind weltweit für rund 10 % der landwirtschaftlichen Treibhausgasemissionen verantwortlich. Hinzu kommt ein hoher Wasserverbrauch, da die Felder kontinuierlich überflutet werden müssen.',
  },
  freezer: {
    headline: 'TK-Produkte',
    eat: '45',        // ~45 kg/Kopf/Jahr in Deutschland (Tiefkühlpizzen, -gemüse, -pommes etc.)
    water: '–',       // variiert stark je nach Inhalt
    co2: '6',         // kg CO₂-Äquivalente/kg (Durchschnitt, z. B. Tiefkühlpommes ~5,7 kg)
    description: 'Tiefkühlprodukte sind ein versteckter Klimasünder im Alltag. Das Problem liegt weniger im eigentlichen Lebensmittel als in der Verarbeitung und Logistik: Für das Tiefkühlen, den Transport in gekühlten LKWs und die Lagerung in Kühlhäusern wird kontinuierlich Energie aufgewendet – von der Produktion bis in den heimischen Gefrierschrank. Tiefkühlpommes etwa erzeugen durch Trocknung, Frittieren und Einfrieren rund 5,7 kg CO₂ pro Kilogramm. Hinzu kommt die oft aufwendige Verpackung. Der Pro-Kopf-Verbrauch in Deutschland ist mit rund 45 kg pro Jahr einer der höchsten in Europa.',
  },
  steak: {
    headline: 'Rindfleisch',
    eat: '9',
    water: '15.000',
    co2: '27',        // kg CO₂-Äquivalente/kg (konservative Schätzung, Spanne 13–60 je nach Studie)
    description: 'Rindfleisch gehört zu den umweltschädlichsten Lebensmitteln überhaupt – und das aus mehreren Gründen. Rinder produzieren während der Verdauung große Mengen Methan, ein Treibhausgas, das etwa 25-mal wirksamer ist als CO₂. Hinzu kommt der enorme Flächenbedarf: Für Weideflächen und den Anbau von Futtermitteln wie Soja werden weltweit riesige Waldflächen gerodet, besonders im Amazonasgebiet. Das zerstört nicht nur wichtige CO₂-Speicher, sondern vernichtet auch Lebensräume für unzählige Tier- und Pflanzenarten. Auch der Wasserverbrauch ist beachtlich – für ein einziges Kilogramm Rindfleisch werden bis zu 15.000 Liter Wasser benötigt. Insgesamt verursacht die Rindfleischproduktion mehr Treibhausgasemissionen als der gesamte weltweite Verkehrssektor.',
  },
  butter: {
    headline: 'Butter',
    eat: '6',         // ~6 kg/Kopf/Jahr in Deutschland
    water: '12.000',  // Liter/kg (durch den hohen Milchbedarf von ~18–28 L Milch/kg Butter)
    co2: '23',        // kg CO₂-Äquivalente/kg (höchster Wert unter den Alltagsprodukten)
    description: 'Butter ist überraschenderweise eines der klimaschädlichsten Lebensmittel im deutschen Alltag – sogar noch vor Rindfleisch. Der Grund: Für ein Kilogramm Butter werden etwa 18 bis 28 Liter Milch benötigt, was eine intensive Kuhhaltung voraussetzt. Die Kühe produzieren dabei kontinuierlich Methangas, das weit klimaschädlicher ist als CO₂. Hinzu kommt der enorme Wasserverbrauch für Futtermittelanbau und Tierhaltung. Da Butter ein reines Konzentrat aus Milch ist, potenziert sich der Umwelteinfluss der Milchwirtschaft auf engstem Raum.',
  },
  cheese: {
    headline: 'Käse',
    eat: '10',        // ~10 kg/Kopf/Jahr in Deutschland
    water: '5.000',   // Liter/kg (variiert stark je nach Sorte)
    co2: '13',        // kg CO₂-Äquivalente/kg
    description: 'Käse hat einen deutlich höheren Umwelteinfluss als die meisten Menschen vermuten. Ähnlich wie bei Butter liegt das Problem in der Konzentration: Für ein Kilogramm Käse werden je nach Sorte rund 8 bis 10 Liter Milch benötigt. Damit bringt Käse den gesamten CO₂- und Methan-Fußabdruck der Rinderhaltung komprimiert auf den Teller. Hart- und Schnittkäse wie Parmesan oder Emmentaler schneiden dabei besonders schlecht ab, da sie noch mehr Milch pro Kilogramm benötigen als Weichkäse. Mit einem Pro-Kopf-Verbrauch von rund 10 kg ist Käse zudem eines der meistkonsumierten tierischen Produkte in Deutschland.',
  }
};


icons.forEach(img => {
  img.addEventListener('click', function() {
    openDetails(this.id);
  });
});

function openDetails(id) {
  const headline    = document.getElementById('headline');
  const eat = document.getElementById('eat');
  const water = document.getElementById('water');
  const co2 = document.getElementById('co2');
  const description = document.getElementById('description');

  document.getElementById('content').style.display = 'block';
  headline.textContent    = texts[id].headline    ?? 'Unknown';
  eat.textContent = (texts[id].eat + ' kg/Kopf') ?? 'No Data';
  water.textContent = (texts[id].water + ' Liter*') ?? 'No Data';
  co2.textContent = (texts[id].co2 + ' kg*') ?? 'No Data';
  description.textContent = (texts[id].description) ?? 'No Data';
}