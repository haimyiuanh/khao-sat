function sendFeedback() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    if (!name || !message) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
            name: name,
            message: message
        })
    })
    .then(res => res.text())
    .then(() => {
        document.getElementById("result").innerText = "✅ Gửi thành công!";
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
    })
    .catch(() => {
        document.getElementById("result").innerText = "❌ Có lỗi xảy ra!";
    });
}
