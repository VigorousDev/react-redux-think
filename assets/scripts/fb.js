let resolve

const p = new Promise(r => {
  resolve = r
})

global.fbAsyncInit = function() {
  FB.init({
    appId: process.env.CONFIG_FB_ID,
    status: true,
    xfbml: false,
    version: 'v2.8'
  })
  resolve(FB)
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0]
   if (d.getElementById(id)) {return}
   js = d.createElement(s); js.id = id
   js.src = '//connect.facebook.net/en_US/sdk.js'
   fjs.parentNode.insertBefore(js, fjs)
 }(document, 'script', 'facebook-jssdk'))

 export const fetchSDK = function() {
   return Promise.resolve(p)
 }
