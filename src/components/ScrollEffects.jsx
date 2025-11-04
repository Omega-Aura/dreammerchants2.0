import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollEffects = () => {
    useEffect(() => {
        // Smooth scroll
        gsap.to('body', {
            scrollBehavior: 'smooth',
        });

        // Parallax effect for background patterns (excluding contact section)
        gsap.utils.toArray('.squares-pattern').forEach((elem) => {
            const isInContactSection = elem.closest('#contact');
            if (!isInContactSection) {
                gsap.to(elem, {
                    y: 100,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: elem,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            }
        });

        // Fade in and slide up animation for sections
        gsap.utils.toArray('.scroll-fade-in').forEach((elem) => {
            const isInContactSection = elem.closest('#contact');

            if (isInContactSection) {
                // Simple fade only for contact section
                gsap.fromTo(
                    elem,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 0.4,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: elem,
                            start: 'top 95%',
                            once: true,
                        },
                    }
                );
            } else {
                // Fade and slide for other sections
                gsap.fromTo(
                    elem,
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power1.out',
                        scrollTrigger: {
                            trigger: elem,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        });

        // Scale animation for cards
        gsap.utils.toArray('.scroll-scale').forEach((elem) => {
            const isInContactSection = elem.closest('#contact');

            if (isInContactSection) {
                // Simple fade only for contact section
                gsap.fromTo(
                    elem,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 0.4,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: elem,
                            start: 'top 95%',
                            once: true,
                        },
                    }
                );
            } else {
                // Scale animation for other sections
                gsap.fromTo(
                    elem,
                    {
                        scale: 0.95,
                        opacity: 0,
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        ease: 'power1.out',
                        scrollTrigger: {
                            trigger: elem,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        });

        // Stagger animation for grid items
        gsap.utils.toArray('.scroll-stagger-container').forEach((container) => {
            const items = container.querySelectorAll('.scroll-stagger-item');
            gsap.fromTo(
                items,
                {
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 75%',
                        end: 'top 40%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        // Horizontal slide animation
        gsap.utils.toArray('.scroll-slide-left').forEach((elem) => {
            const isInContactSection = elem.closest('#contact');

            if (isInContactSection) {
                // Simple fade for contact section
                gsap.fromTo(
                    elem,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 0.4,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: elem,
                            start: 'top 95%',
                            once: true,
                        },
                    }
                );
            } else {
                // Slide animation for other sections
                gsap.fromTo(
                    elem,
                    {
                        x: -50,
                        opacity: 0,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: 'power1.out',
                        scrollTrigger: {
                            trigger: elem,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        });

        gsap.utils.toArray('.scroll-slide-right').forEach((elem) => {
            const isInContactSection = elem.closest('#contact');

            if (isInContactSection) {
                // Simple fade for contact section
                gsap.fromTo(
                    elem,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 0.4,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: elem,
                            start: 'top 95%',
                            once: true,
                        },
                    }
                );
            } else {
                // Slide animation for other sections
                gsap.fromTo(
                    elem,
                    {
                        x: 50,
                        opacity: 0,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: 'power1.out',
                        scrollTrigger: {
                            trigger: elem,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        });

        // Pin and reveal animation
        gsap.utils.toArray('.scroll-pin').forEach((elem) => {
            ScrollTrigger.create({
                trigger: elem,
                start: 'top 10%',
                end: 'bottom 10%',
                pin: true,
                pinSpacing: false,
            });
        });

        // Rotate on scroll
        gsap.utils.toArray('.scroll-rotate').forEach((elem) => {
            gsap.to(elem, {
                rotation: 360,
                ease: 'none',
                scrollTrigger: {
                    trigger: elem,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 2,
                },
            });
        });

        // Progress bar on scroll
        gsap.to('.scroll-progress', {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.3,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return null;
};

export default ScrollEffects;
