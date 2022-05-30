import React from 'react';
import { Button, Box, FlexWrapper, Typography, Image } from 'components';
import { useQuery } from 'styles/breakpoints';

interface Props {
    name: string;
    price: string;
    description: string;
    strung: number;
    grip: number;
    selectGrip: (id: number) => void;
    selectStrung: (id: number) => void;
    handleBuyClick: () => void;
}

export const RacquetInfo: React.FC<Props> = ({
    name,
    price,
    description,
    strung,
    grip,
    selectGrip,
    selectStrung,
    handleBuyClick,
}) => {
    const { isTablet } = useQuery();
    return (
        <FlexWrapper
            flexDirection="column"
            width={{ _: '20%', mobile: '100%' }}
            justifyContent="center"
        >
            <Box borderBottom="0.0625rem solid orange" padding="0.5rem">
                <Typography type="h2">{name}</Typography>
                <Typography type="h3">{price}</Typography>
            </Box>
            <Box borderBottom="0.0625rem solid orange" padding="0.5rem">
                <Typography type="h4">DESCRIPTION</Typography>
                <Typography type="body16">{description}</Typography>
            </Box>
            <Box borderBottom="0.0625rem solid orange" padding="0.5rem">
                <Typography type="h4">RACQUET STRUNG</Typography>
                <FlexWrapper>
                    <Button
                        width="6.25rem"
                        backgroundColor={
                            strung === 1 ? 'orange' : 'transparent'
                        }
                        color={strung === 1 ? 'white' : 'black'}
                        border="0.0625rem solid orange"
                        backgroundColorHover="orange"
                        onClick={() => selectStrung(1)}
                    >
                        Unstrung
                    </Button>
                    <Button
                        width="6.25rem"
                        backgroundColor={
                            strung === 2 ? 'orange' : 'transparent'
                        }
                        color={strung === 2 ? 'white' : 'black'}
                        border="0.0625rem solid orange"
                        margin="0 0 0 0.625rem"
                        backgroundColorHover="orange"
                        onClick={() => selectStrung(2)}
                    >
                        Strung
                    </Button>
                </FlexWrapper>
            </Box>
            <Box borderBottom="0.0625rem solid orange" padding="0.5rem">
                <Typography type="h4">GRIP SIZE</Typography>
                <FlexWrapper>
                    <Button
                        width="6.25rem"
                        backgroundColor={grip === 1 ? 'orange' : 'transparent'}
                        color={grip === 1 ? 'white' : 'black'}
                        border="0.0625rem solid orange"
                        backgroundColorHover="orange"
                        onClick={() => selectGrip(1)}
                    >
                        1
                    </Button>
                    <Button
                        width="6.25rem"
                        backgroundColor={grip === 2 ? 'orange' : 'transparent'}
                        color={grip === 2 ? 'white' : 'black'}
                        border="0.0625rem solid orange"
                        margin="0 0 0 0.625rem"
                        backgroundColorHover="orange"
                        onClick={() => selectGrip(2)}
                    >
                        2
                    </Button>
                    <Button
                        width="6.25rem"
                        backgroundColor={grip === 3 ? 'orange' : 'transparent'}
                        color={grip === 3 ? 'white' : 'black'}
                        border="0.0625rem solid orange"
                        margin="0 0 0 0.625rem"
                        backgroundColorHover="orange"
                        onClick={() => selectGrip(3)}
                    >
                        3
                    </Button>
                    <Button
                        width="6.25rem"
                        backgroundColor={grip === 4 ? 'orange' : 'transparent'}
                        color={grip === 4 ? 'white' : 'black'}
                        border="0.0625rem solid orange"
                        margin="0 0 0 0.625rem"
                        backgroundColorHover="orange"
                        onClick={() => selectGrip(4)}
                    >
                        4
                    </Button>
                </FlexWrapper>
            </Box>
            <Button
                width={{ _: '50%', mobile: '100%' }}
                backgroundColor="orange"
                color="white"
                margin="1.25rem 0 1.25rem 0"
                onClick={handleBuyClick}
            >
                BUY NOW
            </Button>
            <Typography type="body14">
                By choosing a payment method you agree to the{' '}
                <a href="@">T&Cs</a> and <a href="@">Privacy Policy</a>
            </Typography>
            <Box margin={isTablet ? '0.625rem auto' : '0.625rem 0 0 -3.75rem'}>
                <Image
                    src="payments"
                    alt="payments"
                    width={isTablet ? '100%' : ''}
                />
            </Box>
        </FlexWrapper>
    );
};
