export class HideFunction
{
    public hide() {
        let elementForHide1:any=document.getElementById('startpage');
        elementForHide1.style.display = 'none'; 
        let elementForHide2:any=document.getElementById('canvas');
        elementForHide2.style.display = 'block';
    }
}

