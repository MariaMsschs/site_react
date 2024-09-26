import "./style.css"

export default function Advertisement({text, linkText, linkAdress,languages}){
    return(
        <div>
            <section>
                <p>{text}</p>
                <a href="{linkAdress}">{linkText}</a>
                <select name="languages" id="languages">
                    {languages.map((language) => (<option key={language}>{language}</option>))}
                </select>
            </section>
        </div>
    )    
}