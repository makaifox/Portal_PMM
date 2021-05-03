import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faChartBar, faUsers, faBullhorn, faEye, faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';




function Sidebar() {
  return (
    <>
      <div className='Sidebar-slot'>
        <div className='whitediv text-center'>
          <img src="/logoPB.png" className="d-block w-100 logoPMM" alt="logo PMM" />
          <Navigation
            className="Sidebar-Nav"
            // you can use your own router's api to get pathname
            activeItemId="/Inicio"
            onSelect={({ itemId }) => {
              // maybe push to the route
            }}
            items={[
              {
                title: 'Inicio',
                itemId: '/Inicio',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <FontAwesomeIcon icon={faHome} />,
              },
              {
                title: 'Governo',
                itemId: '/Governo',
                elemBefore: () => <FontAwesomeIcon icon={faUser} />,

              },
              {
                title: 'Serviços',
                itemId: '/Servicos',
                elemBefore: () => <FontAwesomeIcon icon={faChartBar} />,
              },
              {
                title: 'Servidores',
                itemId: '/Servidores',
                elemBefore: () => <FontAwesomeIcon icon={faUsers} />,
              },
              {
                title: 'Comunicação',
                itemId: '/Comunicação',
                elemBefore: () => <FontAwesomeIcon icon={faBullhorn} />,
              },
              {
                title: 'Transparência',
                itemId: '/Transparência',
                elemBefore: () => <FontAwesomeIcon icon={faEye} />,
              },
              {
                title: 'Chat',
                itemId: '/Chat',
                elemBefore: () => <FontAwesomeIcon icon={faComments} />,
              },
              {
                title: 'Contato',
                itemId: '/Contato',
                elemBefore: () => <FontAwesomeIcon icon={faEnvelope} />,
              },
            ]}
          />
          <div className="row d-flex justify-content-center">
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