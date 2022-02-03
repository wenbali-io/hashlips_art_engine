const basePath = process.cwd();
const fs = require('fs');
const inputDir = `${basePath}/build/json`;
const inputFile = '_metadata.json';
const regenDir = `${basePath}/build/regen`;
const layersDir = `${basePath}/layers`;
const { createCanvas, loadImage } = require(`${basePath}/node_modules/canvas`);
const {
  format,
  pixelFormat,
  text,
  dropLayers,
  pixelate,
  showText,
  crop,
} = require(`${basePath}/src/config.js`);
const canvas = createCanvas(format.width, format.height);
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = format.smoothing;

const regenImages = async () => {
  const nfts = JSON.parse(fs.readFileSync(`${inputDir}/${inputFile}`));
  if (nfts == null) {
    console.log('Please generate a collection first.');
    return;
  }
  nfts.map(async (nft) => {
    // get the edition for the filename
    const id = nft.edition;
    console.log('id', id);
    // get the attributes for the layers
    const layers = nft.attributes;

    let loadedElements = [];
    layers.map((l) => {
      if (isVisibleLayer(l.trait_type)) {
        const layer = dirtyName(l.trait_type, l.value);
        loadedElements.push(loadLayerImg(layer));
      }
    });

    await Promise.all(loadedElements).then((renderObjectArray) => {
      ctx.clearRect(0, 0, format.width, format.height);
      // stack on the layers
      renderObjectArray.forEach((renderObject, index) => {
        drawElement(renderObject);
      });
      if (pixelate) drawPixelate();
      if (showText) addText(`ID: ${id}`, text.xGap, text.yGap, text.size);
      if (crop.doCrop) drawCrop();
      saveImage(id);
    });
  });
};

const isVisibleLayer = (_layerName) => {
  return !dropLayers.includes(_layerName);
};

const drawElement = (_loadedLayer) => {
  ctx.drawImage(_loadedLayer, 0, 0, format.width, format.height);
};

const loadLayerImg = async (_layer) => {
  return new Promise(async (resolve) => {
    const image = await loadImage(`${_layer}`);
    resolve(image);
  });
};

const addText = (_sig, x, y, size) => {
  console.log('Adding Text');
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = text.color;
  ctx.font = `${text.weight} ${size}pt ${text.family}`;
  ctx.textBaseline = text.baseline;
  ctx.textAlign = text.align;
  ctx.fillText(_sig, x, y);
};

const drawCrop = () => {
  console.log('Cropping');
  ctx.drawImage(
    canvas,
    crop.sx,
    crop.sy,
    crop.sw,
    crop.sh,
    crop.dx,
    crop.dy,
    crop.dw,
    crop.dh
  );
  // canvas.width = crop.dw;
  // canvas.height = crop.dh;
};

const drawPixelate = () => {
  console.log('Pixelating');
  let size = pixelFormat.ratio;
  let w = canvas.width * size;
  let h = canvas.height * size;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(canvas, 0, 0, w, h);
  ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
};

const dirtyName = (_layerDir, _str) => {
  let filename = '';
  fs.readdirSync(layersDir + '/' + _layerDir).forEach((f) => {
    const index = f.indexOf(_str);
    if (index !== -1) filename = layersDir + '/' + _layerDir + '/' + f;
  });
  return filename;
};

const saveImage = (_editionCount) => {
  fs.writeFileSync(
    `${regenDir}/images/${_editionCount}.png`,
    canvas.toBuffer('image/png')
  );
};

const buildRegen = () => {
  if (!fs.existsSync(inputDir)) {
    console.log('Please provide a _metadata.json file in /build/json.');
    throw new Error();
  }
  if (fs.existsSync(regenDir)) {
    fs.rmdirSync(regenDir, { recursive: true });
  }
  fs.mkdirSync(regenDir);
  fs.mkdirSync(`${regenDir}/images`);
};

module.exports = { regenImages, buildRegen };
