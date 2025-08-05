import sampleImage1 from '../picture/sample1.jpg';
import sampleImage2 from '../picture/sample2.jpg';
import sampleImage3 from '../picture/sample3.jpg';
import sampleImage4 from '../picture/sample4.jpg';
import picture2_1 from '../picture/pic2_1.png';
import picture2_2 from '../picture/pic2_2.png';

import icon from '../picture/testicon.jpg'


export interface Work {
    id: string;
    title: string;
    projectType: string;
    developmentTime: string; 
    imageUrl: string[]; // 画像URLが必須でない場合   
    tags: string[];
    role?: string; // ここをオプションにする
    descriptionEasy?:string;
    description: string;   
    url?: string; // 追加で提案したURLもオプションに
    githuburl?:string;
    challenges?: string; // 課題と解決策もオプションに
    learnings?: string; // 学びもオプションに
    
}

// 作品データ
const worksData: Work[] = [

  
  {
    id: '1',
    title: 'Implementation of 2048',
    projectType:"授業課題",
    developmentTime:"2025.2.25〜2025.3.24",
    imageUrl: [sampleImage1], // インポートした変数を指定
    tags: ['Python','AI'],
    role:"モンテカルロ木探索アルゴリズム部分の実装、パラメータの調整、レポートの考察記入",
    descriptionEasy:"交換留学先の授業課題（グループワーク）で強化学習を利用した全自動2048を作成しました。",
    description:"交換留学先の授業課題で作成した全自動2048。モンテカルロ木探索アルゴリズムを用いたシミュレーションから次の最適手を計算する。モンテカルロ法のコード実装部分と、パラメータの調整を担当した。"
  },

  {
    id: '2',
    title: 'Markdown memocho',
    developmentTime: '2024.06.02〜',
    projectType: '個人開発',
    imageUrl: [picture2_1, picture2_2],
    tags: ['React', 'Typescript', 'Firebase','Node.js'],
    descriptionEasy:"練習用に作成した、マークダウン記法のメモサイト。",
    description: "数年ぶりにweb開発を再開した際に練習用に作成した、マークダウン記法で記入するメモ帳webサイト。ReactMarkdownを適用している。また、firebaseを初めて利用した。",
    url:'https://memo-582m.vercel.app/',
    githuburl:"https://github.com/Taiamane/memo",
  },

  {
    id: '3',
    title: 'Amane-portal',
    developmentTime: '2024.07.07〜',
    projectType: '個人開発',
    imageUrl: [icon],
    tags: ['React', 'Typescript','Node.js'],
    descriptionEasy:"自己紹介用のサイト。",
    description: "自己紹介用に作成した弊サイト。画面幅に合わせたレスポンシブデザインや、擬似要素を利用したhover時のアンダーラインなど、前作markdown-memoで思い出した内容を元にした工夫をしている。",
    githuburl:"https://github.com/Taiamane/self-intro"      
  },
];

export default worksData;