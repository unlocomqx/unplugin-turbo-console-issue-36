<script>
    import {browser} from "$app/environment";
    import {initWebSocket} from "~console";

    if (browser) {
        initWebSocket()
    }
</script>

<slot></slot>
