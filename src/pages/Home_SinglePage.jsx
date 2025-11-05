import { useEffect, useRef, useState, useMemo, useCallback } from 'react';

// Reusable Icon Components
const FinanceIcon = () => (
    <svg className="w-8 h-8 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const BusinessIcon = () => (
    <svg className="w-8 h-8 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const CommunityIcon = () => (
    <svg className="w-8 h-8 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const ArrowIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

// Reusable pattern background component
const SquaresPattern = () => (
    <div className="squares-pattern absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}></div>
    </div>
);

function Home() {
    const featuresRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    }, []);

    // Memoized Team data
    const executiveTeam = useMemo(() => [
        { name: "Ankit Singh", role: "Chairperson", image: "/assets/images/Ankit.webp" },
        { name: "Siddhant", role: "Vice Chairperson", image: "/assets/images/sid.webp" },
        { name: "Utkarsh", role: "Secretary", image: "/assets/images/utkatsh.webp" },
        { name: "Aritra", role: "Co Secretary", image: "/assets/images/aritra.webp" }
    ], []);

    const domainHeads = useMemo(() => [
        { name: "Jai", role: "Research Head", image: "/assets/images/jai.webp" },
        { name: "Atharv", role: "Operations Head", image: "/assets/images/atharv.webp" },
        { name: "Sanskriti", role: "Design Head", image: "/assets/images/sans.webp" },
        { name: "Ananay", role: "Training Head", image: "/assets/images/ananay.webp" },
        { name: "Shristi", role: "Marketing Head", image: "/assets/images/shristi.webp" },
        { name: "Ajinkya", role: "Editorial Head", image: "/assets/images/ajinkya.webp" },
        { name: "Prisha", role: "Technical Head", image: "/assets/images/prisha.webp" },
        { name: "Udit", role: "Finance Head", image: "/assets/images/udit.webp" }
    ], []);

    // Memoized Events data
    const upcomingEvents = useMemo(() => [
        {
            title: "Stockastic",
            date: "TBA",
            image: "/assets/images/stock.jpg",
            registerLink: "#",
            description: "Test your stock market knowledge and trading strategies in this exciting simulation event."
        },
        {
            title: "Cashino!",
            date: "Riviera'26",
            image: "/assets/images/cashino 2.0.jpg",
            registerLink: "https://riviera.vit.ac.in/",
            description: "A thrilling financial casino experience where strategy meets fortune."
        }
    ], []);

    const previousEvents = useMemo(() => [
        { title: "TechCraft", date: "3rd February 2025", image: "/assets/images/techcraft.jpg" },
        { title: "Housie!", date: "22nd February 2025", image: "/assets/images/housie.webp" },
        { title: "Bricks by Bid", date: "27th and 28th September 2025", image: "/assets/images/bbb.png" },
        { title: "Dream Team", date: "21st to 23rd October 2025", image: "/assets/images/dreamteam.jpg" }
    ], []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            { threshold: 0.1 }
        );

        const features = document.querySelectorAll('.feature-card');
        features?.forEach((feature) => observer.observe(feature));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 transition-colors duration-300 overflow-x-hidden">

            {/* HERO SECTION */}
            <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
                <SquaresPattern />

                {/* Floating orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    {/* Animated Badge */}
                    <div className="scroll-fade-in inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full px-6 py-3 mb-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                        </span>
                        <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                            VIT&apos;s Premier Finance & Tech Club
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="scroll-scale text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in">
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                            Dream Merchants
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="scroll-slide-left text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium animate-slide-in-left">
                        Finance • Technology • Innovation • Trading
                    </p>

                    <p className="scroll-slide-right text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-in-right">
                        Empowering future leaders and corporate captains through financial literacy,
                        strategic thinking, and hands-on business experience.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <a
                            href="#about"
                            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1"
                        >
                            Learn More
                            <span className="group-hover:translate-x-1 transition-transform inline-block">
                                <ArrowIcon />
                            </span>
                        </a>
                        <a
                            href="#events"
                            className="group inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 px-8 py-4 rounded-xl font-semibold border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
                        >
                            Explore Events
                            <span className="group-hover:rotate-90 transition-transform inline-block">
                                <ArrowIcon />
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section ref={featuresRef} className="relative py-20 px-4 bg-white/50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="scroll-stagger-container grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="scroll-stagger-item feature-card group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 opacity-0">
                            <div className="w-16 h-16 mb-6 border-2 border-gray-900 dark:border-white rounded-2xl flex items-center justify-center bg-transparent group-hover:rotate-6 transition-transform duration-300">
                                <FinanceIcon />
                            </div>
                            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                                Financial Excellence
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Master finance, trading, and investment strategies through practical workshops and competitive events.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="scroll-stagger-item feature-card group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 opacity-0">
                            <div className="w-16 h-16 mb-6 border-2 border-gray-900 dark:border-white rounded-2xl flex items-center justify-center bg-transparent group-hover:rotate-6 transition-transform duration-300">
                                <BusinessIcon />
                            </div>
                            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                Business Leadership
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Develop strategic management and entrepreneurial skills to become tomorrow&apos;s business leaders.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="scroll-stagger-item feature-card group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 opacity-0">
                            <div className="w-16 h-16 mb-6 border-2 border-gray-900 dark:border-white rounded-2xl flex items-center justify-center bg-transparent group-hover:rotate-6 transition-transform duration-300">
                                <CommunityIcon />
                            </div>
                            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">
                                Community & Network
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Connect with like-minded individuals and build lasting professional relationships in business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950">
                <SquaresPattern />

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="scroll-fade-in text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                            About Dream Merchants
                        </h2>
                        <div className="scroll-scale w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Mission Statement */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <div className="scroll-slide-left bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 border-2 border-gray-900 dark:border-white rounded-2xl flex items-center justify-center bg-transparent">
                                        <svg className="w-8 h-8 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                                        Our Mission
                                    </h3>
                                    <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                                        We are a university-based financial club dedicated to fostering financial literacy and leadership among students.
                                        Dream Merchants provides a platform for future leaders and corporate captains. Our objective is to develop an
                                        interest in finance, business, and entrepreneurship while offering opportunities to explore careers in finance and trade.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values Grid */}
                    <div className="scroll-stagger-container max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="scroll-stagger-item group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="w-12 h-12 border-2 border-gray-900 dark:border-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 bg-transparent">
                                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">Financial Literacy</h4>
                            <p className="text-gray-600 dark:text-gray-300">Building strong foundations in finance, trading, and investment strategies.</p>
                        </div>

                        <div className="scroll-stagger-item group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="w-12 h-12 border-2 border-gray-900 dark:border-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 bg-transparent">
                                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">Innovation</h4>
                            <p className="text-gray-600 dark:text-gray-300">Encouraging creative thinking and entrepreneurial mindset in business.</p>
                        </div>

                        <div className="scroll-stagger-item group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="w-12 h-12 border-2 border-gray-900 dark:border-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 bg-transparent">
                                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">Leadership</h4>
                            <p className="text-gray-600 dark:text-gray-300">Developing future corporate leaders through hands-on experience.</p>
                        </div>

                        <div className="scroll-stagger-item group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="w-12 h-12 border-2 border-gray-900 dark:border-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 bg-transparent">
                                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">Professional Growth</h4>
                            <p className="text-gray-600 dark:text-gray-300">Creating pathways for career exploration in finance and business.</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="scroll-slide-right max-w-4xl mx-auto text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                        <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Join Our Community</h3>
                        <p className="text-lg mb-6 text-gray-700 dark:text-gray-200">
                            Be part of VIT&apos;s leading finance and tech club. Connect with like-minded individuals and grow together.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Get In Touch
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* EVENTS SECTION */}
            <section id="events" className="relative py-20 px-4 bg-white/50 dark:bg-gray-900/50">
                <SquaresPattern />

                <div className="relative z-10">
                    {/* Upcoming Events */}
                    <div className="mb-20">
                        <h2 className="scroll-fade-in text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                            Upcoming Events
                        </h2>
                        <div className="scroll-scale w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-16 rounded-full"></div>

                        <div className="scroll-stagger-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                            {upcomingEvents.map((event, index) => (
                                <div
                                    key={index}
                                    className="scroll-stagger-item group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                                >
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">{event.title}</h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{event.date}</p>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                                        <a
                                            href={event.registerLink}
                                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                        >
                                            Register Now
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Previous Events */}
                    <div>
                        <h2 className="scroll-fade-in text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-300 bg-clip-text text-transparent">
                            Previous Events
                        </h2>
                        <div className="scroll-scale w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-300 mx-auto mb-16 rounded-full"></div>

                        <div className="scroll-stagger-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {previousEvents.map((event, index) => (
                                <div
                                    key={index}
                                    className="scroll-stagger-item group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                >
                                    <div className="relative aspect-square overflow-hidden">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[30%] group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <h3 className="text-white font-bold text-lg mb-1">{event.title}</h3>
                                            <p className="text-gray-200 text-sm">{event.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM SECTION */}
            <section id="team" className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-pink-950">
                <SquaresPattern />

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="scroll-fade-in text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                            Meet Our Team
                        </h2>
                        <div className="scroll-scale w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Executive Team */}
                    <div className="mb-16">
                        <h3 className="scroll-fade-in text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Executive Board</h3>
                        <div className="scroll-stagger-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {executiveTeam.map((member, index) => (
                                <div
                                    key={index}
                                    className="scroll-stagger-item group relative aspect-square rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                                        <p className="text-purple-300 font-medium">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Domain Heads */}
                    <div>
                        <h3 className="scroll-fade-in text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Domain Heads</h3>
                        <div className="scroll-stagger-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {domainHeads.map((member, index) => (
                                <div
                                    key={index}
                                    className="scroll-stagger-item group relative aspect-square rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <h4 className="text-lg font-bold mb-1">{member.name}</h4>
                                        <p className="text-pink-300 text-sm font-medium">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-green-950 dark:to-teal-950">
                <SquaresPattern />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="scroll-fade-in text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent">
                            Get In Touch
                        </h2>
                        <div className="scroll-scale w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Have questions or want to collaborate? We&apos;d love to hear from you. Drop us a message!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            {/* Email Card */}
                            <div className="scroll-slide-left group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Email Us</h3>
                                        <a
                                            href="mailto:dreammerchantsvit@gmail.com"
                                            className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
                                        >
                                            dreammerchantsvit@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="scroll-slide-left group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-teal-300 dark:hover:border-teal-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.instagram.com/dreammerchantsvit"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                                            <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/dream-merchants-vit/posts/?feedView=all"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="scroll-slide-right">
                            <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                                            placeholder="Tell us about your inquiry..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
