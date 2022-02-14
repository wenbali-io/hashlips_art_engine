const fs = require('fs');
const csv = require('csvtojson');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const basePath = process.cwd();
const outputFile = '_metadata.json';
const customMetaDir = `${basePath}/build/custom`;

const {
  format,
  namePrefix,
  description,
  baseUri,
} = require(`${basePath}/src/config.js`);
const console = require('console');

const buildCustomMetadata = () => {
  if (fs.existsSync(customMetaDir)) {
    fs.rmdirSync(customMetaDir, { recursive: true });
  }
  fs.mkdirSync(customMetaDir);
  fs.mkdirSync(`${customMetaDir}/json`);
};

const example = {
  name: 'Council of Kingz #1',
  image: 'ipfs://QmVWeeuUAqNPStef58zyURU4uXoEwe1ZvLP1BiWAPRrMX6/1.png',
  attributes: [
    { trait_type: 'Background', value: 'Dark Orange' },
    { trait_type: 'Throne', value: 'Gravity Throne' },
    { trait_type: 'Skin', value: 'Human5' },
    { trait_type: 'Hair', value: 'Rainbow Handsome' },
    { trait_type: 'Armor', value: 'Bronze' },
    { trait_type: 'Eyewear', value: 'Dead Eyes' },
    { trait_type: 'Crown', value: 'Silver Crown' },
    { trait_type: 'Weapon', value: 'Axe' },
    { trait_type: 'Arms', value: 'Skeleton' },
  ],
  id: 1,
  website: 'https://councilofkingz.io',
  company: 'Council of Kingz, LLC',
};

const readCSV = async () => {
  return new Promise(async (resolve) => {
    const entries = await csv({ delimiter: ',' }).fromFile(
      'E:\\Files\\Development\\NFT\\wenbali.io\\cok-blockchain\\temp\\lordship_titles.csv'
    );
    resolve(entries);
  });
};

const generateMetaData = (_nfts) => {
  console.log(_nfts);
  let nfts = _nfts;
  console.log(_nfts.length);
  nfts.map((n) => {
    const nft = {};
    nft.description = 'Description';
    nft.edition = n.token_id;
    nft.name = n.title;
    nft.image = `ipfs://QmdoVbjMXHPtRMMzpigtHAXenchNB5EJRXEcpueP5EKfVv/${n.token_id}.jpg`;
    nft.attributes = [
      {
        trait_type: 'Plot Number',
        value: n.plot_number,
      },
    ];
    (nft.creator = 'Wenbali, LLC - Full Stack Web3 Development'),
      (nft.contact = 'jason@wenbali.io');
    nfts.push(nft);
    fs.writeFileSync(
      `${customMetaDir}/json/${n.token_id}\.json`,
      JSON.stringify(nft, null, 2)
    );
  });

  fs.writeFileSync(
    `${customMetaDir}/json/${outputFile}`,
    JSON.stringify(nfts, null, 2)
  );
};

// Call start
(async () => {
  buildCustomMetadata();
  const objects = await readCSV();
  generateMetaData(objects);
})();
