import React from "react";

export default function Mission({ m }) {
  return (
    <article className={`mission level-${m.niveau}`}>
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
  );
}
