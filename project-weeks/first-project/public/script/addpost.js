$(document).ready(() => {
  $("#searchgiphy").on("click", () => {
    const searchedGifTerm = $("#giphy").val();

    // Sending GET request to recieve Gifs, which includes searched term
    const xhr = $.get(
      `http://api.giphy.com/v1/gifs/search?q=${searchedGifTerm}&api_key=rUL04f4RvzYBVhJdj5UbinsbiL0Bj2qd&limit=10`
    );

    xhr.done(response => {
      console.log("success got data", response);

      let gifs = response.data;

      //we are now appending a radio ckeck box in order to select a giph to be submitted
      for (i in gifs) {
        $(".giphycontainer").append(
          `<input type="radio" name="radio" value=${gifs[i].images.original.url}><img src='${gifs[i].images.original.url}' width = 100 % height =80px id=${i} /></input>`
        );
      }
    });
  });
});
