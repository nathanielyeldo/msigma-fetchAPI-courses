async function fetchData() {
  try {
    const response = await fetch("https://api.msigma.in/btech/v2/branches");
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    const users = [];
    data.branches.forEach((element) => {
      users.push(element);
      console.log(users);
    });
    const container1 = document.querySelector(".left");
    const container2 = document.querySelector(".right");
    for (let i = 0; i <= 20; i++) {
      const colors = ["blue", "green", "pink", "violet", "orange", "red"];
      const diffColor = colors[Math.floor(Math.random() * colors.length)];
      const box = document.createElement("div");
      box.classList.add("course-box");
      const shortForm = document.createElement("h3");
      const fullName = document.createElement("p");
      const button = document.createElement("button");
      const fees = document.createElement("p");
      shortForm.textContent = `${users[i].short}`;
      shortForm.style.color = diffColor;
      fullName.textContent = `${users[i].name}`;
      button.textContent = "Apply Now";
      button.classList.add("apply_now");
      button.style.color = diffColor;
      fees.textContent = "Fee starting at ₹799 per subject";
      fees.style.color = "grey";
      box.appendChild(shortForm);
      box.appendChild(fullName);
      box.appendChild(button);
      box.appendChild(fees);
      if (i % 2 == 0) {
        container1.appendChild(box);
      } else {
        container2.appendChild(box);
      }
    }
  } catch (error) {
    console.error("error:", error);
  }
}
fetchData();
