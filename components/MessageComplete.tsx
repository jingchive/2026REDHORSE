import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-95p6kcpsps";
import completeSvgPaths from "../imports/svg-ui0et2zooy";
import horseSvgPaths from "../imports/svg-on6a90b19c";
import { CountdownTimer } from './CountdownTimer';
import { Link } from 'lucide-react';

interface MessageCompleteProps {
  selectedHorse: number;
  selectedColor: string;
  horseName: string;
  message: string;
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

export function MessageComplete({ selectedHorse, selectedColor, horseName, message, onEditMessage }: MessageCompleteProps) {
  const [copySuccess, setCopySuccess] = useState(false);
  const [cardId, setCardId] = useState<string>('');
  const [sdkLoaded, setSdkLoaded] = useState(false);

  const horseShapePaths: { [key: number]: string } = {
    1: horseSvgPaths.p2e1812f0,
    2: horseSvgPaths.p288b6300,
    3: horseSvgPaths.p357e2d80,
  };

  // 컴포넌트 마운트 시 고유 ID 생성 및 카카오 SDK 초기화
  useEffect(() => {
    // 고유 ID 생성 (현재 시간 기반 + 랜덤 문자열)
    const generateId = () => {
      const timestamp = Date.now().toString(36);
      const randomStr = Math.random().toString(36).substring(2, 7);
      return `${timestamp}${randomStr}`;
    };
    
    const newCardId = generateId();
    setCardId(newCardId);
    console.log('Generated card ID:', newCardId);

    // 연하장 데이터를 localStorage에 저장
    const cardData = {
      selectedHorse,
      selectedColor,
      horseName,
      message,
      createdAt: new Date().toISOString()
    };
    localStorage.setItem(`card_${newCardId}`, JSON.stringify(cardData));
    console.log('Card data saved to localStorage:', cardData);

    // 카카오 SDK 스크립트 로드 및 초기화
    const loadKakaoSDK = () => {
      // 이미 로드된 경우
      if (window.Kakao) {
        console.log('Kakao SDK already loaded');
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init('785cc33b3c9b83d3bf013fa54540e12d');
          console.log('Kakao SDK initialized');
        }
        setSdkLoaded(true);
        return;
      }

      // 스크립트 로드
      const script = document.createElement('script');
      script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.7/kakao.min.js';
      script.integrity = 'sha384-tJkjbtDbvoxO+diRuDtwRO9JXR7pjWnfjfRn5ePUpl7e7RJCxKCwwnfqUAdXh53p';
      script.crossOrigin = 'anonymous';
      script.async = true;
      
      script.onload = () => {
        console.log('Kakao SDK script loaded');
        if (window.Kakao && !window.Kakao.isInitialized()) {
          window.Kakao.init('785cc33b3c9b83d3bf013fa54540e12d');
          console.log('Kakao SDK initialized after load');
        }
        setSdkLoaded(true);
      };

      script.onerror = () => {
        console.error('Failed to load Kakao SDK');
      };
      
      document.head.appendChild(script);
    };

    loadKakaoSDK();
  }, [selectedHorse, selectedColor, horseName, message]);

