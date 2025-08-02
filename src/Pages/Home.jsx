import { Link } from "react-router-dom";
import "../Styles/Home.css";
import candles from '../Assets/candles.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Home = () => {
  
 return (
    <div className="home-container">

   {/* Carousal section */}

    <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="hero-carousel">
      <SwiperSlide>
      <Link to ="/off"><img
        src="https://d34a0mln2492j4.cloudfront.net/unsigned/resize:fit:1872:455:0/gravity:sm/plain/https%3A%2F%2Fbookscape-s3-bucket.s3-ap-south-1.amazonaws.com%2F592EE252A9p_Sale_HP_hero_d.jpg"
        alt="Banner 1"
        className="hero-slide-img"/></Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to ="/candleColl"><img
        src={candles}
        alt="Banner 2"
        className="hero-slide-img"/></Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to ="/monColl"><img
        src="https://d34a0mln2492j4.cloudfront.net/unsigned/resize:fit:1872:455:0/gravity:sm/plain/https%3A%2F%2Fbookscape-s3-bucket.s3-ap-south-1.amazonaws.com%2F7423915D33ds_hero_banner_d.jpg"
        alt="Banner 3"
        className="hero-slide-img"/></Link>
      </SwiperSlide>
    </Swiper>


 <div className="featured-section">
        <h2>Top Book Collections</h2>
        <div className="featured-list">
          <div className="featured-item">
           <Link to ="/coll"><img src="https://kitabay.com/cdn/shop/files/Copy_of_Decorate_your_home_with_Coffee_Table_Books.jpg?v=1727267160" alt="Book-1" /></Link> 
            
          </div>
          <div className="featured-item">
            <Link to ="/bundleColl"><img src="https://kitabay.com/cdn/shop/files/Copy_of_Decorate_your_home_with_Coffee_Table_Books_1.jpg?v=1727267160" alt="Book-2" /></Link>
        
          </div>
          <div className="featured-item">
          <Link to ="/kidsColl"><img src="https://kitabay.com/cdn/shop/files/Copy_of_Decorate_your_home_with_Coffee_Table_Books_5.jpg?v=1738931005" alt="Book-3" /></Link>
          
          </div>
        </div>
      </div>

      {/* Explore Categories */}
      <div className="heading">
        <h2>Fiction Addiction</h2>
      </div>


     {/* Book Card section  */}

       <div className="book-card">
        <div className="book1">
          <Link to="/Mys/6882beb91d521a20106a9a2f"><img src="https://kitabay.com/cdn/shop/files/a478156d6328ab3cd0810bca5e4f0336.jpg?crop=center&height=283&v=1753077394&width=178" alt="Book-1"/></Link>
         <strong>The Young Elites</strong>
          <p>
            <span className="original-price">Rs. 499</span>
            <span className="discounted-price">Rs. 299</span>
          </p>
          <span className="cart"> Add to cart </span>
          <div className="sta">★★★★☆</div> 
        </div>
      </div> 
    
       <div className="book2">
          <Link to ="/Mys/6882beb91d521a20106a9a30"><img src="https://kitabay.com/cdn/shop/files/998d5ba5722fd656a04b659e1032fcb2.jpg?crop=center&height=475&v=1752836848&width=315" alt="Book-2"/></Link>
         <strong>Allegiant</strong>
          <p>
            <span className="original-price2">Rs. 299</span>
            <span className="discounted-price2">Rs. 199</span>
          </p>
          <span className="cart2"> Add to cart </span>
          <div className="sta">★★★★☆</div> 
        </div>  

        <div className="book3">
          <Link to ="/Mys/6882beb91d521a20106a9a31"><img src="https://kitabay.com/cdn/shop/files/1c68518b03d5d4db7e593c8225849085.jpg?crop=center&height=798&v=1752835745&width=520" alt="Book-3"/></Link>
         <strong>The Swimming Pool</strong>
          <p>
            <span className="original-price3">Rs. 399</span>
            <span className="discounted-price3">Rs. 199</span>
          </p>
          <span className="cart3"> Add to cart </span>
          <div className="sta">★★★★☆</div> 
        </div>  

        <div className="book4">
          <Link to ="/Mys/6882beb91d521a20106a9a32"><img src="https://kitabay.com/cdn/shop/files/23350ccb7dd276dca443cafc3ca91263.jpg?crop=center&height=475&v=1752746308&width=309" alt="Book-4"/></Link>
         <strong>Five Days</strong>
          <p>
            <span className="original-price4">Rs. 599</span>
            <span className="discounted-price4">Rs. 299</span>
          </p>
          <span className="cart4"> Add to cart </span>
          <div className="sta">★★★★☆</div> 
        </div>  

        <div className="book5">
          <Link to ="/Mys/6882beb91d521a20106a9a33"><img src="https://kitabay.com/cdn/shop/files/3e5635dccdfe138e004733a931ebd616.jpg?crop=center&height=570&v=1752745485&width=370" alt="Book-5"/></Link>
         <strong>Bath Tangle</strong>
          <p>
            <span className="original-price5">Rs. 499</span>
            <span className="discounted-price5">Rs. 244</span>
          </p>
          <span className="cart5"> Add to cart </span>
          <div className="sta">★★★★☆</div> 
        </div>    

        <div className="book6">
          <Link to ="/Mys/6882beb91d521a20106a9a34"><img src="https://kitabay.com/cdn/shop/files/3e4a0fa053cec4c05d6fdc3307fc1677.jpg?crop=center&height=461&v=1753075946&width=300" alt="Book-6"/></Link>
         <strong>The Princetta</strong>
          <p>
            <span className="original-price6">Rs. 599</span>
            <span className="discounted-price6">Rs. 299</span>
          </p>
          <span className="cart6"> Add to cart </span>
          <div className="sta">★★★★☆</div> 
        </div>    

        <div className="book7">
          <Link to ="/Mys/6882beb91d521a20106a9a35"><img src="https://kitabay.com/cdn/shop/files/3bc764d8bddb593ff2c7df16a22c3523.jpg?crop=center&height=400&v=1753077591&width=264" alt="Book-7"/></Link>
         <strong>Tuscan Rose</strong>
          <p>
            <span className="original-price7">Rs. 399</span>
            <span className="discounted-price7">Rs. 199</span>
          </p>
          <span className="cart7"> Add to cart </span>
          <div className="sta">★★★★☆</div> 
        </div>

        {/* Candle Card Section */}

        <div className="heading">
        <p>Not Just Books </p>
       <h2> We Have Merch Too!</h2>
      </div>
         
        <div className="book8">
          <Link to ="/Mys/6882beb91d521a20106a9a36"><img src="https://kitabay.com/cdn/shop/files/1400x2200ProductImages_1.png?crop=center&height=680&v=1744210148&width=433" alt="Book-8"/></Link>
         <strong>Butterscotch</strong>
          <p>
            <span className="original-price7">Rs. 399</span>
            <span className="discounted-price7">Rs. 299</span>
          </p>
          <span className="cart8"> Add to cart </span>
          <div className="sta">★★★★☆</div> 
        </div>
        
        <div className="book9">
          <Link to ="/Mys/6882beb91d521a20106a9a37"><img src="https://kitabay.com/cdn/shop/files/1400x2200_Product_Images_3.png?crop=center&height=680&v=1744210115&width=433" alt="Book-9"/></Link>
         <strong>Old Bookshop</strong>
          <p>
            <span className="original-price9">Rs. 399</span>
            <span className="discounted-price9">Rs. 299</span>
          </p>
          <span className="cart9"> Add to cart </span>
          <div className="sta">★★★★☆</div> 
        </div>

        <div className="book10">
          <Link to ="/Mys/6882beb91d521a20106a9a38"><img src="https://kitabay.com/cdn/shop/files/1400x2200_Product_Images_3.png?crop=center&height=680&v=1744210115&width=433" alt="Book-10"/></Link>
         <strong>Old Bookshop</strong>
          <p>
            <span className="original-price10">Rs. 399</span>
            <span className="discounted-price10">Rs. 299</span>
          </p>
          <span className="cart10"> Add to cart </span>
          <div className="sta">★★★★☆</div> 
        </div>

        <div className="book11">
          <Link to ="/Mys/6882beb91d521a20106a9a39"><img src="https://kitabay.com/cdn/shop/files/2_cd92fbcd-c767-4f46-a113-5a1293db7ac8.jpg?crop=center&height=711&v=1750935604&width=433" alt="Book-11"/></Link>
         <strong>Smells Again</strong>
          <p>
            <span className="original-price11">Rs. 399</span>
            <span className="discounted-price11">Rs. 299</span>
          </p>
          <span className="cart11"> Add to cart </span>
          <div className="sta">★★★★☆</div> 
        </div>

        <div className="book12">
          <Link to ="/Mys/6882beb91d521a20106a9a3a"><img src="https://kitabay.com/cdn/shop/files/3_2e4d580d-b0e7-44cb-abeb-63fc3bbf348c.jpg?crop=center&height=711&v=1750935388&width=433" alt="Book-12"/></Link>
         <strong>Smells Office</strong>
          <p>
            <span className="original-price12">Rs. 399</span>
            <span className="discounted-price12">Rs. 299</span>
          </p>
          <span className="cart12"> Add to cart </span>
          <div className="sta">★★★★☆</div> 
        </div>

        <div className="book13">
          <Link to ="/Mys/6882beb91d521a20106a9a3b"><img src="https://kitabay.com/cdn/shop/files/Friends.jpg?crop=center&height=711&v=1750935496&width=433" alt="Book-13"/></Link>
         <strong>Smells Friend</strong>
          <p>
            <span className="original-price13">Rs. 399</span>
            <span className="discounted-price13">Rs. 299</span>
          </p>
          <span className="cart13"> Add to cart </span>
          <div className="sta">★★★★☆</div> 
        </div>

        <div className="book14">
          <Link to ="/Mys/6882beb91d521a20106a9a3c"><img src="https://kitabay.com/cdn/shop/files/1_7f85cc30-a5a5-4e58-8f23-f188bcec80c0.jpg?crop=center&height=711&v=1750935288&width=433" alt="Book-14"/></Link>
         <strong>Smells Queen</strong>
          <p>
            <span className="original-price14">Rs. 399</span>
            <span className="discounted-price14">Rs. 299</span>
          </p>
          <span className="cart14"> Add to cart </span>
          <div className="sta">★★★★☆</div> 
        </div>
</div>
  );
};

export default Home;



