export interface WallpaperType {
    id: number;
    path: string;
}

export class WallpaperHelper {
    public static getWallpapers(): WallpaperType[] {
        const modules = import.meta.glob(
            "/public/images/HomeScreen/wallpaper/*.{png,jpg,jpeg,webp,gif}",
            {
                eager: true,
                import: "default",
            }
        ) as Record<string, string>;

        return Object.values(modules).map((path, index) => ({
            id: index + 1,
            path,
        }));
    }
}