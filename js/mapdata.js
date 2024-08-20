import fr from '../noms.json' with { type: 'json' };
import en from '../names.json' with { type: 'json' };
var simplemaps_worldmap_mapdata={
  main_settings: {
    //General settings
		width: "responsive", //or 'responsive'
    background_color: "#6DC6DA",
    background_transparent: "no",
    popups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#7BDA6D",
    state_hover_color: "#3DAB2C",
    state_url: "https://simplemaps.com",
    border_size: 0.4,
    border_color: "#27314C",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
		//Location defaults
		location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "yes",
    all_locations_hidden: "yes",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
   
		//Zoom settings
		manual_zoom: "yes",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {},
  locations: {
    "0": {
      name: "Paris",
      lat: "48.866666670",
      lng: "2.333333333",
      color: "default",
      description: "default",
      url: "default"
    },
    "1": {
      name: "Tokyo",
      lat: "35.666666670",
      lng: "139.750000000",
      color: "default",
      description: "default",
      url: "default"
    },
    "3": {
      name: "New York",
      lat: "40.71",
      lng: "-74.0059731",
      description: "default",
      color: "default",
      url: "default",
      size: "default"
    }
  },
  labels: {}
};

for (let code in en) {
  if (fr[code]){
    simplemaps_worldmap_mapdata.state_specific[code] = {
      name: fr[code],
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    };
  }
}

console.log(simplemaps_worldmap_mapdata.main_settings);