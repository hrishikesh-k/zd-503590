import { NetlifyAPI } from '@netlify/api'

export default async function() {
  const client = new NetlifyAPI('1234myAccessToken')
  return Response.json({
    msg: 'done'
  })
}
