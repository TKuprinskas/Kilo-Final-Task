import React from 'react';
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
            <SectionWrapper
                backgroundImage="background"
                minHeight="95vh"
                textAlign="center"
            >
                <ContentWrapper textAlign="center"></ContentWrapper>
                <ContentWrapper
                    backgroundColor="blurry"
                    borderRadius="br8"
                    marginTop="100px"
                    padding="20px"
                >
                    <Image src="tennispoint" width="100%" />
                    <Typography type="h1" color="white" fontStyle="italic">
                        Thank you for your order!
                    </Typography>
                    <Typography
                        type="h3"
                        color="white"
                        fontStyle="italic"
                        padding={isTablet ? '20px 0' : ''}
                    >
                        The entire Teniso Partneris team thanks you for your
                        trust
                    </Typography>
                    <Typography
                        type="h4"
                        color="white"
                        fontStyle="italic"
                        padding={isTablet ? '20px 0 0 0' : '50px 0 0 0'}
                    >
                        We will contact you shortly to confirm your order
                        details and estimated delivery date.
                    </Typography>
                    <Typography
                        type="h5"
                        color="white"
                        fontStyle="italic"
                        padding={isTablet ? '20px 0' : ''}
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
