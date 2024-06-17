// Initialize the HERE Map
window.addEventListener('load', function () {
    var platform = new H.service.Platform({
        'apikey': 'gHI3mtdh39r9ucHZKxQyhOJYYVJsFSBE3_4DeHJ9aAs'
    });
    var defaultLayers = platform.createDefaultLayers();

    // Instantiate the map
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.raster.satellite.map,
        {
            zoom: 17,
            center: { lat: 25.5377, lng: 84.8511 }
        }
    );

    // Enable the event system on the map 
    var mapEvents = new H.mapevents.MapEvents(map);

    // Instantiate the default behavior, providing drag, wheel zoom, etc.
    var behavior = new H.mapevents.Behavior(mapEvents);

    // Create the default UI components
    var ui = H.ui.UI.createDefault(map, defaultLayers);
    

    const mapSettingsControl = ui.getControl('mapsettings');
    mapSettingsControl.setAlignment('top-left');
    

    // Step 5: Add the traffic overlay to the map
    map.addLayer(defaultLayers.vector.traffic.map);
    // Function to update traffic layer
    function updateTrafficLayer() {
        // Get the provider instance from the layer
        const provider = defaultLayers.vector.traffic.map.getProvider();
        // Invalidate provider's data and force reload
        provider.reload(true);
    }

    // Refresh traffic layer every 1 minute (60 seconds)
    const refreshInterval = 60 * 1000;
    setInterval(updateTrafficLayer, refreshInterval);


    // coordinates of the polygon vertices for IIT Patna boundary
    var iitPatnaBoundary = [
        { lat: 25.534152, lng: 84.843776 },
        { lat: 25.533169, lng: 84.845886 },
        { lat: 25.532869, lng: 84.846386 },
        { lat: 25.532433, lng: 84.847391 },
        { lat: 25.531740, lng: 84.848953 },
        { lat: 25.531326, lng: 84.849918 },
        { lat: 25.530877, lng: 84.851747 },
        { lat: 25.530757, lng: 84.851953 },
        { lat: 25.530166, lng: 84.853548 },
        { lat: 25.532105, lng: 84.854640 },
        { lat: 25.533451, lng: 84.855449 },
        { lat: 25.536455, lng: 84.857196 },
        { lat: 25.536499, lng: 84.856929 },
        { lat: 25.536554, lng: 84.855875 },
        { lat: 25.536642, lng: 84.855772 },
        { lat: 25.536633, lng: 84.854552 },
        { lat: 25.536649, lng: 84.854014 },
        { lat: 25.536693, lng: 84.853509 },
        { lat: 25.536811, lng: 84.853198 },
        { lat: 25.537081, lng: 84.852759 },
        { lat: 25.537247524929118, lng: 84.85278010745856 },
        { lat: 25.537735, lng: 84.852048 },
        { lat: 25.537613, lng: 84.851612 },
        { lat: 25.537912, lng: 84.851339 },
        { lat: 25.537623, lng: 84.850796 },
        { lat: 25.537725, lng: 84.850331 },
        { lat: 25.538221, lng: 84.850239 },
        { lat: 25.538386, lng: 84.851142 },
        { lat: 25.538043, lng: 84.851266 },
        { lat: 25.538046, lng: 84.851506 },
        { lat: 25.538274, lng: 84.851699 },
        { lat: 25.538516, lng: 84.852082 },
        { lat: 25.538944, lng: 84.852632 },
        { lat: 25.539340, lng: 84.853109 },
        { lat: 25.540109, lng: 84.853617 },
        { lat: 25.544151, lng: 84.856430 },
        { lat: 25.544452, lng: 84.856170 },
        { lat: 25.544748, lng: 84.856602 },
        { lat: 25.546079, lng: 84.857668 },
        { lat: 25.548283, lng: 84.859461 },
        { lat: 25.551339, lng: 84.861963 },
        { lat: 25.552530, lng: 84.861006 },
        { lat: 25.553634, lng: 84.860111 },
        { lat: 25.555274, lng: 84.858785 },
        { lat: 25.554762, lng: 84.857670 },
        { lat: 25.554630, lng: 84.857317 },
        { lat: 25.554506, lng: 84.857050 },
        { lat: 25.554224, lng: 84.857004 },
        { lat: 25.554221, lng: 84.856669 },
        { lat: 25.554388, lng: 84.856650 },
        { lat: 25.553999, lng: 84.855613 },
        { lat: 25.553026, lng: 84.855311 },
        { lat: 25.553059, lng: 84.855042 },
        { lat: 25.552333, lng: 84.854870 },
        { lat: 25.551775, lng: 84.854757 },
        { lat: 25.551405, lng: 84.854774 },
        { lat: 25.550916, lng: 84.854817 },
        { lat: 25.551175, lng: 84.853360 },
        { lat: 25.550202, lng: 84.853052 },
        { lat: 25.549341, lng: 84.852703 },
        { lat: 25.548507, lng: 84.852149 },
        { lat: 25.547892, lng: 84.851788 },
        { lat: 25.548188, lng: 84.851026 },
        { lat: 25.547585, lng: 84.850638 },
        { lat: 25.547630, lng: 84.850424 },
        { lat: 25.546912, lng: 84.849874 },
        { lat: 25.545582, lng: 84.849072 },
        { lat: 25.545604, lng: 84.848910 },
        { lat: 25.544568, lng: 84.848535 },
        { lat: 25.543361, lng: 84.848036 },
        { lat: 25.542625, lng: 84.847749 },
        { lat: 25.542597, lng: 84.847802 },
        { lat: 25.542366, lng: 84.847684 },
        { lat: 25.541929, lng: 84.848018 },
        { lat: 25.541784, lng: 84.847862 },
        { lat: 25.541440, lng: 84.847536 },
        { lat: 25.540949, lng: 84.847206 },
        { lat: 25.540419, lng: 84.846952 },
        { lat: 25.539619, lng: 84.846532 },
        { lat: 25.539124, lng: 84.846283 },
        { lat: 25.538478, lng: 84.845955 },
        { lat: 25.537954, lng: 84.845655 },
        { lat: 25.537266, lng: 84.845306 },
        { lat: 25.536881, lng: 84.845125 },
        { lat: 25.536750, lng: 84.845398 },
        { lat: 25.535463, lng: 84.844596 }

    ];

    // Create a polygon and add it to the map
    var lineString = new H.geo.LineString();
    iitPatnaBoundary.forEach(function (point) {
        lineString.pushPoint(point);
    });

    var polygon = new H.map.Polygon(lineString, {
        style: {
            strokeColor: 'rgba(0, 128, 255, 0.7)', // Blue color for the boundary
            fillColor: 'rgba(254, 254, 254, 0)',   // Transparent color for the fill
            lineWidth: 3
        }
    });
    map.addObject(polygon);


    // Main Buildings marker with over Text
    function createCustomMarker(lat, lng, text) {
        var outerElement = document.createElement('div'),
            innerElement = document.createElement('div');

        outerElement.className = 'custom-marker';
        innerElement.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="marker icon">${text}`;
        outerElement.appendChild(innerElement);

        var domIcon = new H.map.DomIcon(outerElement);

        var marker = new H.map.DomMarker({ lat: lat, lng: lng }, { icon: domIcon });
        map.addObject(marker);
    }

    // MAIN BUILDINGS
    createCustomMarker(25.535765, 84.851067, 'INDIAN INSTITUTE OF TECHNOLOGY PATNA');
    createCustomMarker(25.536244, 84.850184, 'Central Library IIT-P');
    createCustomMarker(25.535612, 84.852864, 'Auditorium IIT-P');
    createCustomMarker(25.534337, 84.853957, 'Academic Circle IIT-P');
    createCustomMarker(25.533462, 84.851436, 'Lecture Hall IIT-P');
    createCustomMarker(25.5327023, 84.8517452, 'Tutorial Block-9, IIT-P');
    createCustomMarker(25.534275, 84.851432, 'Block-3, IITP');
    createCustomMarker(25.533860, 84.850645, 'Block-6, IIT-P');
    createCustomMarker(25.533607, 84.849933, 'Block-4, IIT-P');
    createCustomMarker(25.533009, 84.849102, 'Electrical Engineering new workshop');
    createCustomMarker(25.536399, 84.854168, 'Incubation centre, IIT-P');
    createCustomMarker(25.533696, 84.855371, 'IIT PATNA Main GATE-1');
    createCustomMarker(25.537149, 84.850730, 'Student academic centre (SAC)');
    createCustomMarker(25.537060, 84.851391, 'IITP Food court');
    createCustomMarker(25.5378068, 84.8489869, 'Asima Hostel');
    createCustomMarker(25.539313, 84.847099, 'Ashoka married Hostel');
    createCustomMarker(25.540069, 84.849501, 'GymKhana, IIT-P');
    createCustomMarker(25.5411987, 84.8508633, 'APJ Abdul Kalam Hostel, IIT-P');
    createCustomMarker(25.541135, 84.852614, 'Aryabhatta Hostel, IIT-P');
    createCustomMarker(25.539571, 84.852092, 'CV Raman Hostel, IIT-P');
    createCustomMarker(25.54840783722168, 84.85448145283397, 'Guest House,IITP');
    createCustomMarker(25.54991548016608, 84.85367052885552, 'Hospital IIT Patna');
    createCustomMarker(25.5451238, 84.8540284, 'Cricket Ground, IIT-P');
    createCustomMarker(25.5547644, 84.8573525, 'IIT PATNA Gate-2');



    // Function to add a marker for Small Buildings
    function addInteractiveMarker(map, lat, lng, title, description) {
        var icon = new H.map.Icon('https://cdn-icons-png.flaticon.com/512/684/684908.png', { size: { w: 23, h: 23 } });

        var marker = new H.map.Marker({ lat: lat, lng: lng }, { icon: icon });
        map.addObject(marker);

        // POPUP for markerr
        marker.setData(`<strong>${title}</strong><br>${description}`);
        marker.addEventListener('tap', function (evt) {
            var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
                content: evt.target.getData()
            });
            ui.addBubble(bubble);
        });

        // Hover for small buildings
        marker.addEventListener('pointerenter', function (evt) {
            var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
                content: `<strong>${title}</strong><br>${description}`
            });
            ui.addBubble(bubble);
            marker.setIcon(new H.map.Icon('https://cdn-icons-png.flaticon.com/512/684/684908.png', { size: { w: 30, h: 30 } }));
        });
        marker.addEventListener('pointerleave', function () {
            ui.getBubbles().forEach(bubble => ui.removeBubble(bubble));
            marker.setIcon(icon);
        });
    }


    // Add interactive markers for specific buildings and all

    addInteractiveMarker(map, 25.535564, 84.851502, 'Indian Flag', '');
    addInteractiveMarker(map, 25.533446, 84.854440, 'Helipad IIT-P', '');
    addInteractiveMarker(map, 25.533098, 84.854030, 'IIT Patna Temple', '');
    addInteractiveMarker(map, 25.534030, 84.851137, 'Nescafe, IIT-P', '');
    addInteractiveMarker(map, 25.5328734, 84.8495406, 'Electrical Engineering Workshop', '');
    addInteractiveMarker(map, 25.5326331, 84.8495438, 'Mechanical Workshop', '');
    addInteractiveMarker(map, 25.5324059, 84.8496092, 'Civil Engineering', '');
    addInteractiveMarker(map, 25.536817, 84.851123, 'Canera Bank ATM', '');
    addInteractiveMarker(map, 25.536854, 84.851335, 'India Post', '');
    addInteractiveMarker(map, 25.536739, 84.850675, 'Open Air theature', '');
    addInteractiveMarker(map, 25.540363, 84.850043, 'Basketball court, IIT-P', '');
    addInteractiveMarker(map, 25.537779, 84.850186, 'GHEXT Cafe', '');
    addInteractiveMarker(map, 25.538443092151624, 84.85062156815401, 'Water treatment plant IIT-P', '');
    addInteractiveMarker(map, 25.539045, 84.850232, 'Hair Saloon, IIT-P', '');
    addInteractiveMarker(map, 25.5392678, 84.8501515, 'Vollyball court', '');
    addInteractiveMarker(map, 25.539610, 84.850184, 'Tennis court, IIT-P', '');
    addInteractiveMarker(map, 25.539956, 84.850167, 'Vollyball court, IIT-P', '');
    addInteractiveMarker(map, 25.540282, 84.849650, 'Badminton court, IIT-P', '');
    addInteractiveMarker(map, 25.5406803, 84.8499813, 'Nescafe', '');
    addInteractiveMarker(map, 25.541622, 84.851803, 'Cycle Parking, Kalam left front', '');
    addInteractiveMarker(map, 25.540706, 84.851859, 'Cycle Parking Kalam right front', '');
    addInteractiveMarker(map, 25.541244, 84.853459, 'Aryabhatta Mess, IIT-P', '');
    addInteractiveMarker(map, 25.5398346, 84.8526287, 'CVR Mess, IIT-P', '');
    addInteractiveMarker(map, 25.544525, 84.852772, 'Football Ground, IIT-P', '');
    addInteractiveMarker(map, 25.5456323, 84.8537626, 'Vollyball Court, IIT-P', '');
    addInteractiveMarker(map, 25.5464598, 84.8543462, 'Sports Complex, IIT-P', '');
    addInteractiveMarker(map, 25.5475798, 84.8539673, 'Director Bungalow IIT-P', '');
    addInteractiveMarker(map, 25.548327701294586, 84.85828620247521, 'IIT Patna B5 Appartment', '');
    addInteractiveMarker(map, 25.548500122432056, 84.85882398537889, 'Block-B3, Faculty quarters, IIT-P', '');
    addInteractiveMarker(map, 25.54910595175337, 84.85872260229864, 'IIT Patna B4 Appartment', '');
    addInteractiveMarker(map, 25.5488485, 84.8581034, 'Childerens park, IIT-P', '');
    addInteractiveMarker(map, 25.550946883480627, 84.85922330246791, 'Block C1 Appartments', '');
    addInteractiveMarker(map, 25.55153580451047, 84.8592139237162, 'IIT Patna Staff Residence (Block-C2)', '');
    addInteractiveMarker(map, 25.55169318808672, 84.85866432886111, 'C-3 Quarter, Indian Institute of Technology Patna', '');
    addInteractiveMarker(map, 25.551229498248052, 84.85865307435897, 'C-4 Block, Staff Quarters', '');
    addInteractiveMarker(map, 25.55206221136709, 84.85558822416148, 'Foundation Academy School, IIT PatnaCampus, Bihta', '');
    addInteractiveMarker(map, 25.552985128692836, 84.85575398543595, 'Kendriya Vidyalaya, IIT Patna', '');
    addInteractiveMarker(map, 25.55396687490288, 84.8582119236727, 'PATHFINDER STORE', '');

});

