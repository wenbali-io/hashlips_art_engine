const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const basePath = process.cwd();
const outputFile = '_metadata.json';
const testMetaDir = `${basePath}/build/test`;

const {
  format,
  namePrefix,
  description,
  baseUri,
} = require(`${basePath}/src/config.js`);
const console = require('console');

const buildTestMetadata = () => {
  if (fs.existsSync(testMetaDir)) {
    fs.rmdirSync(testMetaDir, { recursive: true });
  }
  fs.mkdirSync(testMetaDir);
  fs.mkdirSync(`${testMetaDir}/json`);
};

const backgrounds = [
  'Blue',
  'Dark Orange',
  'Green',
  'Maroon',
  'Orange',
  'Purple',
  'Red',
  'Tuquoise',
  'Yellow',
];

const planets = [
  'Earth',
  'Jupiter',
  'Saturn',
  'Mercury',
  'Neptune',
  'Mars',
  'Uranus',
  'Venus',
  'Pluto',
];

const powers = [
  'Invisiblity',
  'Laser Eyes',
  'Telepathy',
  'Phasing',
  'Appearance Shifting',
  'Probability Manipulation',
  'Magnetism',
  'Weather Manipulation',
  'Telekinesis',
];

const names = [
  'James',
  'Robert',
  'John',
  'Michael',
  'William',
  'David',
  'Richard',
  'Joseph',
  'Thomas',
  'Charles',
  'Christopher',
  'Daniel',
  'Matthew',
  'Anthony',
  'Mark',
  'Donald',
  'Steven',
  'Paul',
  'Andrew',
  'Joshua',
  'Kenneth',
  'Kevin',
  'Brian',
  'George',
  'Edward',
  'Ronald',
  'Timothy',
  'Jason',
  'Jeffrey',
  'Ryan',
  'Jacob',
  'Gary',
  'Nicholas',
  'Eric',
  'Jonathan',
  'Stephen',
  'Larry',
  'Justin',
  'Scott',
  'Brandon',
  'Benjamin',
  'Samuel',
  'Gregory',
  'Frank',
  'Alexande',
  'Raymond',
  'Patrick',
  'Jack',
  'Dennis',
  'Jerry',
  'Tyler',
  'Aaron',
  'Jose',
  'Adam',
  'Henry',
  'Nathan',
  'Douglas',
  'Zachary',
  'Peter',
  'Kyle',
  'Walter',
  'Ethan',
  'Jeremy',
  'Harold',
  'Keith',
  'Christia',
  'Roger',
  'Noah',
  'Gerald',
  'Carl',
  'Terry',
  'Sean',
  'Austin',
  'Arthur',
  'Lawrence',
  'Jesse',
  'Dylan',
  'Bryan',
  'Joe',
  'Jordan',
  'Billy',
  'Bruce',
  'Albert',
  'Willie',
  'Gabriel',
  'Logan',
  'Alan',
  'Juan',
  'Wayne',
  'Roy',
  'Ralph',
  'Randy',
  'Eugene',
  'Vincent',
  'Russell',
  'Elijah',
  'Louis',
  'Bobby',
  'Philip',
  'Johnny',
  'Mary',
  'Patricia',
  'Jennifer',
  'Linda',
  'Elizabeth',
  'Barbara',
  'Susan',
  'Jessica',
  'Sarah',
  'Karen',
  'Nancy',
  'Lisa',
  'Betty',
  'Margaret',
  'Sandra',
  'Ashley',
  'Kimberly',
  'Emily',
  'Donna',
  'Michelle',
  'Dorothy',
  'Carol',
  'Amanda',
  'Melissa',
  'Deborah',
  'Stephanie',
  'Rebecca',
  'Sharon',
  'Laura',
  'Cynthia',
  'Kathleen',
  'Amy',
  'Shirley',
  'Angela',
  'Helen',
  'Anna',
  'Brenda',
  'Pamela',
  'Nicole',
  'Emma',
  'Samantha',
  'Katherine',
  'Christine',
  'Debra',
  'Rachel',
  'Catherine',
  'Carolyn',
  'Janet',
  'Ruth',
  'Maria',
  'Heather',
  'Diane',
  'Virginia',
  'Julie',
  'Joyce',
  'Victoria',
  'Olivia',
  'Kelly',
  'Christina',
  'Lauren',
  'Joan',
  'Evelyn',
  'Judith',
  'Megan',
  'Cheryl',
  'Andrea',
  'Hannah',
  'Martha',
  'Jacqueline',
  'Frances',
  'Gloria',
  'Ann',
  'Teresa',
  'Kathryn',
  'Sara',
  'Janice',
  'Jean',
  'Alice',
  'Madison',
  'Doris',
  'Abigail',
  'Julia',
  'Judy',
  'Grace',
  'Denise',
  'Amber',
  'Marilyn',
  'Beverly',
  'Danielle',
  'Theresa',
  'Sophia',
  'Marie',
  'Diana',
  'Brittany',
  'Natalie',
  'Isabella',
  'Charlotte',
  'Rose',
  'Alexis',
  'Kayla',
];

const generateMetaData = (_nftCount) => {
  let nfts = [];
  for (let i = 1; i <= _nftCount; i++) {
    let nft = {};
    nft.edition = i;
    nft.name =
      names[Math.floor(Math.random() * names.length)] + `(#${nft.edition})`;
    nft.description =
      'Wenbali, LLC provides full stack Web3 Development. This is our Wraith are collection that can be used by any project wishing to display artwork and metadata on a testnetwork. This artwork and metadata are are free and opensource. Images are located at this IPFS CID: QmdoVbjMXHPtRMMzpigtHAXenchNB5EJRXEcpueP5EKfVv';
    nft.collection = 'wbgp:collection:wraith:02';
    nft.attributes = [
      {
        trait_type: 'Background',
        value: backgrounds[Math.floor(Math.random() * backgrounds.length)],
      },
      {
        trait_type: 'Planet',
        value: planets[Math.floor(Math.random() * planets.length)],
      },
      {
        trait_type: 'Powers',
        value: powers[Math.floor(Math.random() * powers.length)],
      },
    ];
    nft.image = `ipfs://QmdoVbjMXHPtRMMzpigtHAXenchNB5EJRXEcpueP5EKfVv/${nft.edition}.png`;
    nft.creator = 'Wenbali, LLC - Full Stack Web3 Development';
    nft.contact = 'jason@wenbali.io';
    fs.writeFileSync(
      `${testMetaDir}/json/${nft.edition}\.json`,
      JSON.stringify(nft, null, 2)
    );
    nfts.push(nft);
  }
  console.log(JSON.stringify(nfts));
  fs.writeFileSync(
    `${testMetaDir}/json/${outputFile}`,
    JSON.stringify(nfts, null, 2)
  );
};

buildTestMetadata();
generateMetaData(10000);
