const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    rating: document.getElementById("rating").value,
    comment: document.getElementById("comment").value
  };

  fetch("https://script.google.com/macros/s/AKfycbwMn_HZ-RvxdVp7D7w-nQfWxiWjkMekIlzzflcCf0LWaDu9ya6g7HXZ0Euz_AcAGu4F/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      alert("Cảm ơn bạn đã gửi đánh giá!");
      form.reset();
    })
    .catch(error => {
      alert("Có lỗi xảy ra, vui lòng thử lại!");
      console.error(error);
    });
});

