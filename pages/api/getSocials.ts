// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'

//execute query

const query = groq`
  *[_type == 'social']`

type Data = {
  socials: Social[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const socials: Social[] = await sanityClient.fetch(query)

  res.status(200).json({ socials })
}
