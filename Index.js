class user{
        constructor (fullname, email, password) {
                this.fullname= fullname
                this.email= email
                this.password= password
            }
            
        login(email, password) {
            
                if(this.email === email && this.password === password){
                    console.log("Login sucess!")
                }
                else{
                    console.log("Login failed, try again!")
                    }
                }
            }

const usuario = new User("Madu", "madu2469@gmail.com", "228922")
usuario.login("madu2469@gmail.com", "228922")