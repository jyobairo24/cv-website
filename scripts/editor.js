export function setupEditor() {
  const root = document.createElement('div');
  root.id = 'editor-panel';
  root.style.display = 'none';
  root.innerHTML = `
    <div class="container">
      <h2>Panel de Edición (contraseña: admin123)</h2>
      <input id="password" type="password" placeholder="Contraseña" />
      <div id="edit-form" style="display:none">
        <input id="fullName" placeholder="Nombre completo" /><br />
        <input id="career" placeholder="Carrera" /><br />
        <input id="email" placeholder="Correo electrónico" /><br />
        <input id="photo" placeholder="URL de la foto de perfil" /><br />
        <textarea id="experience" placeholder='Experiencia en formato JSON (lista)'></textarea><br />
        <input type="file" id="pdf" accept="application/pdf" /><br />
        <button id="saveBtn">Guardar</button>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  document.getElementById('password').addEventListener('input', (e) => {
    if (e.target.value === 'admin123') {
      document.getElementById('edit-form').style.display = 'block';
    }
  });

  document.getElementById('saveBtn').addEventListener('click', () => {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const career = document.getElementById('career').value;
    const photo = document.getElementById('photo').value;
    const expText = document.getElementById('experience').value;
    let experience = [];
    try {
      experience = JSON.parse(expText);
    } catch (e) {
      alert('Error en formato de experiencia. Debe ser JSON.');
      return;
    }

    const file = document.getElementById('pdf').files[0];
    let pdfURL = '';
    if (file && file.type === 'application/pdf') {
      pdfURL = URL.createObjectURL(file);
    }

    localStorage.setItem('cvData', JSON.stringify({ fullName, email, career, photo, experience, pdf: pdfURL }));
    location.reload();
  });
}
