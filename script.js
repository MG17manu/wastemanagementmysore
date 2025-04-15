document.getElementById("complaintForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate successful submission
  document.getElementById("statusMessage").textContent =
    "Complaint submitted successfully! Thank you for reporting.";

  // Clear the form
  document.getElementById("complaintForm").reset();
});