  const handleCopyLink = async () => {
    const url = `https://happy2026-redhorse.figma.site/result?id=${cardId}`;
    
    try {
      // 최신 Clipboard API 시도
      await navigator.clipboard.writeText(url);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      // Fallback: 임시 textarea 사용
      try {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);
        
        if (successful) {
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 2000);
        } else {
          console.error('Failed to copy using fallback method');
        }
      } catch (fallbackErr) {
        console.error('Failed to copy:', fallbackErr);
      }
    }
  };

  const handleKakaoShare = () => {
    // Kakao SDK 로드 확인
    if (!window.Kakao) {
      alert('카카오톡 공유 기능을 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    // Kakao SDK 초기화 확인
    if (!window.Kakao.isInitialized()) {
      try {
        window.Kakao.init('785cc33b3c9b83d3bf013fa54540e12d');
        console.log('Kakao SDK initialized in share handler');
      } catch (error) {
        console.error('Failed to initialize Kakao SDK:', error);
        alert('카카오톡 초기화에 실패했습니다. 페이지를 새로고침해주세요.');
        return;
      }
    }

    try {
      console.log('Sending Kakao share with template ID: 126774, path:', `result?id=${cardId}`);
      
      // 커스텀 템플릿을 사용한 카카오톡 공유
      window.Kakao.Share.sendCustom({
        templateId: 126774,
        templateArgs: {
          'SR': `result?id=${cardId}`
        }
      });

      console.log('Kakao share sent successfully');
    } catch (error) {
      console.error('Kakao share error:', error);
      alert('카카오톡 공유에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="bg-[#FAF7F5] flex flex-col h-full w-full overflow-hidden" data-name="연하장 완성 3">
      {/* Header - 고정 크기 */}
      <Nav />

      {/* Main content area - 남은 공간 차지 */}
      <div className="flex-1 flex flex-col items-center justify-start px-4 py-4 overflow-auto min-h-0">
        {/* Completion message */}
        <div className="w-full max-w-[234.524px] mb-4 shrink-0" data-name="연하장이 완성되었어요! 마음을 전하고 싶은 사람에게 보내보세요.">
          <svg className="block w-full h-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 235 35">
            <g id="completion-message">
              <path d={completeSvgPaths.p1582af00} fill="var(--fill-0, #A04842)" id="Vector" />
              <path d={completeSvgPaths.p35a41800} fill="var(--fill-0, #A04842)" id="Vector_2" />
              <path d={completeSvgPaths.p2bf16180} fill="var(--fill-0, #A04842)" id="Vector_3" />
              <path d={completeSvgPaths.p1c97d600} fill="var(--fill-0, #A04842)" id="Vector_4" />
              <path d={completeSvgPaths.p3a064f00} fill="var(--fill-0, #A04842)" id="Vector_5" />
              <path d={completeSvgPaths.p2b67ee00} fill="var(--fill-0, #A04842)" id="Vector_6" />
              <path d={completeSvgPaths.p1f2da980} fill="var(--fill-0, #A04842)" id="Vector_7" />
              <path d={completeSvgPaths.p21e10ec0} fill="var(--fill-0, #A04842)" id="Vector_8" />
              <path d={completeSvgPaths.p26dc3600} fill="var(--fill-0, #A04842)" id="Vector_9" />
              <path d={completeSvgPaths.p2d2b1d00} fill="var(--fill-0, #A04842)" id="Vector_10" />
              <path d={completeSvgPaths.p2ae06f70} fill="var(--fill-0, #A04842)" id="Vector_11" />
              <path d={completeSvgPaths.p3e7b8300} fill="var(--fill-0, #A04842)" id="Vector_12" />
              <path d={completeSvgPaths.p9124400} fill="var(--fill-0, #A04842)" id="Vector_13" />
              <path d={completeSvgPaths.p234d6700} fill="var(--fill-0, #A04842)" id="Vector_14" />
              <path d={completeSvgPaths.p20344280} fill="var(--fill-0, #A04842)" id="Vector_15" />
              <path d={completeSvgPaths.p29086a00} fill="var(--fill-0, #A04842)" id="Vector_16" />
              <path d={completeSvgPaths.p2dd5ad00} fill="var(--fill-0, #A04842)" id="Vector_17" />
              <path d={completeSvgPaths.p1978c100} fill="var(--fill-0, #A04842)" id="Vector_18" />
              <path d={completeSvgPaths.p1bfd3900} fill="var(--fill-0, #A04842)" id="Vector_19" />
              <path d={completeSvgPaths.p409f300} fill="var(--fill-0, #A04842)" id="Vector_20" />
              <path d={completeSvgPaths.p36014fc0} fill="var(--fill-0, #A04842)" id="Vector_21" />
              <path d={completeSvgPaths.p3b3eba80} fill="var(--fill-0, #A04842)" id="Vector_22" />
              <path d={completeSvgPaths.pffd9000} fill="var(--fill-0, #A04842)" id="Vector_23" />
              <path d={completeSvgPaths.p57c7000} fill="var(--fill-0, #A04842)" id="Vector_24" />
              <path d={completeSvgPaths.p325d5cf2} fill="var(--fill-0, #A04842)" id="Vector_25" />
              <path d={completeSvgPaths.p3da413c0} fill="var(--fill-0, #A04842)" id="Vector_26" />
              <path d={completeSvgPaths.p20967100} fill="var(--fill-0, #A04842)" id="Vector_27" />
              <path d={completeSvgPaths.p3efb6600} fill="var(--fill-0, #A04842)" id="Vector_28" />
              <path d={completeSvgPaths.p32924480} fill="var(--fill-0, #A04842)" id="Vector_29" />
            </g>
          </svg>
        </div>

        {/* White card - 비율 유지하면서 크기 조정 (높이 90%로 축소) */}
        <div className="relative bg-white w-[207px] max-w-[90vw] shrink-0" style={{ aspectRatio: '230/577' }}>
          {/* 2026 */}
          <div className="absolute left-[50%] translate-x-[-50%] top-[2.77%] w-[26.52%]" style={{ aspectRatio: '61/18' }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 61 18">
              <g id="2026">
                <path d={completeSvgPaths.p38adac80} fill="var(--fill-0, #4B4B4B)" id="Vector" stroke="var(--stroke-0, #4B4B4B)" strokeWidth="0.3" />
                <path d={completeSvgPaths.p1f1b9200} fill="var(--fill-0, #4B4B4B)" id="Vector_2" stroke="var(--stroke-0, #4B4B4B)" strokeWidth="0.3" />
                <path d={completeSvgPaths.p111c8580} fill="var(--fill-0, #4B4B4B)" id="Vector_3" stroke="var(--stroke-0, #4B4B4B)" strokeWidth="0.3" />
                <path d={completeSvgPaths.p2af20800} fill="var(--fill-0, #4B4B4B)" id="Vector_4" stroke="var(--stroke-0, #4B4B4B)" strokeWidth="0.3" />
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
              {message}
            </div>
            
            {/* Blur overlay */}
            <div className="absolute inset-0 top-[-2%] backdrop-blur-[1.5px] backdrop-filter bg-[rgba(75,75,75,0.05)]" />
            
            {/* Edit button - centered */}
            <button
              onClick={onEditMessage}
              className="absolute bg-white h-[9.2%] w-[67.82%] cursor-pointer hover:bg-gray-50 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
            >
              <p className="[text-underline-position:from-font] absolute inset-0 flex items-center justify-center decoration-solid font-['Sandoll_Gawain:01_Lt',sans-serif] leading-[normal] not-italic text-[#a04842] text-[14px] text-center underline">
                메세지 편집하기→
              </p>
            </button>
          </div>

          {/* Happy New Year */}
          <p className="absolute font-['Pinyon_Script:Regular',sans-serif] leading-[1.6] left-[50%] translate-x-[-50%] text-[#4b4b4b] text-[24px] text-nowrap bottom-[10.23%] whitespace-pre">Happy New Year</p>
        </div>

        {/* Share buttons */}
        <div className="flex gap-[12px] mt-6 mb-4 shrink-0">
          {/* Link copy button */}
          <button
            onClick={handleCopyLink}
            className="bg-[#4b4b4b] rounded-[30px] size-[48px] flex items-center justify-center cursor-pointer hover:bg-[#3a3a3a] transition-colors relative"
            title="링크 복사"
          >
            <Link className="text-[#FAF7F5]" size={24} />
            {copySuccess && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                복사됨!
              </div>
            )}
          </button>

          {/* Kakao share button */}
          <button
            onClick={handleKakaoShare}
            className="bg-[#FEE500] rounded-[30px] size-[48px] flex items-center justify-center cursor-pointer hover:bg-[#f5dd00] transition-colors"
            title="카카오톡 공유"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3C6.477 3 2 6.477 2 10.75C2 13.447 3.823 15.783 6.485 17.12L5.455 20.803C5.385 21.043 5.638 21.24 5.853 21.113L10.248 18.43C10.826 18.477 11.41 18.5 12 18.5C17.523 18.5 22 15.023 22 10.75C22 6.477 17.523 3 12 3Z" fill="#3C1E1E"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Footer - 고정 크기 */}
      <div className="shrink-0">
        <CountdownTimer />
      </div>
    </div>
  );
}