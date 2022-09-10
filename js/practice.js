const checkPermission = () => {
    const isPermitted = confirm('DO you want to show your location?');

    if (isPermitted) {
        const { href } = window.location;
        console.log(href)
    }
}
checkPermission();