import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header, Footer } from 'components';
import { Configuration } from './sections/Configuration';
import { Information } from './sections/Information';

const Checkout: React.FC = () => (
    <>
        <Helmet>
            <title>Checkout</title>
        </Helmet>
        <Header />
        <Configuration />
        <Information />
        <Footer />
    </>
);

export default Checkout;
