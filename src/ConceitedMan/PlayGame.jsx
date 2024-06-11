import { useEffect, useState } from "react";
import "./Conceited.css";

const PlayGame = ({ onChangeScore }) => {
    const [defaultData] = useState("The conceited man stood proudly on his tiny planet, his nose held high in the air. 'I am the most handsome, the most intelligent, and the most admired in all the universe,' he proclaimed, not noticing that he was the only inhabitant of his world. 'Applaud me!' he demanded, and the little prince, bemused, clapped politely, wondering how someone could be so self-absorbed and yet so lonely.")
    const [dataTyping, setDataTyping] = useState([])
    const [textTyping, setTextTyping] = useState({
        value: "",
        position: 0
    })

    useEffect(() => {
        const addWord = (quantity = 20) => {
            const arrayDefaultDB = defaultData.split(" ")
            const dataTypingTest = []
            for (let index = 0; index < quantity; index++) {
                const position = Math.floor(Math.random() * arrayDefaultDB.length)
                dataTypingTest.push({
                    value: arrayDefaultDB[position],
                    status: null
                })
            }
            setDataTyping(dataTypingTest)
        }
        if (dataTyping.length === 0 || textTyping.position >= dataTyping.length) {
            addWord()
            setTextTyping({ ...textTyping, position: 0})
        }
    }, [textTyping.position])
    
    const handleChangeTyping = e => {
        const valueInput = e.target.value
        if (!valueInput.includes(" ")) {
            setTextTyping({
                ...textTyping,
                value: valueInput
            })
        } else if (textTyping.value !== "") {
            checkResult()
        }
    }

    const checkResult = () => {
        const dataCheck = dataTyping
        const wordCheck = dataCheck[textTyping.position].value
        if (textTyping.value === wordCheck) {
            dataCheck[textTyping.position].status = true
            onChangeScore("right")
        } else {
            dataCheck[textTyping.position].status = false
            onChangeScore("wrong");
        }
        setDataTyping(dataCheck)
        setTextTyping({
            value: "",
            position: textTyping.position + 1
        })
    }
    console.log(dataTyping)
    return (
        <div className="playing">
            <ul className="list">
                {
                    dataTyping.map((word, index) =>
                        <li
                            key={index}
                            className={
                                word.status === true
                                    ? "true"
                                    : word.status === false
                                        ? "false"
                                        : ""
                            }
                        >
                            {
                                word.value
                            }
                        </li>    
                    )
                }
            </ul>
            <div className="inputForm">
                <input
                    type="text"
                    onChange={handleChangeTyping}
                    value={textTyping.value} />
            </div>
      </div>
  ) 
};

export default PlayGame;
