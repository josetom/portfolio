import type { NextApiRequest, NextApiResponse } from 'next';
import { withSentry } from '@sentry/nextjs';
import prisma from '@/lib/prisma';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const slug = req.query.slug.toString();

    if (req.method === 'POST') {
      const newOrUpdatedViews = await prisma.blog.upsert({
        where: { slug },
        create: {
          slug,
        },
        update: {
          views: {
            increment: 1,
          },
        },
      });

      return res.status(200).json({
        total: newOrUpdatedViews.views.toString(),
      });
    }

    if (req.method === 'GET') {
      const blog = await prisma.blog.findUnique({
        where: {
          slug,
        },
      });

      return res.status(200).json({ total: blog?.views.toString() });
    }
  } catch (e: any) {
    console.log(e.message);
    return res.status(500).json({ message: 'Sorry, something went wrong!' });
  }
}

export default withSentry(handler);
