import { useMediaQuery } from 'react-responsive';

export const smMobile = '(max-width: 20rem)'; //320px
export const mobile = '(max-width: 30rem)'; //480px
export const tablet = '(max-width: 48rem)'; //768px

export const useQuery = () => ({
    isMobile: useMediaQuery({ query: mobile }),
    isTablet: useMediaQuery({ query: tablet }),
});
