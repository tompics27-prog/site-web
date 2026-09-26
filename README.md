# Le Repaire Expériences

Bienvenue sur le projet **Le Repaire Expériences** ! Ce site vitrine est dédié à la vente de places pour des événements exclusifs tels que des concerts et des événements sportifs.

## Table des matières

- [Installation](#installation)
- [Fonctionnalités](#fonctionnalités)
- [Utilisation](#utilisation)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Installation

Pour installer le projet, suivez ces étapes :

1. Clonez le dépôt :
   ```
   git clone https://github.com/votre-utilisateur/le-repaire-experiences.git
   ```
2. Accédez au répertoire du projet :
   ```
   cd le-repaire-experiences
   ```
3. Installez les dépendances :
   ```
   npm install
   ```

## Fonctionnalités

- Affichage d'événements exclusifs
- Interface utilisateur réactive
- Formulaire de contact pour les réservations et les demandes d'informations

## Configuration EmailJS

Le formulaire de contact utilise EmailJS pour envoyer les messages à votre adresse email. Pour configurer l'envoi d'emails :

1. **Créez un compte EmailJS** : Allez sur [emailjs.com](https://www.emailjs.com/) et créez un compte gratuit.

2. **Configurez votre service email** :
   - Dans votre tableau de bord EmailJS, cliquez sur "Email Services"
   - Ajoutez un nouveau service (Gmail recommandé)
   - Connectez votre compte Gmail et autorisez l'accès

3. **Créez un template d'email** :
   - Allez dans "Email Templates"
   - Créez un nouveau template avec ces variables :
     ```
     Subject: Nouveau message de {{from_name}}

     Bonjour,

     Vous avez reçu un nouveau message via le formulaire de contact :

     Nom: {{nom}}
     Prénom: {{prenom}}
     Numéro: {{numero}}
     Demande: {{demande}}

     Date d'envoi: {{date_envoi}}

     Cordialement,
     L'équipe Le Repaire Expériences
     ```

4. **Récupérez vos clés API** :
   - Service ID : Trouvé dans "Email Services"
   - Template ID : Trouvé dans "Email Templates"
   - Public Key : Trouvé dans "Account" > "General"

5. **Configurez les variables d'environnement** :
   - Ouvrez le fichier `.env.local`
   - Remplacez les valeurs par vos vraies clés :
     ```
     VITE_EMAILJS_SERVICE_ID=votre_service_id
     VITE_EMAILJS_TEMPLATE_ID=votre_template_id
     VITE_EMAILJS_PUBLIC_KEY=votre_public_key
     ```

6. **Testez le formulaire** : Le formulaire de contact enverra maintenant les messages à `team.lerepaire@gmail.com`.

**Note** : Les variables d'environnement sont préfixées par `VITE_` pour être accessibles dans l'application Vite.

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer, veuillez suivre ces étapes :

1. Fork le projet
2. Créez une nouvelle branche (`git checkout -b feature/YourFeature`)
3. Commitez vos modifications (`git commit -m 'Add some feature'`)
4. Poussez la branche (`git push origin feature/YourFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.