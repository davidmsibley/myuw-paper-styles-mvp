export function appendHead(tpl) {
  // Prepare stylesheet of custom CSS properties
  const tplElement = document.createElement('template');
  tplElement.innerHTML = tpl;

  // Add templates to the document
  document.head.appendChild(tplElement.content);
}
