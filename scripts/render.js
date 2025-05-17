export function renderCurriculum() {
  const root = document.getElementById('root');
  const data = JSON.parse(localStorage.getItem('cvData')) || {
    fullName: 'Raúl Aguirre Mendoza',
    email: 'raul@example.com',
    career: 'Ingeniero en Sistemas Computacionales',
    photo: 'https://via.placeholder.com/120',
    experience: [
      {
        jobTitle: 'Soporte Técnico',
        company: 'SIGA Tecnologías',
        description: 'Instalación de equipos y soporte técnico.',
        period: '2018 - 2020'
      },
      {
        jobTitle: 'Desarrollador Web',
        company: 'Zapaterías Moderna',
        description: 'Creación de sistema web para control de inventarios.',
        period: '2021 - 2022'
      }
    ],
    pdf: ''
  };

  root.innerHTML = `
    <div class="container">
      <div class="header">
        <img src="${data.photo}" class="profile-pic" alt="Foto de perfil" />
        <div>
          <h1>${data.fullName}</h1>
          <h3>${data.career}</h3>
          <p><a href="mailto:${data.email}">${data.email}</a></p>
        </div>
      </div>
      <div class="section">
        <h2>Experiencia</h2>
        <ul>
          ${data.experience.map(exp => `
            <li>
              <strong>${exp.jobTitle}</strong> en <em>${exp.company}</em><br />
              ${exp.description}<br />
              <small>${exp.period}</small>
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="section pdf-viewer">
        <h2>Currículum en PDF</h2>
        ${data.pdf ? `<iframe src="${data.pdf}"></iframe>` : '<p>No se ha subido ningún archivo PDF.</p>'}
      </div>
      <button onclick="document.getElementById('editor-panel').style.display = 'block'">Editar</button>
    </div>
  `;
}
