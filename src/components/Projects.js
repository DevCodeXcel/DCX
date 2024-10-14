import React, { useState, useEffect } from 'react';

function Projects() {
  const [repos, setRepos] = useState([]);

  const repoStatusOverrides = {
    "DCX": "Completed",
    "DCX-Legal-Documents": "Completed",
    "Sphera": "Aborted"
  };

  useEffect(() => {
    fetch('https://api.github.com/users/devcodexcel/repos')
      .then(response => response.json())
      .then(data => {
        const updatedRepos = data.map(repo => ({
          id: repo.id,
          name: repo.name,
          html_url: repo.html_url, // GitHub URL of the repository
          description: repo.description || "No description available",
          status: repoStatusOverrides[repo.name] || "In-progress"
        }));
        setRepos(updatedRepos);
      });
  }, []);

  const getRandomLightColor = () => {
    const colors = [
      { background: '#FFF4E0', border: '#FF9800' },
      { background: '#E8F5E9', border: '#4CAF50' },
      { background: '#FFEBEE', border: '#F44336' },
      { background: '#E3F2FD', border: '#2196F3' },
      { background: '#F3E5F5', border: '#9C27B0' },
      { background: '#FFFDE7', border: '#FFEB3B' },
      { background: '#F1F8E9', border: '#8BC34A' }
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <section id="projects">
    
      <div className="projects-list">
        {repos.map((repo) => {
          const colors = getRandomLightColor();
          return (
            <a
              key={repo.id}
              href={repo.html_url} // Link to GitHub repository
              className="project-card"
              style={{
                backgroundColor: colors.background,
                border: `2px solid ${colors.border}`
              }}
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security measure for external links
            >
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <span className={`status ${repo.status}`}>{repo.status}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
