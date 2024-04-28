
load()
function load(){
  
  const {figure,img,figcaption} = makeLightBox();  
  document.body.appendChild(figure);  
  
  figure.onclick = ()=>{
    figure.style.display = 'none';
  }
  window.addEventListener('click',(event)=>{
    if(event.target.tagName =='IMG'){
      const me = event.target
      img.src = me.src
      img.alt = me.alt
      figcaption.textContent = me.alt
      figure.style.display = 'flex';
    }    
  })
  
  console.log('lightbox ready!')
  
}

function makeStyle(){
  const temp=`
#lightbox{
  margin:auto;
 position:fixed;
 top:0px;
 left:0px;
 width:100%;
 height:100%;
 background:rgba(0,0,0,0.8);
 z-index:9999;
 display:flex;
  justify-content:center;  
  align-items:center;
  flex-direction:column;
}
#lightbox img{
 width:80%;
 height:80%;
 object-fit:contain;
}
#lightbox figcaption{
 font-size:12px;
 text-align:center;
 color:#fff;
}  
  `;
  const style = document.createElement('style')
  style.textContent = temp;
  return style;
}
function makeLightBox(){
  // Create figure element
  const figure = document.createElement('figure');
  figure.id = 'lightbox';
  figure.style.display = 'none';

  // Create img element
  const img = document.createElement('img');
  img.src = '';
  img.alt = '...';
  figure.appendChild(img);

  // Create figcaption element
  const figcaption = document.createElement('figcaption');
  figure.appendChild(figcaption);
  
  const style = makeStyle()
  figure.appendChild(style);

  return {figure, img, figcaption};
}
