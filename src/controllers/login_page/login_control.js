function login_control( users , user_email , user_psw , setShouldShow , setMsg){
    
    if (user_email.length === 0 || user_psw.length === 0) {
        setMsg("Não é possível logar com algum dos campos vazios!")
        setShouldShow(true)
    } else{
        for(let i=0;i<users[0].length;i++){ 
            if(user_email[0] === users[0][i].email){
                if (user_psw[0] === users[0][i].password){
                    setMsg('Logado com sucesso!')
                    setShouldShow(true)
                    return
                } else{
                    setMsg('Senha inválida!')
                    setShouldShow(true)
                    return
                }
            } 
        } 
        setMsg('Email não cadastrado!')
        setShouldShow(true)
        return
    }  
}

export default login_control
