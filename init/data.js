const sampleListings =[
  {
    _id: 'd47a2bc79867fddb10d6babb',
    title: 'Sunny Retreat',
    description: 'Enjoy a relaxing time by the coast.',
    image: {
      url: 'https://res.cloudinary.com/droc8ilrr/image/upload/v1743966000/wanderlust_dev/retreat_1.png',
      fileName: 'wanderlust_dev/retreat_1.png'
    },
    price: 145,
    location: 'Coastville',
    country: 'Portugal',
    reviews: [],
    owner: 'f4d6e2f00c99101e4cb6c2fe',
    __v: 0
  },
  {
    _id: 'e23dbac76813dfdce2c1a0a2',
    title: 'Forest Cabin',
    description: 'Cabin deep in the woods with great views.',
    image: {
      url: 'https://res.cloudinary.com/droc8ilrr/image/upload/v1743966000/wanderlust_dev/cabin_2.png',
      fileName: 'wanderlust_dev/cabin_2.png'
    },
    price: 98,
    location: 'Green Hollow',
    country: 'Canada',
    reviews: [],
    owner: 'f4d6e2f00c99101e4cb6c2fe',
    __v: 0
  },
  {
    _id: 'a8b92e3a114ed7c9fd56eea1',
    title: 'Urban Loft',
    description: 'Stylish loft in the center of town.',
    image: {
      url: 'https://res.cloudinary.com/droc8ilrr/image/upload/v1743966000/wanderlust_dev/loft_3.png',
      fileName: 'wanderlust_dev/loft_3.png'
    },
    price: 210,
    location: 'Metro City',
    country: 'Germany',
    reviews: [],
    owner: 'f4d6e2f00c99101e4cb6c2fe',
    __v: 0
  },
  {
    _id: '4fb61e5ce92ad0dd231c7a8b',
    title: 'Lake House',
    description: 'Serene lake views and cozy atmosphere.',
    image: {
      url: 'https://res.cloudinary.com/droc8ilrr/image/upload/v1743966000/wanderlust_dev/lakehouse_4.png',
      fileName: 'wanderlust_dev/lakehouse_4.png'
    },
    price: 132,
    location: 'Lakeview',
    country: 'Switzerland',
    reviews: [],
    owner: 'f4d6e2f00c99101e4cb6c2fe',
    __v: 0
  },
  {
    _id: 'c2bd98456fdd013ff49862b2',
    title: 'Desert Oasis',
    description: 'A luxury stay under the desert sky.',
    image: {
      url: 'https://res.cloudinary.com/droc8ilrr/image/upload/v1743966000/wanderlust_dev/oasis_5.png',
      fileName: 'wanderlust_dev/oasis_5.png'
    },
    price: 160,
    location: 'Sahara Point',
    country: 'Morocco',
    reviews: [],
    owner: 'f4d6e2f00c99101e4cb6c2fe',
    __v: 0
  },
  {
    _id: '5a7c2cfc8a947d1f9a87e901',
    title: 'Hilltop View',
    description: 'Perfect view from a cozy hilltop cabin.',
    image: {
      url: 'https://res.cloudinary.com/droc8ilrr/image/upload/v1743966000/wanderlust_dev/hilltop_6.png',
      fileName: 'wanderlust_dev/hilltop_6.png'
    },
    price: 122,
    location: 'Mount Helena',
    country: 'New Zealand',
    reviews: [],
    owner: 'f4d6e2f00c99101e4cb6c2fe',
    __v: 0
  },
  {
    _id: '6e3f61d58cf84a12e3b490c9',
    title: 'Island Cottage',
    description: 'Quiet cottage on a beautiful private island.',
    image: {
      url: 'https://res.cloudinary.com/droc8ilrr/image/upload/v1743966000/wanderlust_dev/island_7.png',
      fileName: 'wanderlust_dev/island_7.png'
    },
    price: 189,
    location: 'Palm Island',
    country: 'Maldives',
    reviews: [],
    owner: 'f4d6e2f00c99101e4cb6c2fe',
    __v: 0
  },
  {
    _id: '7a4dcbf388a6b8fd20d1cc74',
    title: 'Countryside Inn',
    description: 'Peaceful stay in the open countryside.',
    image: {
      url: 'https://res.cloudinary.com/droc8ilrr/image/upload/v1743966000/wanderlust_dev/countryside_8.png',
      fileName: 'wanderlust_dev/countryside_8.png'
    },
    price: 95,
    location: 'Sunnydale',
    country: 'Ireland',
    reviews: [],
    owner: 'f4d6e2f00c99101e4cb6c2fe',
    __v: 0
  },
  {
    _id: 'bc63f9d94c8b6d0a72c482ae',
    title: 'Snowy Lodge',
    description: 'Warm lodge perfect for a snowy getaway.',
    image: {
      url: 'https://res.cloudinary.com/droc8ilrr/image/upload/v1743966000/wanderlust_dev/lodge_9.png',
      fileName: 'wanderlust_dev/lodge_9.png'
    },
    price: 175,
    location: 'Frostpeak',
    country: 'Norway',
    reviews: [],
    owner: 'f4d6e2f00c99101e4cb6c2fe',
    __v: 0
  },
  {
    _id: '8a7d223c92974c4aab0f7d49',
    title: 'River Tent',
    description: 'Camp in style right next to the river.',
    image: {
      url: 'https://res.cloudinary.com/droc8ilrr/image/upload/v1743966000/wanderlust_dev/tent_10.png',
      fileName: 'wanderlust_dev/tent_10.png'
    },
    price: 77,
    location: 'Riverbend',
    country: 'Nepal',
    reviews: [],
    owner: 'f4d6e2f00c99101e4cb6c2fe',
    __v: 0
  },
  {
    _id: 'cf77f8e9caa74b2e8f2d0b21',
    title: 'Jungle Cabin',
    description: 'Hidden deep in the rainforest, perfect for adventure lovers.',
    image: {
      url: 'https://res.cloudinary.com/droc8ilrr/image/upload/v1743966000/wanderlust_dev/jungle_11.png',
      fileName: 'wanderlust_dev/jungle_11.png'
    },
    price: 134,
    location: 'Emerald Grove',
    country: 'Costa Rica',
    reviews: [],
    owner: 'f4d6e2f00c99101e4cb6c2fe',
    __v: 0
  },
  {
    _id: '3db52fa91a4d4fd8912b9306',
    title: 'Mountain Cave',
    description: 'Unique experience in a natural mountain cave.',
    image: {
      url: 'https://res.cloudinary.com/droc8ilrr/image/upload/v1743966000/wanderlust_dev/cave_12.png',
      fileName: 'wanderlust_dev/cave_12.png'
    },
    price: 142,
    location: 'Highreach',
    country: 'Chile',
    reviews: [],
    owner: 'f4d6e2f00c99101e4cb6c2fe',
    __v: 0
  },
  {
    _id: '91b5b70d7c334d8e9b2c5aa8',
    title: 'Urban Pod',
    description: 'Compact pod in the heart of a bustling city.',
    image: {
      url: 'https://res.cloudinary.com/droc8ilrr/image/upload/v1743966000/wanderlust_dev/pod_13.png',
      fileName: 'wanderlust_dev/pod_13.png'
    },
    price: 110,
    location: 'Tokyo',
    country: 'Japan',
    reviews: [],
    owner: 'f4d6e2f00c99101e4cb6c2fe',
    __v: 0
  },
  {
    _id: '6d8b91fa7f6743da92b37f93',
    title: 'Treehouse Retreat',
    description: 'Live among the trees in this elevated getaway.',
    image: {
      url: 'https://res.cloudinary.com/droc8ilrr/image/upload/v1743966000/wanderlust_dev/treehouse_14.png',
      fileName: 'wanderlust_dev/treehouse_14.png'
    },
    price: 155,
    location: 'Leafshade',
    country: 'Thailand',
    reviews: [],
    owner: 'f4d6e2f00c99101e4cb6c2fe',
    __v: 0
  },
  {
    _id: '4a1b6b5ffab5412b93cf57a7',
    title: 'Cliffside Studio',
    description: 'Breathtaking views from a studio on the cliffs.',
    image: {
      url: 'https://res.cloudinary.com/droc8ilrr/image/upload/v1743966000/wanderlust_dev/cliff_15.png',
      fileName: 'wanderlust_dev/cliff_15.png'
    },
    price: 198,
    location: 'Edgepoint',
    country: 'Greece',
    reviews: [],
    owner: 'f4d6e2f00c99101e4cb6c2fe',
    __v: 0
  }
];

module.exports = { data: sampleListings };