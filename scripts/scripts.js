const switchPlatform = (id) => { 
    const platform = document.getElementById(id)
    console.log(platform.className)
    platform.classList.add('selected')
    platform.classList.remove('not-selected');
}

export default switchPlatform