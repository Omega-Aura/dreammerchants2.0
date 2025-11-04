import { useState, useRef, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { useDarkMode } from '../contexts/DarkModeContext';
import DarkModeToggle from './DarkModeToggle';
import './BubbleMenu.css';

export default function BubbleMenu() {
    const { darkMode } = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    const overlayRef = useRef(null);
    const bubblesRef = useRef([]);
    const labelRefs = useRef([]);

    const menuBg = darkMode ? '#1f2937' : '#ffffff';
    const menuContentColor = darkMode ? '#f3f4f6' : '#111827';

    const menuItems = useMemo(() => [
        {
            label: 'home',
            to: '#home',
            ariaLabel: 'Home',
            rotation: -8,
            hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
        },
        {
            label: 'about',
            to: '#about',
            ariaLabel: 'About',
            rotation: 8,
            hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
        },
        {
            label: 'events',
            to: '#events',
            ariaLabel: 'Events',
            rotation: 8,
            hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
        },
        {
            label: 'team',
            to: '#team',
            ariaLabel: 'Team',
            rotation: 8,
            hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
        },
        {
            label: 'contact',
            to: '#contact',
            ariaLabel: 'Contact',
            rotation: -8,
            hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
        }
    ], []);

    const handleToggle = () => {
        const nextState = !isMenuOpen;
        if (nextState) setShowOverlay(true);
        setIsMenuOpen(nextState);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const overlay = overlayRef.current;
        const bubbles = bubblesRef.current.filter(Boolean);
        const labels = labelRefs.current.filter(Boolean);

        if (!overlay || !bubbles.length) return;

        if (isMenuOpen) {
            gsap.set(overlay, { display: 'flex' });
            gsap.killTweensOf([...bubbles, ...labels]);
            gsap.set(bubbles, { scale: 0, transformOrigin: '50% 50%' });
            gsap.set(labels, { y: 24, autoAlpha: 0 });

            bubbles.forEach((bubble, i) => {
                const delay = i * 0.12 + gsap.utils.random(-0.05, 0.05);
                const tl = gsap.timeline({ delay });

                tl.to(bubble, {
                    scale: 1,
                    duration: 0.5,
                    ease: 'back.out(1.5)'
                });
                if (labels[i]) {
                    tl.to(
                        labels[i],
                        {
                            y: 0,
                            autoAlpha: 1,
                            duration: 0.5,
                            ease: 'power3.out'
                        },
                        '-=0.45'
                    );
                }
            });
        } else if (showOverlay) {
            gsap.killTweensOf([...bubbles, ...labels]);
            gsap.to(labels, {
                y: 24,
                autoAlpha: 0,
                duration: 0.2,
                ease: 'power3.in'
            });
            gsap.to(bubbles, {
                scale: 0,
                duration: 0.2,
                ease: 'power3.in',
                onComplete: () => {
                    gsap.set(overlay, { display: 'none' });
                    setShowOverlay(false);
                }
            });
        }
    }, [isMenuOpen, showOverlay]);

    useEffect(() => {
        const handleResize = () => {
            if (isMenuOpen) {
                const bubbles = bubblesRef.current.filter(Boolean);
                const isDesktop = window.innerWidth >= 900;

                bubbles.forEach((bubble, i) => {
                    const item = menuItems[i];
                    if (bubble && item) {
                        const rotation = isDesktop ? (item.rotation ?? 0) : 0;
                        gsap.set(bubble, { rotation });
                    }
                });
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen, menuItems]);

    return (
        <>
            <nav className="bubble-navbar fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700" aria-label="Main navigation">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="#home" className="flex items-center gap-3 group">
                            <img
                                src="/assets/images/logo.jpg"
                                alt="Dream Merchants Logo"
                                className="h-10 w-auto object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
                            />
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hidden sm:block">
                                Dream Merchants
                            </span>
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-6">
                            {menuItems.map((item) => (
                                <a
                                    key={item.to}
                                    href={item.to}
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 capitalize"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <DarkModeToggle />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-4">
                            <DarkModeToggle />
                            <button
                                type="button"
                                className={`bubble toggle-bubble menu-btn ${isMenuOpen ? 'open' : ''}`}
                                onClick={handleToggle}
                                aria-label="Toggle menu"
                                aria-pressed={isMenuOpen}
                                style={{ background: menuBg }}
                            >
                                <span className="menu-line" style={{ background: menuContentColor }} />
                                <span className="menu-line short" style={{ background: menuContentColor }} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {showOverlay && (
                <div
                    ref={overlayRef}
                    className="bubble-menu-items fixed"
                    aria-hidden={!isMenuOpen}
                >
                    <ul className="pill-list" role="menu" aria-label="Menu links">
                        {menuItems.map((item, idx) => (
                            <li key={idx} role="none" className="pill-col">
                                <a
                                    role="menuitem"
                                    href={item.to}
                                    aria-label={item.ariaLabel || item.label}
                                    className="pill-link"
                                    onClick={handleLinkClick}
                                    style={{
                                        '--item-rot': `${item.rotation ?? 0}deg`,
                                        '--pill-bg': menuBg,
                                        '--pill-color': menuContentColor,
                                        '--hover-bg': item.hoverStyles?.bgColor || '#f3f4f6',
                                        '--hover-color': item.hoverStyles?.textColor || menuContentColor
                                    }}
                                    ref={el => {
                                        if (el) bubblesRef.current[idx] = el;
                                    }}
                                >
                                    <span
                                        className="pill-label"
                                        ref={el => {
                                            if (el) labelRefs.current[idx] = el;
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}
