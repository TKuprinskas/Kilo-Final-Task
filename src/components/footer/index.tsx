import React from 'react';
import { Typography, Box } from 'components';
import { FlexWrapper } from 'components/wrappers/FlexWrapper';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const socialItems = [
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/',
        icon: <FaFacebookF color="white" size={20} />,
    },
    {
        name: 'Twitter',
        link: 'https://www.twitter.com/',
        icon: <FaTwitter color="white" size={20} />,
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/',
        icon: <FaInstagram color="white" size={20} />,
    },
];

export const Footer: React.FC = () => (
    <FlexWrapper
        backgroundColor="orange"
        padding="12px"
        justifyContent="center"
    >
        <Typography type="body16" color="white">
            © 2022 Teniso Partneris. Powered by TKuprinskas
        </Typography>
        <FlexWrapper
            width={{ _: '5%', mobile: '30%' }}
            alignItems="center"
            justifyContent="space-between"
            margin={{ _: '0 50px', mobile: '0 10px' }}
        >
            {socialItems.map((item) => {
                const { name, link, icon } = item;
                return (
                    <Box key={name}>
                        <a href={link}>{icon}</a>
                    </Box>
                );
            })}
        </FlexWrapper>
    </FlexWrapper>
);
