import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {/* <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Hola Mundo" />
          <ProductCard.Buttons increaseBy={function (value: number): void {
            throw new Error('Function not implemented.');
          } } counter={0} /> 
        </ProductCard> */}

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="Hola Mundo" />
          <ProductButtons increaseBy={function (value: number): void {
            throw new Error('Function not implemented.');
          } } counter={0} /> 
        </ProductCard>
      </div>
    </div>
  );
};
