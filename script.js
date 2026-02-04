const viewer = pannellum.viewer('panorama', {
  "default": {
    "firstScene": "front",
    "sceneFadeDuration": 1200,
    "autoLoad": true,
    "showControls": false,
    "hfov": 80, // Větší přiblížení (původně 100)
    "minHfov": 50, // Maximální dovolený zoom dovnitř
    "maxHfov": 110  // Maximální dovolený zoom ven
  },

  "scenes": {
    "front": {
      "title": "Zepředu",
      "type": "equirectangular",
      "panorama": "front.jpg"
    },
    "side": {
      "title": "Z boku",
      "type": "equirectangular",
      "panorama": "side.jpg"
    },
    "back": {
      "title": "Zezadu",
      "type": "equirectangular",
      "panorama": "back.jpg"
    },
    "top": {
      "title": "Zhora",
      "type": "equirectangular",
      "panorama": "top.jpg"
    }
  }
});

function updateTitle() {
  const sceneId = viewer.getScene();
  if (sceneId && viewer.getConfig().scenes[sceneId]) {
    document.getElementById('sceneTitle').innerText = viewer.getConfig().scenes[sceneId].title;
  }
}


viewer.on('load', updateTitle);
