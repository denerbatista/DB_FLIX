const iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/uxR_sTZnBtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

function clearIframe(teste){
    const newString = teste.replace(/iframe/g, '').replace(/[<>/"]/g, '')
    console.log(newString)
}

clearIframe(iframe)