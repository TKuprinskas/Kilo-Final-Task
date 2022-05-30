import React from 'react';
import { navigate } from 'gatsby';
import { Helmet } from 'react-helmet';
import {
    SectionWrapper,
    Typography,
    Button,
    FlexWrapper,
    Header,
    Footer,
} from 'components';
import { useQuery } from 'styles/breakpoints';

const Home: React.FC = () => {
    const { isTablet } = useQuery();
    const handleClick = () => {
        navigate('/app/quiz');
    };

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header />
            <SectionWrapper
                backgroundImage="background"
                minHeight={isTablet ? '61vh' : '76vh'}
            >
                <FlexWrapper
                    padding={{ _: '3.125rem 6.25rem', mobile: '0.625rem' }}
                    width={{ _: '60%', mobile: '100%' }}
                    flexDirection="column"
                >
                    <Typography type="h1" color="white" fontStyle="italic">
                        LOOKING FOR THE PERFECT TENNIS RACQUET?
                    </Typography>
                    <Typography type="h4" color="white" padding="0.625rem 0">
                        FIND IT IN 8 QUICK QUESTIONS
                    </Typography>
                    <Button
                        type="button"
                        width="7.5rem"
                        color="white"
                        backgroundColor="orange"
                        padding="0.625rem"
                        onClick={() => handleClick()}
                    >
                        START NOW
                    </Button>
                </FlexWrapper>
            </SectionWrapper>
            <Footer />
        </>
    );
};

export default Home;
