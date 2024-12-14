function ajouterAuPanier(produit) {
    alert(produit + ' a été ajouté au panier !');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci de nous avoir contactés ! Nous vous reviendrons dés que possible.');
});
