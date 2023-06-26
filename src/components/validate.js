export const validate = (data, type) => {
      const errors = {};
      var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var validPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{5,16}$/;

      
      if(!data.email){
            errors.email = 'Email is required'
      }
      else if(!data.email.match(validEmail)){
            errors.email = 'Email is invalid'
      }
      else{
            delete errors.email
      }

      if(!data.password){
            errors.password = 'Password is required'
      }
      else if(!data.password.match(validPassword)){
            errors.password = 'At least  5 characters & one letter'
      }
      else{
            delete errors.password
      }


      if (type === 'signup'){

            if(!data.name.trim()){
                  errors.name = 'Name is invalid'
            }
            else{
                  delete errors.name
            }

            if(!data.confirmPassword){
                  errors.confirmPassword = 'Confirm is required'
            }
            else if(data.password !== data.confirmPassword){
                  errors.confirmPassword = "Password don't match"
            }
            else{
                  delete errors.confirmPassword
            }
      
            if(data.isAccepted){
                  delete errors.isAccepted
            }
            else{
                  errors.isAccepted = 'Accepted our regulations'
            }
      
      

      }

      return errors;
}