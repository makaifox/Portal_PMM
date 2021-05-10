import { Navigation } from 'react-minimal-side-navigation';
import { useRouter } from 'next/router'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FaHome, FaUser, FaChartBar, FaUsers, FaBullhorn, FaEye, FaComments, FaEnvelope } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link'




function Sidebar() {
  const router = useRouter()
  return (
    <>
      <div className='Sidebar-slot'>
        <div className='whitediv text-center'>
          <img src="/logoPB.png" className="d-block w-100 logoPMM" alt="logo PMM" />
          <div className="mesquita">
            <h3 className="h3"> MESQUITA </h3>
          </div>
          <Navigation
            className="Sidebar-Nav"
            // you can use your own router's api to get pathname
            activeItemId={router.pathname}
            onSelect={({ itemId }) => {
              router.push();
              // maybe push to the route
            }}
            items={[
              {
                title: 'Inicio',
                itemId: '/Inicio',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <FaHome />,
              },
              {
                title: 'Governo',
                itemId: '/governo',
                elemBefore: () => <FaUser />,
                subNav: [
                  {
                    title: 'Gestão Municipal',
                    itemId: '/governo/Gestao',
                  },
                  {
                    title: 'Secretarias',
                    itemId: '/governo/secretarias',
                  },
                  {
                    title: 'Órgãos e Autarquias',
                    itemId: '/governo/orgaos',
                  },
                  {
                    title: 'Procuradoria e Controladoria',
                    itemId: '/governo/procuradoria',
                  },
                ],
              },
              {
                title: 'Serviços',
                itemId: '/Servicos',
                elemBefore: () => <FaChartBar />,
              },
              {
                title: 'Servidores',
                itemId: '/Servidores',
                elemBefore: () => <FaUsers />,
              },
              {
                title: 'Comunicação',
                itemId: '/Comunicação',
                elemBefore: () => <FaBullhorn />,
              },
              {
                title: 'Transparência',
                itemId: '/Transparência',
                elemBefore: () => <FaEye />,
              },
              {
                title: 'Chat',
                itemId: '/Chat',
                elemBefore: () => <FaComments />,
              },
              {
                title: 'Contato',
                itemId: '/Contato',
                elemBefore: () => <FaEnvelope />,
              },
            ]}
          />

          <div className="row d-flex justify-content-center ">
            <SocialIcon url="https://facebook.com/" bgColor="#00D2D2" />
            <SocialIcon url="https://twitter.com/" bgColor="#00D2D2" />
            <SocialIcon url="https://instagram.com/" bgColor="#00D2D2" />
            <SocialIcon url="https://youtube.com/" bgColor="#00D2D2" />
            <SocialIcon url="https://linkedin.com/" bgColor="#00D2D2" />
            <p className="contato">atendimento@mesquita.rj.gov.br<br />
            0800-2829260 | (21) 2042-3085
            </p>
          </div>

        </div>
      </div>
    </>
  );

}

export default Sidebar;