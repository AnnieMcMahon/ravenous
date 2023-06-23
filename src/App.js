import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

const businesses = [
  {
    id: '1',
    img: 'https://media.architecturaldigest.com/photos/618a7d98d4dc025cc87e313d/16:9/w_5984,h_3366,c_limit/Exterior%203.jpg',
    name: "Sergio's Pizza",
    address: '222 Main Ave, Asheville, NC 11111',
    category: 'Pizzeria',
    rating: '⭐⭐⭐⭐',
    reviews: '25 reviews'
  },
  {
    id: '2',
    img: 'https://www.trummersrestaurant.com/wp-content/uploads/2019/11/Image173small.jpg',
    name: "Greek Heaven",
    address: '111 Madison Ave, Asheville, NC 12345',
    category: 'Greek',
    rating: '⭐⭐⭐',
    reviews: '47 reviews'
  },
  {
    id: '3',
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg',
    name: "Alfonso's",
    address: '22222 Palisades Blvd, Charlotte, NC 11211',
    category: 'Pizzeria',
    rating: '⭐⭐⭐⭐⭐',
    reviews: '2 reviews'
  },
  {
    id: '4',
    img: 'https://cdn.vox-cdn.com/thumbor/mh5XEYluQvbi9Re6lPaSDZYqLgg=/0x0:3648x2432/1200x900/filters:focal(1533x925:2115x1507)/cdn.vox-cdn.com/uploads/chorus_image/image/68550117/Chikarashi_Isso_3.7.jpg',
    name: "Joe's Grill",
    address: '22 Main Ave, Asheville, NC 11111',
    category: 'American',
    rating: '⭐⭐⭐⭐',
    reviews: '2544 reviews'
  },
  {
    id: '5',
    img: 'https://whyy.org/wp-content/uploads/2020/10/phillyparkingdining-hy10_slide-5ab9f7a904d2a4d3ff7bf463b9d6c18b95ab4cb0-1-768x512.jpg',
    name: "Le Parasol",
    address: '222 Maple Ave, Hendersonville, NC 12221',
    category: 'French',
    rating: '⭐⭐',
    reviews: '123 reviews'
  },
  {
    id: '6',
    img: 'https://cdn.vox-cdn.com/thumbor/nuEVgf_MlWyXH1obho7TRbaZnv0=/0x0:4500x3001/1200x900/filters:focal(1890x1141:2610x1861):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/72053120/HH3A9597_edited.0.jpg',
    name: "Mon Cheri",
    address: '2 Main Ave, Asheville, NC 11111',
    category: 'French',
    rating: '⭐⭐⭐⭐',
    reviews: '67 reviews'
  },
  {
    id: '7',
    img: 'https://visit.youngstownlive.com/wp-content/uploads/2022/07/Restaurant-diners-in-outdoor-seating-in-Youngstown-1030x778.png',
    name: "Jerry Smith's Hangout",
    address: '17 Broad St, Asheville, NC 11111',
    category: 'American',
    rating: '⭐⭐⭐',
    reviews: '4 reviews'
  },
  {
    id: '8',
    img: 'https://media.timeout.com/images/105666013/image.jpg',
    name: "Toro's Cafe",
    address: '999 Main Ave, Asheville, NC 11111',
    category: 'Mediterranean',
    rating: '⭐⭐⭐⭐',
    reviews: '1233 reviews'
  }
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ravenous</h1>
      </header>
      <main>
        <SearchBar />
        <BusinessList list={businesses}/>
      </main>
      <footer>

      </footer>
    </div>
  );
};

export default App;