export default function limitCheckBox() {
  let checkboxContent = document
    .getElementById("checkboxContent")
    .getElementsByTagName("input");

  let limit = 2;

  for (let i = 0; i < checkboxContent.length; i++) {
    checkboxContent[i].onclick = function () {
      let checkedCount = 0;

      for (let i = 0; i < checkboxContent.length; i++) {
        checkedCount += checkboxContent[i].checked ? 1 : 0;
      }

      if (checkedCount > limit) {
        // console.log("You can select maximum " + limit + " types.");
        alert("You can select maximum " + limit + " types.");
        this.checked = false;
      }
    };
  }
}
