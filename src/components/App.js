import React, {
    Component
}
from 'react';
import LocationList from './LocationList';

class App extends Component {
    /**
     * Constructor
     */
    constructor(props) {
        super(props);
        this.state = {
            'alllocations': [
                {
                    'name': "Basis Chandler Primary North",
                    'type': "Elementary School",
                    'latitude': 33.307074,
                    'longitude': -111.810379,
                    'streetAddress': "1800 E Chandler Blvd, Chandler, AZ 85225"
                },
                {
                    'name': "Haley Public School",
                    'type': "Elementary School",
                    'latitude': 33.257111,
                    'longitude': -111.775534,
                    'streetAddress': "3401 South Layton Lakes Boulevard, Chandler, AZ 85286"
                },
                {
                    'name': "Ryan Public School",
                    'type': "Elementary School",
                    'latitude': 33.239450,
                    'longitude': -111.780395,
                    'streetAddress': "4600 Bright Angel Way, Chandler, AZ 85249"
                },
                {
                    'name': "Legacy Traditional School - Chandler",
                    'type': "Elementary School",
                    'latitude': 33.261039,
                    'longitude': -111.788645,
                    'streetAddress': "3201 S Gilbert Rd, Chandler, AZ 85286"
                },
                {
                    'name': "Perry Public School",
                    'type': "High School",
                    'latitude': 33.267012,
                    'longitude': -111.748510,
                    'streetAddress': "1919 E Queen Creek Rd, Gilbert, AZ 85297"
                },
                {
                    'name': "Arizona Connections Academy",
                    'type': "High School",
                    'latitude': 33.281657,
                    'longitude': -111.784561,
                    'streetAddress': "335 E Germann Rd #140, Gilbert, AZ 85297"
                },
                {
                    'name': "Chief Hill Learning Academy",
                    'type': "High School",
                    'latitude': 33.300488,
                    'longitude': -111.808109,
                    'streetAddress': "290 S Cooper Rd, Chandler, AZ 85225"
                },
                {
                    'name': "La Petite Academy of Chandler",
                    'type': "Day Care",
                    'latitude': 33.263350,
                    'longitude': -111.791312,
                    'streetAddress': "3100 S Gilbert Rd, Chandler, AZ 85286"
                },
                {
                    'name': "Kids Inc Watermark",
                    'type': "Day Care",
                    'latitude': 33.273182,
                    'longitude': -111.792266,
                    'streetAddress': "The Nanny Company, 2430 S Gilbert Rd, Chandler, AZ 85286"
                },
                {
                    'name': "Watch Me Grow",
                    'type': "Day Care",
                    'latitude': 33.263745,
                    'longitude': -111.808412,
                    'streetAddress': "4677 E. Queen Creek Road, Gilbert, AZ 85297"
                }
            ],
            'map': '',
            'infowindow': '',
            'prevmarker': ''
        };

        // retain object instance when used in the function
        this.initMap = this.initMap.bind(this);
        this.openInfoWindow = this.openInfoWindow.bind(this);
        this.closeInfoWindow = this.closeInfoWindow.bind(this);
    }

    componentDidMount() {
        // Connect the initMap() function within this class to the global window context,
        // so Google Maps can invoke it
        window.initMap = this.initMap;
        // Asynchronously load the Google Maps script, passing in the callback reference
        loadMapJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyCd20ay1K8_L225QDTaznm3v2HnJyK4nmM&callback=initMap')
    }

