import { useState } from 'react';
import svgPaths from "../imports/svg-9sl0rvzred";
import horseSvgPaths from "../imports/svg-on6a90b19c";
import { CountdownTimer } from './CountdownTimer';

interface HorseCreate3Props {
  selectedHorse: number;
  selectedColor: number;
  onComplete: (nickname: string) => void;
}

function Nav() {
  return (
    <div className="h-[85px] w-full shrink-0" data-name="nav">
      <div className="relative h-full w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 86">
          <g id="horse nav">
            <g id="Group 1">
              <g id="image 4 (Traced)">
                <mask fill="black" height="51" id="path-1-outside-1_3_85" maskUnits="userSpaceOnUse" width="89" x="142.316" y="21">
                  <rect fill="white" height="51" width="89" x="142.316" y="21" />
                  <path clipRule="evenodd" d={svgPaths.p8ba4f00} fillRule="evenodd" />
                </mask>
                <path clipRule="evenodd" d={svgPaths.p8ba4f00} fill="var(--fill-0, #4762DA)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p8ba4f00} fillRule="evenodd" mask="url(#path-1-outside-1_3_85)" stroke="var(--stroke-0, #4762DA)" />
              </g>
              <g id="running horse3">
                <mask fill="black" height="51" id="path-2-outside-2_3_85" maskUnits="userSpaceOnUse" width="83" x="157.053" y="21">
                  <rect fill="white" height="51" width="83" x="157.053" y="21" />
                  <path d={svgPaths.p38ebf900} />
                </mask>
                <path d={svgPaths.p38ebf900} fill="var(--fill-0, #A04842)" />
                <path d={svgPaths.p38ebf900} mask="url(#path-2-outside-2_3_85)" stroke="var(--stroke-0, #F5F5F5)" strokeWidth="0.6" />
              </g>
              <g id="running horse2">
                <mask fill="black" height="51" id="path-3-outside-3_3_85" maskUnits="userSpaceOnUse" width="87" x="163.221" y="21.0548">
                  <rect fill="white" height="51" width="87" x="163.221" y="21.0548" />
                  <path d={svgPaths.p3b5cd800} />
                </mask>
                <path d={svgPaths.p3b5cd800} fill="var(--fill-0, #FAF7F5)" />
                <path d={svgPaths.p3b5cd800} mask="url(#path-3-outside-3_3_85)" stroke="var(--stroke-0, #A04842)" />
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

export function HorseCreate3({ selectedHorse, selectedColor, onComplete }: HorseCreate3Props) {
  const [nickname, setNickname] = useState('');

  const horseShapePaths: { [key: number]: string } = {
    1: horseSvgPaths.p2e1812f0,
    2: horseSvgPaths.p288b6300,
    3: horseSvgPaths.p357e2d80,
  };

  const colors = [
    { id: 1, fill: '#D98B8B', stroke: '#A04842' },
    { id: 2, fill: '#DB6C6C', stroke: '#A04842' },
    { id: 3, fill: '#D94D4D', stroke: '#A04842' },
    { id: 4, fill: '#C93A3A', stroke: '#942B2B' },
    { id: 5, fill: '#B92929', stroke: '#8A1F1F' },
    { id: 6, fill: '#A01818', stroke: '#751212' },
  ];

  const selectedColorData = selectedColor ? colors.find(c => c.id === selectedColor) || { fill: '#A04842', stroke: '#7A3636' } : { fill: '#A04842', stroke: '#7A3636' };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setNickname(value);
    }
  };

  const handleNext = () => {
    if (nickname.trim()) {
      onComplete(nickname);
    }
  };

  return (
    <div className="bg-[#faf7f5] flex flex-col h-full w-full overflow-hidden" data-name="말 만들기 3">
      {/* Header */}
      <Nav />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-start px-4 py-4 overflow-auto min-h-0">
        <TopText />
        
        {/* White card container - 비율 유지 */}
        <div className="relative bg-white w-[230px] max-w-[90vw] shrink-0" style={{ aspectRatio: '230/577' }}>
          {/* STEP 2. */}
          <p className="absolute left-[50%] translate-x-[-50%] top-[10.4%] font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[1.5] text-[#a04842] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'GRAD' 0, 'ROND' 0" }}>
            STEP 2.
          </p>
          
          {/* 말의 이름을 지어주세요 */}
          <p className="absolute left-[50%] translate-x-[-50%] top-[16.6%] font-['Google_Sans_Flex:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] text-[#a04842] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'GRAD' 0, 'ROND' 0" }}>
            말의 이름을 지어주세요.
          </p>
          
          {/* Horse illustration */}
          <div className="absolute left-[50%] translate-x-[-50%] top-[38%] w-[64.35%]" data-name="selected horse" style={{ aspectRatio: '1031.7/595.261' }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 85">
              <g>
                <mask fill="white" id="path-1-inside-1_3_765">
                  <path d={horseShapePaths[selectedHorse]} />
                </mask>
                <g filter="url(#filter0_i_3_765)">
                  <path d={horseShapePaths[selectedHorse]} fill={selectedColorData.fill} />
                </g>
                <path d={horseShapePaths[selectedHorse]} mask="url(#path-1-inside-1_3_765)" stroke={selectedColorData.stroke} strokeWidth="2" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="87" id="filter0_i_3_765" width="151" x="0" y="-2">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="3" dy="-2" />
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.27772 0 0 0 0 0.383282 0 0 0 0 0.853516 0 0 0 0.5 0" />
                  <feBlend in2="shape" mode="color" result="effect1_innerShadow_3_765" />
                </filter>
              </defs>
            </svg>
          </div>
          
          {/* Input field */}
          <div className="absolute left-[50%] translate-x-[-50%] top-[67%]">
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              maxLength={10}
              className="bg-white border-[#a04842] border-[0.3px] border-solid h-[34px] w-[148px] px-2 text-[#a04842] font-['Sandoll_Gawain:01_Lt',sans-serif] text-[20px] focus:outline-none"
              placeholder=""
            />
          </div>
        </div>

        {/* Next button */}
        {nickname.trim() && (
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
