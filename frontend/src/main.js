import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App).use(router);

function showFatalError(error) {
  console.error("Unhandled error:", error);
  if (typeof document === "undefined") return;

  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.9);
    color: #fff;
    font-family: system-ui, sans-serif;
    padding: 20px;
    z-index: 99999;
    overflow: auto;
  `;
  overlay.innerHTML = `
    <h1 style="margin-top:0;">An unexpected error occurred</h1>
    <pre style="white-space: pre-wrap; word-break: break-word;">${String(
      error,
    )}</pre>
  `;

  document.body.appendChild(overlay);
}

if (typeof window !== "undefined") {
  window.addEventListener("error", (event) => {
    showFatalError(event.error || event.message || "Unknown error");
  });
  window.addEventListener("unhandledrejection", (event) => {
    showFatalError(event.reason || "Unhandled rejection");
  });
}

app.mount("#app");