    /**
     * Initialise the map once the google map script is loaded
     */
    initMap() {
        var self = this;

        var mapview = document.getElementById('map');
        mapview.style.height = window.innerHeight + "px";
        var map = new window.google.maps.Map(mapview, {
            center: {
                lat: 33.30616,
                lng: -111.84125
            },
            zoom: 13,
            mapTypeId: 'roadmap',
            styles: [
                {
                    elementType: 'geometry',
                    stylers: [{
                        color: '#242f3e'
                    }]
                },
                {
                    elementType: 'labels.text.stroke',
                    stylers: [{
                        color: '#242f3e'
                    }]
                },
                {
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#746855'
                    }]
                },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#d59563'
                    }]
            },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#d59563'
                    }]
            },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#263c3f'
                    }]
            },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#6b9a76'
                    }]
            },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#38414e'
                    }]
            },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{
                        color: '#212a37'
                    }]
            },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#9ca5b3'
                    }]
            },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#746855'
                    }]
            },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{
                        color: '#1f2835'
                    }]
            },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#f3d19c'
                    }]
            },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#2f3948'
                    }]
            },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#d59563'
                    }]
            },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#17263c'
                    }]
            },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#515c6d'
                    }]
            },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{
                        color: '#17263c'
                    }]
            }
          ],
            mapTypeControl: false
        });

        var InfoWindow = new window.google.maps.InfoWindow({});

        window.google.maps.event.addListener(InfoWindow, 'closeclick', function () {
            self.closeInfoWindow();
        });

        this.setState({
            'map': map,
            'infowindow': InfoWindow
        });

        window.google.maps.event.addDomListener(window, "resize", function () {
            var center = map.getCenter();
            window.google.maps.event.trigger(map, "resize");
            self.state.map.setCenter(center);
        });

        window.google.maps.event.addListener(map, 'click', function () {
            self.closeInfoWindow();
        });

        var alllocations = [];
        this.state.alllocations.forEach(function (location) {
            var longname = location.name + ' - ' + location.type;
            var location_name = location.name;
            var location_type = location.type;
            var marker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(location.latitude, location.longitude),
                animation: window.google.maps.Animation.DROP,
                icon: 'https://maps.google.com/mapfiles/kml/shapes/library_maps.png',
                map: map
            });

            marker.addListener('click', function () {
                self.openInfoWindow(marker, location_name, location_type);
            });

            location.location_name = location_name;
            location.location_type = location_type;
            location.longname = longname;
            location.marker = marker;
            location.display = true;
            alllocations.push(location);
        });
        this.setState({
            'alllocations': alllocations
        });
    }

    /**
     * Open the infowindow for the marker
     * @param {object} location marker
     */
    openInfoWindow(marker, location_name, location_type) {
        this.closeInfoWindow();
        this.state.infowindow.open(this.state.map, marker);
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        this.setState({
            'prevmarker': marker
        });
        this.state.infowindow.setContent('Loading Data...');
        this.state.map.setCenter(marker.getPosition());
        this.state.map.panBy(0, -200);
        this.getMarkerInfo(marker, location_name, location_type);
    }

    /**
     * Retrive the location data from the foursquare api for the marker and display it in the infowindow
     * @param {object} location marker
     */
    getMarkerInfo(marker, location_name, location_type) {
        var self = this;
        var clientId = "YX2PPKZUIISBKGBCPQX5JJPSMDVLZUBX2EUWSWCSDJTQ0LR1";
        var clientSecret = "Q1HP2QQQEB0CYFAXUMLRO5C3KSTGA2Z34LTQ5DVMNS0NHUO1";
        var url = "https://api.foursquare.com/v2/venues/search?client_id=" + clientId + "&client_secret=" + clientSecret + "&v=20130815&ll=" + marker.getPosition().lat() + "," + marker.getPosition().lng() + "&limit=1";
        fetch(url)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        self.state.infowindow.setContent("Sorry data can't be loaded");
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        var location_data = data.response.venues[0];
                        var verified = '<b>Verified Location: </b>' + (location_data.verified ? 'Yes' : 'No') + '<br>';
                        let location_html = '<h2 style="padding: 0; margin: 0">' + location_name + '</h2>' + '<h4 style="padding: 0; margin: 0">' + location_type + '</h4>'
                        var readMore = '<a href="https://foursquare.com/v/' + location_data.id + '" target="_blank">Get more details!</a>'
                        let cross_street = location_data.location.crossStreet ? location_data.location.crossStreet : 'Sorry, Unavailable'
                        let school_image = null
                        switch (location_type) {
                        case 'Elementary School':
                            school_image = 'images/school1.jpeg';
                            break;
                        case 'High School':
                            school_image = 'images/school2.jpeg';
                            break;
                        default:
                            school_image = 'images/school3.jpeg';
                        }
                        let location_image = "<div style='float:left'><img src=" + school_image + " width='200px' height='auto'></div><div style='float:right; padding: 10px;'><b>Cross-Street : </b><br/> " + cross_street + "<br/>" + readMore + "</div>"
                            //let location_image = "<div style='width:200px;height:200px;overflow:hidden;' <img src='http://localhost:3000/images/school1.jpeg' width='200px' height='auto'></div>"
                        self.state.infowindow.setContent(location_html + location_image);
                    });
                }
            )
            .catch(function (err) {
                self.state.infowindow.setContent("Sorry data can't be loaded");
            });
    }

    /**
     * Close the infowindow for the marker
     * @param {object} location marker
     */
    closeInfoWindow() {
        if (this.state.prevmarker) {
            this.state.prevmarker.setAnimation(null);
        }
        this.setState({
            'prevmarker': ''
        });
        this.state.infowindow.close();
    }

    /**
     * Render function of App
     */
    render() {
        return ( <div> <LocationList key = "100" alllocations = {this.state.alllocations} 
                openInfoWindow = { this.openInfoWindow } closeInfoWindow = { this.closeInfoWindow }/> <div id = "map" > </div></div>
        );
    }
}

export default App;

/**
 * Load the google maps Asynchronously
 * @param {url} url of the google maps script
 */
function loadMapJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    script.onerror = function () {
        document.write("Google Maps can't be loaded");
    };
    ref.parentNode.insertBefore(script, ref);
}