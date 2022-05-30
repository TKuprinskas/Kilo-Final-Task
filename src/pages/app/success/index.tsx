import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Typography,
    ContentWrapper,
    Image,
    SectionWrapper,
    Footer,
} from 'components';
import { useQuery } from 'styles/breakpoints';

const Success: React.FC = () => {
    const { isTablet } = useQuery();
    return (
        <>
            <Helmet>
                <title>Thank you for your order</title>
            </Helmet>
            <SectionWrapper
                backgroundImage="background"
                minHeight="95vh"
                textAlign="center"
            >
                <ContentWrapper textAlign="center"></ContentWrapper>
                <ContentWrapper
                    backgroundColor="blurry"
                    borderRadius="br8"
                    marginTop="6.25rem"
                    padding="1.25rem"
                >
                    <Image src="tennispoint" width="100%" />
                    <Typography type="h1" color="white" fontStyle="italic">
                        Thank you for your order!
                    </Typography>
                    <Typography
                        type="h3"
                        color="white"
                        fontStyle="italic"
                        padding={isTablet ? '1.25rem 0' : ''}
                    >
                        The entire Teniso Partneris team thanks you for your
                        trust
                    </Typography>
                    <Typography
                        type="h4"
                        color="white"
                        fontStyle="italic"
                        padding={isTablet ? '1.25rem 0 0 0' : '3.125rem 0 0 0'}
                    >
                        We will contact you shortly to confirm your order
                        details and estimated delivery date.
                    </Typography>
                    <Typography
                        type="h5"
                        color="white"
                        fontStyle="italic"
                        padding={isTablet ? '1.25rem 0' : ''}
                    >
                        If you have any questions, please contact us at the
                        following email:{' '}
                        <a
                            style={{ color: 'white' }}
                            href="mailto:info@tenisopartneris.lt"
                        >
                            info@tenisopartneris.lt
                        </a>
                    </Typography>
                </ContentWrapper>
            </SectionWrapper>
            <Footer />
        </>
    );
};

export default Success;
