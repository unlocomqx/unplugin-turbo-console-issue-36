<script>
    import {initWebSocket} from "~console";
    import {browser} from "$app/environment";

    if (browser) {
        initWebSocket();
    }
</script>

<p>
    Server logs before client init are not displayed in the client console.
</p>

<p>
    But after the client init, the server logs are displayed as expected.
</p>

<p>
    You can test this by clicking this link: <a href="/test">/test</a>
</p>
