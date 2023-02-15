
import { useContext } from 'react'
import styled from 'styled-components'
import DataContext from '../Context/DataContext'

import "../Styles/Search.css"

export default function () {

    const { query, setQuery, theme, setTheme } = useContext(DataContext)

    return (
        <div className='SearchContainer'>
            <input className='input' type="text"
                placeholder='Search By Place...'
                value={query} onChange={(e) => { setQuery(e.target.value) }}
            />
            <ThemeButton style={theme ? { background: "#FFFFFF", transition: "1s" } :
                { background: "#312121", color: "white", transition: "1s" }} onClick={() => { setTheme(!theme) }}>Theme</ThemeButton>
        </div>


    )
}


const ThemeButton = styled.button`
border:0;
border-radius:20px;
padding:0.5rem
`


