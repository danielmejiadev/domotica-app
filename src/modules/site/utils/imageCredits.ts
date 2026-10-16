export interface ImageCredit {
  file: string;
  title: string;
  author: string;
  license: string;
  source: string;
}

// Photos from Wikimedia Commons, stored under public/images. Keep this list in sync when adding or swapping an image.
export const IMAGE_CREDITS: ImageCredit[] = [
  {
    file: "hero-luces",
    title: "Philips hue spot fugato plafond",
    author: "smartlampen.nl",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Philips_hue_spot_fugato_plafond.jpg",
  },
  {
    file: "casa-timbre",
    title: "Ring video doorbell",
    author: "Ring",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Ring_video_doorbell.jpg",
  },
  {
    file: "negocio-asistentes",
    title: "Google Home with Home Hub and Home Mini on table",
    author: "Y2kcrazyjoker4",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Google_Home_with_Home_Hub_and_Home_Mini_on_table.jpg",
  },
  {
    file: "oficina-panel",
    title: "Home Assistant Dashboard",
    author: "Home Assistant contributors",
    license: "Apache License 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Home_Assistant_Dashboard.png",
  },
  {
    file: "panel-pared",
    title: "Woman adjusts smart home thermostat while holding smartphone in home setting",
    author: "Shixart1985",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Woman_adjusts_smart_home_thermostat_while_holding_smartphone_in_home_setting.jpg",
  },
  {
    file: "termostato",
    title: "Person holds smart thermostat displaying room temperature inside a home",
    author: "Shixart1985",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Person_holds_smart_thermostat_displaying_room_temperature_inside_a_home.jpg",
  },
  {
    file: "escenas-led",
    title: "2K Life (Unsplash)",
    author: "Rhett Noonan rhett_noonan",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:2K_Life_(Unsplash).jpg",
  },
];
