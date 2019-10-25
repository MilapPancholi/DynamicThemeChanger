<script>
function music(){
var audio = new Audio(data) ;

audio.oncanplaythrough = function(){
audio.play();
}

audio.loop = true;

audio.onended = function(){
audio.play();
}
}

</script>