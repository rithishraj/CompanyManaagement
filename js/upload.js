function insert() {
    var userid=document.getElementById("userid").value;
    var name=document.getElementById("name").value;
    var gender=document.getElementById("gender").value;
    var qualification=document.getElementById("qualification").value;
    var age=document.getElementById("age").value;
    var phone=document.getElementById("phone").value;
    var cgpa=document.getElementById("cgpa").value;
    var address=document.getElementById("add").value;
    //pre built function to upload data to firebase
    //path where your data will be stored
    firebase.database().ref('user/'+userid).set({
        userId:userid,
        userName: name,
        userGender: gender,
        userqualification: qualification,
        userage: age,
        userphone: phone,
        cgpa: cgpa,
        add: address
    });
    alert("data uploded")

}