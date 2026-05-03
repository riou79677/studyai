export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const event = req.body;

  // Vérifier le type d'événement Stripe
  if (event.type === 'checkout.session.completed' || 
      event.type === 'customer.subscription.created' ||
      event.type === 'customer.subscription.updated') {

    const customerEmail = event.data.object.customer_email || 
                         event.data.object.customer_details?.email;
    
    const priceId = event.data.object.items?.data[0]?.price?.id ||
                   event.data.object.line_items?.data[0]?.price?.id;

    // Déterminer le plan selon le prix
    let plan = 'starter';
    let limit = 5;

    if (priceId) {
      if (priceId.includes('ultimate')) {
        plan = 'ultimate';
        limit = 999999;
      } else if (priceId.includes('pro')) {
        plan = 'pro';
        limit = 50;
      }
    }

    // Mettre à jour Supabase
    if (customerEmail) {
      await fetch(`${process.env.SUPABASE_URL}/rest/v1/users?email=eq.${customerEmail}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ 
          plan: plan,
          generations_limit: limit,
          updated_at: new Date().toISOString()
        })
      });
    }
  }

  return res.status(200).json({ received: true });
}
