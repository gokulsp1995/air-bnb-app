
import './App.css';
import Navbar from './components/NavBar';
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from './data';



function App() {
  const cards = data.map(item => {
    return(
      <Card 
          key={item.id}
          {...item}
          // item={item}
          // img = {item.coverImg}
          // rating= {item.stats.rating}
          // reviewCount={item.stats.reviewCount}
          // location={item.location}
          // title= {item.title}
          // description={item.description}
          // price= {item.price}
          // openSpots={item.openSpots}
      />
    )
  })
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* <Card  
          img="https://olympics.nbcsports.com/wp-content/uploads/sites/10/2019/05/katie-zaferes-e1558175435658.jpg?resize=1024,578"
          rating="5.0"
          reviewCount="7"
          location="United States of America"
          title="Life lessons with Katie Zaferes"
          price="150"
      /> */} 
      {cards}
    </div>
  );
}
export default App;
