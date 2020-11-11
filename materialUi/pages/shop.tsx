import React from 'react';
import { Layout, ShopPage } from '../components';
import { SHOP_DATA } from '../src/shop.data';

const shop = () => {
  const [items, setItems] = React.useState(SHOP_DATA);

  return (
    <Layout>
      <ShopPage items={items} />
    </Layout>
  );
};
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default shop;
