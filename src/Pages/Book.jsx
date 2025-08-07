import { Link } from "react-router-dom";
import '../Styles/Book.css';

const Book = () => {
  
  return (
    <div className="allbook">
      
        <div className="featured-list1">
          <div className="featured-item1">
           <Link to ="/coll"><img src="https://kitabay.com/cdn/shop/files/Copy_of_Decorate_your_home_with_Coffee_Table_Books.jpg?v=1727267160" alt="Book-1" /></Link> 
            
          </div>
          <div className="featured-item1">
            <Link to ="/bundleColl"><img src="https://kitabay.com/cdn/shop/files/Copy_of_Decorate_your_home_with_Coffee_Table_Books_1.jpg?v=1727267160" alt="Book-2" /></Link>
        
          </div>
          <div className="featured-item1">
          <Link to ="/kidsColl"><img src="https://kitabay.com/cdn/shop/files/Copy_of_Decorate_your_home_with_Coffee_Table_Books_5.jpg?v=1738931005" alt="Book-3" /></Link>
          
          </div>
        </div>
      
      </div>

      
  );
};

export default Book;

