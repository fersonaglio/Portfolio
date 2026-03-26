const WorkspaceIsometric = () => {
  return (
    <svg
      viewBox="0 0 600 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Background Elements */}
      <ellipse cx="300" cy="380" rx="200" ry="40" fill="#E8E8E8" opacity="0.5" />
      
      {/* Desk */}
      <g transform="translate(100, 200)">
        {/* Desk Top */}
        <path
          d="M200 80L400 40L400 60L200 100L0 60L0 40L200 80Z"
          fill="#D4A574"
        />
        <path
          d="M0 60L200 100L200 120L0 80V60Z"
          fill="#B8956A"
        />
        <path
          d="M200 100L400 60V80L200 120V100Z"
          fill="#C9A070"
        />
        
        {/* Desk Legs */}
        <path d="M20 80L20 160L40 150V70L20 80Z" fill="#A08060" />
        <path d="M360 50V130L380 120V40L360 50Z" fill="#A08060" />
      </g>

      {/* Left Monitor */}
      <g transform="translate(140, 100)">
        {/* Monitor Stand */}
        <path d="M80 140L100 130L100 160L80 170V140Z" fill="#546E7A" />
        <path d="M100 130L120 140L100 160L80 170L100 130Z" fill="#455A64" />
        
        {/* Monitor Screen */}
        <path d="M40 60L120 40L120 100L40 120V60Z" fill="#37474F" />
        <path d="M45 65L115 48L115 95L45 112V65Z" fill="#1A1A2E" />
        
        {/* Code Lines */}
        <path d="M55 75H75" stroke="#81C784" strokeWidth="3" strokeLinecap="round" />
        <path d="M55 85H90" stroke="#F48FB1" strokeWidth="3" strokeLinecap="round" />
        <path d="M55 95H70" stroke="#64B5F6" strokeWidth="3" strokeLinecap="round" />
        <path d="M75 95H100" stroke="#FFD54F" strokeWidth="3" strokeLinecap="round" />
        
        {/* Monitor Frame */}
        <path d="M40 60L120 40L130 45L50 65L40 60Z" fill="#607D8B" />
        <path d="M120 40V100L130 95V45L120 40Z" fill="#78909C" />
      </g>

      {/* Right Monitor */}
      <g transform="translate(280, 80)">
        {/* Monitor Stand */}
        <path d="M80 160L100 150L100 180L80 190V160Z" fill="#546E7A" />
        <path d="M100 150L120 160L100 180L80 190L100 150Z" fill="#455A64" />
        
        {/* Monitor Screen */}
        <path d="M40 80L120 60V120L40 140V80Z" fill="#37474F" />
        <path d="M45 85L115 68V115L45 132V85Z" fill="#1A1A2E" />
        
        {/* Code Lines */}
        <path d="M55 95H85" stroke="#64B5F6" strokeWidth="3" strokeLinecap="round" />
        <path d="M55 105H100" stroke="#F48FB1" strokeWidth="3" strokeLinecap="round" />
        <path d="M55 115H80" stroke="#81C784" strokeWidth="3" strokeLinecap="round" />
        <path d="M85 115H105" stroke="#FFD54F" strokeWidth="3" strokeLinecap="round" />
        
        {/* Monitor Frame */}
        <path d="M40 80L120 60L130 65L50 85L40 80Z" fill="#607D8B" />
        <path d="M120 60V120L130 115V65L120 60Z" fill="#78909C" />
      </g>

      {/* Laptop */}
      <g transform="translate(220, 160)">
        {/* Laptop Base */}
        <path d="M60 80L140 60L160 70L80 90L60 80Z" fill="#90A4AE" />
        <path d="M80 90L160 70V80L80 100V90Z" fill="#78909C" />
        
        {/* Laptop Screen */}
        <path d="M70 40L150 25V65L70 80V40Z" fill="#37474F" />
        <path d="M75 45L145 32V62L75 75V45Z" fill="#1A1A2E" />
        
        {/* Code on Laptop */}
        <path d="M85 55H110" stroke="#81C784" strokeWidth="2" strokeLinecap="round" />
        <path d="M85 62H120" stroke="#F48FB1" strokeWidth="2" strokeLinecap="round" />
        <path d="M85 69H100" stroke="#64B5F6" strokeWidth="2" strokeLinecap="round" />
        
        {/* Laptop Frame */}
        <path d="M70 40L150 25L155 28L75 43L70 40Z" fill="#607D8B" />
      </g>

      {/* Server Rack */}
      <g transform="translate(420, 120)">
        {/* Rack Body */}
        <path d="M0 40L60 25V140L0 155V40Z" fill="#455A64" />
        <path d="M0 40L60 25L80 35L20 50L0 40Z" fill="#546E7A" />
        <path d="M60 25V140L80 130V35L60 25Z" fill="#37474F" />
        
        {/* Server Units */}
        <path d="M5 50L55 38V55L5 67V50Z" fill="#263238" />
        <path d="M5 70L55 58V75L5 87V70Z" fill="#263238" />
        <path d="M5 90L55 78V95L5 107V90Z" fill="#263238" />
        <path d="M5 110L55 98V115L5 127V110Z" fill="#263238" />
        
        {/* LED Indicators */}
        <circle cx="15" cy="57" r="2" fill="#81C784" />
        <circle cx="25" cy="55" r="2" fill="#F48FB1" />
        <circle cx="15" cy="77" r="2" fill="#64B5F6" />
        <circle cx="25" cy="75" r="2" fill="#FFD54F" />
        <circle cx="15" cy="97" r="2" fill="#81C784" />
        <circle cx="25" cy="95" r="2" fill="#F48FB1" />
        <circle cx="15" cy="117" r="2" fill="#64B5F6" />
        <circle cx="25" cy="115" r="2" fill="#FFD54F" />
      </g>

      {/* Floating Data Elements */}
      <g transform="translate(480, 60)">
        <rect x="0" y="0" width="40" height="30" rx="4" fill="#E3F2FD" opacity="0.9" />
        <path d="M8 10H32" stroke="#64B5F6" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 18H24" stroke="#90CAF9" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g transform="translate(520, 100)">
        <rect x="0" y="0" width="35" height="25" rx="4" fill="#FCE4EC" opacity="0.9" />
        <path d="M6 8H29" stroke="#F48FB1" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 16H20" stroke="#F8BBD9" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g transform="translate(50, 80)">
        <rect x="0" y="0" width="30" height="25" rx="4" fill="#E0F2F1" opacity="0.9" />
        <path d="M5 8H25" stroke="#80CBC4" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 16H18" stroke="#B2DFDB" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Cloud Element */}
      <g transform="translate(80, 40)">
        <ellipse cx="25" cy="20" rx="20" ry="12" fill="#FFFDE7" opacity="0.9" />
        <ellipse cx="15" cy="25" rx="12" ry="8" fill="#FFFDE7" opacity="0.9" />
        <ellipse cx="35" cy="25" rx="12" ry="8" fill="#FFFDE7" opacity="0.9" />
        <path d="M15 22H35" stroke="#FFD54F" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 28H32" stroke="#FFE082" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Coffee Cup */}
      <g transform="translate(380, 200)">
        <path d="M10 0L30 5V25L10 20V0Z" fill="#FFFFFF" />
        <path d="M30 5L35 7V22L30 25V5Z" fill="#E0E0E0" />
        <path d="M10 0L30 5L35 7L15 2L10 0Z" fill="#F5F5F5" />
        <ellipse cx="22" cy="3" rx="10" ry="3" fill="#6D4C41" />
        <path d="M35 12C40 12 42 15 40 18C38 21 35 20 35 20" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        
        {/* Steam */}
        <path d="M15 -5Q20 -10 18 -15" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M25 -3Q30 -8 28 -13" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* Plant */}
      <g transform="translate(100, 160)">
        {/* Pot */}
        <path d="M10 40L30 35V55L10 60V40Z" fill="#D4A574" />
        <path d="M30 35L40 38V53L30 55V35Z" fill="#B8956A" />
        <path d="M10 40L30 35L40 38L20 43L10 40Z" fill="#E6C295" />
        
        {/* Leaves */}
        <ellipse cx="15" cy="25" rx="8" ry="15" fill="#81C784" transform="rotate(-20 15 25)" />
        <ellipse cx="30" cy="20" rx="8" ry="18" fill="#66BB6A" transform="rotate(10 30 20)" />
        <ellipse cx="22" cy="15" rx="6" ry="12" fill="#A5D6A7" />
      </g>

      {/* Keyboard */}
      <g transform="translate(200, 180)">
        <path d="M0 10L80 0V15L0 25V10Z" fill="#ECEFF1" />
        <path d="M80 0L100 5V20L80 15V0Z" fill="#CFD8DC" />
        <path d="M0 10L80 0L100 5L20 15L0 10Z" fill="#FFFFFF" />
        
        {/* Keys */}
        <path d="M10 15L20 13V16L10 18V15Z" fill="#B0BEC5" />
        <path d="M25 13L35 11V14L25 16V13Z" fill="#B0BEC5" />
        <path d="M40 11L50 9V12L40 14V11Z" fill="#B0BEC5" />
        <path d="M55 9L65 7V10L55 12V9Z" fill="#B0BEC5" />
      </g>

      {/* Mouse */}
      <g transform="translate(320, 185)">
        <ellipse cx="10" cy="8" rx="8" ry="12" fill="#FFFFFF" />
        <ellipse cx="10" cy="8" rx="6" ry="10" fill="#F5F5F5" />
        <path d="M10 0V8" stroke="#E0E0E0" strokeWidth="1" />
      </g>
    </svg>
  );
};

export default WorkspaceIsometric;
