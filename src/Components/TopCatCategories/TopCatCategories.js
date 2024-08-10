import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from '../TopDogCategories/tdcproductcard';
import TopcatCategoriesdata from '../../Data/TopCatCategoriesdata';
import '../TopDogCategories/tdcategories.css'; 
 
const TopcatCategories = () => {
  return (
    <div className='m-4 mt-5'>
      <h2 className='textHeading text-center mb-4' style={{ color: '#031A6B', textAlign: 'center', marginBottom: '20px' }}>
      Top <span style={{ color: '#FF9402'}}>Cats</span>Categories
    </h2>
      <Row>
        {TopcatCategoriesdata.slice(0, 6).map((product) => (
          <div key={product.id} className="col-6 col-md-4 col-lg-2 mb-2">
            <ProductCard product={product} />
          </div>
        ))}
      </Row>
    </div>
  );
};

export default TopcatCategories;
