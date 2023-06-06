import React, { useState } from "react";
import "./PostPage.css"
import { useParams } from "react-router-dom";

const PostPage = () => {

    const {id} = useParams();
    

    const [mobiles, setMobiles] = useState([
        {id: 1, title: "Nokia G11", desc: "Три дня на одном заряде батареи¹, ежемесячные обновления для системы безопасности в течение трех лет и два года обновлений операционной системы", image: "https://images.ctfassets.net/wcfotm6rrl7u/71ios42vvVVKtB0jM1UHBN/113d6d7e3b36ec240b425a338591dd82/nokia-G11-ice-emotional-int.png?h=600&fm=avif", price: 299.00},
        {id: 2, title: "Nokia G21", desc: "4 GB ОПЕРАТИВНАЯ ПАМЯТЬ, 64 GB Внутрення память, Две SIM-карты", image: "https://images.ctfassets.net/wcfotm6rrl7u/1oHr4nZNeSaspzilDiRS3z/e2e5075bd7075ab53697cc45117b8928/nokia-G21-nordic_blue-emotional-int.png?h=600&fm=avif", price: 499.00},
        {id: 3, title: "Nokia G50", desc: "4 GB ОПЕРАТИВНАЯ ПАМЯТЬ, 128 GB Внутрення память, Две SIM-карты", image: "https://images.ctfassets.net/wcfotm6rrl7u/76fSPXUoCY4M6TVXVK1ofr/582329d4c4bdb6e79b9a9fbdf1f5e371/nokia-G50-ocean_blue-front_back-int.png?h=600&fm=avif", price: 659.00},
        {id: 4, title: "Nokia XR20", desc: "Ваш новый смартфон с вами надолго Не потеряет привлекательности со временем, несмотря на регулярные падения.", image: "https://images.ctfassets.net/wcfotm6rrl7u/7CPGTsav8jpQzDNf1cWFJ4/cf86703856765c82721a757dcf78dfec/nokia-XR20-granite-front_back-int.png?h=600&fm=avif", price: 699.00},
        {id: 5, title: "Nokia C30", desc: "От вашего нового смартфона невозможно оторваться — батарея держит заряд до трех дней, а на большом экране все отлично видно.", image: "https://images.ctfassets.net/wcfotm6rrl7u/4PcbRwhpflybkaaklmxyHr/648823c3e00e0f21b531842afad2674b/nokia-C30-green-front_back-int.png?h=600&fm=avif", price: 799.00},
    ])

    return(
        <div className="post__box">
            <h1>{mobiles[id - 1].title}</h1>
            <img src={mobiles[id - 1].image}/>
            <h3>{mobiles[id - 1].desc}</h3>
            <button>Купить</button>
        </div>
    )
}

export {PostPage};