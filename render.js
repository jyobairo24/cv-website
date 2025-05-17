export function renderCurriculum() {
  const root = document.getElementById('root');
  const data = JSON.parse(localStorage.getItem('cvData')) || {
    fullName: 'Tu Nombre',
    email: 'correo@ejemplo.com',
    career: 'Nombre de tu carrera',
    photo: '',
    experience: [],
    pdf: ''
  };

  root.innerHTML = \`
    <div class="container">
      <div class="header">
        <img src="\${data.photo || 'https://via.placeholder.com/120'}" class="profile-pic" alt="Foto de perfil" />
        <div>
          <h1>\${data.fullName}</h1>
          <h3>\${data.career}</h3>
          <p><a href="mailto:\${data.email}">\${data.email}</a></p>
        </div>
      </div>
      <div class="section">
        <h2>Experiencia</h2>
        <ul>
          \${data.experience.map(exp => \`
            <li>
              <strong>\${exp.jobTitle}</strong> en <em>\${exp.company}</em><br />
              \${exp.description}<br />
              <small>\${exp.period}</small>
            </li>
          \`).join('')}
        </ul>
      </div>
      <div class="section pdf-viewer">
        <h2>Currículum en PDF</h2>
        \${data.pdf ? \`<iframe src="\${data.pdf}"></iframe>\` : '<p>No se ha subido ningún archivo PDF.</p>'}
      </div>
      <button onclick="document.getElementById('editor-panel').style.display = 'block'">Editar</button>
    </div>
  \`;
}
