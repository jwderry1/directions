{
    "configurationSettings": [
        {
            "category": "<b>Map</b>",
            "fields": [
                {
                    "type": "appproxies",
                    "serviceProxies": [
                        {
                            "name": "route",
                            "title": "Route"
                        },
                        {
                            "name": "closestFacility",
                            "title": "Closest Facility"
                        }
                    ]
                },
                {
                    "type": "webmap",
                    "label": "Select a map"
                }    
            ]
        },
        {
            "category": "<b>General</b>",
            "fields": [
                {
                    "type": "string",
                    "fieldName": "title",
                    "label": "Title",
                    "tooltip": "Title",
                    "placeHolder": "Title"
                },
                {
                    "type": "string",
                    "fieldName": "prompt",
                    "label": "Prompt for address search",
                    "tooltip": "Prompt for address search",
                    "placeHolder": "Enter address"
                },
                {
                    "type": "color",
                    "fieldName": "color",
                    "label": "Color",
                    "tooltip": "Color"
                },
                {
                    "type": "boolean",
                    "fieldName": "styleBasemap",
                    "label": "Display basemap in grayscale",
                    "tooltip": "Display basemap in grayscale"
                }
            ]
        },
        {
            "category": "<b>Destination Layer</b>",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "The information presented in the panel for the destination layer is derived from the web map popup configuration. Reconfigure the  popup for the destination layer and save your map to change the information for the destination features."
                },
                {
                    "type": "layerAndFieldSelector",
                    "layerOptions": {
                        "supportedTypes": [
                            "FeatureLayer",
                            "FeatureCollection"
                        ],
                        "geometryTypes": [
                            "esriGeometryPoint",
                            "esriGeometryLine",
                            "esriGeometryPolygon"
                        ]
                    },
                    "fieldName": "destLayer",
                    "label": "Destination layer",
                    "tooltip": "Layer that will be used as destinations"
                },
                {
                    "type": "string",
                    "fieldName": "distanceUnits",
                    "tooltip": "Distance units",
                    "label": "Distance units",
                    "options": [
                        {
                            "label": "Miles",
                            "value": "miles"
                        },
                        {
                            "label": "Kilometers",
                            "value": "kilometers"
                        }
                    ]
                },
                {
                    "type": "boolean",
                    "fieldName": "useClosestFacility",
                    "label": "Use Closest Facility to improve accuracy of distance calculation if several features are close together.",
                    "tooltip": "Use Closest Facility to improve accuracy of distance calculation if several features are close together."
                }
            ]
        },
        {
            "category": "<b>Alternate Destination</b>",
            "fields": [
                {
                    "type": "string",
                    "fieldName": "destination",
                    "label": "Destination name",
                    "tooltip": "Destination name",
                    "placeHolder": ""
                },
                {
                    "type": "number",
                    "fieldName": "latitude",
                    "label": "Destination latitude",
                    "tooltip": "Destination latitude",
                    "placeHolder": ""
                },
                {
                    "type": "number",
                    "fieldName": "longitude",
                    "label": "Destination longitude",
                    "tooltip": "Destination longitude",
                    "placeHolder": ""
                },
                {
                    "type": "string",
                    "fieldName": "address",
                    "label": "Destination address (if destination latititude and longitude are not specified)",
                    "tooltip": "Destination address",
                    "placeHolder": ""
                }
            ]
        }
    ],
    "values": {
        "title": "",
        "prompt": "Enter address",
        "color": "#80ab00",
        "styleBasemap": true,
        "useClosestFacility": false
    }
}