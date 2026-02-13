function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function runTest() {
  const answers = confirm("Do you enjoy bad jokes and good coffee?");
  if (answers) {
    alert("✅ Compatibility Score: 98%\nError: FallingForYouException 💖");
  } else {
    alert("⚠️ Compatibility inconclusive. Try again after coffee ☕");
  }
}

function sendPR() {
  alert("📨 Pull Request Sent!\nStatus: Awaiting Cute Reply 😌");
}

console.log("No bugs detected. Just feelings.");