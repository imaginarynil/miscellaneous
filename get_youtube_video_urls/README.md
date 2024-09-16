## Description

Get video urls from a YouTube channel or playlist. `yt-dlp` script for audio and video is available.

## How To Use

- Download [yt-dlp.exe](https://github.com/yt-dlp/yt-dlp/releases)
- If source is a YouTube channel
  - Scroll down until you reach the bottom
  - Download urls using `get_urls.js`
- If source is a YouTube playlist
  - YouTube shows a playlist video with order `i` to `i + 199` or 200 videos at a time
  - Download urls from the first 200 videos using `get_urls.js`
  - Click video `i + 199` to get the next 199 videos and download urls. Repeat until all videos in the playlist are visited.
- Copy urls to `input.txt`
- Run `download_audios.bat` or `download_videos.bat`