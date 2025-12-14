import { useState, useRef, useEffect } from 'react';
import svgPaths from "../imports/svg-95p6kcpsps";
import horseSvgPaths from "../imports/svg-on6a90b19c";
import textSvgPaths from "../imports/svg-9u9d0rww0v";
import { CountdownTimer } from './CountdownTimer';

interface MessageEditProps {
  selectedHorse: number;
  selectedColor: string;
  horseName: string;
  initialMessage: string;
  onCancel: () => void;
  onComplete: (message: string) => void;
}

function Nav() {
  return (
    <div className="absolute h-[85px] left-0 top-0 w-[393px]" data-name="nav">
      <div className="absolute bottom-[-0.59%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 86">
          <g id="nav">
            <g id="Group 1">
              <g id="image 4 (Traced)">
                <mask fill="black" height="51" id="path-1-outside-1_8_3137" maskUnits="userSpaceOnUse" width="89" x="142.316" y="21">
                  <rect fill="white" height="51" width="89" x="142.316" y="21" />
                  <path clipRule="evenodd" d={svgPaths.p8ba4f00} fillRule="evenodd" />
                </mask>
                <path clipRule="evenodd" d={svgPaths.p8ba4f00} fill="var(--fill-0, #4762DA)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p8ba4f00} fillRule="evenodd" mask="url(#path-1-outside-1_8_3137)" stroke="var(--stroke-0, #4762DA)" />
              </g>
              <g id="running horse3">
                <mask fill="black" height="51" id="path-2-outside-2_8_3137" maskUnits="userSpaceOnUse" width="83" x="157.053" y="21">
                  <rect fill="white" height="51" width="83" x="157.053" y="21" />
                  <path d={svgPaths.p38ebf900} />
                </mask>
                <path d={svgPaths.p38ebf900} fill="var(--fill-0, #A04842)" />
                <path d={svgPaths.p38ebf900} mask="url(#path-2-outside-2_8_3137)" stroke="var(--stroke-0, #F5F5F5)" strokeWidth="0.6" />
              </g>
              <g id="running horse2">
                <mask fill="black" height="51" id="path-3-outside-3_8_3137" maskUnits="userSpaceOnUse" width="87" x="163.221" y="21.0548">
                  <rect fill="white" height="51" width="87" x="163.221" y="21.0548" />
                  <path d={svgPaths.p3b5cd800} />
                </mask>
                <path d={svgPaths.p3b5cd800} fill="var(--fill-0, #FAF7F5)" />
                <path d={svgPaths.p3b5cd800} mask="url(#path-3-outside-3_8_3137)" stroke="var(--stroke-0, #A04842)" />
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

function Timer() {
  return (
    <div className="absolute font-['Google_Sans_Flex:Light',sans-serif] font-light h-[32px] leading-[1.6] left-[24px] not-italic text-[20px] text-nowrap top-[805px] w-[328px] whitespace-pre" data-name="TIMER">
      <p className="absolute bottom-0 left-0 right-[46.34%] text-[#e5d5c9] top-0" style={{ fontVariationSettings: "'wdth' 100, 'GRAD' 0, 'ROND' 0" }}>
        2025.12.04 19:50:00
      </p>
      <p className="[text-underline-position:from-font] absolute bottom-0 decoration-solid left-[60.98%] right-0 text-[#a04842] top-0 underline" style={{ fontVariationSettings: "'wdth' 100, 'GRAD' 0, 'ROND' 0" }}>
        D - 26, 4:10:00
      </p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute inset-[16.5%_36.83%_23.64%_0.27%]" data-name="연하장을 전달해 줄 말을 만드는 중 . . .">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 217 13">
        <g id="ì°íì¥ì ì ë¬í´ ì¤ ë§ì ë§ëë ì¤ . . .">
          <path d={textSvgPaths.p143b1b00} fill="var(--fill-0, #A04842)" id="Vector" />
          <path d={textSvgPaths.p1b285400} fill="var(--fill-0, #A04842)" id="Vector_2" />
          <path d={textSvgPaths.p3f662d00} fill="var(--fill-0, #A04842)" id="Vector_3" />
          <path d={textSvgPaths.p174d9d00} fill="var(--fill-0, #A04842)" id="Vector_4" />
          <path d={textSvgPaths.p1cde4380} fill="var(--fill-0, #A04842)" id="Vector_5" />
          <path d={textSvgPaths.p6c9db80} fill="var(--fill-0, #A04842)" id="Vector_6" />
          <path d={textSvgPaths.pa9b5580} fill="var(--fill-0, #A04842)" id="Vector_7" />
          <path d={textSvgPaths.p2a2ef7c0} fill="var(--fill-0, #A04842)" id="Vector_8" />
          <path d={textSvgPaths.p1c114930} fill="var(--fill-0, #A04842)" id="Vector_9" />
          <path d={textSvgPaths.p1f4d1c00} fill="var(--fill-0, #A04842)" id="Vector_10" />
          <path d={textSvgPaths.p13e55f00} fill="var(--fill-0, #A04842)" id="Vector_11" />
          <path d={textSvgPaths.p1b456420} fill="var(--fill-0, #A04842)" id="Vector_12" />
          <path d={textSvgPaths.p24e23f00} fill="var(--fill-0, #A04842)" id="Vector_13" />
          <path d={textSvgPaths.p2f9a9000} fill="var(--fill-0, #A04842)" id="Vector_14" />
          <path d={textSvgPaths.p3ec99400} fill="var(--fill-0, #A04842)" id="Vector_15" />
          <path d={textSvgPaths.pa8fbb00} fill="var(--fill-0, #A04842)" id="Vector_16" />
          <path d={textSvgPaths.p13505600} fill="var(--fill-0, #A04842)" id="Vector_17" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute inset-[16.5%_36.83%_23.64%_0.27%]" data-name="연하장을 전달해 줄 말을 만드는 중 . . .">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 217 13">
        <g id="ì°íì¥ì ì ë¬í´ ì¤ ë§ì ë§ëë ì¤ . . .">
          <path d={textSvgPaths.p143b1b00} fill="var(--fill-0, #A04842)" id="Vector" />
          <path d={textSvgPaths.p1b285400} fill="var(--fill-0, #A04842)" id="Vector_2" />
          <path d={textSvgPaths.p3f662d00} fill="var(--fill-0, #A04842)" id="Vector_3" />
          <path d={textSvgPaths.p174d9d00} fill="var(--fill-0, #A04842)" id="Vector_4" />
          <path d={textSvgPaths.p1cde4380} fill="var(--fill-0, #A04842)" id="Vector_5" />
          <path d={textSvgPaths.p6c9db80} fill="var(--fill-0, #A04842)" id="Vector_6" />
          <path d={textSvgPaths.pa9b5580} fill="var(--fill-0, #A04842)" id="Vector_7" />
          <path d={textSvgPaths.p2a2ef7c0} fill="var(--fill-0, #A04842)" id="Vector_8" />
          <path d={textSvgPaths.p1c114930} fill="var(--fill-0, #A04842)" id="Vector_9" />
          <path d={textSvgPaths.p1f4d1c00} fill="var(--fill-0, #A04842)" id="Vector_10" />
          <path d={textSvgPaths.p13e55f00} fill="var(--fill-0, #A04842)" id="Vector_11" />
          <path d={textSvgPaths.p1b456420} fill="var(--fill-0, #A04842)" id="Vector_12" />
          <path d={textSvgPaths.p24e23f00} fill="var(--fill-0, #A04842)" id="Vector_13" />
          <path d={textSvgPaths.p2f9a9000} fill="var(--fill-0, #A04842)" id="Vector_14" />
          <path d={textSvgPaths.p3ec99400} fill="var(--fill-0, #A04842)" id="Vector_15" />
          <path d={textSvgPaths.pa8fbb00} fill="var(--fill-0, #A04842)" id="Vector_16" />
          <path d={textSvgPaths.p13505600} fill="var(--fill-0, #A04842)" id="Vector_17" />
        </g>
      </svg>
    </div>
  );
}

export function MessageEdit({ selectedHorse, selectedColor, horseName, initialMessage, onCancel, onComplete }: MessageEditProps) {
  const [message, setMessage] = useState(initialMessage);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const horseShapePaths: { [key: number]: string } = {
    1: horseSvgPaths.p2e1812f0,
    2: horseSvgPaths.p288b6300,
    3: horseSvgPaths.p357e2d80,
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 200) {
      setMessage(value);
    }
  };

  const handleComplete = () => {
    onComplete(message);
  };

  return (
    <div className="bg-[#FAF7F5] relative h-full w-full flex flex-col" data-name="연하장 완성 2">
      {/* Background elements - behind blur */}
      <Nav />
      <div className="absolute h-[21px] left-[24px] top-[100px] w-[345px] z-0" data-name="message edit title">
        <Component2 />
      </div>
      
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] z-5" />

      {/* Cancel and Complete buttons - topmost layer */}
      <div className="absolute left-[24px] top-[22px] w-[345px] flex justify-between z-30">
        <button
          onClick={onCancel}
          className="font-['Google_Sans_Flex:Light',sans-serif] font-light text-[#a04842] text-[20px] cursor-pointer"
          style={{ fontVariationSettings: "'wdth' 100, 'GRAD' 0, 'ROND' 0" }}
        >
          취소
        </button>
        <button
          onClick={handleComplete}
          className="font-['Google_Sans_Flex:Light',sans-serif] font-light text-[#a04842] text-[20px] cursor-pointer"
          style={{ fontVariationSettings: "'wdth' 100, 'GRAD' 0, 'ROND' 0" }}
        >
          완료
        </button>
      </div>

      {/* Character count - topmost layer */}
      <div className="absolute left-[50%] translate-x-[-50%] top-[60px] z-30">
        <p className="font-['Google_Sans_Flex:Light',sans-serif] font-light text-[#a04842] text-[20px] text-center" style={{ fontVariationSettings: "'wdth' 100, 'GRAD' 0, 'ROND' 0" }}>
          {message.length} / 200
        </p>
      </div>

      <div className="flex-1 relative">
        {/* White card layer - centered with all contents inside */}
        <div className="absolute bg-white h-[577px] left-1/2 -translate-x-1/2 top-[156px] w-[230px] z-10">
          {/* 2026 - 카드 내부 상단 */}
          <div className="absolute left-[50%] translate-x-[-50%] top-[16px] w-[61px] h-[18px]" data-name="2026">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 18">
              <g id="2026">
                <path d={svgPaths.p38adac80} fill="var(--fill-0, #4B4B4B)" id="Vector" stroke="var(--stroke-0, #4B4B4B)" strokeWidth="0.3" />
                <path d={svgPaths.p1f1b9200} fill="var(--fill-0, #4B4B4B)" id="Vector_2" stroke="var(--stroke-0, #4B4B4B)" strokeWidth="0.3" />
                <path d={svgPaths.p111c8580} fill="var(--fill-0, #4B4B4B)" id="Vector_3" stroke="var(--stroke-0, #4B4B4B)" strokeWidth="0.3" />
                <path d={svgPaths.p2af20800} fill="var(--fill-0, #4B4B4B)" id="Vector_4" stroke="var(--stroke-0, #4B4B4B)" strokeWidth="0.3" />
              </g>
            </svg>
          </div>

          {/* Horse - 카드 내부 중상단 */}
          <div className="absolute left-[50%] translate-x-[-50%] top-[81px] w-[148px] aspect-[1031.7/595.261]" data-name="running horse2">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 85">
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

          {/* Edit message textarea - 카드 내부 중앙 */}
          <div className="absolute left-[28px] top-[223px] w-[174px] h-[250px]" data-name="edit message">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleMessageChange}
              maxLength={200}
              placeholder="메시지를 입력하세요..."
              className="w-full h-full font-['Google_Sans_Flex:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] text-[#4b4b4b] text-[14px] bg-transparent border-none resize-none focus:outline-none p-0"
              style={{ fontVariationSettings: "'wdth' 100, 'GRAD' 0, 'ROND' 0" }}
            />
          </div>

          {/* Happy New Year - 카드 내부 하단 */}
          <p className="absolute font-['Pinyon_Script:Regular',sans-serif] leading-[1.6] left-[50%] translate-x-[-50%] not-italic text-[#4b4b4b] text-[24px] text-nowrap bottom-[59px] whitespace-pre">Happy New Year</p>
        </div>
      </div>

      <CountdownTimer />
    </div>
  );
}