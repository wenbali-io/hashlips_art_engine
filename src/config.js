const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = 'Council of Kingz - Lordship Proclomations';
const description =
  'Council of Kingz is the most innovative real estate acquisition project in the NFT and metaverse space.';
const baseUri = 'ipfs://NewUriToReplace';

const solanaMetadata = {
  symbol: 'YC',
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: 'https://www.youtube.com/c/hashlipsnft',
  creators: [
    {
      address: '7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC',
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 469,

    layersOrder: [
      { name: 'Background' },
      // { name: 'Thrones' },
      // { name: 'Body' },
      // { name: 'Skin' },
      // {
      //   name: 'Short Hair',
      //   options: {
      //     displayName: 'Hair',
      //   },
      // },
      // { name: 'Armor' },
      // // { name: 'Eyewear' },
      // {
      //   name: 'Special Crowns',
      //   options: {
      //     displayName: 'Crowns',
      //   },
      // },
      // { name: 'Weapons' },
      // { name: 'Arms' },
    ],
  },
  // {
  //   growEditionSizeTo: 2888,

  //   layersOrder: [
  //     { name: 'Background' },
  //     { name: 'Thrones' },
  //     { name: 'Body' },
  //     { name: 'Skin' },
  //     {
  //       name: 'Short Hair',
  //       options: {
  //         displayName: 'Hair',
  //       },
  //     },
  //     { name: 'Armor' },
  //     { name: 'Eyewear' },
  //     { name: 'Crowns' },
  //     { name: 'Weapons' },
  //     { name: 'Arms' },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 6176,
  //   layersOrder: [
  //     { name: 'Background' },
  //     { name: 'Thrones' },
  //     { name: 'Body' },
  //     { name: 'Skin' },
  //     {
  //       name: 'Long Hair',
  //       options: {
  //         displayName: 'Hair',
  //       },
  //     },
  //     { name: 'Armor' },
  //     { name: 'Eyewear' },
  //     { name: 'Crowns' },
  //     { name: 'Weapons' },
  //     { name: 'Arms' },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 7777,
  //   layersOrder: [
  //     { name: 'Background' },
  //     { name: 'Thrones' },
  //     { name: 'Body' },
  //     {
  //       name: 'Rare Skin',
  //       options: {
  //         displayName: 'Skin',
  //       },
  //     },
  //     { name: 'Armor' },
  //     { name: 'Eyewear' },
  //     { name: 'Crowns' },
  //     { name: 'Weapons' },
  //     { name: 'Arms' },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 1944,
  //   layersOrder: [
  //     { name: 'Background' },
  //     { name: 'Thrones' },
  //     { name: 'Body' },
  //     {
  //       name: 'Rare Skin',
  //       options: {
  //         displayName: 'Skin',
  //       },
  //     },
  //     { name: 'Armor' },
  //     { name: 'Eyewear' },
  //     {
  //       name: 'Special Crowns',
  //       options: {
  //         displayName: 'Crowns',
  //       },
  //     },
  //     { name: 'Weapons' },
  //     { name: 'Arms' },
  //   ],
  // },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 4000,
  height: 4000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: true,
  color: '#ffffff',
  size: 500,
  xGap: 40,
  yGap: 40,
  align: 'left',
  baseline: 'top',
  weight: 'regular',
  family: 'Courier',
  spacer: ' => ',
};

const pixelFormat = {
  ratio: 40 / 512,
};

const background = {
  generate: true,
  brightness: '80%',
  static: false,
  default: '#000000',
};

const extraMetadata = {};

const rarityDelimiter = '#';

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: 'preview.png',
};

const preview_gif = {
  numberOfImages: 20,
  order: 'ASC', // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: 'preview.gif',
};

// config for regnerating art from metadata

// layers to leave out of the regenerated art
const dropLayers = [
  'Planet',
  'Powers',
  // 'Body',
  // 'Armor',
  // 'Arms',
  // 'Weapons',
];

// pixelate the regenerated art
// uses pixelFormat
const pixelate = false;
// overlays the id of the art for debugging
const showText = true;
// settings to crop a section of the regenerated art
const crop = {
  doCrop: false,
  sx: 1000,
  sy: 100,
  sw: 2000,
  sh: 2000,
  dx: 0,
  dy: 0,
  dw: 16,
  dh: 16,
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  dropLayers,
  pixelate,
  showText,
  crop,
};
