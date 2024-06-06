 // MAPPING TECHNOLOGY
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
              // Define the coordinates of the polygon's vertices for IIT Patna boundary
              var iitPatnaBoundary = [
                { lat: 25.534425, lng: 84.843653 },
                { lat: 25.531661, lng:84.849200 },
                { lat: 25.530209, lng: 84.853566 },
                { lat: 25.535280, lng: 84.856397 },
                { lat: 25.536328, lng: 84.854996 },
                { lat: 25.536684, lng: 84.853408 },
                { lat: 25.537416, lng: 84.851890 },
                { lat: 25.537641, lng: 84.851016 },
                { lat: 25.5377709, lng: 84.8505262 },
                { lat: 25.538260, lng:84.850212 },
                { lat: 25.538547, lng: 84.851743 },
                { lat: 25.539192, lng: 84.852742},
                { lat: 25.544566, lng: 84.856644},
                { lat: 25.551406, lng: 84.861928},
                { lat: 25.555352, lng: 84.858788},
                { lat: 25.554018, lng: 84.855568},
                { lat: 25.553023, lng: 84.855290},
                { lat: 25.553067, lng: 84.855044},
                { lat: 25.550916, lng: 84.854812},
                { lat: 25.551158, lng: 84.853387},
                { lat: 25.542526, lng: 84.847586},
               
                
                
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

            // Function to add a marker with a custom icon and interactivity
            function addInteractiveMarker(map, lat, lng, title, description) {
                var icon = new H.map.Icon('https://cdn-icons-png.flaticon.com/512/684/684908.png', { size: { w: 23, h: 23 } });

                var marker = new H.map.Marker({ lat: lat, lng: lng }, { icon: icon });
                map.addObject(marker);

                // Bind a popup to the marker
                marker.setData(`<strong>${title}</strong><br>${description}`);
                marker.addEventListener('tap', function (evt) {
                    var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
                        content: evt.target.getData()
                    });
                    ui.addBubble(bubble);
                });

                // Add hover interaction to show tooltip
                marker.addEventListener('pointerenter', function (evt) {
                    var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
                        content: `<strong>${title}</strong><br>${description}`
                        
                    });
                    ui.addBubble(bubble);
                    marker.setIcon(new H.map.Icon('https://cdn-icons-png.flaticon.com/512/684/684908.png', { size: { w: 28, h: 28 } }));
                });
                marker.addEventListener('pointerleave', function () {
                    ui.getBubbles().forEach(bubble => ui.removeBubble(bubble));
                    marker.setIcon(icon);
                });

                // Add hover interaction to change icon
                marker.addEventListener('pointerenter', function () {
                    marker.setIcon(new H.map.Icon('https://cdn-icons-png.flaticon.com/512/684/684908.png', { size: { w: 28, h: 28 } }));
                });
                marker.addEventListener('pointerleave', function () {
                    marker.setIcon(icon);
                });
                
            }
            

            // Add interactive markers for specific buildings and all
            
            addInteractiveMarker(map, 25.535724, 84.851289, 'INDIAN INSTITUTE OF TECHNOLOGY PATNA', 'main academic building');
            addInteractiveMarker(map, 25.535564, 84.851502, 'Indian Flag','');
            addInteractiveMarker(map, 25.536103, 84.850295, 'Central Library IIT-P','');
            addInteractiveMarker(map, 25.535477, 84.853119, 'Auditorium IIT-P', '');
            addInteractiveMarker(map, 25.534337, 84.853957, 'Aucademic Circle IIT-P', '');
            addInteractiveMarker(map, 25.533662, 84.855423, 'IIT PATNA Main GATE-1', '');
            addInteractiveMarker(map, 25.533446, 84.854440, 'Helipad IIT-P', '');
            addInteractiveMarker(map, 25.535477, 84.853119, 'Auditorium IIT-P', '');
            addInteractiveMarker(map, 25.533098, 84.854030, 'IIT Patna Temple', '');
            addInteractiveMarker(map, 25.533276, 84.851547,'Lecture Hall IIT-P', '');
            addInteractiveMarker(map, 25.5327023,84.8517452, 'Tutorial Block-9, IIT-P', '');
            addInteractiveMarker(map, 25.533994, 84.851686, 'Block-3, IITP', '');
            addInteractiveMarker(map, 25.534030, 84.851137, 'Nescafe, IIT-P', '');
            addInteractiveMarker(map, 25.533688, 84.850792, 'Block-6, IIT-P', '');
            addInteractiveMarker(map, 25.533357, 84.849938, 'Block-4, IIT-P', '');
            addInteractiveMarker(map, 25.5328734,84.8495406, 'Electrical Engineering Workshop', '');
            addInteractiveMarker(map, 25.5326331,84.8495438, 'Mechanical Workshop', '');
            addInteractiveMarker(map, 25.5324059,84.8496092, 'Civil Engineering', '');
            addInteractiveMarker(map, 25.533009, 84.849102, 'Electrical Engineering new workshop', '');
            addInteractiveMarker(map, 25.537149, 84.850730, 'Student academic centre', '');
            addInteractiveMarker(map, 25.536817, 84.851123, 'Canera Bank ATM', '');
            addInteractiveMarker(map, 25.536854, 84.851335, 'India Post', '');
            addInteractiveMarker(map, 25.537060, 84.851391, 'IITP Food court', '');
            addInteractiveMarker(map, 25.536739, 84.850675, 'Open Air theature', '');
            addInteractiveMarker(map, 25.537779, 84.850186,  'GHEXT Cafe', '');
            addInteractiveMarker(map, 25.5378068,84.8489869, 'Asima Hostel', '');
            addInteractiveMarker(map, 25.5391056,84.8474879, 'Ashoka married Hostel', '');
            addInteractiveMarker(map, 25.5383041,84.8503579, 'Water treatment plant IIT-P', '');
            addInteractiveMarker(map, 25.539045, 84.850232, 'Hair Saloon, IIT-P', '');
            addInteractiveMarker(map, 25.5392678,84.8501515, 'Vollyball court', '');
            addInteractiveMarker(map, 25.539610, 84.850184, 'Tennis court, IIT-P', '');
            addInteractiveMarker(map, 25.539956, 84.850167, 'Vollyball court, IIT-P', '');
            addInteractiveMarker(map, 25.5402276,84.8501458, 'Basketball court, IIT-P', '');
            addInteractiveMarker(map, 25.540282, 84.849650, 'Badminton court, IIT-P', '');
            addInteractiveMarker(map, 25.5400118,84.8498768, 'GymKhana, IIT-P', '');
            addInteractiveMarker(map, 25.5406803,84.8499813, 'Nescafe', '');
            addInteractiveMarker(map, 25.5411987,84.8508633, 'APJ Abdul Kalam Hostel, IIT-P', '');
            addInteractiveMarker(map, 25.541622, 84.851803, 'Cycle Parking, Kalam left front', '');
            addInteractiveMarker(map, 25.540706, 84.851859, 'Cycle Parking Kalam right front', '');
            addInteractiveMarker(map, 25.541135, 84.852614, 'Aryabhatta Hostel, IIT-P', '');
            addInteractiveMarker(map, 25.541244, 84.853459, 'Aryabhatta Mess, IIT-P', '');
            addInteractiveMarker(map, 25.539571, 84.852092, 'CV Raman Hostel, IIT-P', '');
            addInteractiveMarker(map, 25.5398346,84.8526287, 'CVR Mess, IIT-P', '');
            addInteractiveMarker(map, 25.5451238,84.8540284, 'Football Ground, IIT-P', '');
            addInteractiveMarker(map, 25.5451238,84.8540284, 'Cricket Ground, IIT-P', '');
            addInteractiveMarker(map, 25.5456323,84.8537626, 'Vollyball Court, IIT-P', '');
            addInteractiveMarker(map, 25.5464598,84.8543462, 'Sports Complex, IIT-P', '');
            addInteractiveMarker(map, 25.5475798,84.8539673, 'Director Bungalow IIT-P', '');
            addInteractiveMarker(map, 25.5481025,84.8542384, 'Guest House, IIT-P', '');
            addInteractiveMarker(map, 25.5481298,84.8581177, 'IIT Patna B5 Appartment', '');
            addInteractiveMarker(map, 25.5481298,84.8581177, 'Block-B3, Faculty quarters, IIT-P', '');
            addInteractiveMarker(map, 25.5489558,84.8587083, 'IIT Patna B4 Appartment', '');
            addInteractiveMarker(map, 25.5488485,84.8581034, 'Childerens park, IIT-P', '');
            addInteractiveMarker(map, 25.5511628,84.8590689, 'Block C1 Appartments', '');
            addInteractiveMarker(map, 25.5512963,84.8589665, 'IIT Patna Staff Residence (Block-C2)', '');
            addInteractiveMarker(map, 25.5514451,84.8586934, 'C-3 Quarter, Indian Institute of Technology Patna', '');
            addInteractiveMarker(map, 25.5514451,84.8586934, 'C-4 Block, Staff Quarters', '');
            addInteractiveMarker(map, 25.5521214,84.8557187, 'Foundation Academy School, IIT PatnaCampus, Bihta', '');
            addInteractiveMarker(map, 25.5530391,84.8545043, 'Kendriya Vidyalaya, IIT Patna', '');
            addInteractiveMarker(map, 25.5542743,84.8573359, 'PATHFINDER STORE', '');
            addInteractiveMarker(map, 25.5547644,84.8573525, 'IIT PATNA Gate-2', '');
        });

        