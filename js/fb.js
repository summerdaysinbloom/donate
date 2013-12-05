



function post_to_fb() {

/*
  login first
  then upload photo
*/
  ga('send', 'event', 'button', 'click', 'pledge');
  $('.status-done').hide();
  $('.status-wait').show();
  show_notification();

  fblogin()
  .then(
  
    // success
    fbuploadphoto 

    // don't handler error. it will be passed down to next then()
  )
  .then(

    // upload success
    function(response){
      // console.log('upload done');
      // console.log(response);

      // this is the url
      var url = 'http://www.facebook.com/photo.php?fbid=' + response.id + '&makeprofile=1';
      $('.photo_link').attr('href', url);
      $('.status-done').show();
      $('.status-wait').hide();
      show_notification();
      // console.log(url)
      // notification(url);
    },

    // can't upload. error might be caused by no auth or upload error
    function(error){
      // console.log('upload error')
      // console.log(error)
      // handle upload error
    }

  )

}


function fbshare() {
  FB.ui({
    method: 'feed',
    link: 'http://www.nogiftxmas.org',
    caption: "Dear friends, in light of the recent tragedy in the Philippines, I'm taking a pledge to have a NO GIFT XMAS. Don't buy me gifts this Christmas. Instead, donate to the victims of Typhoon Yolanda at http://www.nogiftxmas.org",
  }, function(response){});
}


function fblogin() {
  
  // console.log('connecting...')

  var _when = when.defer();

  FB.login(function(response) {
    if (response.authResponse) {
      // console.log('connected')
      _when.resolve(response)

    } 
    else {
      _when.reject( 'User cancelled login or did not fully authorize.');
    // console.log('User cancelled login or did not fully authorize.');
    }
  }, {scope: 'publish_stream'});

  return _when.promise;
}




function fbuploadphoto() {
  // console.log('uploading photo');

  var _when = when.defer();

  var imgURL="http://www.nogiftxmas.org/images/nogiftxmas.png";
  
  FB.api('/me/photos', 'post', {
    message:"Dear friends, in light of the recent tragedy in the Philippines, I'm taking a pledge to have a NO GIFT XMAS. Don't buy me gifts this Christmas. Instead, donate to the victims of Typhoon Yolanda at http://www.nogiftxmas.org",
    url:imgURL        
  }, function(response){

    if (!response || response.error) {
      _when.reject(response.error);
      console.log('Error occured');
    } else {

      _when.resolve(response);
      // console.log('upload response')
      // console.log( response);
      // console.log('http://www.facebook.com/photo.php?fbid=' + response.id)
    }

  });

  return _when.promise;
}
