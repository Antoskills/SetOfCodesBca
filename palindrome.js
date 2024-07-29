function palicheck() {
  let input = document.getElementById("input").value;

  let num = parseInt(input);
  let temp = num;
  let save = 0;
  while (num != 0) {
    let check = num % 10;
    save = save * 10 + check;
    num = Math.floor(num / 10);
  }
  if (save === temp) {
    document.getElementById("result").textContent = `${input} is palindrome`;
  } else {
    document.getElementById(
      "result"
    ).textContent = `${input} is not palindrome`;
  }
}
