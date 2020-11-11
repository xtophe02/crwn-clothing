import React from 'react';
import { Layout } from '../../components';
import { useRouter } from 'next/router';

const collection = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <h1>tste</h1>
      {id}
    </Layout>
  );
};

export default collection;
