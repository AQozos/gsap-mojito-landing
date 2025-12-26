import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { navLinks } from '../../constants/constants.js';

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            }
        });

        navTween.fromTo('nav', {backgroundColor: 'transparent'}, {
            backgroundColor: '#000000',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut',
        })
    })

    return ( 
        <nav>
            <div>
                <a href="#home" className='flex items-center gap-2'>
                    <img src="/images/logo.png" alt="logo" />
                    <p className='font-modern-negra text-3xl -mb-2'>Velvet Pour</p>
                </a>
                <ul className='flex-center lg:gap-12 gap-7'>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;