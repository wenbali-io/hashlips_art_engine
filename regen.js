const basePath = process.cwd();
const {
  regenImages,
  buildRegen,
} = require(`${basePath}/utils/generate_artwork.js`);

(() => {
  buildRegen();
  regenImages();
})();
