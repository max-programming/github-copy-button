const parent = document.querySelector(".BtnGroup").nextElementSibling;
const copyButton = document.createElement("button");

copyButton.className = "btn-octicon btn-octicon-info tooltipped tooltipped-nw";
copyButton.setAttribute("aria-label", "Copy code");
copyButton.innerHTML = `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>`;

copyButton.onclick = () => {
  const parent = document.querySelectorAll("table.highlight td");
  const lines = [];

  parent.forEach(line => lines.push(line.textContent));

  const code = lines.filter(str => str.length !== 0).join("\n");
  navigator.clipboard.writeText(code);
};

parent.appendChild(copyButton);
