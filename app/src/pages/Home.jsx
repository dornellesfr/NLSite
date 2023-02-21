import React from 'react';
import '../assets/css/styleHome.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div id="bg-home-1" className="fixed w-screen h-screen" />
      <div id="bg-home-2" className="fixed w-screen h-screen brightness-50" />
      <main id="home">
        <section id="content" className="grid grid-cols-2 w-full h-10/12 m-auto mt-10">
          <div />
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-4xl text-white font-extrabold">
              N&L -
              <small className="ml-2 font-semibold text-white">Prestadora de Serviços</small>
            </h1>
            <h2 className="text-2xl text-white font-extrabold"> Um pouco sobre nós:</h2>
            <ul className="max-w-md space-y-1 text-white list-disc list-inside">
              <li className="border-solid border-2 border-white rounded mt-4 p-4 backDroppedDark font-bold hover:border-4 transition-all">
                Realizamos operações de terraplenagem em geral;
              </li>
              <li className="border-solid border-2 border-white rounded mt-4 p-4 backDroppedDark font-bold hover:border-4 transition-all">
                Temos grande experiência em operações ligadas a estradas florestais, barragens
                e terraços;
              </li>
              <li className="border-solid border-2 border-white rounded mt-4 p-4 backDroppedDark font-bold hover:border-4 transition-all">
                Atuamos em toda metade Sul do Estado do Rio Grande do Sul.
              </li>
            </ul>
            <Link to="/services" id="btn-our-services" className="w-4/12 border-solid border-2 border-white text-white hover:text-white hover:backdrop-blur-sm hover:w-8/12 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-2.5 text-center mt-10 transition-all">Conheça nossos serviços</Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;