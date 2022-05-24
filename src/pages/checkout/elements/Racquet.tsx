import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby-link';
import { useSelector } from 'react-redux';
import { selectRacquets } from 'state/selectors';
import { Box, FlexWrapper, Image } from 'components';
import { RacquetInfo } from '../elements/RacquetInfo';
import { useQuery } from 'styles/breakpoints';

export const Racquet: React.FC = () => {
    const { isTablet } = useQuery();
    const [strung, setStrung] = useState<number>(0);
    const [grip, setGrip] = useState<number>(0);
    const racquets = useSelector(selectRacquets);
    const [loaded, setLoaded] = useState<boolean>(false);

    const params = new URLSearchParams(window.location.search);
    const racquetId = params.get('racquet');

    useEffect(() => {
        if (racquets) {
            setLoaded(true);
        }
    }, [racquets]);

    const handleBuyClick = () => {
        navigate('/success');
    };

    const selectStrung = (id: number) => {
        setStrung(id);
    };

    const selectGrip = (id: number) => {
        setGrip(id);
    };

    const index = Number(racquetId) - 1;
    const { name, image, price, description } = racquets[index];

    if (!loaded) {
        return null;
    }

    return (
        <Box>
            <FlexWrapper
                justifyContent="center"
                flexDirection={{ _: 'row', mobile: 'column' }}
            >
                <Box
                    border="0.0625rem solid orange"
                    margin="0 3.125rem 0 0"
                    width={isTablet ? '100%' : ''}
                >
                    <Image
                        src={image}
                        alt={image}
                        width={isTablet ? '100%' : ''}
                    />
                </Box>
                <RacquetInfo
                    name={name}
                    price={price}
                    description={description}
                    strung={strung}
                    grip={grip}
                    selectGrip={selectGrip}
                    selectStrung={selectStrung}
                    handleBuyClick={handleBuyClick}
                />
            </FlexWrapper>
        </Box>
    );
};
