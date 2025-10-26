import React from 'react';


const resources = [
  {
    name: '2025 Symposium Program (PDF)',
    url: 'https://github.com/dsjohns85/cuddly-computing-machine/raw/main/public/symposium-program-2025.pdf',
    type: 'PDF',
  },
  {
    name: 'Leadership Symposium Slides',
    url: 'https://github.com/dsjohns85/cuddly-computing-machine/raw/main/public/leadership-symposium-slides-2025.pptx',
    type: 'Slides',
  },
  {
    name: 'Speaker Bios & Contact Sheet',
    url: 'https://github.com/dsjohns85/cuddly-computing-machine/raw/main/public/speaker-bios-2025.docx',
    type: 'Document',
  },
];

const Resources: React.FC = () => {
  return (
    <div className="resources-page">
      <h1>Seminar Materials & Downloads</h1>
      <p>
        Download materials from the annual Leadership Symposium. All files are hosted for easy access and future updates.
      </p>
      <ul className="resources-list">
        {resources.map((res) => (
          <li key={res.name} className="resource-item">
            <a href={res.url} target="_blank" rel="noopener noreferrer" className="resource-link">
              <span className="resource-name">{res.name}</span>
              <span className="resource-type">({res.type})</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="resources-note">
        <p>
          <strong>To update:</strong> Add or edit entries in the <code>resources</code> array above. Files can be hosted on GitHub or any external storage.
        </p>
      </div>
    </div>
  );
};

export default Resources;