import React from 'react'
import achievements from "../data/achievements";

function Achievements() {
  return (
      <section className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Achievements</h1>

      <ul className="list-disc list-inside space-y-3 text-lg">
        {achievements.map((item, index) => (
          <li key={index}>
            {item.emoji} <strong>{item.title}</strong> – {item.description}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Achievements
