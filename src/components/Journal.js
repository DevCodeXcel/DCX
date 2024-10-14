import React, { useState } from 'react';

function Journal() {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState({ year: '', month: '' });

  const filteredEntries = entries.filter(entry => entry.year === filter.year && entry.month === filter.month);

  return (
    <section id="journal">
      <h2>Journal</h2>
      {/* Add form to create entries */}
      <div className="journal-entries">
        {filteredEntries.map(entry => (
          <div key={entry.id} className="journal-entry">
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journal;
