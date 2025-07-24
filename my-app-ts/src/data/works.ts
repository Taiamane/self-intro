import sampleImage1 from '../picture/sample1.jpg';
import sampleImage2 from '../picture/sample2.jpg';
import sampleImage3 from '../picture/sample3.jpg';
import sampleImage4 from '../picture/sample4.jpg';


// 作品データ
const worksData = [
  {
    id: 1,
    title: 'サンプル1',
    imageUrl: sampleImage1, // インポートした変数を指定
    tags: ['Web', 'React'],
    explanation:"厳島神社みたいな写真があると思うけど、ここに作ったものの簡易的な説明を書くよ"
  },
  {
    id: 2,
    title: 'サンプル2',
    imageUrl: sampleImage2,
    tags: ['Design'],
    explanation:"一旦幅の調整は置いとこう、これでも十分可読性はあるし"
  },
  {
    id: 3,
    title: 'サンプル3',
    imageUrl: sampleImage3,
    tags: ['Web', 'Next.js']
  },
  {
    id: 4,
    title: 'サンプル4',
    imageUrl: sampleImage4,
    tags: ['Python', 'C++']
  },
];

// 他ファイルで使えるように、worksDataをエクスポートする
export default worksData;