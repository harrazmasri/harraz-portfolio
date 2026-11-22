import HomeScreenJSON from '@/assets/json/AppGrid.json';

export interface HomeScreenType {
    gridApps: AppGridType[],
    dockApps: AppType[],
}

export interface AppGridType {
    page: number,
    apps: AppType[],
}

export interface AppType {
    icon: string,
    componentAlias: string,
    name: string,
    isDisabled: boolean,
}

export class AppGridHelper {
    private static icons = import.meta.glob(
        "/src/assets/images/appIcons/*.{png,jpg,jpeg,webp,svg}",
        {
            eager: true,
            import: "default",
        }
    ) as Record<string, string>;

    private static resolveIcon (iconName: string): any {
        const matchKey = Object.keys(this.icons).find((key) => key.endsWith(`/${iconName}`));
        return matchKey? this.icons[matchKey] : "";
    }

    public static getAppGrid (): HomeScreenType {
        return {
            ...HomeScreenJSON,
            dockApps: HomeScreenJSON.dockApps.map((item) => ({
                ...item,
                icon: this.resolveIcon(item.icon),
            })),
            gridApps: HomeScreenJSON.gridApps.map((page) => ({
                ...page,
                apps: page.apps.map((item) => ({
                    ...item,
                    icon: this.resolveIcon(item.icon),
                })),
            })),
        };
    }
}