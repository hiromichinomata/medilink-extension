$(function () {
  $('.status-button-1.viewing > span').on("click", function(){
    // $('.video-arrow.next')[0].click();
    if(!$('.status-button-1.viewing').hasClass('active')){
      window.location.href = $('.video-arrow.next')[0].href;
    }
  });
    // ↓疎通確認コード：タイトルの■が回転するはず
    // console.log('Chrome拡張の疎通確認コードが動いています。動作確認ができたら削除してください。');
    // let flag = false;
    // setInterval(function () {
    //     document.title = (flag ? "■" : "◆") + document.title.replace(/^[■◆]/, '');
    //     flag = !flag;
    // }, 1000);
    // ↑疎通確認コード
});
