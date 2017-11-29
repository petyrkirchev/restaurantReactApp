import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import pizza from '../assets/photos/carousel/pizza_trad_pepperoni.png';
import salad from '../assets/photos/carousel/salads.jpg';
import skara from '../assets/photos/carousel/skara.jpg';


const items = [
  {
    src: "https://www.cicis.com/media/1138/pizza_trad_pepperoni.png",
    altText: 'Пица',
    caption: 'Пеперони'
  },
  {
    src: "https://www.cicis.com/media/1140/pizza_adven_hampineapple.png",
    altText: 'Пица',
    caption: 'Шунка с Ананас'
  },
  {
    src: "https://a.mktgcdn.com/p/_JSve0X4dZbd4eI3pUdwgtW7Y1eu4crVNb4Z7WByjWs/1538x776.png",
    altText: 'Пица',
    caption: 'Далас'
  }
];



const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
