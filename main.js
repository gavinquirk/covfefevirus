const queryCounties = (recordCount = 50) => {
  // Fetch data from Johns Hopkins by county. Default record ammount is 50. Total counties in US is 3141
  fetch(
    `https://services9.arcgis.com/6Hv9AANartyT7fJW/arcgis/rest/services/USCounties_cases_V1/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&resultOffset=0&resultRecordCount=${recordCount}&resultType=standard&cacheHint=true`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};
