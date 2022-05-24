import React from 'react';
import { Header, Footer } from 'components';
import { Racquets } from './sections/Racquets';
import { Reviews } from './sections/Reviews';
import { Answers } from './elements';

const Summary: React.FC = () => (
    <>
        <Header />
        <Answers />
        <Racquets />
        <Reviews />
        <Footer />
    </>
);

export default Summary;
