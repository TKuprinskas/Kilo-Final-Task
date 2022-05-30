import React from 'react';
import { Link } from 'gatsby';
import { Box, FlexWrapper, SectionWrapper, Image } from 'components';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useQuery } from 'styles/breakpoints';

const menuItems = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Racquets',
        link: '/racquets',
    },
    {
        name: 'Blog',
        link: '/blog',
    },
    {
        name: 'Contact',
        link: '/contact',
    },
    {
        name: 'About us',
        link: '/about',
    },
];

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

export const Header: React.FC = () => {
    const { isTablet } = useQuery();
    return (
        <SectionWrapper backgroundColor="orange">
            <FlexWrapper
                flexDirection={{ _: 'row', mobile: 'column' }}
                marginTop={{ _: '0', mobile: '-1.875rem' }}
            >
                {isTablet ? (
                    ''
                ) : (
                    <Box textAlign={'left'}>
                        <Link to="/">
                            <Image
                                src="logo"
                                alt="logo"
                                width="45%"
                                style={{ cursor: 'pointer' }}
                            />
                        </Link>
                    </Box>
                )}
                <FlexWrapper
                    justifyContent="space-between"
                    width="30%"
                    margin="0 auto"
                    flexDirection={{ _: 'row', mobile: 'column' }}
                    alignItems="center"
                >
                    {menuItems.map((item) => {
                        const { name, link } = item;
                        return (
                            <Box
                                key={name}
                                marginTop={{ _: '0', mobile: '0.625rem' }}
                            >
                                <Link
                                    to={link}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                        fontFamily: 'Roboto',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                    }}
                                >
                                    {name}
                                </Link>
                            </Box>
                        );
                    })}
                </FlexWrapper>
                <FlexWrapper
                    width={{ _: '5%', mobile: '100%' }}
                    alignItems="center"
                    justifyContent={{
                        _: 'space-between',
                        mobile: 'space-around',
                    }}
                    marginTop={{ _: '0', mobile: '1.25rem' }}
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
        </SectionWrapper>
    );
};
