
function rankResumes() {
  const jobDesc = document.getElementById("jobDesc").value.toLowerCase().split(/\W+/);
  const resumeEls = document.querySelectorAll(".resume");
  let results = [];

  resumeEls.forEach((resumeEl, index) => {
    const resumeText = resumeEl.value.toLowerCase().split(/\W+/);
    let matchCount = 0;

    jobDesc.forEach(word => {
      if (resumeText.includes(word)) {
        matchCount++;
      }
    });

    const score = ((matchCount / jobDesc.length) * 100).toFixed(2);
    results.push({ resume: index + 1, score });
  });

  displayResults(results);
}

function displayResults(results) {
  const resultsDiv = document.getElementById("results");
  results.sort((a, b) => b.score - a.score);

  resultsDiv.innerHTML = "<h3>Resume Match Scores:</h3><ul>" + 
    results.map(r => `<li>Resume ${r.resume}: ${r.score}% match</li>`).join("") + 
    "</ul>";
}
