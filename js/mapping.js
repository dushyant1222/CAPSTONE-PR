
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

            // Function to add a marker with a custom icon and interactivity
            function addInteractiveMarker(map, lat, lng, title, description) {
                var icon = new H.map.Icon('https://cdn-icons-png.flaticon.com/512/684/684908.png', { size: { w: 32, h: 32 } });

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
                    marker.setIcon(new H.map.Icon('https://cdn-icons-png.flaticon.com/512/684/684908.png', { size: { w: 40, h: 40 } }));
                });
                marker.addEventListener('pointerleave', function () {
                    ui.getBubbles().forEach(bubble => ui.removeBubble(bubble));
                    marker.setIcon(icon);
                });

                // Add hover interaction to change icon
                marker.addEventListener('pointerenter', function () {
                    marker.setIcon(new H.map.Icon('https://cdn-icons-png.flaticon.com/512/684/684908.png', { size: { w: 40, h: 40 } }));
                });
                marker.addEventListener('pointerleave', function () {
                    marker.setIcon(icon);
                });
                
            }
            

            // Add interactive markers for specific buildings
            addInteractiveMarker(map, 25.535724, 84.851289, 'INDIAN INSTITUTE OF TECHNOLOGY', 'main academic building');
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
            addInteractiveMarker(map, 25.535477, 84.853119, 'Auditorium IIT-P', '');
            addInteractiveMarker(map, 25.535477, 84.853119, 'Auditorium IIT-P', '');
            addInteractiveMarker(map, 25.535477, 84.853119, 'Auditorium IIT-P', '');
            addInteractiveMarker(map, 25.535477, 84.853119, 'Auditoriu-P', '');
        });