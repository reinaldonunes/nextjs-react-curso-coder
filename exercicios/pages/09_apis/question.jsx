import { useEffect, useState } from "react"

export default function question(){
    const [question, setQuestion] = useState(null)

    useEffect(() =>{
        fetch('http://localhost:3000/api/question/1234')
            .then(resp => resp.json())
            .then(setQuestion)
    }, [])
    
    function renderAnswers(){
        if(question){
            return question.respostas.map((resp, i) =>{
                return <li key={i}>{resp}</li>
            })
        }else{
            return false
        }
    }

    return(
        <div>
            <h1>Integrando com API #01</h1>
            <div>
                <span>{question?.enunciado}</span>
                <ul>
                    {renderAnswers()}
                </ul>
            </div>
        </div>
    )
}