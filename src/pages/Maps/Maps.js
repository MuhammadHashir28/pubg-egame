import React, { useState, useRef, useEffect } from "react";
import { SketchPicker } from 'react-color';
import { Button, Dimmer, Loader } from "semantic-ui-react";
import {
  Circle,
  ImageOverlay,
  FeatureGroup,
  Polyline,
  ZoomControl,
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import faviconIcon from "../../images/map-location.png";
import html2canvas from "html2canvas";
import "./Maps.css";
import MapFooter from "./Component/MapFooter";
import "react-leaflet-fullscreen/styles.css";
import { FullscreenControl } from 'react-leaflet-fullscreen';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles


// import 'leaflet-draw/leaflet.draw.css';
// import { EditControl } from 'react-leaflet-draw';


function Maps() {
  const [activeSideMenu, setActiveSideMenu] = useState(true);
  const mapOptions = {
    zoomAnimationThreshold: 4, // Set your desired threshold value here
  };

  const maxZoom = 5;

  const [color, setColor] = useState('#ff0000'); // Initial color
  const [pickerVisible, setPickerVisible] = useState(false);
  const [size, setSize] = useState(2); // Initial value for the range slider
  const [editorText, setEditorText] = useState('');
  const [editorVisible, setEditorVisible] = useState(false);
  const [editorLatLng, setEditorLatLng] = useState(null);


  const handleSizeChange = (event) => {
    mapRef?.current?.off("mousedown", onMouseDown);
    mapRef?.current?.off("mousemove", onMouseMove);
    mapRef?.current?.off("mouseup", onMouseUp);
    setSize(event.target.value);
  };

   // Similar to componentDidMount and componentDidUpdate:
   useEffect(() => {
    var one = document.querySelector('.map-meu');
    var two = document.querySelector('.map-side-bar')
    two.style.height = one.offsetHeight + 'px';
  });

  const handleColorChange = (newColor) => {
       // Remove the event listeners when the component unmounts
       mapRef?.current?.off("mousedown", onMouseDown);
       mapRef?.current?.off("mousemove", onMouseMove);
       mapRef?.current?.off("mouseup", onMouseUp);
   
    setColor(newColor.hex);
  };

  // const togglePicker = () => {
  //   mapRef?.current?.off("mousedown", onMouseDown);
  //   mapRef?.current?.off("mousemove", onMouseMove);
  //   mapRef?.current?.off("mouseup", onMouseUp);
  //   setPickerVisible(!pickerVisible);
  // };

  const handleClosePicker = () => {
    mapRef?.current?.off("mousedown", onMouseDown);
    mapRef?.current?.off("mousemove", onMouseMove);
    mapRef?.current?.off("mouseup", onMouseUp);
    setPickerVisible(false);
  };

  const mapData = [
    {
      id: 1,
      name: "Erangel",
      mapImage: "Erangel_Main_High_Res.png",
      galleryItems: [
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/3f20986.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/f66715f.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/15b1bd1.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/540af3d.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/3c06f95.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/27d190d.jpg",
      ],
      featureItems: [
        {
          videoSrc:
            "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/videos/video-feature1.0768879.mp4",
          name: "Erangel Ferry",
        },
        {
          videoSrc:
            "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/videos/video-feature2.b4ff12b.mp4",
          name: "UAZ",
        },
      ],
    },
    {
      id: 2,
      name: "Miramar",
      mapImage: "Miramar_Main_High_Res.png",
      galleryItems: [
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/580e46b.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/9574d8d.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/4161454.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/22342b1.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/699679b.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/5ee6346.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/8ad0060.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/495959b.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/6b5501a.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/2668b1c.jpg",
      ],
      featureItems: [
        {
          name: "Pickup Truck",
          videoSrc:
            "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/videos/video-feature1.27d03f9.mp4",
        },
        {
          name: "Quad",
          videoSrc:
            "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/videos/video-feature2.0f64c14.mp4",
        },
      ],
    },
    {
      id: 3,
      name: "Sanhok",
      mapImage: "Sanhok_Main_High_Res.png",
      galleryItems: [
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/858547f.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/5f087de.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/f51ab1e.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/c12d133.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/f4b0a62.jpg",
      ],
      featureItems: [
        {
          videoSrc:
            "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/videos/video-feature1.8e492f9.mp4",
          name: "QBU",
        },
        {
          videoSrc:
            "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/videos/video-feature2.0cd8312.mp4",
          name: "QBZ",
        },
        {
          videoSrc:
            "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/videos/video-feature3.d4c9ecc.mp4",
          name: "Tukshai",
        },
      ],
    },
    {
      id: 4,
      name: "Vikendi",
      mapImage: "Vikendi_Main_High_Res.png",
      galleryItems: [
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/2afd83f.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/42946ab.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/3c2e847.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/5801092.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/f656a1a.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/5e3f31a.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/5cbbf55.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/fbac749.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/6cb3a4d.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/efaddcd.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/b5a79b5.jpg",
        "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/img/b94bc83.jpg",
      ],
      featureItems: [
        {
          name: "Snowmobile",
          videoSrc:
            "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/videos/video-feature1.c012eea.mp4",
        },
        {
          name: "Night Mode",
          videoSrc:
            "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/videos/video-feature2.8382a35.mp4",
        },
        {
          name: "Secret Room",
          videoSrc:
            "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/videos/video-feature3.99a4cac.mp4",
        },
        {
          name: "Train",
          videoSrc:
            "https://wstatic-prod.pubg.com/web/live/main_1ba6e24/videos/video-feature4.eaa0bdf.mp4",
        },
      ],
    },
  ];

  const faviconIconMarker = L.icon({
    iconUrl: faviconIcon,
    iconSize: [26, 32],
  });
  const [toolTypePositions, setToolTypePositions] = useState({});
  const [selectedTool, setSelectedTool] = useState("");
  const [textPopupVisible, setTextPopupVisisble] = useState(false);

  const [selectedMap, setSelectedMap] = useState(mapData[0].id);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [markerPosition, setMarkerPosition] = useState([]);
  const [lines, setLines] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const [showNotification, setShowNotification] = useState(false);

  
  const mapRef = useRef(null);
  var mapRenderArray=[];
  const mergeItemWithmapRenderArray = (newItem) => {
    
    const existingArray = JSON.parse(localStorage.getItem('mapRenderArray')) || [];
    const updatedArray = [...existingArray, newItem];
    localStorage.setItem('mapRenderArray', JSON.stringify(updatedArray));
  };



  const mergeItemWithmapRenderArrayTemp = (newItem) => {
    
    const existingArray = JSON.parse(localStorage.getItem('mapRenderArrayTemp')) || [];
    const updatedArray = [newItem];
    localStorage.setItem('mapRenderArrayTemp', JSON.stringify(updatedArray));
  };

  const removeItemWithmapRenderArrayTemp=()=>{

    const existingArray = JSON.parse(localStorage.getItem('mapRenderArrayTemp')) || [];
    existingArray.map((layerId)=>{
      const map = mapRef.current;
      map.eachLayer(layer => {
        if ((Array.isArray(layerId) && layerId.includes(layer._leaflet_id)) || layer._leaflet_id === layerId)
        {
          map.removeLayer(layer);
        }
      });

    })
 
  }

  const NewItemWithmapRenderArray = (newItem) => {
    const updatedArray = [...newItem];
    localStorage.setItem('mapRenderArray', JSON.stringify(updatedArray));
  };


const removeLayerById = (layerId) => {
 

  if(typeof layerId === "string" && layerId?.indexOf("_filters")>0)
  {
    const updatedLayerId = layerId.replace("_filters", ""); // Remove "_filters" from layerId
    toolTypeMapping[updatedLayerId].setter([]);
    setToolTypePositions((prevPositions) => ({
      ...prevPositions,
      [updatedLayerId]: undefined,
    }));

  } else if(layerId=="removeMarker")
  {
    if (markerPosition.length > 0) {
      const updatedArray = markerPosition.slice(0, -1); // Create a new array without the last item
      setMarkerPosition([...updatedArray]); // Update state with the new array
      return null;
    }
  }
  else if (layerId=="removeLine")
  {
    if (lines.length > 0) {
      const updatedArray = lines.slice(0, -1); // Create a new array without the last item
      setLines([...updatedArray]); // Update state with the new array
      return null;
    }
  }
  else
  {
    const map = mapRef.current;
    map.eachLayer(layer => {
      if ((Array.isArray(layerId) && layerId.includes(layer._leaflet_id)) || layer._leaflet_id === layerId)
      {
        map.removeLayer(layer);
      }
    });
  }

 
};


  const [highRiskPositions, setHighRiskPositions] = useState([]);
  const [mediumRiskPositions, setMediumRiskPositions] = useState([]);
  const [carPositions, setCarPositions] = useState([]);
  const [boatPositions, setBoatPositions] = useState([]);
  const [militaryPositions, setMilitaryPositions] = useState([]);
  const [imageOverlays, setimageOverlays] = useState([]);
  const [mapKey, setMapKey] = useState(Date.now());

  const imagePaths = {
    highRisk: require("../../images/map-h-tem.png"),
    mediumRisk: require("../../images/map-low-temp.png"),
    cars: require("../../images/map-car.png"),
    boats: require("../../images/map-boat.png"),
    military: require("../../images/map-star.png"),
    save: require("../../images/map-save.png"),
  };

  const toolTypeMapping = {
    highRisk: {
      jsonFile: "highrisk.json",
      setter: setHighRiskPositions,
      getter: highRiskPositions,
    },
    mediumRisk: {
      jsonFile: "mediumrisk.json",
      setter: setMediumRiskPositions,
      getter: mediumRiskPositions,
    },
    cars: {
      jsonFile: "carspan.json",
      setter: setCarPositions,
      getter: carPositions,
    },
    boats: {
      jsonFile: "boatspan.json",
      setter: setBoatPositions,
      getter: boatPositions,
    },
    military: {
      jsonFile: "militaryloot.json",
      setter: setMilitaryPositions,
      getter: militaryPositions,
    },
  };

  var firstPoint = null;
  var secondPoint = null;

  const initialBounds = [
    [0, 0],
    [0, 0],
  ];
  const [imageBounds, setImageBounds] = useState(initialBounds);

  const customMarkerUserPos = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [15, 20],
    iconAnchor: [5, 20],
    popupAnchor: [2, -40],
  });


  // ...

