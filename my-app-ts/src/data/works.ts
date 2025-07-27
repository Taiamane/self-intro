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
    imageUrl?: string; // 画像URLが必須でない場合
    photos?: { src: string; alt: string; }[]; // 写真は配列で、中身も型定義
    role?: string; // ここをオプションにする
    url?: string; // 追加で提案したURLもオプションに
    technologiesUsed?: string[]; // 使用技術もオプションに
    challenges?: string; // 課題と解決策もオプションに
    learnings?: string; // 学びもオプションに
    
}

// 作品データ
const worksData: Work[] = [

  
  {
    id: '1',
    title: 'サンプル1',
    projectType:"ハッカソン",
    developmentTime:"1日",
    imageUrl: sampleImage1, // インポートした変数を指定
    tags: ['Web', 'React'],
    description:"厳島神社みたいな写真があると思うけど、ここに作ったものの簡易的な説明を書くよ"
  },
  {
    id: '2',
    title: 'サンプル2',
    imageUrl: sampleImage2,
    tags: ['Design'],
    description: "一旦幅の調整は置いとこう、これでも十分可読性はあるし",
    projectType: '',
    developmentTime: ''
  },
];

export default worksData;