import React from 'react';
import NavBar from '../../components/NavBar';
import Hero from '../../components/Hero';
import Container from '../../components/Container';

interface Props {
  title: string;
}

const FarFuture: React.SFC<Props> = () => (
  <div>
    <Container>
      <NavBar />
    </Container>
    <Container>
      <Hero
        title="Conference Name"
        description="Lorem Ipsum dolor sit amet"
        date="London, UK. 14th and 15th November"
      />
    </Container>
    {/* </Wrappers.Centered> */}
    {/* <Wrappers.Centered> */}
    {/*   <Hero /> */}
    {/* </Wrappers.Centered> */}
  </div>
);

export default FarFuture;
