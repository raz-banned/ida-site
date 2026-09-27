interface BaseSample {
  id: string;
  title: string;
  description: string;
  duration: string;
}

/** Аудиофайл: из папки public или по прямой ссылке */
interface AudioSample extends BaseSample {
  type: 'audio';
  src: string;
}

/** Видео со стороннего сервиса (YouTube, Vimeo и т.п.) через iframe */
interface VideoSample extends BaseSample {
  type: 'video';
  embedUrl: string;
}

export type Sample = AudioSample | VideoSample;

export const samples: Sample[] = [
  {
    id: 'breathing',
    type: 'audio',
    title: 'Дыхание и покой',
    description:
      'Короткая практика, чтобы остановиться и почувствовать себя. (Сейчас это тестовый звук.)',
    duration: '20 сек',
    src: '/audio/sample-meditation.mp3',
  },
];
