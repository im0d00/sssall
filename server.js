const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/download', async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: 'No URL provided' });

    try {
        // Use yt-dlp to get direct download link
        const command = `yt-dlp --dump-json --no-warnings "${url}"`;
        
        exec(command, (error, stdout) => {
            if (error) return res.status(500).json({ error: 'Failed to process video' });
            
            const info = JSON.parse(stdout);
            res.json({
                success: true,
                title: info.title || 'Video',
                thumbnail: info.thumbnail,
                videoUrl: info.url || info.formats?.[0]?.url,
                platform: info.extractor_key
            });
        });
    } catch (e) {
        res.status(500).json({ error: 'Server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));