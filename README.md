# StudyAI — Guide de déploiement sur Vercel

## Ce que contient ce dossier

```
studyai/
├── index.html        → Page principale du générateur
├── style.css         → Design dark premium
├── app.js            → Logique frontend
├── vercel.json       → Configuration Vercel
├── api/
│   └── generate.js   → Backend sécurisé (appelle l'API Claude)
└── README.md         → Ce fichier
```

---

## Étape 1 — Créer ta clé API Anthropic (gratuit)

1. Va sur https://console.anthropic.com
2. Crée un compte (email + mot de passe)
3. Va dans "API Keys" → "Create Key"
4. Copie la clé (commence par `sk-ant-...`)
5. **Garde-la précieusement, tu ne pourras plus la revoir**

💡 Le coût : environ 0,003€ par génération. Avec 100 générations/jour → ~0,30€/jour.

---

## Étape 2 — Créer un compte Vercel (gratuit)

1. Va sur https://vercel.com
2. Clique "Sign Up" → connecte-toi avec GitHub (le plus simple)
3. Si tu n'as pas GitHub : https://github.com → crée un compte gratuit

---

## Étape 3 — Mettre le code sur GitHub

1. Va sur https://github.com → "New repository"
2. Nom : `studyai` → "Create repository"
3. Glisse tous les fichiers de ce dossier dans le repository
4. Clique "Commit changes"

---

## Étape 4 — Déployer sur Vercel

1. Sur Vercel, clique "Add New Project"
2. Sélectionne ton repository GitHub `studyai`
3. Clique "Deploy" (ne touche à rien d'autre)
4. **AVANT de finir** → va dans "Environment Variables" et ajoute :
   - **Name** : `ANTHROPIC_API_KEY`
   - **Value** : ta clé `sk-ant-...`
5. Clique "Deploy"

✅ En 2 minutes, ton site est en ligne sur une URL du type `studyai.vercel.app`

---

## Étape 5 — Domaine personnalisé (optionnel, ~12€/an)

1. Achète `studyai.fr` ou `getstudy.ai` sur OVH ou Gandi
2. Dans Vercel → Settings → Domains → ajoute ton domaine
3. Suis les instructions DNS (5 minutes)

---

## Étape 6 — Tester que tout fonctionne

1. Ouvre ton URL Vercel
2. Colle un texte de cours
3. Clique "Générer avec l'IA"
4. Tu dois obtenir un vrai résultat en 10-15 secondes ✅

---

## En cas de problème

- **Erreur 500** → Ta clé API est incorrecte, vérifie dans Vercel → Settings → Environment Variables
- **Erreur "Failed to fetch"** → Le fichier vercel.json n'est pas bien placé (à la racine)
- **Page blanche** → Vide le cache navigateur (Ctrl+Shift+R)

---

## Prochaines étapes business

- [ ] Ajouter Supabase pour les comptes utilisateurs (gratuit jusqu'à 50K users)
- [ ] Intégrer Stripe pour les paiements Pro/Ultimate
- [ ] Créer la landing page marketing (déjà designée !)
- [ ] Lancer sur TikTok avec une démo en vidéo

---

Bonne chance Ilan ! 🚀 Tu as tout ce qu'il faut pour réussir.
