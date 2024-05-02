document.addEventListener('DOMContentLoaded', function() {  
  // populate the dropdown menu for country names section:

  // get the dropdown datalist element
  const dropdown = document.getElementById("dropdown")
  // for each country
  countryData.forEach((data) => {
    // create a new option element
    let option = document.createElement("option")
    // make the value attribute the country name
    option.value = data
    // add the option to the dropdown
    dropdown.appendChild(option)
  })

  // USER INPUT SECTION
  // listen for when submit button gets clicked and check if correct
  let submitBtn = document.getElementById('submitBtn')
  submitBtn.addEventListener('click', checkCorrect)

  // function that checks and displays correctness
  function checkCorrect() {
    // when they submit, get their answer
    let userInput = document.getElementById('guess')
    // ignore case basically
    let answer = userInput.value.toLowerCase()

    // prepare to display correct section:
    let correctSection = document.getElementById("correct")
    correctSection.style.display = 'block'

    // update points (increase total by 1)
    let pointsSection = document.getElementById("points")
    points.total += 1; 

    // check if their answer matches right answer
    if (answer == country.toLowerCase()) {
      // CORRECT
      // clear out any text from before
      correctSection.innerHTML = ''
      // add correct text
      correctSection.appendChild(document.createTextNode('Correct!'))

      // update points (increase the num of correct by 1)
      points.correct += 1;
    }
    else {
      // WRONG
      // clear out any text from before
      correctSection.innerHTML = ''  
      // add wrong text    
      correctSection.appendChild(document.createTextNode('Wrong! It is: ' + country))
    }
    
    // DISPLAY POINTS by populating the HTML
    pointsSection.innerHTML = "POINTS: " + points.correct + "/" + points.total
  }

  // REGENERATE BUTTON SECTION
  let regenBtn = document.getElementById('regenBtn')
  regenBtn.addEventListener('click', regen)

  // regenerate new map function
  function regen() {
        // clear out whatever was in input box (previous guess)
        document.getElementById('guess').value = ""

        // generate random coords with function
        var coordData = randomCoord()
        console.log(coordData)
        // store the answer in this variable
        country = coordData.country
        // store the lat and lng so street view can display
        var coords = { lat:  coordData.lat, lng: coordData.lng }
    
        // create map
        var map = new google.maps.Map(document.getElementById("map"), {
            center: coords,
            zoom: 14,
        });
        // create new street view and adjust the coords, pov
        var panorama = new google.maps.StreetViewPanorama(
          document.getElementById("pano"),
          {
            position: coords,
            pov: {
              heading: 34,
              pitch: 10,
            },
          },
        );      
        // set the map to the street view
        map.setStreetView(panorama);
  }
})

