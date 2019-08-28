import React from 'react';
import Header from '../../components/Header/';

interface Props {
  title: string;
}

const FarFuture: React.SFC<Props> = ({ title }) => (
  <div>
    <Header siteTitle={title} />
  </div>
);

export default FarFuture;
