<script>
    
    import Cell from "./Cell.svelte";

</script>
<style lang="scss">
.board {
    display: grid;
    grid-template-columns: repeat(8, 50px);
    grid-template-rows: repeat(8, 50px);
}
</style>


<div class="board">
    { #each Array(64) as _, i }
        <Cell index={63 - i} />
    { /each }

</div>