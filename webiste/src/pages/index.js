import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LogoArtrobts from '../../static/img/LogoArtrobots.png';
import robo from '../../static/img/robo.jpeg';
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className='my-8 ml-4'>
      <h1 className='font-black text-7xl title'>{siteConfig.title}</h1>
      <h2 className='font-bold text-4xl'>Clube de Robôtica - Inteli</h2>
      <p className='text-justify pr-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt rhoncus urna eget pretium. Quisque viverra libero at ex lacinia, aliquam tincidunt nibh dapibus. Aenean a diam sit amet quam mattis posuere nec ac eros. Vivamus sed tortor neque. Mauris feugiat posuere varius. Vivamus pulvinar diam neque, non ultricies urna ullamcorper vitae. In mauris mauris, vehicula a molestie et, rutrum fermentum dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    </div>
  );
}

function ImageColumn() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className='flex justify-center container p-8'>
      <img src={LogoArtrobts} alt="Logo Artrobots" className='object-scale-down  max-w-md' />
    </div>
  );
}
function Componente() {
  return (
    <div className='bg-violet-600 skew-y-6 container pb-32 p-0 m-0 mt-16 min-h-fit min-w-full'>
      <div className='grid grid-cols-3  -skew-y-6 '>
        <img src={robo} alt="Logo Artrobots" className='p-4 object-scale-down max-w-md ' />
        <div className='text-justify p-12 col-span-2 translate-y-1/4'>
          <h1 className='font-black text-7xl '>Acadêmico Bonitão :P 💂‍♂️</h1>
          <p className=' text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt rhoncus urna eget pretium. Quisque viverra libero at ex lacinia, aliquam tincidunt nibh dapibus. Aenean a diam sit amet quam mattis posuere nec ac eros. Vivamus sed tortor neque. Mauris feugiat posuere varius. Vivamus pulvinar diam neque, non ultricies urna ullamcorper vitae. In mauris mauris, vehicula a molestie et, rutrum fermentum dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <div className='lg:grid grid-cols-2 gap-0 mt-0 mx-4'>
        <HomepageHeader />
        <ImageColumn />
      </div>
      <Componente />
    </Layout>
  );
}