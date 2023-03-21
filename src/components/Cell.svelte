<script lang="ts">
    export let index: number;
    const color = (index % 8 + Math.floor(index / 8)) % 2;
    const [x, y] = [String.fromCharCode(65 + 7 - index % 8), Math.floor(index / 8) + 1];
</script>

<style lang="scss">
    .cell {
        width: 50px;
        height: 50px;
        aspect-ratio: 1;
    }
</style>

<div class="cell" style={`background: ${color ? 'black': 'white'}; color: ${!color ? 'black': 'white'}`}>
    { x } { y } {color ? 'black': 'white'}
</div>