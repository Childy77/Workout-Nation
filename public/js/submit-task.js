const handleSubmit = async (evt) => {
  evt.preventDefault();

  const taskName = document.querySelector("#taskName").value.trim();
  const intensify = document.querySelector(
    'input[name="inlineRadioOptions"]:checked'
  );

  if (taskName === "" || intensify === null) {
    alert("pls fill all fileds");
    return;
  }

  const intensifyVal = intensify.value;

  const response = await fetch("/api/task", {
    method: "POST",
    body: JSON.stringify({ taskName, intensifyVal }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    /* @ To Do
     * Redirect to where...
     */
    document.location.replace("/");
  } else {
    console.log(response);
  }
};

document.querySelector("#submitBtn").addEventListener("click", handleSubmit);