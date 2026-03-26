const DeveloperIsometric = () => {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Background */}
      <ellipse cx="250" cy="420" rx="180" ry="50" fill="#E8E8E8" opacity="0.5" />

      {/* Desk */}
      <g transform="translate(80, 280)">
        {/* Desk Surface */}
        <path d="M170 60L340 30V50L170 80L0 50V30L170 60Z" fill="#D4A574" />
        <path d="M0 50L170 80V100L0 70V50Z" fill="#B8956A" />
        <path d="M170 80L340 50V70L170 100V80Z" fill="#C9A070" />
        
        {/* Desk Legs */}
        <path d="M20 70V130L35 125V65L20 70Z" fill="#A08060" />
        <path d="M305 45V105L320 100V40L305 45Z" fill="#A08060" />
      </g>

      {/* Monitor */}
      <g transform="translate(150, 180)">
        {/* Stand */}
        <path d="M85 120L105 115V145L85 150V120Z" fill="#546E7A" />
        <path d="M105 115L125 125L105 145L85 150L105 115Z" fill="#455A64" />
        
        {/* Screen */}
        <path d="M40 50L130 35V95L40 110V50Z" fill="#37474F" />
        <path d="M45 55L125 42V90L45 103V55Z" fill="#1A1A2E" />
        
        {/* Code Lines */}
        <path d="M55 68H80" stroke="#81C784" strokeWidth="3" strokeLinecap="round" />
        <path d="M55 78H100" stroke="#F48FB1" strokeWidth="3" strokeLinecap="round" />
        <path d="M55 88H75" stroke="#64B5F6" strokeWidth="3" strokeLinecap="round" />
        <path d="M80 88H110" stroke="#FFD54F" strokeWidth="3" strokeLinecap="round" />
        
        {/* Frame */}
        <path d="M40 50L130 35L140 40L50 55L40 50Z" fill="#607D8B" />
        <path d="M130 35V95L140 90V40L130 35Z" fill="#78909C" />
      </g>

      {/* Developer Character */}
      <g transform="translate(200, 100)">
        {/* Body */}
        <path d="M50 100L90 90V160L50 170V100Z" fill="#5C6BC0" />
        <path d="M90 90L110 100V165L90 160V90Z" fill="#3F51B5" />
        <path d="M50 100L90 90L110 100L70 110L50 100Z" fill="#7986CB" />
        
        {/* Neck */}
        <path d="M65 85L75 82V100L65 103V85Z" fill="#FFCCBC" />
        
        {/* Head */}
        <ellipse cx="70" cy="65" rx="25" ry="30" fill="#FFCCBC" />
        
        {/* Hair */}
        <path d="M45 50C45 30 55 20 70 20C85 20 95 30 95 50C95 55 93 60 90 62C90 55 85 45 70 45C55 45 50 55 50 62C47 60 45 55 45 50Z" fill="#3E2723" />
        
        {/* Glasses */}
        <path d="M55 60H65" stroke="#37474F" strokeWidth="2" />
        <path d="M75 60H85" stroke="#37474F" strokeWidth="2" />
        <path d="M65 58V62" stroke="#37474F" strokeWidth="2" />
        <path d="M75 58V62" stroke="#37474F" strokeWidth="2" />
        
        {/* Eyes */}
        <circle cx="60" cy="60" r="2" fill="#37474F" />
        <circle cx="80" cy="60" r="2" fill="#37474F" />
        
        {/* Smile */}
        <path d="M62 75Q70 80 78 75" stroke="#D84315" strokeWidth="2" strokeLinecap="round" fill="none" />
        
        {/* Arms */}
        <path d="M50 115L30 140L40 150L55 125" fill="#FFCCBC" />
        <path d="M110 105L130 130L120 140L105 115" fill="#FFCCBC" />
        
        {/* Hands */}
        <ellipse cx="35" cy="145" rx="8" ry="6" fill="#FFCCBC" />
        <ellipse cx="125" cy="135" rx="8" ry="6" fill="#FFCCBC" />
      </g>

      {/* Chair */}
      <g transform="translate(260, 200)">
        {/* Seat */}
        <path d="M20 60L60 50V70L20 80V60Z" fill="#455A64" />
        <path d="M60 50L80 55V75L60 70V50Z" fill="#37474F" />
        <path d="M20 60L60 50L80 55L40 65L20 60Z" fill="#546E7A" />
        
        {/* Backrest */}
        <path d="M25 10L55 5V50L25 55V10Z" fill="#546E7A" />
        <path d="M55 5L70 8V48L55 50V5Z" fill="#455A64" />
        
        {/* Base */}
        <path d="M40 80V120" stroke="#78909C" strokeWidth="6" />
        <path d="M20 115L60 125" stroke="#78909C" strokeWidth="4" strokeLinecap="round" />
        <path d="M30 125L50 115" stroke="#78909C" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Floating Code Elements */}
      <g transform="translate(350, 120)">
        <rect x="0" y="0" width="50" height="35" rx="6" fill="#E3F2FD" opacity="0.95" />
        <path d="M10 12H40" stroke="#64B5F6" strokeWidth="3" strokeLinecap="round" />
        <path d="M10 22H30" stroke="#90CAF9" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g transform="translate(380, 180)">
        <rect x="0" y="0" width="40" height="30" rx="5" fill="#FCE4EC" opacity="0.95" />
        <path d="M8 10H32" stroke="#F48FB1" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 20H24" stroke="#F8BBD9" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g transform="translate(60, 140)">
        <rect x="0" y="0" width="35" height="28" rx="5" fill="#E0F2F1" opacity="0.95" />
        <path d="M6 10H29" stroke="#80CBC4" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 18H20" stroke="#B2DFDB" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Coffee Cup on Desk */}
      <g transform="translate(320, 260)">
        <path d="M10 5L25 8V25L10 22V5Z" fill="#FFFFFF" />
        <path d="M25 8L30 10V24L25 25V8Z" fill="#E0E0E0" />
        <path d="M10 5L25 8L30 10L15 7L10 5Z" fill="#F5F5F5" />
        <ellipse cx="20" cy="7" rx="8" ry="2" fill="#6D4C41" />
        
        {/* Steam */}
        <path d="M15 0Q18 -5 16 -8" stroke="#E0E0E0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M22 2Q25 -3 23 -6" stroke="#E0E0E0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </g>

      {/* Plant */}
      <g transform="translate(100, 240)">
        {/* Pot */}
        <path d="M15 35L35 30V50L15 55V35Z" fill="#D4A574" />
        <path d="M35 30L45 33V48L35 50V30Z" fill="#B8956A" />
        <path d="M15 35L35 30L45 33L25 38L15 35Z" fill="#E6C295" />
        
        {/* Leaves */}
        <ellipse cx="20" cy="20" rx="10" ry="18" fill="#81C784" transform="rotate(-15 20 20)" />
        <ellipse cx="35" cy="15" rx="10" ry="20" fill="#66BB6A" transform="rotate(15 35 15)" />
        <ellipse cx="28" cy="10" rx="8" ry="15" fill="#A5D6A7" />
      </g>

      {/* Keyboard */}
      <g transform="translate(180, 290)">
        <path d="M0 8L60 0V12L0 20V8Z" fill="#ECEFF1" />
        <path d="M60 0L75 4V16L60 12V0Z" fill="#CFD8DC" />
        <path d="M0 8L60 0L75 4L15 12L0 8Z" fill="#FFFFFF" />
        
        {/* Keys */}
        <path d="M8 12L15 11V14L8 15V12Z" fill="#B0BEC5" />
        <path d="M20 10L27 9V12L20 13V10Z" fill="#B0BEC5" />
        <path d="M32 8L39 7V10L32 11V8Z" fill="#B0BEC5" />
        <path d="M44 6L51 5V8L44 9V6Z" fill="#B0BEC5" />
      </g>

      {/* Books Stack */}
      <g transform="translate(380, 250)">
        <path d="M0 20L40 15V25L0 30V20Z" fill="#EF5350" />
        <path d="M40 15L50 17V27L40 25V15Z" fill="#C62828" />
        <path d="M0 20L40 15L50 17L10 22L0 20Z" fill="#EF9A9A" />
        
        <path d="M5 8L45 5V15L5 18V8Z" fill="#42A5F5" />
        <path d="M45 5L55 7V17L45 15V5Z" fill="#1565C0" />
        <path d="M5 8L45 5L55 7L15 10L5 8Z" fill="#90CAF9" />
        
        <path d="M2 0L42 0V8L2 10V0Z" fill="#66BB6A" />
        <path d="M42 0L52 2V10L42 8V0Z" fill="#2E7D32" />
        <path d="M2 0L42 0L52 2L12 2L2 0Z" fill="#A5D6A7" />
      </g>

      {/* Window/Light */}
      <g transform="translate(50, 50)">
        <path d="M0 20L80 0V100L0 120V20Z" fill="#E3F2FD" opacity="0.3" />
        <path d="M40 10V90" stroke="#BBDEFB" strokeWidth="2" />
        <path d="M0 55H80" stroke="#BBDEFB" strokeWidth="2" />
      </g>
    </svg>
  );
};

export default DeveloperIsometric;
