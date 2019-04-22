var objMember = [
      {
          username: "test",
          password: "12345",
          Email:"test123@gmail.com",
          address:"32 Le Loi Hai Chau ĐN",
          PhoneNumber:"0132456879",
          dob:"12/11/1998"
      },
      {
          username: "test1",
          password: "123456",
          Email:"test1234@gmail.com",
          address:"32 Le Loi Hai Chau ĐN",
          PhoneNumber:"0132456879",
          dob:"06/08/1996"
      }
   ];

   

  var user_id = 0;
  function check_user()
  {
      var username = document.getElementById("user").value;
      for(var i = 0 ; i < Object.keys(objMember).length ;i++)
      {
          if( username == objMember[i].username){
              user_id = i;
              return true;
          }
      }
      return false;
  }
  
  function  check_pass()
  {
      var password = document.getElementById('password').value;
      if(password == objMember[user_id].password){
          return true;
      }
      return false;
  }
  
  
  
  function checklogin() {
      document.getElementById("login-success").innerHTML = "";
      if(!check_user()){
          document.getElementById("user-warning-log").innerHTML = "Username is not exits";
          return;
      }
      document.getElementById("user-warning-log").innerHTML = "";
      if(!check_pass()){
          document.getElementById("pass-warning-log").innerHTML = "Password is invalid";
          return;
      }
      document.getElementById("pass-warning-log").innerHTML = "";
      login_successed();
  }
  
  
  function login_successed(){
      document.getElementById("box-login-sign").style.display = "none";
      document.getElementById("login-with-tabs").style.display = "none";
      document.getElementById("login-success").innerHTML = "LOGIN SUCCESS!!";
      document.getElementById("change_click").style.display = "block";
      // document.getElementById("sign_in").style.display = "block";
  
  }
  
  function profile_user() {
      document.getElementById("hello_user").innerHTML = 'Hi, <span>'+objMember[user_id].username+'</span>';
      // document.getElementById("chang_infor").style.display = "block";
      document.getElementById("hello_user").style.color = "red";
      document.getElementById("information").style.display = "block";
      for(var i = 0 ; i < Object.keys(objMember).length ;i++)
      {
          if(objMember[user_id].username == objMember[i].username) {
              var user_num = i;
          }
      }
      document.getElementById("infor_user").innerHTML = '<div class="row" style="padding: 5px 0;">\n' +
          '            <label class="col-md-3">Name :</label><br />\n' +
          '            <input type="text" id="user-now" style="margin: auto;" class="inputText col-md-9 form-control" placeholder="'+objMember[user_num].username+'"  readonly/>\n' +
          '        </div>\n' +
          '        <div class="row" style="padding: 5px 0;">\n' +
          '            <label class="col-md-3">Email :</label><br />\n' +
          '            <input type="Email" id="mail-now" style="margin: auto;" class="inputText col-md-9 form-control" placeholder="'+objMember[user_num].Email+'" readonly />\n' +
          '        </div>\n' +
          '        <div class="row" style="padding: 5px 0;">\n' +
          '           <label class="col-md-3">Date of birth :</label><br />\n' +
          '           <input type="text" id="dob-now" style="margin: auto;" class="inputText col-md-9 form-control" placeholder="'+objMember[user_num].dob+'" readonly />\n' +
          '        </div>\n' +
          '        <div class="row" style="padding: 5px 0;">\n' +
          '           <label class="col-md-3">Address :</label><br />\n' +
          '           <input type="text" id="address-now" style="margin: auto;" class="inputText col-md-9 form-control" placeholder="'+objMember[user_num].address+'" readonly />\n' +
          '        </div style="padding: 5px 0;">\n' +
          '        <div class="row">\n' +
          '           <label class="col-md-3">Phone Number :</label><br />\n' +
          '           <input type="text" id="phone-now" style="margin: auto;" class="inputText col-md-9 form-control" placeholder="'+objMember[user_num].PhoneNumber+'" readonly />\n' +
          '        </div>';
  }