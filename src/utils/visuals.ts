import students from 'assets/images/students.png';
import gatsbyImg from 'assets/images/icon.png';
import logo from 'assets/images/small_logo.png';
import background from 'assets/images/background.jpg';
import tennispoint from 'assets/images/tennispoint.jpg';
import prestige from 'assets/images/prestige.jpg';
import boom from 'assets/images/boom.jpg';
import gravity from 'assets/images/gravity.jpg';
import results from 'assets/images/results.jpg';
import payments from 'assets/images/payments.png';
import carlos from 'assets/images/carlos.jpg';
import nadal from 'assets/images/nadal.jpg';
import federer from 'assets/images/federer.jpg';

export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
    students,
    gatsbyImg,
    logo,
    background,
    tennispoint,
    prestige,
    boom,
    gravity,
    results,
    federer,
    nadal,
    carlos,
    payments,
};
