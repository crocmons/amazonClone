const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler (req,res){
    if (req.method === 'POST') {
        try {
    const {items,email} = req.body;
    const transformedItems = items.map((item) => ({
       
        quantity:1,
        price_data:{
            currency:"usd",
            unit_amount: item.price * 100,
            product_data:{
                name:item.title,
                images:[item.image],
                description:item.description,
            },
        }
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        shipping_options:[
            {shipping_rate:"shr_1LyduYCCa2YcUfSnyHNKpkrx"}
        ],
        shipping_address_collection:{
          allowed_countries:["GB","US","CA","IN","BD","UA","AU"]
        },
        line_items: transformedItems,
        mode:"payment",
        success_url:`${process.env.HOST}/success`,
        cancel_url:`${process.env.HOST}/checkout`,
        metadata:{
            email,
            images:JSON.stringify(items.map((item)=>item.image))
        }
    })
    // console.log(items)
    // console.log(email)
    
    res.status(200).json({id:session.id})
}catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
} else {
  res.setHeader('Allow', 'POST');
  res.status(405).end('Method Not Allowed');
}
}