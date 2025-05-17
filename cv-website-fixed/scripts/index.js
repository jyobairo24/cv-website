import { renderCurriculum } from './render.js';
import { setupEditor } from './editor.js';

document.addEventListener('DOMContentLoaded', () => {
  renderCurriculum();
  setupEditor();
});
