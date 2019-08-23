import React from 'react';
import Header from '../../components/Header/';

interface IProps {
  title: string
}

export default ({title}:IProps) => (
  <div>
    <Header siteTitle={title} />
</div>
);
