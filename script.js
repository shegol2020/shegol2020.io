function checkEmail() {
            let inputText = document.getElementById("email").value;
            let strArr = "";
            let successBtn;
            if (inputText) {
                strArr = inputText.split("");
            } else {
                document.getElementById("emailError").innerHTML = "Вы не ввели данные";
                document.getElementById("emailContainer").style.boxShadow = "0 10px 30px 0px  rgba(240, 52, 52, 1)";
                document.getElementById("btn").style.backgroundColor = "rgba(240, 52, 52, 0.5)";

            }
            let result = strArr.find(symbol => symbol === "@");
            if (!result) {
                document.getElementById("emailError").innerHTML = "Вы ввели некорректные данные";
                document.getElementById("emailContainer").style.boxShadow = "0 10px 30px 0px  rgba(240, 52, 52, 1)";
                document.getElementById("btn").style.backgroundColor = "rgba(240, 52, 52, 0.5)";
            } else {
                document.querySelector(".hiddenContainer").style.display = "none";
                document.getElementById("emailSuccess").innerHTML = `Спасибо! <p>Совсем скоро мы свяжемся с вами <div class="imgLetter"> <img src="https://cdn2.iconfinder.com/data/icons/web-essentials-1/128/paper-airplane-512.png" height="50" width="50" alt="letter" /></div>Проверьте ваш адрес:<b>${inputText}</b>`;
                document.getElementById("emailContainer").style.boxShadow = "0 10px 30px 0px  rgba(4, 147, 114, 1)";

            }
            document.getElementById("email").value = "";

        }
