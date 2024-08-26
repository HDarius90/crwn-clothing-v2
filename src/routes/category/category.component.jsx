import { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.components';

import { CategoriesContext } from '../../contexts/categories.context';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setproducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setproducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
