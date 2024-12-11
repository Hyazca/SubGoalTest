export default async function handler(req, res) {
  const channelId = req.query.channelId || 'HyazcaHakari'; // Dapatkan channelId dari query params
  const apiKey = process.env.YOUTUBE_API_KEY;
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.items && data.items.length > 0) {
    const subscriberCount = data.items[0].statistics.subscriberCount;
    res.status(200).json({ subscriberCount });
  } else {
    res.status(404).json({ error: 'Channel not found' });
  }
}
