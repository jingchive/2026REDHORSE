// Kakao SDK TypeScript type definitions
// Reference: https://thefirstperson.tistory.com/183

interface KakaoStatic {
  init(appKey: string): void;
  isInitialized(): boolean;
  cleanup(): void;
  Share: KakaoShare;
}

interface KakaoShare {
  sendDefault(settings: KakaoShareSettings): void;
  sendCustom(settings: KakaoCustomSettings): void;
  sendScrap(settings: KakaoScrapSettings): void;
}

interface KakaoShareSettings {
  objectType: 'feed' | 'list' | 'location' | 'commerce' | 'text';
  content: KakaoContent;
  buttons?: KakaoButton[];
  installTalk?: boolean;
  callback?: () => void;
  serverCallbackArgs?: Record<string, string>;
}

interface KakaoCustomSettings {
  templateId: number;
  templateArgs?: Record<string, string>;
  installTalk?: boolean;
  callback?: () => void;
  serverCallbackArgs?: Record<string, string>;
}

interface KakaoScrapSettings {
  requestUrl: string;
  templateId?: number;
  templateArgs?: Record<string, string>;
  installTalk?: boolean;
  callback?: () => void;
  serverCallbackArgs?: Record<string, string>;
}

interface KakaoContent {
  title: string;
  description?: string;
  imageUrl: string;
  imageWidth?: number;
  imageHeight?: number;
  link: KakaoLink;
}

interface KakaoLink {
  mobileWebUrl?: string;
  webUrl?: string;
  androidExecutionParams?: string;
  iosExecutionParams?: string;
}

interface KakaoButton {
  title: string;
  link: KakaoLink;
}

declare global {
  interface Window {
    Kakao: KakaoStatic;
  }
}

export {};
