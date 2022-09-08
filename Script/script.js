let form = document.getElementById('form');

form.children.calculer.addEventListener("click", () =>{
    let valeur_champ = form.children.champ_nb.value;                              
    if (valeur_champ == ""){   // On ne calcule pas la factorielle si le champ est vide
        afficherReponse("Valeur requise", "red");  
        return;
    }
    const texte = `La factorielle de ${valeur_champ} vaut ${factorielle(valeur_champ)}`;
    afficherReponse(texte, "blue");                          
})

var factorielle = (n) =>{   // Fonction recursive calculant la factorielle de n
    return n == 0 ? 1 : n * factorielle(n-1);
}

var afficherReponse = (texte, couleur) =>{ // Fonction pour affichage de la reponse et sa mise en forme selon le cas
    form.children.reponse.textContent = texte;
    form.children.reponse.style.color = couleur;
}