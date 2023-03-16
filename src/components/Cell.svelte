<script lang="ts">
    export let index: number;
    const color = 1 - index % 2;
    const [x, y] = [String.fromCharCode(65 + index % 8), Math.floor(index / 8) + 1];
    console.log(index);
</script>

<div>
    { x } { y } {color ? 'black' : 'white'}
</div>