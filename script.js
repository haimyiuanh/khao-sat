document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackForm");

  if (!form) {
    alert("KHÔNG tìm thấy form feedbackForm");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("JS đã chạy, đang gửi dữ liệu...");

    const data = {
      name: document.getElementById("name").value,
      rating: document.getElementById("rating").value,
      comment: document.getElementById("comment").value
    };

    fetch("https://script.google.com/macros/s/AKfycbwMn_HZ-RvxdVp7D7w-nQfWxiWjkMekIlzzflcCf0LWaDu9ya6g7HXZ0Euz_AcAGu4F/exec", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        alert("Gửi thành công!");
        console.log(result);
        form.reset();
      })
      .catch(err => {
        alert("LỖI khi gửi");
        console.error(err);
      });
  });
});
