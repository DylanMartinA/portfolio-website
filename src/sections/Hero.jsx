import SkillsMesh from "../components/SkillsMesh.jsx";

const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="eng-grid-bg" />

            <div className="hero-hud padding-x-lg">
                <div className="hero-mesh-wrap">
                    <SkillsMesh />
                </div>

                <div
                    className="hero-panel relative z-10 w-full md:w-[640px]"
                    style={{ animation: 'heroRise 0.9s ease-out both' }}
                >
                    <span className="corner corner-tl" />
                    <span className="corner corner-tr" />
                    <span className="corner corner-bl" />
                    <span className="corner corner-br" />

                    <div className="hero-eyebrow">
                        <span className="dot" />
                        <span>Engineer</span>
                    </div>

                    <h1 className="text-[32px] md:text-[46px] font-semibold leading-[1.1] tracking-tight">
                        I engineer products that actually <span className="text-accent">ship.</span>
                    </h1>

                    <p className="mt-5 text-sm md:text-base text-white-50 max-w-md">
                        Full-stack software engineer building products across biotech and sustainability.
                    </p>

                    <div className="flex items-center gap-6 mt-8">
                        <a href="#work" className="hero-cta">
                            View Work
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </a>
                        <a href="#contact" className="hero-secondary-link">get in touch &rarr;</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
