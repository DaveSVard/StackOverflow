import React from "react"
import "./footer.scss"

export const Footer:React.FC = React.memo(():JSX.Element => {

    const footerContent:{id:number, title:string, texts:string[]}[] = [
        {id: 1, title: "STACK OVERFLOW", texts: ["Questions", "Help"]},
        {id: 2, title: "PRODUCTS", texts: ["Teams", "Advertising", "Collectives", "Talent"]},
        {id: 3, title: "COMPANY", texts: ["About", "Press", "Work Here", "Legal", "Privacy Policy", "Terms of Service", "Contact Us", "Cookie Settings", "Cookie Policy"]},
        {id: 4, title: "STACK EXCHANGE NETWORK", texts: ["Technology", "Culture & recreation", "Life & arts", "Science", "Professional", "Business", "API", "Data"]},
    ]

    const soc:string[] = ["Blog", "Facebook", "Twitter", "LinkedIn", "Instagram"]

    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <img src="/images/logo.png" alt="" />
                    </div>
                    <div className="footer__content">
                        {footerContent.map(elm => {
                            return(
                                <div className="footer__content-item" key={elm.id}>
                                    <h2>{elm.title}</h2>
                                    {elm.texts.map((elm, i) => {
                                        return(
                                            <div key={i}>
                                                <p>{elm}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                        <div className="soc-links">
                            {soc.map((elm, i) => {
                                return(
                                    <p key={i}>{elm}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
})