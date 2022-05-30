import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header, Footer } from 'components';
import { Racquets } from './sections/Racquets';
import { Reviews } from './sections/Reviews';
import { Answers } from './elements';

const Summary: React.FC = () => (
    <>
        <Helmet>
            <title>Summary</title>
        </Helmet>
        <Header />
        <Answers />
        <Racquets />
        <Reviews />
        <Footer />
    </>
);

export default Summary;
