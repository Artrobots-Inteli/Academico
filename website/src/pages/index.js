import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LogoArtrobts from '@site/static/img/LogoArtrobots.png';
import aula_academico from '@site/static/img/aula_academico.jpg';
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className='my-8 ml-4'>
      <h1 className='font-black text-7xl title'>{siteConfig.title}</h1>
      <h2 className='font-bold text-4xl'>Acadêmico</h2>
      <p className='text-justify pr-4'>Bem-vindo ao site acadêmico do Clube de Robótica! Aqui, você encontrará recursos educacionais para explorar os conceitos fundamentais e avançados da robótica. Desde materiais de nivelamento até artigos mais avançados e tutoriais, nosso objetivo é fornecer uma plataforma para o aprendizado e a descoberta na área da robótica.</p>
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
      <div className='grid grid-cols-3 -skew-y-6'>
        <img src={aula_academico} alt="Logo Artrobots" className='p-4 object-scale-down max-w-md' />
        <div className='text-justify p-12 col-span-2 translate-y-1/4'>
          <h1 className='font-white text-7xl'></h1>
          <p className='text-xl text-white'>
            No âmbito acadêmico, nosso compromisso é com a excelência educacional e o desenvolvimento dos nossos membros. Através de workshops regulares, oferecemos oportunidades para aprofundar o conhecimento em áreas-chave da robótica, desde programação até design mecânico.<br/>
            Além disso, dedicamos tempo para garantir que novos membros se integrem suavemente ao clube. Nossas orientações personalizadas e nivelamentos fornecem uma base sólida para que todos os participantes possam contribuir de maneira significativa desde o início.
          </p>
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