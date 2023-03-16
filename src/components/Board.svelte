<script>

    import Cell from "./Cell.svelte";

</script>
<style lang="scss">
    @use "../scss/board.scss";
</style>


<div class="board">
    { #each Array(64) as _, i }
        <Cell index={i} />
    { /each }

</div>