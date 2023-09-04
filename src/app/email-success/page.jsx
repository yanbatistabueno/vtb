export default function EmailSuccess({searchParams}){

    console.log(searchParams)
    const h1Text = searchParams.type == "success" ? "E-mail enviado com sucesso!" : searchParams.type == "fail" ? "Falha no envio de e-mail." : "Url acessada de maneira indevida."
    const pText = searchParams.type == "success" ? "Seu e-mail chegou em nosso banco de dados com sucesso. Retornaremos com uma reposta assim que possível." : searchParams.type == "fail" ? "Falha ao enviar seu e-mail ao nosso banco de dados. Reenvie novamente ou contate o nosso suporte." : "Retorne a home do site."
    return <main>
        <h1><span>{h1Text}</span></h1>
        
        <p>{pText}</p>

        {searchParams.type == "success" &&
            <div>
                <h2>Aqui está as informações que nos fora enviada:</h2>
                <ul>
                    <li>{searchParams.name}</li>
                    <li>{searchParams.email}</li>
                </ul>
            </div>
        }
    </main>
}