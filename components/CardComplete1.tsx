import svgPaths from "../imports/svg-uzjjfpidm9";
import horseSvgPaths from "../imports/svg-on6a90b19c";
import { CountdownTimer } from './CountdownTimer';

interface CardComplete1Props {
  selectedHorse: number;
  selectedColor: string;
  horseName: string;
  onEditMessage: () => void;
}

function Nav() {
  return (
    <div className="h-[85px] w-full shrink-0" data-name="nav">
      <div className="relative h-full w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 86">
          <g id="nav">
            <g id="Group 1">
              <g id="image 4 (Traced)">
                <mask fill="black" height="51" id="path-1-outside-1_6_1453" maskUnits="userSpaceOnUse" width="89" x="142.316" y="21">
                  <rect fill="white" height="51" width="89" x="142.316" y="21" />
                  <path clipRule="evenodd" d={svgPaths.p8ba4f00} fillRule="evenodd" />
                </mask>
                <path clipRule="evenodd" d={svgPaths.p8ba4f00} fill="var(--fill-0, #4762DA)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p8ba4f00} fillRule="evenodd" mask="url(#path-1-outside-1_6_1453)" stroke="var(--stroke-0, #4762DA)" />
              </g>
              <g id="running horse3">
                <mask fill="black" height="51" id="path-2-outside-2_6_1453" maskUnits="userSpaceOnUse" width="83" x="157.053" y="21">
                  <rect fill="white" height="51" width="83" x="157.053" y="21" />
                  <path d={svgPaths.p38ebf900} />
                </mask>
                <path d={svgPaths.p38ebf900} fill="var(--fill-0, #A04842)" />
                <path d={svgPaths.p38ebf900} mask="url(#path-2-outside-2_6_1453)" stroke="var(--stroke-0, #F5F5F5)" strokeWidth="0.6" />
              </g>
              <g id="running horse2">
                <mask fill="black" height="51" id="path-3-outside-3_6_1453" maskUnits="userSpaceOnUse" width="87" x="163.221" y="21.0548">
                  <rect fill="white" height="51" width="87" x="163.221" y="21.0548" />
                  <path d={svgPaths.p3b5cd800} />
                </mask>
                <path d={svgPaths.p3b5cd800} fill="var(--fill-0, #FAF7F5)" />
                <path d={svgPaths.p3b5cd800} mask="url(#path-3-outside-3_6_1453)" stroke="var(--stroke-0, #A04842)" />
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

export function CardComplete1({ selectedHorse, selectedColor, horseName, onEditMessage }: CardComplete1Props) {
  const horseShapePaths: { [key: number]: string } = {
    1: horseSvgPaths.p2e1812f0,
    2: horseSvgPaths.p288b6300,
    3: horseSvgPaths.p357e2d80,
  };

  return (
    <div className="bg-[#FAF7F5] flex flex-col h-full w-full overflow-hidden" data-name="연하장 완성 1">
      {/* Header */}
      <Nav />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-start px-4 py-4 overflow-auto min-h-0">
        <TopText />
        
        {/* White card container - 비율 유지 */}
        <div className="relative bg-white w-[230px] max-w-[90vw] shrink-0" style={{ aspectRatio: '230/577' }}>
          {/* 2026 */}
          <div className="absolute left-[50%] translate-x-[-50%] top-[2.77%] w-[26.52%]" style={{ aspectRatio: '61/18' }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 61 18">
              <g id="2026">
                <path d={svgPaths.p38adac80} fill="var(--fill-0, #4B4B4B)" id="Vector" stroke="var(--stroke-0, #4B4B4B)" strokeWidth="0.3" />
                <path d={svgPaths.p1f1b9200} fill="var(--fill-0, #4B4B4B)" id="Vector_2" stroke="var(--stroke-0, #4B4B4B)" strokeWidth="0.3" />
                <path d={svgPaths.p111c8580} fill="var(--fill-0, #4B4B4B)" id="Vector_3" stroke="var(--stroke-0, #4B4B4B)" strokeWidth="0.3" />
                <path d={svgPaths.p2af20800} fill="var(--fill-0, #4B4B4B)" id="Vector_4" stroke="var(--stroke-0, #4B4B4B)" strokeWidth="0.3" />
              </g>
            </svg>
          </div>

          {/* Horse */}
          <div className="absolute left-[50%] translate-x-[-50%] top-[14.04%] w-[64.35%]" style={{ aspectRatio: '1031.7/595.261' }} data-name="running horse2">
            <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 148 85">
              <g filter="url(#filter0_i_5_1170)" id="running horse2">
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

          {/* Message area with blur overlay */}
          <div className="absolute left-[12.17%] top-[38.64%] w-[75.65%] h-[43.33%]" data-name="edit message">
            {/* Message text */}
            <div className="absolute inset-0 font-['Google_Sans_Flex:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] text-[#4b4b4b] text-[14px] whitespace-pre-wrap overflow-hidden" style={{ fontVariationSettings: "'wdth' 100, 'GRAD' 0, 'ROND' 0" }}>
              <p className="mb-0">2025년에도</p>
              <p className="mb-0">감사했습니다.</p>
              <p>2026년에는 더 행복하세요.//</p>
            </div>
            
            {/* Blur overlay */}
            <div className="absolute inset-0 backdrop-blur-[1.5px] backdrop-filter bg-[rgba(75,75,75,0.05)]" />
            
            {/* Edit button */}
            <button
              onClick={onEditMessage}
              className="absolute bg-white h-[9.2%] w-[67.82%] cursor-pointer hover:bg-gray-50 left-[50%] top-[22%] translate-x-[-50%] z-10"
            >
              <p className="[text-underline-position:from-font] absolute inset-0 flex items-center justify-center decoration-solid font-['Sandoll_Gawain:01_Lt',sans-serif] leading-[normal] not-italic text-[#a04842] text-[14px] text-center underline">
                메세지 편집하기→
              </p>
            </button>
          </div>

          {/* Happy New Year */}
          <p className="absolute font-['Pinyon_Script:Regular',sans-serif] leading-[1.6] left-[50%] translate-x-[-50%] text-[#4b4b4b] text-[24px] text-nowrap bottom-[10.23%] whitespace-pre">Happy New Year</p>
        </div>
      </div>

      {/* Footer */}
      <div className="shrink-0">
        <CountdownTimer />
      </div>
    </div>
  );
}
