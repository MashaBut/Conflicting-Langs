export class TreatmentCanvas
{
    public static hide() {
        let elementForHide1:HTMLElement=<HTMLElement>document.getElementById('startpage');
        elementForHide1.style.display = 'none'; 
        let elementForHide2:HTMLElement=<HTMLElement>document.getElementById('canvas');
        elementForHide2.style.display = 'block';
    }
}

