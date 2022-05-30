import React from 'react';
import { AccordionItemsList } from 'pages/app/checkout/elements/Info';
import AccordionItem from './AccordionItem';
import { Typography } from 'components';
import { ContentWrapper } from 'components/wrappers/ContentWrapper';

export const Accordion = () => (
    <ContentWrapper>
        <Typography type="h2" textAlign="center">
            Frequently Asked Questions
        </Typography>
        {AccordionItemsList.map(({ question, answer }, index: number) => (
            <AccordionItem key={index} question={question} answer={answer} />
        ))}
    </ContentWrapper>
);
