# Test la mise en place de la solution d'envoie d'émail suite à une réservation ou nous contacter
# avec l'outil EmailJS : 
#
# EmailJS permet d'envoyer l'e-mail avec JavaScript sur un site, 
# ce qui donne un contrôle total sur l'interface utilisateur après l'envoi.

Guide d'intégration avec EmailJS (Contrôle total)
1. Configuration EmailJS :

 Créez un compte sur EmailJS (le plan gratuit est suffisant).
 Ajoutez un Service d'e-mail (par exemple, Gmail, Outlook, ou votre propre SMTP).
 Créez un Modèle d'e-mail : Définissez le format de l'e-mail que vous recevrez. Vous utiliserez des variables comme {{name}}, {{email}}, etc.
 Notez vos clés : Récupérez votre Service ID, Template ID et Public Key (dans l'onglet "Account").

2. Intégration HTML/JavaScript :

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script type="text/javascript">
   (function() {
      // Initialiser avec votre Public Key
      emailjs.init({
         publicKey: "VOTRE_PUBLIC_KEY",
      });
   })();
</script>

3. Gérer la Soumission (JavaScript) :
Vous devez désormais utiliser JavaScript pour intercepter la soumission du formulaire et gérer la redirection vous-même.

<script type="text/javascript">
    // Attendre que le document soit chargé
    window.onload = function() {
        // Cibler votre formulaire par son ID
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // EMPÊCHE la soumission HTML par défaut (et la redirection Formspree !)

            // Envoyer le formulaire avec EmailJS
            emailjs.sendForm('VOTRE_SERVICE_ID', 'VOTRE_TEMPLATE_ID', this)
                .then(function() {
                    console.log('E-mail envoyé avec succès !');

                    // **********************************************
                    // C'EST ICI QUE VOUS FAITES LA REDIRECTION !
                    // **********************************************
                    window.location.href = 'https://votre-site.github.io/merci.html';
                    
                }, function(error) {
                    console.log('ÉCHEC de l\'envoi...', error);
                    // Optionnel : Afficher un message d'erreur
                    alert("Une erreur est survenue lors de l'envoi.");
                });
        });
    }
</script>