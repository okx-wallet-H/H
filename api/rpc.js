export default async function handler(req, res) {
    // 你的 QuickNode 节点
    const RPC_URL = 'https://shy-shy-surf.xlayer-mainnet.quiknode.pro/fa135d65d86e5cf4688019042067d4449f1235c5';

    try {
        const response = await fetch(RPC_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'RPC proxy failed' });
    }
}
