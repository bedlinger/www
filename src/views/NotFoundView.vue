<template>
    <div class="min-h-[calc(100vh-13rem)] flex flex-col gap-3 justify-center items-center">
        <Message severity="error">Route was not found</Message>
        <Button label="Go to Home" variant="" @click="$router.push('/')" />
    </div>
</template>
