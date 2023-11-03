import React from 'react';

export const EnglishPage = () => {
  const imagePath = 'https://github.com/azuma164/HirokiAzuma.me/blob/main/public/images/profile.jpg?raw=true';

  return (
    <div className='pt-8 sm:pt-16 mx-auto max-w-screen-lg'>
      <div className='my-4 px-4 flex justify-between'>
        <h1 className='text-2xl sm:text-3xl font-bold'>Hiroki Azuma</h1>
      </div>
      <div className='my-4 px-4'>
        <div className='mt-2 sm:flex sm:items-center'>
          <img src={imagePath} alt='My Image' className='w-24 h-auto sm:w-32 sm:h-auto mb-4 sm:mb-0 sm:mr-4' />
          <p className='sm:w-3/4'>
            I am Hiroki Azuma, a first-year master's student in the Department of Information & Communication
            Engineering at the Graduate School of Information Science and Technology, The University of Tokyo. I am a
            member of the Aizawa, Yamakata, and Matsui Labs, conducting research in Computer Vision. I have interests in
            machine learning, MLOps, infrastructure development, and backend development.
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
            <span className='font-bold'>The University of Tokyo (Master, Japan)</span>
            <br />
            Master's Program in Information & Communication Engineering, Matsui Lab.
            <br />
            2023.4 ~ Present
          </li>
          <li className='mb-2'>
            <span className='font-bold'>KTH Royal Institute of Technology (Exchange, Sweden)</span>
            <br />
            Division of Robotics, Perception and Learning (RPL)
            <br />
            2023.8 ~ Present
          </li>
          <li className='mb-2'>
            <span className='font-bold'>The University of Tokyo (Bachelor, Japan)</span>
            <br />
            Bachelor of Computer Science in Electrical Engineering & Information Communication
            <br />
            2019.4 ~ 2023.3
          </li>
        </ul>
        <h2 className='text-2xl font-semibold'>Projects</h2>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>
            <span className='font-bold'>Development of Human Flow Digital Twins Generated from Camera Images</span>
            <br />
            Accepted for <a className='text-red-400'>"2023rd MITOU Advanced Program"</a> from Information-technology
            Promotion Agency (IPA), Japan (Contract price: 14,400,000 yen).
            <br />
            I am in charge of a software development product manager and machine learning model advisor (I couldn't
            become a regular member due to living abroad).
            <br />
            <a className='text-blue-500' href='https://www.ipa.go.jp/jinzai/mitou/advanced/2023/gaiyou_is-1.html'>
              Details
            </a>
          </li>
          <li className='mb-2'>
            <span className='font-bold'>
              Development of a Real-time Visualization and Forecasting System for the Number of Containers and Delay
              Times at Ports
            </span>
            <br />
            Passed the first round of "NEDO Supply Chain Data Challenge (2023)" from New Energy and Industrial
            Technology Development Organization (NEDO). But we did not win in the final competition.
            <br />
            I was responsible for building machine learning models as an image processing engineer.
            <br />
            <a className='text-blue-500' href='https://www.nedo.go.jp/english/whatsnew_00293.html'>
              Details
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
            , <a className='text-red-400'>Best Paper Award</a>
            <br />
            <a className='text-blue-500' href='https://arxiv.org/abs/2304.04512'>
              Paper
            </a>{' '}
            /{' '}
            <a className='text-blue-500' href='https://github.com/azuma164/Defense-Prefix'>
              Code
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
            , <a className='text-red-400'>Long Oral (Acceptance rate: approximately 16%)</a>,{' '}
            <a className='text-red-400'>MIRU Student Best Paper Award</a>
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
        <h2 className='text-2xl font-semibold'>Awards</h2>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>2023.10 Best Paper Award @ICCV Workshop 2023</li>
          <li className='mb-2'>2023.7 Best Student Paper Award @MIRU 2023</li>
        </ul>
        <h2 className='text-2xl font-semibold'>Internship</h2>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>
            2022.4 ~:{' '}
            <a className='text-blue-500' href='https://deffunction.co.jp/index.html'>
              Function
            </a>
            <br />
            Fullstack software development (Next.js, Python, Terraform, GCP) / Image processing with object detection
            models (Pytorch)
          </li>
          <li className='mb-2'>
            2023.1 ~ 2023.7:{' '}
            <a className='text-blue-500' href='https://www.mutex-inc.dev/mutex'>
              mutex
            </a>
            <br />
            Development of retrieval systems using large language models (Python)
          </li>
          <li className='mb-2'>
            2022.11 ~ 2023.1:{' '}
            <a className='text-blue-500' href='https://cellid.com/'>
              cellid
            </a>
            <br />
            Improvement of the performance about 3D reconstruction with SfM (Python)
          </li>
          <li className='mb-2'>
            2021.8 ~ 2021.9:{' '}
            <a className='text-blue-500' href='https://cocone.co.jp/'>
              cocone
            </a>
            <br />
            Backend, API development (Java)
          </li>
        </ul>
        <h2 className='text-2xl font-semibold'>Language</h2>
        Japanese (Native), English (Business Level)
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
