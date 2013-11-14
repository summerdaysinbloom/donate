



function post_to_fb() {

/*
  login first
  then upload photo
*/


  fblogin()
  .then(
  
    // success
    fbuploadphoto 

    // don't handler error. it will be passed down to next then()
  )
  .then(

    // upload success
    function(response){
      console.log('upload done');
      console.log(response);

      // this is the url
      console.log('http://www.facebook.com/photo.php?fbid=' + response.id)
    },

    // can't upload. error might be caused by no auth or upload error
    function(error){
      console.log('upload error')
      console.log(error)
      // handle upload error
    }

  )

}




function fblogin() {
  
  console.log('connecting...')

  var _when = when.defer();

  FB.login(function(response) {
    if (response.authResponse) {
      console.log('connected')
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
  console.log('uploading photo');

  var _when = when.defer();

  var imgURL="http://farm3.staticflickr.com/2853/10844116373_00288eca2e_z.jpg";//change with your external photo url
  
  FB.api('/me/photos', 'post', {
    message:'my photo description3',
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