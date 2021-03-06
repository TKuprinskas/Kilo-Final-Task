import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Box, FlexWrapper, Typography } from 'components';

interface AccordionItemProps {
    question: string;
    answer: string;
}

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <Box
            padding="1rem"
            margin="0.5rem 0"
            border=" 0.0625rem solid rgba(0, 0, 0, 0.08)"
            borderRadius="br16"
        >
            <FlexWrapper
                onClick={() => setIsActive(!isActive)}
                justifyContent="space-between"
                width="100%"
                isCursorPointer={true}
            >
                <Typography type="h4">{question}</Typography>
                <Box isCursorPointer={true}>
                    {isActive ? <FaChevronUp /> : <FaChevronDown />}
                </Box>
            </FlexWrapper>
            {isActive && <Typography type="body16">{answer}</Typography>}
        </Box>
    );
};

export default AccordionItem;
