import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby-link';
import { useDispatch, useSelector } from 'react-redux';
import { selectRacquets } from 'state/selectors';
import { fetchRacquets } from 'state/thunks';
import { Button, FlexWrapper, Image, Typography } from 'components';

export const RacquetCard: React.FC = () => {
    const dispatch = useDispatch();
    const racquets = useSelector(selectRacquets);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchRacquets());
        setLoaded(true);
    }, []);

    const handleClick = (id: string | number | null) => {
        navigate(`/checkout?racquet=${id}`);
    };

    if (!loaded) {
        return null;
    }
    return (
        <>
            {racquets.map(
                ({
                    id,
                    image,
                    name,
                    weight,
                    headsize,
                    balance,
                    stringpattern,
                    length,
                }) => {
                    return (
                        <FlexWrapper
                            key={id}
                            flexDirection="column"
                            padding="0.625rem"
                            alignItems="center"
                            justifyContent="center"
                            overflow="hidden"
                            width={{ _: '20rem', mobile: '100%' }}
                            height="auto"
                            margin="0 auto"
                        >
                            <Image
                                src={image}
                                width="100%"
                                transform="rotate(-55deg)"
                            />
                            <Typography type="h4" color="black">
                                {name}
                            </Typography>
                            <Typography type="body16" color="black">
                                Weight: {weight}
                            </Typography>
                            <Typography type="body16" color="black">
                                Head Size: {headsize}
                            </Typography>
                            <Typography type="body16" color="black">
                                Balance: {balance}
                            </Typography>
                            <Typography type="body16" color="black">
                                String Pattern: {stringpattern}
                            </Typography>
                            <Typography type="body16" color="black">
                                Length: {length}
                            </Typography>
                            <Button
                                type="button"
                                width={{ _: '7.5rem', mobile: '100%' }}
                                color="white"
                                backgroundColor="orange"
                                padding="0.625rem"
                                margin="0.625rem 0"
                                onClick={() => handleClick(id)}
                            >
                                LEARN MORE
                            </Button>
                        </FlexWrapper>
                    );
                }
            )}
        </>
    );
};