// GLOBAL VARs:
// var that contains correct answer to be accessed and checked later
var country = ""
// boolean for if user is correct
var correct = false
// points!!!
var points = {
  correct: 0,
  total: 0
}
// COUNTRIES/COORDS DATA
const geoData = [  
    {country:"Qatar", cont: "Asia", lat: 25.272234, lng: 51.421210},
    {country:"United States", cont: "North America", lat: 40.668083, lng: -73.978557 },
    {country:"Canada", cont: "North America", lat: 49.166786, lng: -122.801385},  
    {country:"Russia", cont: "Asia", lat: 55.761226, lng: 37.594540},
    {country:"Kenya", cont: "Africa", lat: 0.552119, lng: 35.306452},
    {country:"Brazil", cont: "South America", lat: -16.696927, lng: -49.265616},
    {country:"Peru", cont: "South America", lat: -12.015509, lng: -77.084556},
    {country:"Equador", cont: "South America", lat: -0.173452, lng: -78.476651},
    {country:"Costa Rica", cont: "North America", lat: 9.935848, lng: -84.097897},
    {country:"Guatemala", cont: "North America", lat: 14.851587, lng: -91.523256},
    {country:"Mexico", cont: "North America", lat: 19.451904, lng: -99.185354},
    {country:"Serbia", cont: "Europe", lat: 43.725187, lng: 20.682714},
    {country:"Austria", cont: "Europe", lat: 47.066622, lng: 15.431666},
    {country:"France", cont: "Europe", lat: 45.775045, lng: 3.100527},
    {country:"Spain", cont: "Europe", lat: 40.231208, lng: -3.763879},
    {country:"Tunisia", cont: "Africa", lat: 34.790922, lng: 10.757626},
    {country:"Ghana", cont: "Africa", lat: 6.668074, lng: -1.635519},
    {country:"Senegal", cont: "Africa", lat: 14.879058, lng: -15.874708},
    {country:"Uganda", cont: "Africa", lat: 0.316390, lng: 32.567749},
    {country:"Rwanda", cont: "Africa", lat: -1.951056, lng: 30.070275},
    {country:"Thailand", cont: "Asia", lat: 18.772023, lng: 98.998754},
    {country:"Laos", cont: "Asia", lat: 15.105354, lng: 105.861119},
    {country:"Cambodia", cont: "Asia", lat: 11.547146, lng: 104.903693},
    {country:"Taiwan", cont: "Asia", lat: 25.031626, lng: 121.530959},
    {country:"Japan", cont: "Asia", lat: 34.130724, lng: 134.517785},
    {country:"South Korea", cont: "Asia", lat: 35.198413, lng: 129.085509},
    {country:"Malaysia", cont: "Asia", lat: 3.212393, lng: 101.646219},
    {country:"Singapore", cont: "Asia", lat: 1.293809, lng: 103.837003},
    {country:"Indonesia", cont: "Asia", lat: -5.462038, lng: 122.601999},
    {country:"Australia", cont: "Oceania", lat: -37.808428, lng: 144.948607},
    {country:"New Zealand", cont: "Oceania", lat: -46.398375, lng: 168.375881},
    {country:"Russia", cont: "Europe", lat: 53.197116, lng: 50.156933},
    {country:"Ukraine", cont: "Europe", lat: 50.451966, lng: 30.521440},
    {country:"Austria", cont: "Europe", lat: 46.624390, lng: 14.312158},
    {country:"Greece", cont: "Europe", lat: 38.001498, lng: 23.722331},
    {country:"Germany", cont: "Europe", lat: 48.811937, lng: 9.201428},
    {country:"Ireland", cont: "Europe", lat: 53.336864, lng: -6.272377},
    {country:"United Kingdom", cont: "Europe", lat: 52.470919, lng: -1.896327},
    {country:"United States", cont: "North America", lat: 38.653047, lng: -121.539730},        
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },        
]

// All the countries in the world
const countryData = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'The Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Barbuda',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Democratic Republic of the Congo',
  'Republic of the Congo',
  'Costa Rica',
  'Côte d’Ivoire',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'The Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'North Korea',
  'South Korea',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Federated States of Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'South Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
]

// GETTING THE STREET VIEW SET UP AND WORKING, ASYNC
async function initialize() {
    // generate random coords with function
    var coordData = randomCoord()
    console.log(coordData)

    // store the answer in this variable
    country = coordData.country
    // store the lat and lng so street view can display
    var coords = { lat:  coordData.lat, lng: coordData.lng }

    // create map
    var map = new google.maps.Map(document.getElementById("map"), {
        center: coords,
        zoom: 14,
    });
    // create new street view and adjust the coords, pov
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        position: coords,
        pov: {
          heading: 34,
          pitch: 10,
        },
      },
    );
  
    // set the map to the street view
    map.setStreetView(panorama);    
  }
  
window.initialize = initialize;

// generate and return random coordinates + country
function randomCoord() {
    // RANDOM COORD FROM AN ARRAY OF DATA
    const geoLength = geoData.length
    var randInd = Math.floor(Math.random() * geoLength)
    // return country, latitude, longitude in array form to access in initialize()
    return {
      country: geoData[randInd].country, 
      lat: geoData[randInd].lat, 
      lng: geoData[randInd].lng
    }
}

/*
NOTES/HARDSHIPS:
address pops up with street view via api so i went into inspect to find the element displaying it and set it to none
.gm-iv-address {
    display: none;
}

generating random coordinates, have to fake randomness
*/

/* 
MORE FUNCTIONALITY IF TIME:
- Easier mode with just continent!
*/