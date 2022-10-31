import './UserAvatar.css';
/* Composant de création de l'avatar de l'utilisateur qui reprend le nom entré en page de login. */

export default function userAvatar(){
    const name = localStorage.getItem("NAME");

    return(
        <section className="user-avatar">
            {name.charAt(0)}
        </section>
    );
}