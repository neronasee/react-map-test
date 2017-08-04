import anychart from 'anychart';

class MapHelper {
  constructor(data, filterValue, containerName) {
    this.filterValue = filterValue || 500000;
    this.containerName = containerName || 'container';
    this.data = this._mapData(data);

    this.reDrawMap = this.reDrawMap.bind(this);
  }

  reDrawMap(filterValue) {
    if(!filterValue || !Number.isInteger(filterValue) || filterValue < 200000) {
      return;
    }

    this.filterValue = filterValue;

    const filteredData = this._filterCities();
    const dataSet = anychart.data.set(filteredData);
    
    this.map.removeAllSeries();

    this._configAndDraw(dataSet);
  }

  _filterCities() {
    return this.data.filter(city => city.population >= this.filterValue);
  }
  _configAndDraw(dataSet) {
    this.map.title(`Cities with population over ${this.filterValue}`);
    this.series = this.map.marker(dataSet);
    this.series.tooltip().format("Population: {%population}");
    this.series.labels(false);
    this.map.draw();
  }
  _mapData(data) {
    return data.map(city => ({
      lat: city.Lat,
      long: city.Long,
      name: city["City Name"],
      population: city.Population
    }));
  }

  init() {
    const filteredData = this._filterCities();
    const dataSet = anychart.data.set(filteredData);

    this.map = anychart.map();
    this.map.container(this.containerName);
    this.map.geoData(anychart.maps.world);
    
    this._configAndDraw(dataSet);
  }
}

export default (data, defaultFilterValue, containerName) => {
  return new MapHelper(data, defaultFilterValue, containerName);
}
