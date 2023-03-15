<style lang="scss">
    @use "../scss/board.scss";
</style>

<!-- <style src="../scss/a.css"></style> -->

<script lang="ts">
    import { onMount } from "svelte";
    let root: HTMLDivElement;
    
    onMount(() => {
        for (let i = 0; i < 64; i++) {
            const color = 1 - i % 2;
            const [x, y] = [String.fromCharCode(65 + i % 8), Math.floor(i / 8) + 1];
            let square = document.createElement('div');
            square.classList.add('cell');
            square.innerHTML = `${x} ${y} ${color ? 'black' : 'white'}`;
            root.appendChild(square);
        }
    })
    
</script>


<div bind:this={root} class="board">
    
</div>