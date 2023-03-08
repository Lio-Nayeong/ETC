<script>
    import '../app.css'
    
    const NAVIGATION_MENUS = [
    { name: "home", page: "/" },
    { name: "intro", page: "/01-intro" },
    { name: "base-syntax", page: "/02-base-syntax" },
    ];

</script>

<div>
    <a href="/">home</a>
    <a href="/01-intro">intro</a>
    <a href="/02-base-syntax">base-syntax</a>
</div>

<slot />

