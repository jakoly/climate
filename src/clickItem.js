const icons = document.querySelectorAll('.onClick');
const texts = {
  steak: {
    headline: 'Rindfleisch',
    eat: '9',
    water: '15.000',
    co2: '14',
    description: 'Rindfleisch gehört zu den umweltschädlichsten Lebensmitteln überhaupt – und das aus mehreren Gründen. Rinder produzieren während der Verdauung große Mengen Methan, ein Treibhausgas, das etwa 25-mal wirksamer ist als CO2. Hinzu kommt der enorme Flächenbedarf: Für Weideflächen und den Anbau von Futtermitteln wie Soja werden weltweit riesige Waldflächen gerodet, besonders im Amazonasgebiet. Das zerstört nicht nur wichtige CO2-Speicher, sondern vernichtet auch Lebensräume für unzählige Tier- und Pflanzenarten. Auch der Wasserverbrauch ist beachtlich – für ein einziges Kilogramm Rindfleisch werden je nach Schätzung bis zu 15.000 Liter Wasser benötigt, vom Tränken der Tiere bis zur Bewässerung des Futters. Insgesamt verursacht die Rindfleischproduktion mehr Treibhausgasemissionen als der gesamte weltweite Verkehrssektor. Wer seinen ökologischen Fußabdruck reduzieren möchte, erzielt durch weniger Rindfleischkonsum eine der wirkungsvollsten Veränderungen im Alltag.',
  },
  cheese: {
    headline: 'Käse',
    description: 'Cheese production requires large amounts of water and energy.',
  },
  // ...
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