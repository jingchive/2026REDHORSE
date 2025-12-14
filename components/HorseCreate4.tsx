import { useState } from 'react';
import svgPaths from "../imports/svg-98gmw5e99i";
import horseSvgPaths from "../imports/svg-on6a90b19c";
import { CountdownTimer } from './CountdownTimer';

interface HorseCreate4Props {
  selectedHorse: number;
  horseName: string;
  onComplete: (finalColor: string) => void;
}

function Nav() {
  return (
    <div className="h-[85px] w-full shrink-0" data-name="nav">
      <div className="relative h-full w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 86">
          <g id="nav">
            <g id="Group 1">
              <g id="image 4 (Traced)">
                <mask fill="black" height="51" id="path-1-outside-1_5_1158" maskUnits="userSpaceOnUse" width="89" x="142.316" y="21">
                  <rect fill="white" height="51" width="89" x="142.316" y="21" />
                  <path clipRule="evenodd" d={svgPaths.p8ba4f00} fillRule="evenodd" />
                </mask>
                <path clipRule="evenodd" d={svgPaths.p8ba4f00} fill="var(--fill-0, #4762DA)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p8ba4f00} fillRule="evenodd" mask="url(#path-1-outside-1_5_1158)" stroke="var(--stroke-0, #4762DA)" />
              </g>
              <g id="running horse3">
                <mask fill="black" height="51" id="path-2-outside-2_5_1158" maskUnits="userSpaceOnUse" width="83" x="157.053" y="21">
                  <rect fill="white" height="51" width="83" x="157.053" y="21" />
                  <path d={svgPaths.p38ebf900} />
                </mask>
                <path d={svgPaths.p38ebf900} fill="var(--fill-0, #A04842)" />
                <path d={svgPaths.p38ebf900} mask="url(#path-2-outside-2_5_1158)" stroke="var(--stroke-0, #F5F5F5)" strokeWidth="0.6" />
              </g>
              <g id="running horse2">
                <mask fill="black" height="51" id="path-3-outside-3_5_1158" maskUnits="userSpaceOnUse" width="87" x="163.221" y="21.0548">
                  <rect fill="white" height="51" width="87" x="163.221" y="21.0548" />
                  <path d={svgPaths.p3b5cd800} />
                </mask>
                <path d={svgPaths.p3b5cd800} fill="var(--fill-0, #FAF7F5)" />
                <path d={svgPaths.p3b5cd800} mask="url(#path-3-outside-3_5_1158)" stroke="var(--stroke-0, #A04842)" />
              </g>
              <g id="2026">
                <path d={svgPaths.p4c7aa00} fill="var(--fill-0, #A04842)" id="Vector" stroke="var(--stroke-0, #A04842)" strokeWidth="0.5" />
                <path d={svgPaths.p295e7800} fill="var(--fill-0, #A04842)" id="Vector_2" stroke="var(--stroke-0, #A04842)" strokeWidth="0.5" />
                <path d={svgPaths.p3db11a00} fill="var(--fill-0, #A04842)" id="Vector_3" stroke="var(--stroke-0, #A04842)" strokeWidth="0.5" />
                <path d={svgPaths.p1f949500} fill="var(--fill-0, #A04842)" id="Vector_4" stroke="var(--stroke-0, #A04842)" strokeWidth="0.5" />
              </g>
            </g>
            <line id="Line 1" stroke="var(--stroke-0, #A04842)" strokeWidth="0.5" x1="387" x2="7" y1="85.25" y2="85.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TopText() {
  return (
    <div className="w-full max-w-[217px] mb-2 shrink-0" data-name="연하장을 전달해 줄 말을 만드는 중 . . .">
      <svg className="block w-full h-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 217 13">
        <g id="text">
          <path d={svgPaths.p143b1b00} fill="var(--fill-0, #A04842)" id="Vector" />
          <path d={svgPaths.p1b285400} fill="var(--fill-0, #A04842)" id="Vector_2" />
          <path d={svgPaths.p3f662d00} fill="var(--fill-0, #A04842)" id="Vector_3" />
          <path d={svgPaths.p174d9d00} fill="var(--fill-0, #A04842)" id="Vector_4" />
          <path d={svgPaths.p1cde4380} fill="var(--fill-0, #A04842)" id="Vector_5" />
          <path d={svgPaths.p6c9db80} fill="var(--fill-0, #A04842)" id="Vector_6" />
          <path d={svgPaths.pa9b5580} fill="var(--fill-0, #A04842)" id="Vector_7" />
          <path d={svgPaths.p2a2ef7c0} fill="var(--fill-0, #A04842)" id="Vector_8" />
          <path d={svgPaths.p1c114930} fill="var(--fill-0, #A04842)" id="Vector_9" />
          <path d={svgPaths.p1f4d1c00} fill="var(--fill-0, #A04842)" id="Vector_10" />
          <path d={svgPaths.p13e55f00} fill="var(--fill-0, #A04842)" id="Vector_11" />
          <path d={svgPaths.p1b456420} fill="var(--fill-0, #A04842)" id="Vector_12" />
          <path d={svgPaths.p24e23f00} fill="var(--fill-0, #A04842)" id="Vector_13" />
          <path d={svgPaths.p2f9a9000} fill="var(--fill-0, #A04842)" id="Vector_14" />
          <path d={svgPaths.p3ec99400} fill="var(--fill-0, #A04842)" id="Vector_15" />
          <path d={svgPaths.pa8fbb00} fill="var(--fill-0, #A04842)" id="Vector_16" />
          <path d={svgPaths.p13505600} fill="var(--fill-0, #A04842)" id="Vector_17" />
        </g>
      </svg>
    </div>
  );
}

export function HorseCreate4({ selectedHorse, horseName, onComplete }: HorseCreate4Props) {
  const [selectedColor, setSelectedColor] = useState<string>('#A04842');

  const horseShapePaths: { [key: number]: string } = {
    1: horseSvgPaths.p2e1812f0,
    2: horseSvgPaths.p288b6300,
    3: horseSvgPaths.p357e2d80,
  };

  const colorPalette = [
    ['#a04842', '#c94242', '#ea8181', '#ffc7c7', '#ffe8e8'],
    ['#2744c5', '#4762da', '#798eeb', '#b8c5ff', '#e2e7ff'],
    ['#823d0f', '#a55e2e', '#da986d', '#e5d5c9', '#000000'],
  ];

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleNext = () => {
    onComplete(selectedColor);
  };

  return (
    <div className="bg-[#faf7f5] flex flex-col h-full w-full overflow-hidden" data-name="말 만들기 4">
      {/* Header */}
      <Nav />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-start px-4 py-4 overflow-auto min-h-0">
        <TopText />
        
        {/* White card container - 비율 유지 */}
        <div className="relative bg-white w-[230px] max-w-[90vw] shrink-0" style={{ aspectRatio: '230/577' }}>
          {/* STEP 3. */}
          <p className="absolute left-[50%] translate-x-[-50%] top-[10.4%] font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[1.5] text-[#a04842] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'GRAD' 0, 'ROND' 0" }}>
            STEP 3.
          </p>
          
          {/* (말이름)의 색깔을 골라주세요 */}
          <div className="absolute left-[50%] translate-x-[-50%] top-[16.6%] font-['Google_Sans_Flex:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] text-[#a04842] text-[14px]" style={{ fontVariationSettings: "'wdth' 100, 'GRAD' 0, 'ROND' 0" }}>
            <p className="mb-0 text-nowrap whitespace-pre text-center">({horseName})의 색깔을</p>
            <p className="text-nowrap whitespace-pre text-center">골라주세요.</p>
          </div>
          
          {/* Horse illustration */}
          <div className="absolute left-[50%] translate-x-[-50%] top-[32%] w-[64.35%]" data-name="running horse" style={{ aspectRatio: '1031.7/595.261' }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 85">
              <g filter="url(#filter0_i_5_1170)" id="running horse">
                <path d={horseShapePaths[selectedHorse]} fill={selectedColor} />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="87" id="filter0_i_5_1170" width="151" x="0" y="-2">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="3" dy="-2" />
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.27772 0 0 0 0 0.383282 0 0 0 0 0.853516 0 0 0 0.5 0" />
                  <feBlend in2="shape" mode="color" result="effect1_innerShadow_5_1170" />
                </filter>
              </defs>
            </svg>
          </div>
          
          {/* Color picker */}
          <div className="absolute left-[50%] translate-x-[-50%] top-[67%] w-[148px] h-[77px]" data-name="color picker">
            {colorPalette.map((row, rowIndex) => (
              row.map((color, colIndex) => {
                const leftPositions = [0, 32, 64, 97, 129];
                const topPositions = [0, 29, 58];
                const isLastInRow = colIndex === 4;
                
                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`absolute cursor-pointer transition-transform hover:scale-110 ${
                      selectedColor === color ? 'ring-2 ring-[#a04842] ring-offset-2' : ''
                    }`}
                    style={{
                      backgroundColor: color,
                      left: `${leftPositions[colIndex]}px`,
                      top: `${topPositions[rowIndex]}px`,
                      width: isLastInRow ? '19px' : '19px',
                      height: '19px',
                    }}
                    onClick={() => handleColorSelect(color)}
                  />
                );
              })
            ))}
          </div>
        </div>

        {/* Next button */}
        {selectedColor && (
          <button
            onClick={handleNext}
            className="mt-6 mb-4 shrink-0 cursor-pointer"
            data-name="→"
          >
            <p className="[text-underline-position:from-font] decoration-solid font-['Sandoll_Gawain:01_Lt',sans-serif] leading-[normal] not-italic text-[#a04842] text-[24px] text-nowrap underline whitespace-pre">→</p>
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="shrink-0">
        <CountdownTimer />
      </div>
    </div>
  );
}
