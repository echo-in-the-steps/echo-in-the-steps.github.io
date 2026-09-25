// 这是主要填写文件。空字符串会显示占位，不会加载不存在的资源。
// 本地素材路径相对于 public/，不要写 public/，也不要在开头加 /。

export interface VideoAsset {
  src: string;
  poster: string;
  label: string;
  caption: string;
  captionsSrc?: string;
  captionsLanguage?: string;
  captionsLabel?: string;
}

export interface FigureAsset {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export const site = {
  language: 'en',
  description: 'Echo in the Steps: Learning Perceptive Humanoid Parkour with Gated Memory.',
};

export const paper: {
  projectName: string;
  title: string;
  titleBreakBefore: string;
  acceptance: string;
  awards: string[];
  authors: { name: string; url: string; affiliationIds: string[]; contribution?: string; breakAfter?: boolean }[];
  affiliations: { id: string; name: string }[];
  authorNotes: string[];
  abstract: string[];
  abstractHighlights: string[];
  bibtex: string;
} = {
  projectName: 'Echo in the Steps',
  title: 'Echo in the Steps: Learning Perceptive Humanoid Parkour with Gated Memory',
  titleBreakBefore: 'Learning', // 可选Learning：填写词语可在该词前换行，例如 'Learning'；留空则不强制换行
  acceptance: 'CoRL 2026',
  awards: [], // 可选：只填写已确认的奖项
  authors: [
    { name: 'Ming-Ju Lee', url: '', affiliationIds: ['1'], contribution: '*' },
    { name: 'Zizhuo Wang', url: '', affiliationIds: ['1'], contribution: '*' },
    { name: 'Shaoting Zhu', url: 'https://shaotingzhu.github.io/', affiliationIds: ['1'] },
    { name: 'Haozhe Lou', url: 'https://haozhelou.com/', affiliationIds: ['1'] },
    { name: 'Hang Zhao', url: 'https://hangzhaomit.github.io/', affiliationIds: ['1'], contribution: '†' },
    { name: 'Yiming Li', url: 'https://yimingli-page.github.io/', affiliationIds: ['1'], contribution: '†' },
  ],
  affiliations: [
    { id: '1', name: 'Tsinghua University' },
  ],
  authorNotes: ['* Equal contribution.', '† Corresponding authors.'],
  abstract: [
    'While recent advances in perceptive locomotion have enabled humanoid robots to traverse structured terrains, agile parkour in highly discontinuous environments remains an open challenge. In particular, crossing sparse footholds and narrow support regions requires precise foothold selection, effective use of visual observations, and consistent alternating foot placement during fast transitions. In this paper, we present a perceptive humanoid parkour framework that enables stable traversal across terrains with limited foothold availability using only onboard depth observations. The framework features a saliency-guided temporal perception module that combines a saliency prior with gated memory. It retains informative depth features across frames, enabling reliable foot placement from partial observations. By introducing an alternation loss, our symmetry regularization encourages alternating gait patterns and improves traversal robustness. Extensive experiments show that our method significantly improves success rate and foothold accuracy on challenging terrains in both simulation and the real world.',
  ],
  abstractHighlights: [], // 可选：写入摘要中需要加粗斜体的精确词组
  bibtex: `@misc{lee2026echostepslearningperceptive,
  title         = {Echo in the Steps: Learning Perceptive Humanoid Parkour with Gated Memory},
  author        = {Ming-Ju Lee and Zizhuo Wang and Shaoting Zhu and Haozhe Lou and Hang Zhao and Yiming Li},
  year          = {2026},
  eprint        = {2609.28960},
  archivePrefix = {arXiv},
  primaryClass  = {cs.RO},
  url           = {https://arxiv.org/abs/2609.28960}
}`,
};

export const resources: { label: string; icon: 'paper' | 'arxiv' | 'code' | 'video'; href: string }[] = [
  { label: 'Paper', icon: 'paper', href: 'paper/2609.28960v1.pdf' },
  { label: 'arXiv', icon: 'arxiv', href: 'https://arxiv.org/abs/2609.28960' },
  { label: 'Code', icon: 'code', href: '' },
];

export const hero: VideoAsset = {
  src: 'videos/hero/echo-hero.mp4',
  poster: 'images/posters/echo-hero.jpg',
  label: 'Echo in the Steps hero video',
  caption: '',
};

export const fullVideo: VideoAsset = {
  src: 'videos/full/full-video.mp4',
  poster: 'images/posters/full-video.jpg',
  label: 'Echo in the Steps full video',
  caption: '',
  captionsSrc: '', // 可选：WebVTT 字幕，例如 captions/overview-en.vtt
  captionsLanguage: 'en',
  captionsLabel: 'English',
};

export const method: FigureAsset = {
  src: 'images/method/echo-overview.png',
  alt: 'Overview of the Echo in the Steps framework, including depth encoding, saliency-guided temporal perception with gated memory, symmetry regularization, the control policy, and deployment on a humanoid robot.',
  caption: '',
  width: 2622,
  height: 1292,
};

export const experimentGroups: { id: string; title: string; description: string; featuredFirst?: boolean; videos: VideoAsset[] }[] = [
  {
    id: 'representative-parkour-trials',
    title: 'Representative Parkour Trials',
    description: 'Agile traversal across challenging terrains with sparse footholds and narrow support regions.',
    videos: [
      { src: 'videos/experiments/one-shot/box.mp4', poster: 'images/posters/one-shot-box.jpg', label: 'One-shot box traversal', caption: 'Box' },
      { src: 'videos/experiments/one-shot/stake.mp4', poster: 'images/posters/one-shot-stake.jpg', label: 'One-shot stake traversal', caption: 'Stake' },
      { src: 'videos/experiments/one-shot/trapezoid.mp4', poster: 'images/posters/one-shot-trapezoid.jpg', label: 'One-shot trapezoid traversal', caption: 'Trapezoid' },
      { src: 'videos/experiments/one-shot/wedge.mp4', poster: 'images/posters/one-shot-wedge.jpg', label: 'One-shot wedge traversal', caption: 'Wedge' },
      { src: 'videos/experiments/one-shot/beam-1.mp4', poster: 'images/posters/one-shot-beam-1.jpg', label: 'One-shot narrow beam trial 1', caption: 'Narrow beam I' },
      { src: 'videos/experiments/one-shot/beam-2.mp4', poster: 'images/posters/one-shot-beam-2.jpg', label: 'One-shot narrow beam trial 2', caption: 'Narrow beam II' },
    ],
  },
  {
    id: 'repeated-trial-evaluation',
    title: 'Repeated-Trial Evaluation',
    description: 'Performance across 10 repeated trials on each terrain.',
    featuredFirst: true,
    videos: [
      { src: 'videos/experiments/long-horizon/box.mp4', poster: 'images/posters/long-horizon-box.jpg', label: 'Long-horizon box traversal', caption: 'Box' },
      { src: 'videos/experiments/long-horizon/beam.mp4', poster: 'images/posters/long-horizon-beam.jpg', label: 'Long-horizon narrow beam traversal', caption: 'Narrow beam' },
      { src: 'videos/experiments/long-horizon/stake.mp4', poster: 'images/posters/long-horizon-stake.jpg', label: 'Long-horizon stake traversal', caption: 'Stake' },
      { src: 'videos/experiments/long-horizon/trapezoid.mp4', poster: 'images/posters/long-horizon-trapezoid.jpg', label: 'Long-horizon trapezoid traversal', caption: 'Trapezoid' },
      { src: 'videos/experiments/long-horizon/wedge.mp4', poster: 'images/posters/long-horizon-wedge.jpg', label: 'Long-horizon wedge traversal', caption: 'Wedge' },
    ],
  },
];

export const results: FigureAsset = {
  src: '', // TODO: 例如 images/results/key-results.webp
  alt: '',
  caption: '',
  width: 1600,
  height: 900,
};
