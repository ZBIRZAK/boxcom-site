"use client";

const Pencil = () => (
  <div style={{ position: "relative", width: "100%", height: "100%" , right:"20%",top:"0%"}}>
  <svg
    viewBox="0 0 100 100"
    style={{
      width: "100%",
      height: "100%",
      overflow: "visible",
      position: "absolute",
    }}
    xmlns="http://www.w3.org/2000/svg"
  >

    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>


      <linearGradient id="magicGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ff00cc">
          <animate attributeName="stop-color" values="#ff00cc;#00ffff;#ff00cc" dur="7s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#00ffff">
          <animate attributeName="stop-color" values="#00ffff;#ff00cc;#00ffff" dur="7s" repeatCount="indefinite" />
        </stop>
      </linearGradient>


      <mask id="trailMask">
        <circle r="20" fill="white">
          <animateMotion dur="7s" repeatCount="indefinite">
            <mpath href="#motionPath" />
          </animateMotion>
        </circle>
      </mask>
    </defs>

    {/* Magic path */}
    <path
      id="motionPath"
      d="M 0,80 
     C 10,60 30,100 40,80 
     S 70,60 80,80 
     S 110,100 120,80 "
      fill="none"
      stroke="url(#magicGradient)"
      strokeWidth="2.5"
      strokeDashoffset="0"
      filter="url(#glow)"
      mask="url(#trailMask)"
    />

    
    <image
      href="/images/pencil.svg"
      width="24"
      height="48"
      x={7}    
      y={-50}   
       
    >
  <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
    <mpath href="#motionPath" />
  </animateMotion>
</image>

  </svg>
  </div>
);

export default Pencil;
