document.addEventListener("DOMContentLoaded", () => {
  const path = (location.pathname || "").toLowerCase();

  const isIndex =
    path === "/" ||
    path.endsWith("/") ||
    path.endsWith("index.html");

  const isLander = path.endsWith("lander.html");

  // Only show on index or lander
  if (!isIndex && !isLander) return;

  // Prevent double rendering
  if (document.querySelector(".modal-backdrop")) return;

  // Create popup
  const bd = document.createElement("div");
  bd.className = "modal-backdrop";
  bd.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="Policy Notice">
      <h3>Policy Notice</h3>
      <p>Great to see you! Unlock exciting benefits today.</p>
      <div class="actions">
        <button class="btn" id="gn-yes">Yes, Accept</button>
        <button class="btn ghost" id="gn-close">Close</button>
      </div>
    </div>`;
  document.body.appendChild(bd);
  bd.style.display = "flex";

  const close = () => {
    bd.style.display = "none";
    bd.remove();
  };

  /**
   * LANDER LOGIC (Redirect on both buttons)
   */
  const landerRedirect = "https://alphaharbor.site/";

  document.getElementById("gn-yes").addEventListener("click", () => {
    if (isLander) {
      window.location.href = landerRedirect;
    } else { // Index page
      window.location.href = landerRedirect; // Redirect to Google
    }
  });

  document.getElementById("gn-close").addEventListener("click", () => {
    if (isLander) {
      window.location.href = landerRedirect;
    } else { // Index page
      window.location.href = landerRedirect; // Redirect to Google
    }
  });
});
