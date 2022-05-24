import React from 'react';
import { Header, Footer } from 'components';
import { Configuration } from './sections/Configuration';
import { Information } from './sections/Information';

const Checkout: React.FC = () => (
    <>
        <Header />
        <Configuration />
        <Information />
        <Footer />
    </>
);

export default Checkout;
