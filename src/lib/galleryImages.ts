import type { ImageMetadata } from 'astro';

// Eagerly import every jpeg in src/assets, unwrapped straight to ImageMetadata
const imageFiles = import.meta.glob<ImageMetadata>('../assets/*.jpeg', {
    eager: true,
    import: 'default',
});

export interface GalleryImage {
    src: ImageMetadata;
    name: string;
    order: number;
}

function numberFromFilename(path: string): number {
    const filename = path.split('/').pop() ?? '';
    const match = filename.match(/\d+/);
    return match ? parseInt(match[0], 10) : Number.MAX_SAFE_INTEGER;
}

export const galleryImages: GalleryImage[] = Object.entries(imageFiles)
    .map(([path, src]) => ({
        src,
        name: path.split('/').pop() ?? path,
        order: numberFromFilename(path),
    }))
    .sort((a, b) => a.order - b.order);
