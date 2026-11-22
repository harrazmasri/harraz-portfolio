<script setup lang="ts">
import { AppGridHelper, type HomeScreenType } from '@/assets/ts/helpers/AppGridHelper';
import { TimeDateHelper } from '@/assets/ts/helpers/TimeDateHelper';
import { WallpaperHelper, type WallpaperType } from '@/assets/ts/helpers/WallpaperHelper';
import { onMounted, ref } from 'vue';
import AppButton from './HomeScreenComponent/AppButton.vue';

const wallpapers = ref<WallpaperType[]>([]);
const timeFormatted = ref<string>('');
const dateFormatted = ref<string>('');
const systemTextColor = 'dark';
const homeScreenApps = ref<HomeScreenType>();

onMounted(() => {
    wallpapers.value = WallpaperHelper.getWallpapers();
    timeFormatted.value = TimeDateHelper.getTime();
    dateFormatted.value = TimeDateHelper.getDate();
    homeScreenApps.value = AppGridHelper.getAppGrid();

    console.log(homeScreenApps.value);
});
</script>

<template>
    <!-- wallpaper -->
    <img v-for="item in wallpapers" :src="item.path" class="absolute top-0 left-0 -z-10 w-full h-screen object-cover"
        alt="" />

    <div class="relative w-full h-full flex flex-col gap-2">
        <!-- util bar -->
        <div class="w-full flex justify-between items-center py-[12px] px-[40px] text-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
            :class="systemTextColor === 'dark' ? 'text-white' : ''">
            <div class="flex gap-5 items-center">
                <p>{{ timeFormatted }}</p>
                <p>{{ dateFormatted }}</p>
            </div>
            <div>
                <p>Harraz Masri</p>
            </div>
            <div class="flex items-center gap-3">
                <p>59%</p>
                <div class="relative w-fit h-fit flex gap-[1px] items-center">
                    <div class="w-[40px] h-[21px] rounded-[7px] border-2 border-white/30 p-[2px]">
                        <div class="w-[8px] h-full rounded-[4px] bg-white"></div>
                    </div>
                    <div class="w-[2px] h-[7px] bg-white/30 rounded-r-[2px]"></div>
                </div>
            </div>
        </div>

        <div class="relative w-full grow  pt-[40px] px-[90px]">
            <div v-for="(page, pageIndex) in homeScreenApps?.gridApps" class="w-full flex gap-[90px]">
                <!-- widget -->
                <div v-if="pageIndex === 0" class="w-[300px] h-fit flex flex-col gap-4">
                    <div class="w-full h-[150px] p-5 bg-white/40 backdrop-blur-md rounded-[25px]"></div>
                </div>

                <!-- grid app -->
                <div class="w-full grid grid-flow-row grid-cols-5 grid-rows-5 gap-[20px] place-items-center">
                    <button 
                        v-for="app in page.apps" 
                        :disabled="app.isDisabled"
                    >
                        <AppButton :app="app" />
                    </button>
                </div>
            </div>
        </div>

        <div class="w-full flex items-center justify-center p-4">
            <div class="w-fit bg-white/40 backdrop-blur-lg p-[30px] gap-[30px] flex items-center rounded-[50px]">
                <button 
                    v-for="app in homeScreenApps?.dockApps" 
                    :disabled="app.isDisabled"
                    class="disabled:pointer-events-none disabled:opacity-50 group"
                >
                    <AppButton :app="app" :isDocked="true" />
                </button>
            </div>
        </div>
    </div>

</template>