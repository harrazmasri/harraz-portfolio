<script setup lang="ts">
import type { AppType } from '@/assets/ts/helpers/AppGridHelper';
import { onMounted } from 'vue';

const props = defineProps<{
    app: AppType,
    isDocked?: boolean,
}>();

const systemTextColor = 'dark';

onMounted(() => {
    console.log(props.app)
});
</script>

<template>
    <div 
        v-if="props.app"
        class="w-[90px] aspect-square rounded-[25px] overflow-clip transition duration-100 hover:brightness-90 cursor-pointer flex flex-col gap-2 items-center text-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
        :class="[
            systemTextColor === 'dark' ? 'text-white' : '',
            props.app.isDisabled? 'pointer-events-none opacity-60 brightness-90' : ''
        ]"
    >
        <div class="w-fit">
            <img v-if="props.app.icon" :src="props.app.icon" :alt="props.app.name" />
            <div v-else class="w-[90px] bg-gray-200"></div>
        </div>
        <p v-if="!props.isDocked">{{ app.name }}</p>
    </div>
    <div v-else class="w-[90px] aspect-square rounded-[25px] bg-gray-800 opacity-50"></div>
</template>