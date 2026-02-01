const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    rating: document.getElementById("rating").value,
    comment: document.getElementById("comment").value
  };

  fetch("https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLixRnFzLzHGfnuLGoNcYFuH2Pi5bXtTzbES2njKUgaqflbFD8AXGUikLGVxkEGwg2D27I0o3txmSLQICI38bNqvIY17ybyuJIgW1H6zqjGTrflql9mBQFCbXh7H6TOEZztphunZ-pIZFFc-0t35tDE2MlS8Afu7xKbwFF7tlZr5Vbqc5X4oAxHduuzp2MHYyq2Dq6mrlzlYOhyrffALtM477Wq5jZ-Be67lrXMWYL-i7ugW8OlVcZOlfm3Cd2YfQcs9oLWmkb1M7L6pbFJCeTVVdps3Eg&lib=MeRBDvhNyN2dNnjjFkP1mqD_DLMbnuuk7", {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(result => {
      alert("Gửi thành công");
      console.log(result);
    })
    .catch(err => {
      alert("Lỗi khi gửi");
      console.error(err);
    });
});
