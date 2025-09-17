import React, { useState } from "react";
import "./Home.css";
import Modal from "../components/Modal/Modal";
import comic2 from "../assets/Images/comic2.jpg";
import villain1 from "../assets/Images/villain1.png";
import villain2 from "../assets/Images/villain2.png";
import villain3 from "../assets/Images/villain3.png";
import villain4 from "../assets/Images/villain4.png";
import villain5 from "../assets/Images/villain5.png";
import villain6 from "../assets/Images/villain6.png";

const availableImages = [
  villain1,
  villain2,
  villain3,
  villain4,
  villain5,
  villain6,
];

export default function Home() {
  const [missions, setMissions] = useState({
    Lundi: [],
    Mardi: [],
    Mercredi: [],
    Jeudi: [],
    Vendredi: [],
    Samedi: [],
    Dimanche: [],
  });

  const [showMissionModal, setShowMissionModal] = useState(false);

  const [newMission, setNewMission] = useState({
    jour: "Lundi",
    titre: "",
    heros: "",
    pouvoir: "",
    horaire: "",
    desc: "",
    adversaire: "",
    niveau: 1,
    statut: "En cours",
    image: "",
  });

  const handleAddMission = (e) => {
    e.preventDefault();
    setMissions((prev) => ({
      ...prev,
      [newMission.jour]: [...prev[newMission.jour], newMission],
    }));
    setShowMissionModal(false);
    setNewMission({
      jour: "Lundi",
      titre: "",
      heros: "",
      pouvoir: "",
      horaire: "",
      desc: "",
      adversaire: "",
      niveau: 1,
      statut: "En cours",
      image: "",
    });
  };

  return (
    <div
      className="board"
      style={{
        backgroundImage: `url(${comic2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Topbar */}
      <div className="topbar">
        <div className="title">
          <div className="logo">S</div>
          <div>
            <h1>Agenda de Missions</h1>
            <p>Agenda de Missions pour Super-Héros</p>
          </div>
        </div>

        <div className="controls">
          <button className="btn" onClick={() => setShowMissionModal(true)}>
            Ajouter une mission
          </button>
        </div>
      </div>

      {/* Grille semaine */}
      <div className="week">
        {Object.keys(missions).map((jour) => (
          <div className="day" key={jour}>
            <div className="day-header">{jour}</div>
            <div className="day-body">
              {missions[jour].map((m, idx) => (
                <article key={idx} className={`mission level-${m.niveau}`}>
                  <div className="title">
                    {m.image && (
                      <img
                        src={m.image}
                        alt="icone mission"
                        style={{ width: 28, height: 28, borderRadius: 6 }}
                      />
                    )}
                    <span>{m.titre}</span>
                    <div className="mission-actions">
                      <span className="pill">{m.niveau}</span>
                    </div>
                  </div>

                  <div className="meta">
                    {m.horaire && <span>🕒 {m.horaire}</span>}
                    {m.heros && (
                      <span>
                        🦸 {m.heros} ({m.pouvoir})
                      </span>
                    )}
                  </div>

                  <div className="desc">{m.desc}</div>
                  {m.adversaire && (
                    <div className="meta">👾 Adversaire : {m.adversaire}</div>
                  )}
                  <div className="meta">Statut : {m.statut}</div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modale Ajouter une mission */}
      {showMissionModal && (
        <Modal
          title="Ajouter une mission"
          onClose={() => setShowMissionModal(false)}
        >
          <form onSubmit={handleAddMission}>
            <label>
              Jour :
              <select
                value={newMission.jour}
                onChange={(e) =>
                  setNewMission({ ...newMission, jour: e.target.value })
                }
              >
                {Object.keys(missions).map((jour) => (
                  <option key={jour} value={jour}>
                    {jour}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Titre de la mission :
              <input
                type="text"
                value={newMission.titre}
                onChange={(e) =>
                  setNewMission({ ...newMission, titre: e.target.value })
                }
                required
              />
            </label>

            <label>
              Héros assigné :
              <input
                type="text"
                value={newMission.heros}
                placeholder="Nom du héros"
                onChange={(e) =>
                  setNewMission({ ...newMission, heros: e.target.value })
                }
              />
            </label>

            <label>
              Pouvoir du héros :
              <input
                type="text"
                value={newMission.pouvoir}
                placeholder="Pouvoir spécial"
                onChange={(e) =>
                  setNewMission({ ...newMission, pouvoir: e.target.value })
                }
              />
            </label>

            <label>
              Créneau horaire :
              <input
                type="time"
                value={newMission.horaire}
                onChange={(e) =>
                  setNewMission({ ...newMission, horaire: e.target.value })
                }
              />
            </label>

            <label>
              Description courte :
              <textarea
                value={newMission.desc}
                onChange={(e) =>
                  setNewMission({ ...newMission, desc: e.target.value })
                }
              />
            </label>

            <label>
              Type d’adversaire :
              <input
                type="text"
                value={newMission.adversaire}
                placeholder="Ex: Robot, Entité, Criminel"
                onChange={(e) =>
                  setNewMission({ ...newMission, adversaire: e.target.value })
                }
              />
            </label>

            <label>
              Choisir une image :
              <div className="image-selection">
                {availableImages.map((img) => (
                  <img
                    key={img}
                    src={img}
                    alt=""
                    className={`selectable-image ${
                      newMission.image === img ? "selected" : ""
                    }`}
                    onClick={() => setNewMission({ ...newMission, image: img })}
                    style={{
                      width: 50,
                      height: 50,
                      margin: 4,
                      border:
                        newMission.image === img
                          ? "3px solid blue"
                          : "1px solid gray",
                      borderRadius: 6,
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </label>

            <label>
              Niveau de menace (1-12) :
              <input
                type="number"
                min="1"
                max="12"
                value={newMission.niveau}
                onChange={(e) =>
                  setNewMission({
                    ...newMission,
                    niveau: parseInt(e.target.value),
                  })
                }
                required
              />
            </label>

            <div style={{ marginTop: "12px" }}>
              <button type="submit" className="btn">
                Ajouter
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
