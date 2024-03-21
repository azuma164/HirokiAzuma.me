import React from 'react';

export const JapanesePage = () => {
  const imagePath = 'https://github.com/azuma164/HirokiAzuma.me/blob/main/public/images/profile.jpg?raw=true';

  return (
    <div className='pt-8 sm:pt-16 mx-auto max-w-screen-lg'>
      <div className='my-4 px-4 flex justify-between'>
        <h1 className='text-2xl sm:text-3xl font-bold'>東大樹</h1>
      </div>
      <div className='my-4 px-4'>
        <div className='mt-2 sm:flex sm:items-center'>
          <img src={imagePath} alt='My Image' className='w-24 h-auto sm:w-32 sm:h-auto mb-4 sm:mb-0 sm:mr-4' />
          <p className='sm:w-3/4'>
            東京大学情報理工学系研究科電子情報学専攻修士1年の東大樹です. 相澤・山肩・松井研のメンバーで,
            画像処理の研究をしています.
            <br />
            機械学習, MLOps, インフラ構築, バックエンド開発に興味があります.
          </p>
        </div>
        <div className='mt-2 sm:w-3/4'>
          <a className='text-blue-500' href='https://github.com/azuma164'>
            Github
          </a>{' '}
          /{' '}
          <a className='text-blue-500' href='https://scholar.google.com/citations?user=7RyCGewAAAAJ&hl=en'>
            Google Scholar
          </a>{' '}
          /{' '}
          <a
            className='text-blue-500'
            href='https://github.com/azuma164/HirokiAzuma.me/blob/main/public/pdf/CV_en_HirokiAzuma.pdf?raw=true'
          >
            CV
          </a>
        </div>
      </div>
      <section className='my-4 px-4'>
        <h2 className='text-xl sm:text-2xl font-semibold'>Education</h2>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>
            <span className='font-bold'>東京大学大学院</span>
            <br />
            東京大学情報理工学系研究科電子情報学専攻, 松井研究室
            <br />
            2023.4 ~現在
          </li>
          <li className='mb-2'>
            <span className='font-bold'>スウェーデン王立工科大学</span>
            <br />
            KTH, The Division of Robotics, Perception and Learning (RPL)
            <br />
            2023.8 ~現在
          </li>
          <li className='mb-2'>
            <span className='font-bold'>東京大学</span>
            <br />
            東京大学電子情報工学科, 理科一類
            <br />
            2019.4 ~ 2023.3
          </li>
        </ul>
        <h2 className='text-2xl font-semibold'>Projects</h2>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>
            <span className='font-bold'>カメラ映像から自動構築される人流デジタルツインの開発</span>
            <br />
            <a className='text-red-400'>2023年度未踏アドバンスト事業採択 (契約金額: 14,400,000円)</a>
            <br />
            ソフトウェア開発のプロダクトマネージャー, 及び機械学習モデル構築のアドバイザを担当 (留学中の為,
            規定により正規メンバーにはなれず)
            <br />
            <a className='text-blue-500' href='https://www.ipa.go.jp/jinzai/mitou/advanced/2023/gaiyou_is-1.html'>
              詳細ページ
            </a>
          </li>
          <li className='mb-2'>
            <span className='font-bold'>
              港湾におけるコンテナ滞留量および遅れ時間のリアルタイム可視化・予測システムの構築
            </span>
            <br />
            NEDO Supply Chain Data Challenge (2023)
            <br />
            1次審査通過, 最終選考会にて受賞ならず
            <br />
            画像処理エンジニアとして, 機械学習モデルの構築を担当
            <br />
            <a className='text-blue-500' href='https://www.nedo.go.jp/news/press/AA5_101591.html'>
              詳細ページ
            </a>
          </li>
        </ul>
        <h2 className='text-2xl font-semibold'>Publications</h2>
        <h3 className='text-2xl font-semibold'>
          <span className='text-lg text-gray-600'>International</span>
        </h3>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>
            <span className='font-bold'>Defense-Prefix for Preventing Typographic Attacks on CLIP</span>
            <br />
            <u>Hiroki Azuma</u>, Yusuke Matsui
            <br />
            <a className='text-blue-500' href='https://iccv23-arow.github.io/'>
              ICCV2023 Workshop
            </a>
            , <a className='text-red-400'> Best Paper Award</a>
            <br />
            <a className='text-blue-500' href='https://arxiv.org/abs/2304.04512'>
              論文
            </a>{' '}
            /{' '}
            <a className='text-blue-500' href='https://github.com/azuma164/Defense-Prefix'>
              コード
            </a>
          </li>
        </ul>
        <h3 className='text-2xl font-semibold'>
          <span className='text-lg text-gray-600'>Domestic (Japan)</span>
        </h3>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>
            <span className='font-bold'>CLIPにおけるタイポグラフィック攻撃を防ぐPrefix学習</span>
            <br />
            <u>東大樹</u>, 松井勇佑
            <br />
            <a className='text-blue-500' href='http://cvim.ipsj.or.jp/MIRU2023/award/'>
              MIRU2023
            </a>
            , <a className='text-red-400'>Long Oral (採択率: 約16%)</a>, <a className='text-red-400'>MIRU学生優秀賞</a>
          </li>
        </ul>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>
            <span className='font-bold'>Typographic attackを防ぐDefense-Prefixの学習</span>
            <br />
            <u>東大樹</u>, 松井勇佑
            <br />
            <a className='text-blue-500' href='https://www.ieice-taikai.jp/2023general/jpn/pdfdownload.html'>
              IEICE General Conference 2023
            </a>
          </li>
        </ul>
        <h3 className='text-2xl font-semibold'>
          <span className='text-lg text-gray-600'>Preprint</span>
        </h3>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>
            <span className='font-bold'>ZoDi: Zero-Shot Domain Adaptation with Diffusion-Based Image Transfer</span>
            <br />
            <u>Hiroki Azuma</u>, Yusuke Matsui, Atsuto Maki
            <br />
            <a className='text-blue-500' href='https://arxiv.org/abs/2403.13652'>
              論文
            </a>{' '}
            /{' '}
            <a className='text-blue-500' href='https://github.com/azuma164/ZoDi'>
              コード
            </a>
          </li>
        </ul>
        <h2 className='text-2xl font-semibold'>Awards</h2>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>2023.10 Best Paper Award @ICCV Workshop 2023</li>
          <li className='mb-2'>2023.7 MIRU優秀学生賞 @MIRU 2023</li>
        </ul>
        <h2 className='text-2xl font-semibold'>Internship</h2>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>
            2022.4 ~:{' '}
            <a className='text-blue-500' href='https://deffunction.co.jp/index.html'>
              株式会社Function
            </a>
            <br />
            フルスタックのソフトウェア開発 (Next.js, Python, Terraform, GCP) / 物体検出モデルによる画像処理 (Pytorch)
          </li>
          <li className='mb-2'>
            2024.2:{' '}
            <a className='text-blue-500' href='https://deffunction.co.jp/index.html'>
              ソニー株式会社
            </a>
            <br />
            機械学習モデルを用いた動画配信の自動化 (Pytorch)
          </li>
          <li className='mb-2'>
            2023.1 ~ 2023.7:{' '}
            <a className='text-blue-500' href='https://www.mutex-inc.dev/mutex'>
              株式会社mutex
            </a>
            <br />
            大規模言語モデルを用いた検索システムの構築 (Python)
          </li>
          <li className='mb-2'>
            2022.11 ~ 2023.1:{' '}
            <a className='text-blue-500' href='https://cellid.com/'>
              株式会社cellid
            </a>
            <br />
            SfMを用いた建物の3次元復元の精度改善 (Python)
          </li>
          <li className='mb-2'>
            2021.8 ~ 2021.9:{' '}
            <a className='text-blue-500' href='https://cocone.co.jp/'>
              ココネ株式会社
            </a>
            <br />
            バックエンドのAPI開発 (Java)
          </li>
        </ul>
        <h2 className='text-2xl font-semibold'>Language</h2>
        日本語 (Native), English (Business level)
        <h2 className='text-2xl font-semibold'>Others</h2>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>TOEFL 90 (2023.5)</li>
          <li className='mb-2'>
            <a className='text-blue-500' href='https://github.com/azuma164/Add-Swap-Funtion-to-VSCode'>
              VSCode-Extension
            </a>
            (Typescript)
          </li>
          <li className='mb-2'>
            <a className='text-blue-500' href='https://github.com/azuma164/House-App'>
              House-App
            </a>
            (Vue.js, d3.js)
          </li>
          <li className='mb-2'>
            <a className='text-blue-500' href='https://github.com/azuma164/MakeTranslationVideo_usingCycleGANVC2'>
              Generating Translation Video by the Same Speaker
            </a>
            (Pytorch)
          </li>
        </ul>
      </section>
    </div>
  );
};

export default JapanesePage;