useEffect(() => {
  // Event listener for zoom level change
  const handleZoomChange = () => {
  const zoomLevel = mapRef?.current?.getZoom();

    // Calculate the new font size based on zoom level
    const fontSize = 12 * (zoomLevel / 10); // Adjust the factor as needed

    // Update the font size of the text marker label
    const textLabels = document.querySelectorAll('.custom-text-icon .text-label');
    textLabels.forEach((textLabel) => {
      textLabel.style.fontSize = `${fontSize}px`;
    });
  };

  // Attach the zoom event listener
  mapRef?.current?.on('zoomend', handleZoomChange);

  return () => {
    // Clean up the event listener when the component unmounts
    mapRef?.current?.off('zoomend', handleZoomChange);
  };
}, []);

// ...


  // Function to handle zooming based on scroll direction
  const handleScrollZoom = (event) => {
    const map = mapRef?.current?.leafletElement;
    if (!map) return; // Return early if map is not available

    const delta = event.deltaY || event.wheelDelta;

    if (delta > 0) {
      map.zoomOut();
    } else if (delta < 0 && map.getZoom() < maxZoom) {
      map.zoomIn();
    }
  };

  useEffect(() => {
    // Attach the wheel event listener to the map container
    const mapContainer = mapRef?.current?.leafletElement?._container;
    if (!mapContainer) return; // Return early if map container is not available

    mapContainer.addEventListener('wheel', handleScrollZoom);

    // Clean up the event listener when the component unmounts
    return () => {
      mapContainer.removeEventListener('wheel', handleScrollZoom);
    };
  }, [mapRef]);



  


  const ClickHandler = () => {
    

    removeItemWithmapRenderArrayTemp();
    let allowDragging = true; // Flag variable to control dragging

    if (selectedTool == "circle") {

      mapRef?.current?.dragging.disable();
      mapRef?.current?.on("mousemove", onMouseMove);   
    }

    if (selectedTool == "pen") {

      mapRef?.current?.dragging.disable();
      mapRef?.current?.on("mousemove", onMouseMove);   
    }
    
    if (selectedTool =="rectangle") {
      mapRef?.current?.dragging.disable();
      mapRef?.current?.on("mousemove", onMouseMove);   
   
    }
    if (selectedTool =="lines") {
      mapRef?.current?.dragging.disable();
      mapRef?.current?.on("mousemove", onMouseMove);   
    }
    useMapEvents({
      click(event) {


        if (selectedTool === 'text') {

          if(textPopupVisible==false) // if click event is grabbed for the popup Save buttom click it will draw the popup again.
          {
            setEditorVisible(true);
            setEditorLatLng(event.latlng); 
          }
          else
          {
            setTextPopupVisisble(false);
          }    
             // const clickedLatLng = event.latlng;
                // const text = prompt('Enter text:'); // Get user input

                // if (text) {
                // const textLayer = L.divIcon({
                // className: 'custom-text-icon',
                // html: `<div class="text-label" style="color: ${color};">${text}</div>`,
                // });

                // const marker = L.marker(clickedLatLng, { icon: textLayer }).addTo(mapRef?.current);
                // }
        }



        if (selectedTool == "marker") {
          const { lat, lng } = event.latlng;
          const newPositions = markerPosition ? [...markerPosition] : [];
          newPositions.push([lat, lng]);
          setMarkerPosition(newPositions);
          mergeItemWithmapRenderArray("removeMarker");
        } 
        // else if (selectedTool =="lines") {
        //   const { lat, lng } = event.latlng;
        //   const newLines = lines ? [...lines] : [];
        //   newLines.push([lat, lng]);
        //   setLines(newLines);


        //   if(newLines.length>1)
        //   {
        //     const lineSegment = L.polyline([newLines[newLines.length - 2], newLines[newLines.length - 1]], {
        //       color: color,
        //       weight: size
        //     }).addTo(mapRef?.current);

        //     mergeItemWithmapRenderArray(lineSegment._leaflet_id);


        //   }
        //   else
        //   {
        //     const startMarker = L.rectangle(newLines[newLines.length - 1], {
        //       color: color,
        //       fillColor: color,
        //       fillOpacity: 1,
        //       weight: size, // Border weight of the marker
        //       width: 10, // Adjust the width of the marker as needed
        //       height: 10 // Adjust the height of the marker as needed
        //     }).addTo(mapRef?.current);
        //     mergeItemWithmapRenderArray(startMarker._leaflet_id);


        //   }
       

        // }
     
      },
    });

    return null;
  };


  let circlePreview = null;
  let rectanglePreview = null;
  let penPreview = [];

  let popup = null; // Define popup globally
  let penPath = null;

  let markerPreview = [];
  let linePreview = null;
  let finalline=null;
 



  const onMouseDown = (event) => {
    
    if (selectedTool === "circle") {
      if (!circlePreview) {
        mapRef?.current?.dragging.disable();
        firstPoint = event.latlng;
        mapRef?.current?.on("mouseup", onMouseUp);  
        // Update the popup content for circle drawing
        popup = L.popup({ closeButton: false })
          .setLatLng(firstPoint)
          .setContent("Click and drag to draw")
          .openOn(mapRef.current);
      }
    } else if (selectedTool === "rectangle") {
      if (!rectanglePreview) {
        mapRef?.current?.dragging.disable();
        firstPoint = event.latlng;
        mapRef?.current?.on("mouseup", onMouseUp);  
        // Update the popup content for rectangle drawing
        popup = L.popup({ closeButton: false })
          .setLatLng(firstPoint)
          .setContent("Click and drag to draw")
          .openOn(mapRef.current);
      }
    }

    else if (selectedTool === 'pen') {
      
      if (!penPath) {
        mapRef?.current?.dragging.disable();
        firstPoint = event.latlng;
        penPath = [firstPoint];
        mapRef?.current?.on('mouseup', onMouseUp);
        // Update the popup content for circle drawing
      }
      popup = L.popup({ closeButton: false })
      .setLatLng(firstPoint)
      .setContent("Click and drag to draw")
      .openOn(mapRef.current);
      
    }
    else if (selectedTool === 'lines') {
      const startPoint = event.latlng;
      markerPreview.push(startPoint);
      if(markerPreview.length>1)
       finalline = L.polyline([markerPreview[markerPreview.length - 2], markerPreview[markerPreview.length - 1]], {
        color: color,
        weight: size
      }).addTo(mapRef?.current);

      
      mergeItemWithmapRenderArray(finalline?._leaflet_id);

      mapRef?.current?.dragging.enable();

    }


  }

  
  const onMouseMove = (event) => {

    
    console.log("Mouse Move started");
    if (selectedTool === "circle") {
      if (firstPoint && !circlePreview) {
        const distance = firstPoint.distanceTo(event.latlng);
        const bounds = new L.LatLngBounds(firstPoint, event.latlng);
        const center = bounds.getCenter();
        const dx = event.latlng.lng - firstPoint.lng;
        const dy = event.latlng.lat - firstPoint.lat;
        const orientation = Math.atan2(dy, dx) * (180 / Math.PI);
  
        if (!circlePreview) {
          circlePreview = L.circle(center, {
            radius: distance,
            rotationAngle: orientation,
            color: color, // Set the new color here
            weight: size // Set the border size (weight) to 2 pixels
          }).addTo(mapRef?.current);
        } else {
          circlePreview.setLatLng(center).setRadius(distance);
        }
  
        if (popup) {
          // Update the popup content while dragging circle
          popup.setContent("Release mouse to finish drawing");
          popup.setLatLng(event.latlng); // Update popup position
        }
      } else if (circlePreview) {
        const distance = firstPoint.distanceTo(event.latlng);
        circlePreview.setRadius(distance);
        secondPoint = event.latlng;
        popup.setContent("Release mouse to finish drawing");
          popup.setLatLng(event.latlng); // Update popup position
      }
      else
      {
        if(!popup)
        {
          popup = L.popup({ closeButton: false })
          .setLatLng(event.latlng)
          .setContent("Click and drag to draw circle")
          .openOn(mapRef.current);
        }
        else
        {
          popup.setContent("Click and drag to draw circle");
          popup.setLatLng(event.latlng); // Update popup position
          popup.openOn(mapRef.current);

        }

        mapRef?.current?.on("mousedown", onMouseDown);

        
      }
    } else if (selectedTool === "rectangle") {
      if (!rectanglePreview && firstPoint) {
        // Rectangle preview while dragging
        const bounds = new L.LatLngBounds(firstPoint, event.latlng);
        rectanglePreview = L.rectangle(bounds,{ color: color , weight: size}).addTo(mapRef?.current);
      } else if (rectanglePreview) {
        // Update the rectangle while dragging
        const bounds = new L.LatLngBounds(firstPoint, event.latlng);
        rectanglePreview.setBounds(bounds);

        popup.setContent("Release mouse to finish drawing");
          popup.setLatLng(event.latlng); // Update popup position
          popup.openOn(mapRef.current);
      }
  
      else
      {
        if(!popup)
        {
          popup = L.popup({ closeButton: false })
          .setLatLng(event.latlng)
          .setContent("Click and drag to draw rectangle")
          .openOn(mapRef.current);
        }
        else
        {
          popup.setContent("Click and drag to draw rectangle");
          popup.setLatLng(event.latlng); // Update popup position
          popup.openOn(mapRef.current);

        }

        mapRef?.current?.on("mousedown", onMouseDown);

        
      }
    }
    if(selectedTool==="pen")
    {

  debugger;
      mapRef?.current?.on("mousedown", onMouseDown);
      if (penPath) {
        penPath.push(event.latlng);
  
        if (penPath.length > 1) {
          // Draw a line segment between the current and previous points
          const previousPoint = penPath[penPath.length - 2];
          const currentPoint = penPath[penPath.length - 1];
  
          // Create a Leaflet polyline for the line segment
          const lineSegment = L.polyline([previousPoint, currentPoint], {
            color: color, // Customize the color of the pen drawing
            weight: size
          }).addTo(mapRef?.current);

          penPreview.push(lineSegment);
  
          if (popup) {
          //Update the popup content while dragging pen
          popup.setContent('Release mouse to finish drawing');
          popup.setLatLng(currentPoint); // Update popup position
          }
        }
      }
      else
      {
              if(!popup)
              {
                popup = L.popup({ closeButton: false })
                .setLatLng(event.latlng)
                .setContent("Click and drag to draw")
                .openOn(mapRef.current);
              }
              else
              {
                popup.setContent("Click and drag to draw");
                popup.setLatLng(event.latlng); // Update popup position
                popup.openOn(mapRef.current);
        
              }

      }

    

    }
    else if(selectedTool==="lines")
    {
      if(markerPreview.length>0)
      {
      popup.setContent("Click last point to finsh the line");
      popup.setLatLng(event.latlng); // Update popup position
      popup.openOn(mapRef.current);

        linePreview?.remove();
        const currentLatLng = event.latlng;
        linePreview=L.polyline([markerPreview[markerPreview.length-1], currentLatLng], {
          dashArray: '10, 10',
          color:  color, // Customize the color
          weight: size // Customize the weight
        }).addTo(mapRef?.current);

        mergeItemWithmapRenderArrayTemp(linePreview._leaflet_id);

      }
      else
      {
        if(!popup)
        { popup = L.popup({ closeButton: false })
          .setLatLng(event.latlng)
          .setContent("Click to start drawing line")
          .openOn(mapRef.current);
        }
        else
        {
          popup.setContent("Click to start drawing line");
          popup.setLatLng(event.latlng); // Update popup position
          popup.openOn(mapRef.current);
        }

        mapRef?.current?.on("mousedown", onMouseDown);

      }
       
    }
  }
  
  const onMouseUp = (event) => {
    
    if (selectedTool === "circle" && circlePreview) {
      // Finished drawing a circle
       mergeItemWithmapRenderArray(circlePreview._leaflet_id);

      circlePreview = null;
  
      // Update the popup content after finishing circle drawing
      if (popup) {
        popup.setContent("Click and drag to draw");
      }
    } else if (selectedTool === "rectangle" && rectanglePreview) {
      // Finished drawing a rectangle
      mergeItemWithmapRenderArray(rectanglePreview._leaflet_id);
      rectanglePreview = null;
  
      // Update the popup content after finishing rectangle drawing
      if (popup) {
        popup.setContent("Click and drag to draw");
      }
    }

    else if (selectedTool === 'pen' && penPath) {
      // Finished drawing with the pen
      
      let penArray = penPreview.map((obj) => obj._leaflet_id);
      mergeItemWithmapRenderArray(penArray);
      penPreview=[];
      penPath = null;
      firstPoint = null;
      // mapRef?.current?.off('mousemove', onMouseMove);
      // mapRef?.current?.off('mouseup', onMouseUp);
      // mapRef?.current?.dragging.enable();
    }
    //  else if(selectedTool==="lines")
    // {
    //   if (linePreview) {
    //     const endPoint = event.latlng;
    //     const lineArray = [linePreview.getLatLngs()[0], endPoint];
    //     mergeItemWithmapRenderArray(lineArray);
    
    //     mapRef.off('mousemove', onMouseMove);
    //     mapRef.off('mouseup', onMouseUp);
    
    //     mapRef.removeLayer(linePreview);
    //     linePreview = null;
    //   }
    // }
  
    // Reset the points and remove listeners
    firstPoint = null;
    secondPoint = null;
    mapRef?.current?.off("mouseup", onMouseUp);
  
    // Enable map dragging after creating the shape
    mapRef?.current?.dragging.enable();
  }
  


  
  const renderMapComponent = () => {
    
    const selectedMapData = mapData?.find((map) => map.id == selectedMap);

    return selectedMapData ? (
      <MapFooter
        galleryItems={selectedMapData.galleryItems}
        featureItems={selectedMapData.featureItems}
      />
    ) : null;
  };

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  const handleMapChange = (event) => {
    setMapKey(Date.now()); // Update the key to trigger a re-render
    const selectedMap = event.target.value;
    setSelectedMap(selectedMap);
    setMapLoaded(false);
    renderMap();
  };

  // const LazyImageOverlay = ({ url, bounds, attribution }) => {
  //   useEffect(() => {
  //     const image = new Image();
  //     image.src = url;

  //     const handleImageLoad = () => {
  //       setImageLoaded(true);
  //     };

  //     image.addEventListener("load", handleImageLoad);

  //     return () => {
  //       image.removeEventListener("load", handleImageLoad);
  //     };
  //   }, [url]);

  //   return imageLoaded ? (
  //     <ImageOverlay url={url} bounds={bounds} attribution={attribution} />
  //   ) : null;
  // };

  const removeAllImageOverlays = () => {
    imageOverlays.forEach((imageOverlay) => {
      imageOverlay.remove(); // Remove each image overlay from the map
    });
    setimageOverlays([]);
  };

  const updateBounds = () => {
    const selectedMapData = mapData.find((map) => map.id == selectedMap);
    const img = new Image();
    const mapImage = require(`./Images/${selectedMapData.mapImage}`);
  
    img.src = mapImage;
  
    img.onload = () => {
      const imageWidth = img.width;
      const imageHeight = img.height;
  
      const map = mapRef?.current;// Access the Leaflet map instance using the ref
  
      const mapWidth = map.getSize().x;
      const mapHeight = map.getSize().y;
  
      const aspectRatio = imageWidth / imageHeight;
  
      let boundsWidth;
      let boundsHeight;
      let xOffset;
      let yOffset;
  
      if (mapWidth / mapHeight > aspectRatio) {
        boundsWidth = mapHeight * aspectRatio * 1.7 * 2;
        boundsHeight = boundsWidth / aspectRatio * 2;
        xOffset = (mapWidth - boundsWidth) / 2;
        yOffset = (mapHeight - boundsHeight) / 2;
      } else {
        boundsWidth = mapWidth * 1.7 * 2;
        boundsHeight = boundsWidth / aspectRatio * 2;
        xOffset = (mapWidth - boundsWidth) / 2;
        yOffset = (mapHeight - boundsHeight) / 2;
      }
  
      const southWest = map.containerPointToLatLng([xOffset, yOffset]);
      const northEast = map.containerPointToLatLng([
        xOffset + boundsWidth,
        yOffset + boundsHeight,
      ]);
      const newBounds = [southWest, northEast];
  
      removeAllImageOverlays();
      const imageOverlay = L.imageOverlay(mapImage, newBounds).addTo(map);
      setimageOverlays((prevOverlays) => [...prevOverlays, imageOverlay]);
    };
  };
  

  
  const [currentCoordinates, setCurrentCoordinates] = useState({
    lat: 0,
    lng: 0,
  });

  const handleMouseMove = (e) => {
    const { lat, lng } = e.latlng;
    setCurrentCoordinates({ lat, lng });
  };

  const renderMap = () => {
    // Create the Leaflet map


    if (selectedMap =="") {
      return null;
    }

    const selectedMapData = mapData.find((map) => map.id == selectedMap);
    if (!selectedMapData) {
      return null;
    }

    function adjustColorBrightness(colorName, brightness) {
      const tinyColor = require("tinycolor2");
      var colorObj = tinyColor(colorName);
      var adjustedColor = colorObj.lighten(brightness).toString();
      return adjustedColor;
    }

    const mapBounds = [
      [0, 0], // Southwestern coordinate (latitude, longitude)
      [100, 100], // Northeastern coordinate (latitude, longitude)
    ];
    const attribution = "Image courtesy of Example.com";

    const mapImage = require(`./Images/${selectedMapData.mapImage}`);
    // Set the minimum and maximum zoom levels
    let customsize=JSON.parse(JSON.stringify(size));
    
    return (
      <>
      <MapContainer
       {...mapOptions}
        maxZoom={maxZoom}
        key={mapKey} // Add key prop here
        center={[-13.606206852333332 , 0.606206852333332 + 4.005]} // Adjusted center values
        zoom={3.4} // Update the zoom value to zoom in by two times (initial zoom * 2)
        style={{ height: "100%", width: "100%" }}
        onMouseMove={handleMouseMove}
        zoomControl={false}
        ref={mapRef}
        fullscreenControl={false}
        // whenReady={map => {map.onload = updateBounds;}}

        whenReady={() => {
          updateBounds();
          handleClearClick();
        }}
      >
        {/* <img src={mapImage} /> */}
        {/* <LazyImageOverlay
          url={mapImage}
          bounds={L.latLngBounds(imageBounds[0], imageBounds[1])}
          attribution={attribution}
        /> */}
        <ZoomControl position="topright" />
        <ClickHandler />
        <FullscreenControl position="topright" title="Expand Map" titleCancel="Exit Fullscreen" forceSeparateButton />

        {markerPosition?.map((position, index) => (
          <Marker key={index} position={position} icon={faviconIconMarker}>
            <Popup>
              Marker Coordinates: {position[0]}, {position[1]}
            </Popup>
          </Marker>
        ))}

        {Object.keys(toolTypeMapping).map((key) => {
          const getter = toolTypeMapping[key].getter;

          
          if (Array.isArray(getter)) {
            return getter.map((position, index) => {
              if (key =="highRisk" || key =="mediumRisk") {
                return (
                  <Circle
                    key={`circle-${index}`}
                    center={[position[0], position[1]]}
                    radius={position[2]}
                    color={position[3]}
                  />
                );
              } else {
                let img = imagePaths[key];
                let brightness = -16;
                let brightness2 = -28;
                let customfaviconIconMarker = L.divIcon({
                  html: `<div style="background: linear-gradient(${adjustColorBrightness(
                    position[2],
                    brightness
                  )}, ${adjustColorBrightness(
                    position[2],
                    brightness2
                  )}); border-radius: 50%; width: 23px; height: 23px; display: flex; justify-content: center; align-items: center; padding: 3px;">
                           <img src="${img}" alt="Marker" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />
                         </div>`,
                });

                return (
                  <Marker
                    key={`marker-${index}`}
                    position={[position[0], position[1]]}
                    icon={customfaviconIconMarker}
                  >
                    <Popup>
                      Marker Coordinates: {position[0]}, {position[1]}
                    </Popup>
                  </Marker>
                );
              }
            });
          }
          return null;
        })}

        {/* {lines && (
          <FeatureGroup>
            {lines.map((mark, i) => (
              <Marker key={i} position={mark} icon={customMarkerUserPos}>
              </Marker>
            ))}
            <Polyline positions={lines} color={color} weight={customsize} className="custom-polyline" />
          </FeatureGroup>
        )} */}

  
          {editorVisible && selectedTool=='text' && (
            <Popup
              className="editor-popup"
              position={[editorLatLng.lat  - 0.001, editorLatLng.lng]}
              onClose={() => setEditorVisible(false)}
            >
              <ReactQuill
                value={editorText}
                
                placeholder="Enter text..."
              />
              <button onClick={handleEditorSave}>Save</button>
            </Popup>
          )}
      </MapContainer>
             {/* {editorVisible && (
              <div className="editor-container">
                <ReactQuill
                  value={editorText}
                  onChange={setEditorText}
                  placeholder="Enter text..."
                />
                <button onClick={handleEditorSave}>Save</button>
              </div>
            )} */}
            </>
    );
  };

  const handleEditorSave = () => {
    
    debugger;
    const editorElement = document.querySelector('.ql-editor');
    let editorContent="";
    if (editorElement) {
       editorContent = editorElement.innerHTML;
    }

   
   const textLayer = L.divIcon({
      className: 'custom-text-icon',
      html: `<div class="text-label">${editorContent}</div>`,
    });

    const adjustedLatLng = {
      lat: editorLatLng.lat + 1.005, // Adjust as needed for top
      lng: editorLatLng.lng - 0.005, // Adjust as needed for left
    };
    const marker = L.marker(adjustedLatLng, { icon: textLayer }).addTo(mapRef.current);
    setTextPopupVisisble(true);
    setEditorVisible(false);
  };

  const handleEditorChange = (content) => {
    setEditorText(content);
  };

  const handleHandClick = () => {
    // Remove the event listeners when the component unmounts
    mapRef?.current?.getContainer().classList.remove("crosshair-cursor");
    mapRef?.current?.getContainer().classList.add("grab-cursor");

    mapRef?.current?.off("mousedown", onMouseDown);
    mapRef?.current?.off("mousemove", onMouseMove);
    mapRef?.current?.off("mouseup", onMouseUp);
    console.log("Hand clicked");
    setSelectedTool("hand");

    // Add the hand-cursor class to the map container
    const mapContainer = document.getElementById("mapCanvas");
    mapContainer.classList.add("hand-cursor");
  };
  const handleMarkerClick = () => {
    mapRef?.current?.getContainer().classList.add("crosshair-cursor");
    mapRef?.current?.getContainer().classList.remove("grab-cursor");
        // Remove the event listeners when the component unmounts
        mapRef?.current?.off("mousedown", onMouseDown);
        mapRef?.current?.off("mousemove", onMouseMove);
        mapRef?.current?.off("mouseup", onMouseUp);
    console.log("Marker clicked");
    setSelectedTool("marker");
  };

 

  const handleCircleClick = () => {
        mapRef?.current?.getContainer().classList.add("crosshair-cursor");
        mapRef?.current?.getContainer().classList.remove("grab-cursor");

        // Remove the event listeners when the component unmounts
        mapRef?.current?.off("mousedown", onMouseDown);
        mapRef?.current?.off("mousemove", onMouseMove);
        mapRef?.current?.off("mouseup", onMouseUp);
    console.log("Circle clicked");
    setSelectedTool("circle");
  };

  const handleRectClick = () => {
    mapRef?.current?.getContainer().classList.add("crosshair-cursor");
    mapRef?.current?.getContainer().classList.remove("grab-cursor");
        // Remove the event listeners when the component unmounts
        mapRef?.current?.off("mousedown", onMouseDown);
        mapRef?.current?.off("mousemove", onMouseMove);
        mapRef?.current?.off("mouseup", onMouseUp);
    console.log("Rectangle clicked");
    setSelectedTool("rectangle");
  };

  const handleLineClick = () => {
    mapRef?.current?.getContainer().classList.add("crosshair-cursor");
    mapRef?.current?.getContainer().classList.remove("grab-cursor");
        // Remove the event listeners when the component unmounts
        mapRef?.current?.off("mousedown", onMouseDown);
        mapRef?.current?.off("mousemove", onMouseMove);
        mapRef?.current?.off("mouseup", onMouseUp);
    console.log("Line clicked");
    setSelectedTool("lines");
  };


  const handlePenClick = () => {
    mapRef?.current?.getContainer().classList.add("crosshair-cursor");
    mapRef?.current?.getContainer().classList.remove("grab-cursor");
        // Remove the event listeners when the component unmounts
        mapRef?.current?.off("mousedown", onMouseDown);
        mapRef?.current?.off("mousemove", onMouseMove);
        mapRef?.current?.off("mouseup", onMouseUp);
    console.log("Pen clicked");
    setSelectedTool("pen");
  };


  
  const handleTextClick = () => {
    mapRef?.current?.getContainer().classList.remove("crosshair-cursor");
    mapRef?.current?.getContainer().classList.remove("grab-cursor");
    mapRef?.current?.getContainer().classList.add("text-cursor");

        // Remove the event listeners when the component unmounts
        mapRef?.current?.off("mousedown", onMouseDown);
        mapRef?.current?.off("mousemove", onMouseMove);
        mapRef?.current?.off("mouseup", onMouseUp);
    console.log("Text clicked");
    setEditorVisible(false);
    setEditorLatLng(null); 

    setSelectedTool("text");
  };

  const handleSaveClick = () => {
        // Remove the event listeners when the component unmounts
        mapRef?.current?.off("mousedown", onMouseDown);
        mapRef?.current?.off("mousemove", onMouseMove);
        mapRef?.current?.off("mouseup", onMouseUp);
    console.log("Save clicked");
    setSelectedTool("save");

    const mapContainer = document.getElementById('mapCanvas');
    if (mapContainer && !mapContainer._leaflet_id) {
    // Create a Leaflet map
    const map = L.map('mapCanvas', {
      renderer: L.canvas(),
    }).setView([-13.606206852333332 , 0.606206852333332 + 4.005], 3.4);
  }


    // Optionally, add any markers, polylines, or other layers to the map

    // Use html2canvas to capture the map as an image
    html2canvas(document.getElementById("mapCanvas")).then((canvas) => {
      // Convert the canvas to a data URL
      const dataURL = canvas.toDataURL("image/png");

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "map.png";

      // Simulate a click on the link element to initiate the download
      link.click();
    });
  };

  const handleUndoClick = () => {
        // Remove the event listeners when the component unmounts
        mapRef?.current?.off("mousedown", onMouseDown);
        mapRef?.current?.off("mousemove", onMouseMove);
        mapRef?.current?.off("mouseup", onMouseUp);
    
    console.log("API clicked");
    setSelectedTool("undo");
    
    const storedArray = JSON.parse(localStorage.getItem('mapRenderArray')) || [];        
    if (storedArray?.length > 0) {
      removeLayerById(storedArray[storedArray?.length-1]);
      const updatedArray = storedArray.slice(0, -1); // Create a new array without the last item
      NewItemWithmapRenderArray(updatedArray);
    }
  };

  const handleClearClick = () => {
        // Remove the event listeners when the component unmounts
        mapRef?.current?.off("mousedown", onMouseDown);
        mapRef?.current?.off("mousemove", onMouseMove);
        mapRef?.current?.off("mouseup", onMouseUp);
    setMarkerPosition(null);
    setLines(null);
    setSelectedTool("clear");
    localStorage.clear();
    const mapCanvas = document.getElementById("mapCanvas");
    mapCanvas.classList.remove("show-grid");

    mapRenderArray.forEach((circle) => {
      circle.remove();
    });

    mapRenderArray.forEach((rectaagle) => {
      rectaagle.remove();
    });

    mapRenderArray.forEach((markers) => {
      markers.remove();
    });

    Object.keys(toolTypeMapping).forEach((toolType) => {
      
      const setter = toolTypeMapping[toolType].setter;
      setter([]);
      // Set the positions in the toolTypePositions object to undefined
      setToolTypePositions((prevPositions) => ({
        ...prevPositions,
        [toolType]: undefined,
      }));
    });

    const map = mapRef?.current;// Access the Leaflet map instance using the ref
    map?.eachLayer(function (layer) {
      if (!(layer instanceof L.ImageOverlay)) {
        map.removeLayer(layer);
      }
    });
    // Rest of the code for handling the "Clear" icon click
  };
  const handleClick = (toolType, ImagePath) => {
    
    console.log(`${toolType} clicked`);
    setSelectedTool(toolType);

    const selectedMapData = mapData.find((map) => map.id == selectedMap);

    if (toolType in toolTypeMapping) {
      const { jsonFile, setter } = toolTypeMapping[toolType];

      let filename = null;
      try {
        filename = require(`./Details/${selectedMapData.name}/${jsonFile}`);
      } catch (error) {
        // Handle the error when the module is not found
        console.error(`Error: ${error.message}`);
        // Optionally, provide a fallback or default value for the filename
        filename = null;
      }

      // Fetch the JSON file based on toolType
      const newPositions = [];
      mergeItemWithmapRenderArray(toolType+"_filters");

      if (toolType =="mediumRisk" || toolType =="highRisk") {
        // Manipulate the data for mediumRisk
        filename?.data.circles.map((circle) => {
          newPositions.push([
            circle.latlng.lat,
            circle.latlng.lng,
            circle.radius,
            circle.color,
          ]);
        });
      } else {
        filename?.data.markers.forEach((x) => {
          if (x.lat && x.lng) {
            newPositions.push([x.lat, x.lng, x.markerColor]);
          }
        });
      }

      if (
        JSON.stringify(newPositions) ===
        JSON.stringify(toolTypePositions[toolType])
      ) {
        // Clear the positions if the tool type is clicked again
        setter([]);
        // Remove the tool type from toolTypePositions
        setToolTypePositions((prevPositions) => ({
          ...prevPositions,
          [toolType]: undefined,
        }));
      } else {
        setter(newPositions);
        // Update the toolTypePositions object with the new positions
        setToolTypePositions((prevPositions) => ({
          ...prevPositions,
          [toolType]: newPositions,
        }));
      }

      renderMap();
    }
  };

  const handleGridClick = () => {
        // Remove the event listeners when the component unmounts
        mapRef?.current?.off("mousedown", onMouseDown);
        mapRef?.current?.off("mousemove", onMouseMove);
        mapRef?.current?.off("mouseup", onMouseUp);
    console.log("Grid clicked");
    setSelectedTool("grid");

    const mapCanvas = document.getElementById("mapCanvas");
    mapCanvas.classList.toggle("show-grid");

    return () => {
      mapCanvas.classList.remove("show-grid");
    };
  };

  const handleShareClick = () => {
    
    try {
    const map = mapRef.current;
    if (map) {
      const center = map.getCenter();
      const zoom = map.getZoom();
      const shareableLink = `${window.location.href}?lat=${center.lat}&lng=${center.lng}&zoom=${zoom}`;

      navigator.clipboard.writeText(shareableLink).then(() => {
        console.log('Shareable link copied to clipboard:', shareableLink);
        // setShowNotification(true);
        // setTimeout(() => setShowNotification(false), 2000);
      });
    }
  }
  catch (error) {
    console.error('Error copying to clipboard:', error);
    // Handle the error and show an appropriate message to the user
  }

    setSelectedTool('share');
  };

  const handleEnterChange = (event) => {
    const value = event.target.value;
    console.log("Enter changed:", value);
    setSelectedTool("enter");
  };

  return (
    <>
      {/* <div className="flex flex-col items-center py-12">
        <h2 className="text-4xl font-bold mb-4 secondaryColor uppercase">
          MAP
        </h2>
        <div className="flex items-center">
          <span className="text-white text-base">Home</span>
          <div className="h-2 w-2 rounded-full secondaryBg mx-2"></div>
          <span className="text-white text-base">Map</span>
        </div>
      </div> */}
      {/* {showNotification && <div className="notification">Link copied to clipboard!</div>} */}



<div className="map-meu">


      <div className={activeSideMenu ? "map-side-bar active" : "map-side-bar"}>
        <div className="map-side-arrow text-xs	 text-white" onClick={() => setActiveSideMenu(!activeSideMenu)}>
          <i className="fas fa-angle-right"></i>

        

          
        </div>

        <div className="w-full bg-transparent text-white justify-center">
              <label htmlFor="location" className="text-xs	 font-bold">
                Choose Location
              </label>
              <select
                value={selectedMap}
                id="location"
                onChange={handleMapChange}
                className="selectbox-class text-xs block w-full text-black border border-gray-700 rounded px-3 py-2"
              >
                {/* <option value="">Select Location</option> */}
                {mapData.map((map) => (
                  <option key={map.id} value={map.id}>
                    {map.name}
                  </option>
                ))}
              </select>

              <div className="mt-4">
                {showNotification}
                <p className="text-xs	 font-bold">Tools:</p>
                <div className="flex mt-2">
                  <div
                    className={`map-icon-box mr-2 ${ selectedTool=='hand' ? 'active' : ''}`}
                    onClick={handleHandClick}
                  >
                    <img
                      src={require("../../images/map-hand.png")}
                      alt="hand"
                      className="w-4 justify-center"
                    />{" "}
                    Hand
                  </div>
                  <div
                    className={`map-icon-box mr-2 ${ selectedTool=='marker' ? 'active' : ''}`}
                    onClick={handleMarkerClick}
                  >
                    <img
                      src={require("../../images/map-location.png")}
                      alt="location"
                      className="w-4 justify-center"
                    />{" "}
                    Marker
                  </div>
                  <div
                    className={`map-icon-box mr-2 ${ selectedTool=='circle' ? 'active' : ''}`}
                    onClick={handleCircleClick}
                  >
                    <img
                      src={require("../../images/map-circle.png")}
                      alt="Circle"
                      className="w-4 justify-center"
                    />{" "}
                    Circle
                  </div>
                  <div
                    className={`map-icon-box mr-2 ${ selectedTool=='rectangle' ? 'active' : ''}`}
                    onClick={handleRectClick}
                  >
                    <img
                      src={require("../../images/map-rectaagle.png")}
                      alt="Rectangle"
                      className="w-4 justify-center"
                    />{" "}
                    Rectangle
                  </div>
                </div>

                <div className="flex mt-2">
                  <div
                    className={`map-icon-box mr-2 ${ selectedTool=='lines' ? 'active' : ''}`}
                    onClick={handleLineClick}
                  >
                    <img
                      src={require("../../images/map-line.png")}
                      alt="Line"
                      className="w-4 justify-center"
                    />{" "}
                    Line
                  </div>
                  <div
                    className={`map-icon-box mr-2 ${ selectedTool=='pen' ? 'active' : ''}`}
                    onClick={handlePenClick}
                  >
                    <img
                      src={require("../../images/pen.png")}
                      alt="Pen"
                      className="w-4 justify-center"
                    />{" "}
                    Pen
                  </div>
                  {/* <div
                    className={`map-icon-box mr-2 ${ selectedTool=='text' ? 'active' : ''}`}
                    onClick={handleTextClick}
                  >
                    <img
                      src={require("../../images/text.png")}
                      alt="Text"
                      className="w-4 justify-center"
                    />{" "}
                    Text
                  </div> */}
                </div>
                <div className="flex mt-2">

<div
    className={`map-icon-box mr-2 ${ selectedTool=='save' ? 'active' : ''}`}
    onClick={handleSaveClick}
  >
    <img
      src={require("../../images/map-save.png")}
      alt="Save"
      className="w-4 justify-center"
    />{" "}
    Save
  </div>
  <div
    className="map-icon-box mr-2"
    onClick={handleUndoClick}
  >
    <img
      src={require("../../images/undo.png")}
      alt="Undo"
      className="w-4 justify-center"
    />{" "}
    Undo
  </div>
  <div
    className="map-icon-box mr-2"
    onClick={handleClearClick}
  >
    <img
      src={require("../../images/map-delete.png")}
      alt="Delete"
      className="w-4 justify-center"
    />{" "}
    Clear
  </div>


</div>
              </div>
          

              <div className="mt-4">
                <p className="text-xs	 font-bold">Filters:</p>
                <div className="flex mt-2">
                  <div
                    className={`map-icon-box mr-2 ${ selectedTool=='highRisk' ? 'active' : ''}`}
                    onClick={() => handleClick("highRisk", imagePaths.highRisk)}
                  >
                    <img
                      src={imagePaths.highRisk}
                      alt="H. Risk"
                      className="w-4 justify-center"
                    />{" "}
                    H. Risk
                  </div>
                  <div
                    className={`map-icon-box mr-2 ${ selectedTool=='mediumRisk' ? 'active' : ''}`}
                    onClick={() =>
                      handleClick("mediumRisk", imagePaths.mediumRisk)
                    }
                  >
                    <img
                      src={imagePaths.mediumRisk}
                      alt="L. Risk"
                      className="w-4 justify-center"
                    />{" "}
                    M Risk
                  </div>
                  <div
                    className={`map-icon-box mr-2 ${ selectedTool=='cars' ? 'active' : ''}`}
                    onClick={() => handleClick("cars", imagePaths.cars)}
                  >
                    <img
                      src={imagePaths.cars}
                      alt="Cars"
                      className="w-4 justify-center"
                    />{" "}
                    Cars
                  </div>
                  <div
                    className={`map-icon-box mr-2 ${ selectedTool=='boats' ? 'active' : ''}`}
                    onClick={() => handleClick("boats", imagePaths.boats)}
                  >
                    <img
                      src={imagePaths.boats}
                      alt="Boats"
                      className="w-4 justify-center"
                    />{" "}
                    Boats
                  </div>
                </div>

                <div className="flex mt-2">
                  <div
                    className={`map-icon-box mr-2 ${ selectedTool=='military' ? 'active' : ''}`}
                    onClick={() => handleClick("military", imagePaths.military)}
                  >
                    <img
                      src={imagePaths.military}
                      alt="Military"
                      className="w-4 justify-center"
                    />{" "}
                    Military
                  </div>
                  <div
                    className={`map-icon-box mr-2 ${ selectedTool=='grid' ? 'active' : ''}`}
                    onClick={handleGridClick}
                  >
                    <img
                      src={require("../../images/map-grid.png")}
                      alt="Grid"
                      className="w-4 justify-center"
                    />{" "}
                    Grid
                  </div>
                  
                </div>
              </div>
              <div className="mt-4">
                {/* <p className="text-xs	 font-bold">Settings:</p> */}
              <div   >
      {/* <div
        className="color-preview"
        onClick={togglePicker}
        style={{
          backgroundColor: color,
          cursor: 'pointer',
        }}
      /> */}
      {
      // pickerVisible && 
      (

        <div>
        <div>
         {/* <div class="bg-white">
      <div className="color-picker"> */}

      {/* <div class="close-button"  onClick={togglePicker}>
  <span> &#10005;</span>
</div> */}
      <div className="text-xs	 font-bold">Colors</div>

        <SketchPicker color={color} onChange={handleColorChange} />
    

      <div className="text-xs	 font-bold">Size</div>
      <div className="size-slider">
        <input
          type="range"
          min="0"
          max="100"
          value={size}
          onChange={handleSizeChange}
        />
        <input type="text" className="textbox" value={size} onChange={handleSizeChange}/>

      </div>
    </div>
    </div>
      )}
    </div>
    </div>

              <hr className="sharehr"></hr>
              <div className="flex mt-2">
              <div
  className={`map-icon-box mr-2 ${selectedTool === 'share' ? 'active' : ''}`}
  onClick={handleShareClick} 
>
                  <img
                    src={require("../../images/icons8-share-50.png")}
                    alt="Grid"
                    className="w-4 justify-center"
                  />{" "}
                  Share
                </div>
              </div>
            </div>

      </div>
      <section className=" ">
      
          <div className="flex flex-col md:flex-row bg-blac h-cstm">
           
            <div  className="w-full bg-transparent" id="mapCanvas"  >
              {renderMap()}
            </div>
          </div>
       
      </section>
      </div>
      {/* {renderMapComponent()} */}
    </>
  );
}

export default Maps;
