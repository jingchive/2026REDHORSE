import svgPaths from "../imports/svg-4gznrg7j5x";

interface HorseCreate2Props {
  selectedHorse: number;
  onColorSelect: (colorId: number) => void;
  onNext: () => void;
  selectedColor: number | null;
}

function Nav() {
  return (
    <div className="absolute h-[85px] left-0 top-0 w-full bg-[#a04842]" data-name="nav" />
  );
}

export function HorseCreate2({ selectedHorse, onColorSelect, onNext, selectedColor }: HorseCreate2Props) {
  const horseShapePaths: { [key: number]: string } = {
    1: svgPaths.p9a8e80,
    2: svgPaths.p66b9880,
    3: svgPaths.p199a5280,
    4: svgPaths.p1b047800,
    5: svgPaths.p23a10500,
    6: svgPaths.pfc07680,
  };

  const colors = [
    { id: 1, fill: '#D98B8B', stroke: '#A04842' },
    { id: 2, fill: '#DB6C6C', stroke: '#A04842' },
    { id: 3, fill: '#D94D4D', stroke: '#A04842' },
    { id: 4, fill: '#C93A3A', stroke: '#942B2B' },
    { id: 5, fill: '#B92929', stroke: '#8A1F1F' },
    { id: 6, fill: '#A01818', stroke: '#751212' },
  ];

  return (
    <div className="bg-[#fdf8f5] relative min-h-screen" data-name="말 만들기 2">
      <Nav />
      
      <div className="absolute h-[12.704px] left-[61.98px] top-[131.11px] w-[114.746px]" data-name="말의 색을 골라주세요">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115 13">
          <g id="ë§ì ìì ê³¨ë¼ì£¼ì¸ì">
            <path d={svgPaths.p8f8dc80} fill="var(--fill-0, #A04842)" id="Vector" />
            <path d={svgPaths.p2ec13600} fill="var(--fill-0, #A04842)" id="Vector_2" />
            <path d={svgPaths.p15ba3380} fill="var(--fill-0, #A04842)" id="Vector_3" />
            <path d={svgPaths.p122500} fill="var(--fill-0, #A04842)" id="Vector_4" />
            <path d={svgPaths.p1f09f800} fill="var(--fill-0, #A04842)" id="Vector_5" />
            <path d={svgPaths.p11fe8e80} fill="var(--fill-0, #A04842)" id="Vector_6" />
            <path d={svgPaths.p33e11e00} fill="var(--fill-0, #A04842)" id="Vector_7" />
            <path d={svgPaths.p5f2d280} fill="var(--fill-0, #A04842)" id="Vector_8" />
            <path d={svgPaths.p1b3e7c00} fill="var(--fill-0, #A04842)" id="Vector_9" />
          </g>
        </svg>
      </div>

      <div className="absolute inset-[19.54%_15.52%_54.31%_15.78%]" data-name="horse">
        {colors.map((color, index) => {
          const row = Math.floor(index / 3);
          const col = index % 3;
          const top = row * 50;
          const left = col * 33.33;
          
          return (
            <div
              key={color.id}
              className={`absolute cursor-pointer transition-opacity ${selectedColor === color.id ? 'opacity-70' : 'opacity-100'}`}
              onClick={() => onColorSelect(color.id)}
              style={{
                inset: `${top}% ${66.67 - left}% ${50 - top}% ${left}%`
              }}
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 107">
                <g>
                  <path
                    d={horseShapePaths[selectedHorse]}
                    fill={color.fill}
                    stroke={color.stroke}
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
          );
        })}
      </div>

      <button
        onClick={onNext}
        disabled={selectedColor === null}
        className={`absolute left-[337.06px] top-[788px] cursor-pointer transition-opacity ${selectedColor === null ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
        data-name="→"
      >
        <div className="h-[31.055px] w-[33.065px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 32">
            <g id="â">
              <path d={svgPaths.p14a47b00} fill="var(--fill-0, #A04842)" id="Vector" />
            </g>
          </svg>
        </div>
      </button>
    </div>
  );
}