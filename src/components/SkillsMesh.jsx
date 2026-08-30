import React from 'react'

const SkillsMesh = ({ className = '' }) => {
    return (
        <div className={`w-full h-full ${className}`} style={{ animation: 'meshFade 1.1s ease-out 0.15s both' }}>
            <div
                className="absolute rounded-full"
                style={{
                    left: '18%', top: '22%', width: '32%', height: '32%',
                    background: 'radial-gradient(ellipse, rgba(205,124,46,0.28), transparent 70%)',
                    filter: 'blur(45px)',
                }}
            />
            <div
                className="absolute rounded-full"
                style={{
                    left: '42%', top: '62%', width: '30%', height: '30%',
                    background: 'radial-gradient(ellipse, rgba(205,124,46,0.18), transparent 70%)',
                    filter: 'blur(45px)',
                }}
            />
            <svg
                viewBox="0 0 560 460"
                className="relative w-full h-full"
                style={{ overflow: 'visible' }}
                preserveAspectRatio="xMidYMid meet"
            >
                {/* mesh connections */}
                <line x1="420" y1="90" x2="500" y2="180" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
                <line x1="420" y1="90" x2="260" y2="140" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="500" y1="180" x2="460" y2="300" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="340" y1="220" x2="260" y2="140" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="340" y1="220" x2="180" y2="260" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="460" y1="300" x2="320" y2="360" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="260" y1="140" x2="180" y2="260" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="180" y1="260" x2="320" y2="360" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="340" y1="220" x2="460" y2="300" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="3,3" />

                {/* software nodes - primary stack, highlighted */}
                <circle cx="420" cy="90" r="6" fill="rgba(205,124,46,0.25)" stroke="#cd7c2e" strokeWidth="1.4" />
                <text x="434" y="86" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#cd7c2e" letterSpacing="0.04em">REACT</text>

                <circle cx="500" cy="180" r="6" fill="rgba(205,124,46,0.25)" stroke="#cd7c2e" strokeWidth="1.4" />
                <text x="514" y="184" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#cd7c2e" letterSpacing="0.04em">NODE</text>

                {/* software nodes - secondary */}
                <circle cx="340" cy="220" r="5.5" fill="rgba(217,236,255,0.08)" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                <text x="354" y="224" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#d9ecff" letterSpacing="0.04em">PYTHON</text>

                <circle cx="460" cy="300" r="5.5" fill="rgba(217,236,255,0.08)" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                <text x="474" y="304" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#d9ecff" letterSpacing="0.04em">C++</text>

                {/* tooling node */}
                <rect x="255" y="135" width="10" height="10" fill="rgba(217,236,255,0.06)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" transform="rotate(45 260 140)" />
                <text x="246" y="128" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#839cb5" letterSpacing="0.04em" textAnchor="end">GIT</text>

                {/* infra / hardware nodes */}
                <rect x="175" y="255" width="10" height="10" fill="rgba(131,156,181,0.1)" stroke="rgba(131,156,181,0.7)" strokeWidth="1.2" />
                <text x="166" y="250" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#839cb5" letterSpacing="0.04em" textAnchor="end">NETWORKING</text>

                <rect x="315" y="355" width="10" height="10" fill="rgba(131,156,181,0.1)" stroke="rgba(131,156,181,0.7)" strokeWidth="1.2" />
                <text x="330" y="372" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#839cb5" letterSpacing="0.04em">INFRA</text>
            </svg>
        </div>
    )
}
export default SkillsMesh
