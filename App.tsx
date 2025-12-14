import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HorseCircle } from './components/HorseCircle';
import { CountdownTimer } from './components/CountdownTimer';
import { Header } from './components/Header';
import { Onboarding1 } from './components/Onboarding1';
import { Onboarding2 } from './components/Onboarding2';
import { Onboarding3 } from './components/Onboarding3';
import { HorseCreate1 } from './components/HorseCreate1';
import { HorseCreate3 } from './components/HorseCreate3';
import { HorseCreate4 } from './components/HorseCreate4';
import { CardComplete0 } from './components/CardComplete0';
import { CardComplete1 } from './components/CardComplete1';
import { MessageEdit } from './components/MessageEdit';
import { MessageComplete } from './components/MessageComplete';
import { ResultView } from './components/ResultView';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0); // 0: 온보딩1, 1: 온보딩2, 2: 온보딩3, 3: 메인화면, 4: 말만들기1, 5: 말만들기3, 6: 말만들기4, 7: 연하장완성0, 8: 연하장완성1, 9: 메시지편집, 10: 연하장완성3
  const [selectedHorse, setSelectedHorse] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('#A04842');
  const [horseName, setHorseName] = useState<string>('');
  const [cardMessage, setCardMessage] = useState<string>('2025년에도\n감사했습니다.\n2026년에는 더 행복하세요.//');
  const [isResultMode, setIsResultMode] = useState(false);
  const [resultData, setResultData] = useState<any>(null);

  // URL 파라미터 확인 및 result 모드 처리
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const cardId = urlParams.get('id');
    
    if (cardId) {
      // localStorage에서 카드 데이터 로드
      const storedData = localStorage.getItem(`card_${cardId}`);
      if (storedData) {
        try {
          const data = JSON.parse(storedData);
          setResultData(data);
          setIsResultMode(true);
          console.log('Loaded card data:', data);
        } catch (error) {
          console.error('Failed to parse card data:', error);
        }
      } else {
        console.log('Card not found for ID:', cardId);
      }
    }
  }, []);

  // Result 모드일 때 ResultView 표시
  if (isResultMode && resultData) {
    return (
      <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center">
        <div className="w-screen h-screen md:w-auto md:h-screen md:aspect-[393/852] overflow-hidden">
          <ResultView
            selectedHorse={resultData.selectedHorse}
            selectedColor={resultData.selectedColor}
            horseName={resultData.horseName}
            message={resultData.message}
          />
        </div>
      </div>
    );
  }

  // 1.5초마다 자동으로 다음 화면으로 전환 (온보딩 + 연하장완성0)
  useEffect(() => {
    if (currentScreen < 3 || currentScreen === 7) {
      const timer = setTimeout(() => {
        setCurrentScreen(currentScreen + 1);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleCreateHorse = () => {
    setCurrentScreen(4); // 말 만들기 1로 이동
  };

  const handleHorseSelect = (horseId: number) => {
    setSelectedHorse(horseId);
  };

  const handleNicknameComplete = (nickname: string) => {
    setHorseName(nickname);
    setCurrentScreen(6); // 말 만들기 4로 이동
  };

  const handleFinalComplete = (finalColor: string) => {
    setSelectedColor(finalColor);
    setCurrentScreen(7); // 연하장 완성 0로 이동
    console.log('Complete:', { selectedHorse, selectedColor: finalColor, horseName });
  };

  const handleEditMessage = () => {
    setCurrentScreen(9); // 메시지 편집 화면으로 이동
  };

  const handleMessageEditCancel = () => {
    setCurrentScreen(8); // 연하장 완성 1로 돌아가기
  };

  const handleMessageEditComplete = (message: string) => {
    setCardMessage(message);
    setCurrentScreen(10); // 연하장 완성 3로 이동
  };

  // 온보딩 화면들
  if (currentScreen === 0) {
    return (
      <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center">
        <div className="w-screen h-screen md:w-auto md:h-screen md:aspect-[393/852] overflow-hidden">
          <motion.div 
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Onboarding1 />
          </motion.div>
        </div>
      </div>
    );
  }

  if (currentScreen === 1) {
    return (
      <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center">
        <div className="w-screen h-screen md:w-auto md:h-screen md:aspect-[393/852] overflow-hidden">
          <motion.div 
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Onboarding2 />
          </motion.div>
        </div>
      </div>
    );
  }

  if (currentScreen === 2) {
    return (
      <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center">
        <div className="w-screen h-screen md:w-auto md:h-screen md:aspect-[393/852] overflow-hidden">
          <motion.div 
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Onboarding3 />
          </motion.div>
        </div>
      </div>
    );
  }

  // 말 만들기 1
  if (currentScreen === 4) {
    return (
      <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center">
        <div className="w-screen h-screen md:w-auto md:h-screen md:aspect-[393/852] overflow-hidden">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HorseCreate1
              onHorseSelect={handleHorseSelect}
              onNext={() => setCurrentScreen(5)}
              selectedHorse={selectedHorse}
            />
            <CountdownTimer />
          </motion.div>
        </div>
      </div>
    );
  }

  // 말 만들기 3 (별명 입력)
  if (currentScreen === 5 && selectedHorse !== null) {
    return (
      <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center">
        <div className="w-screen h-screen md:w-auto md:h-screen md:aspect-[393/852] overflow-hidden">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HorseCreate3
              selectedHorse={selectedHorse}
              selectedColor={1}
              onComplete={handleNicknameComplete}
            />
            <CountdownTimer />
          </motion.div>
        </div>
      </div>
    );
  }

  // 말 만들기 4 (색상 선택)
  if (currentScreen === 6 && selectedHorse !== null && horseName) {
    return (
      <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center">
        <div className="w-screen h-screen md:w-auto md:h-screen md:aspect-[393/852] overflow-hidden">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HorseCreate4
              selectedHorse={selectedHorse}
              horseName={horseName}
              onComplete={handleFinalComplete}
            />
            <CountdownTimer />
          </motion.div>
        </div>
      </div>
    );
  }

  // 연하장 완성 0 (카드 뒷면)
  if (currentScreen === 7) {
    return (
      <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center">
        <div className="w-screen h-screen md:w-auto md:h-screen md:aspect-[393/852] overflow-hidden">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CardComplete0 />
          </motion.div>
        </div>
      </div>
    );
  }

  // 연하장 완성 1 (완성된 카드)
  if (currentScreen === 8 && selectedHorse !== null && horseName) {
    return (
      <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center">
        <div className="w-screen h-screen md:w-auto md:h-screen md:aspect-[393/852] overflow-hidden">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CardComplete1
              selectedHorse={selectedHorse}
              selectedColor={selectedColor}
              horseName={horseName}
              onEditMessage={handleEditMessage}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  // 메시지 편집 화면
  if (currentScreen === 9 && selectedHorse !== null && horseName) {
    return (
      <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center">
        <div className="w-screen h-screen md:w-auto md:h-screen md:aspect-[393/852] overflow-hidden">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MessageEdit
              selectedHorse={selectedHorse}
              selectedColor={selectedColor}
              horseName={horseName}
              initialMessage={cardMessage}
              onCancel={handleMessageEditCancel}
              onComplete={handleMessageEditComplete}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  // 연하장 완성 3 (완성된 카드)
  if (currentScreen === 10 && selectedHorse !== null && horseName) {
    return (
      <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center">
        <div className="w-screen h-screen md:w-auto md:h-screen md:aspect-[393/852] overflow-hidden">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MessageComplete
              selectedHorse={selectedHorse}
              selectedColor={selectedColor}
              horseName={horseName}
              message={cardMessage}
              onEditMessage={handleEditMessage}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  // 메인 화면
  return (
    <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center">
      <div className="w-screen h-screen md:w-auto md:h-screen md:aspect-[393/852] overflow-hidden">
        <motion.div 
          className="min-h-full bg-[#FDF8F5] flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          
          <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
            <div className="relative flex flex-col items-center">
              <div className="relative">
                <HorseCircle />
                <h2 
                  onClick={handleCreateHorse}
                  className="text-[#E57373] mb-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ fontSize: '18px' }}
                >
                  내 말 그리기→
                </h2>
              </div>
              
              <p className="text-[#B8948F] text-center mt-[20px]" style={{ fontSize: '14px' }}>
                연하장을 전달해줄 말을<br />하나 골라보세요.
              </p>
            </div>
          </main>
          
          <CountdownTimer />
        </motion.div>
      </div>
    </div>
  );
}