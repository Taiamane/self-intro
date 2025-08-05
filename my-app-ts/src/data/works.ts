import sampleImage1 from '../picture/sample1.jpg';
import sampleImage2 from '../picture/sample2.jpg';
import sampleImage3 from '../picture/sample3.jpg';
import sampleImage4 from '../picture/sample4.jpg';


export interface Work {
    id: string;
    title: string;
    projectType: string;
    developmentTime: string; 
    tags: string[];
    description: string;
    descriptionEasy?:string;
    imageUrl: string[]; // 画像URLが必須でない場合
    role?: string; // ここをオプションにする
    url?: string; // 追加で提案したURLもオプションに
    technologiesUsed?: string[]; 
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
    imageUrl: [sampleImage2, sampleImage3],
    tags: ['React', 'Typescript', 'Firebase','Node.js'],
    descriptionEasy:"ここに何を入力しようか",
    description: "練習用に作成した、マークダウン記法のメモサイト。",
    url:'https://memo-582m.vercel.app/',   
  },
];

export default worksData;