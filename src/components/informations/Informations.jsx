import './Informations.css';
import Slide from 'react-reveal/Slide';
/* Code de l'onglet des associations à droite*/

export default function Informations() {
    const associations = [
        // Vous pouvez ajouter/modifier/supprimer de nouvelles associations en respectant la structure ci-dessous : (attention, pas de virgule pour le dernier jeu de données)
        {
            name: "Le Collectif National des Associations d'Obèses",
            website: "https://www.cnao.fr/"
        },
        {
            name: "Le G.R.O.S. (Groupe de Réflexion sur l'Obésité et le Surpoids)",
            website: "https://www.gros.org/"
        },
        {
            name: "L'Institut Fédératif des Addictions Comportementales",
            website: "https://ifac-addictions.chu-nantes.fr/"
        },
        {
            name: "Le Réseaux T.C.A. Francilien",
            website: "https://www.reseautca-idf.org/"
        },
        {
            name: "La Fédération Nationale des Associations liées aux Troubles du Conduites Alimentaires",
            website: "https://www.fna-tca.org/"
        }
    ];

    return(
        <Slide right duration={800}>
            <section className="informations-container">
                <div className="info-content">
                    {associations.map((association, index) => (
                        <div className="info-asso" key={index}>
                            <h3 className="asso-name">{association.name}</h3>
                            <a href={association.website} className="asso-link" target="_blank" rel="noopener noreferrer">
                                {association.website.substring(8, association.website.length-1)}
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </Slide>
    );
}