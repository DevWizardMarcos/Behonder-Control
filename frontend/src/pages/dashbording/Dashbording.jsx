import "../../styles/pages/dashbording.css";
import FenixLogo from "../../assets/images/fenixLogo.png";
import Avatar from "../../assets/images/avatar.png";
import FenixLogoSideBar from "../../assets/images/fenixLogoSideBar.png";
import OnlineImg from "../../assets/images/inspiracao/online.png";
import OfflineImg from "../../assets/images/inspiracao/offiline.png";
const menuItems = [
  { label: "Sala 01", icon: "monitor", active: true },
  { label: "Sala 02", icon: "monitor" },
  { label: "Estoque", icon: "box" },
  { label: "Relatórios", icon: "chart" },
  { label: "Configurações", icon: "gear" },
];

const STATUS_IMAGE = {
  online: OnlineImg,
  "em-uso": OnlineImg,
  offline: OfflineImg,
};

const STATUS_LABEL = {
  online: "Online",
  "em-uso": "Em uso",
  offline: "Offline",
};

const columns = [
  {
    title: "COLUNA 1",
    pcs: [
      { name: "PC01", status: "online" },
      { name: "PC02", status: "online" },
      { name: "PC03", status: "em-uso" },
      { name: "PC04", status: "offline" },
    ],
  },
  {
    title: "COLUNA 2",
    pcs: [
      { name: "PC05", status: "online" },
      { name: "PC06", status: "online" },
      { name: "PC07", status: "em-uso" },
      { name: "PC08", status: "offline" },
    ],
  },
];

function Dashbording() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div className="brand">
          <img src={FenixLogo} alt="Behonder Control" className="brand__logo" />
          <div className="brand__name">
            <span className="brand__light">BEHONDER</span>
            <span className="brand__accent"> CONTROL</span>
          </div>
        </div>

        <div className="header-search">
          <label className="search-field" htmlFor="search">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
              <circle
                cx="11"
                cy="11"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M16 16l4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <input type="search" id="search" placeholder="Pesquisar..." />
          </label>
        </div>

        <div className="header-profile">
          <button className="notification" type="button">
            <span className="notification__badge">3</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
              <path
                d="M12 4.75a4.25 4.25 0 0 0-4.25 4.25v2.06c0 .7-.2 1.39-.58 1.98l-1.18 1.82A1 1 0 0 0 6.83 16h10.34a1 1 0 0 0 .84-1.54l-1.18-1.82a3.64 3.64 0 0 1-.58-1.98V9A4.25 4.25 0 0 0 12 4.75Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="M10 18a2 2 0 0 0 4 0"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="profile-card">
            <div className="profile-card__avatar">
              <img src={Avatar} alt="" srcset="" />
            </div>
            <div className="profile-card__info">
              <img src="" alt="" srcset="" />
              <span>Administrador</span>
            </div>
            <span className="profile-card__arrow">⌄</span>
          </div>
        </div>
      </header>

      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <div className="sidebar-top">
            <div className="sidebar-title-row">
              <h2>MENU</h2>
              <button type="button" className="sidebar-collapse">
                «
              </button>
            </div>

            <nav className="sidebar-nav" aria-label="Menu principal">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`sidebar-item ${item.active ? "is-active" : ""}`}
                >
                  <span className="sidebar-item__icon" />
                  <span className="sidebar-item__label">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="sidebar-watermark" aria-hidden="true">
            <img src={FenixLogoSideBar} alt="" />
          </div>
        </aside>

        <section className="dashboard-content">
          {columns.map((col) => (
            <div className="pc-column" key={col.title}>
              <h3 className="pc-column__title">{col.title}</h3>
              <div className="pc-grid">
                {col.pcs.map((pc) => (
                  <article className="pc-card" key={pc.name}>
                    <span className="pc-card__name">{pc.name}</span>
                    <img
                      className="pc-card__img"
                      src={STATUS_IMAGE[pc.status]}
                      alt={`${pc.name} - ${STATUS_LABEL[pc.status]}`}
                    />
                    <span className={`pc-card__status is-${pc.status}`}>
                      {STATUS_LABEL[pc.status]}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Dashbording;
