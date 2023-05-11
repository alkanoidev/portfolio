mkdir processed
for f in ./*.jpg ./*.png ./*.jpeg ./*.webp
 do
        ffmpeg -i $f -q:v 60 processed/$f -y
done