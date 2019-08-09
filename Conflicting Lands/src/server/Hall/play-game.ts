import { ManipulationWithDOM } from "../../modules/controllers/manipulations-with-dom";
import { fromEvent } from "rxjs";
import { ConcealCanvas } from "../../modules/start/ux/scripts/hide-function";
import { take } from "rxjs/operators";

fromEvent(ManipulationWithDOM.writeNames, 'click')
    .pipe(take(1))
    .subscribe(() => {
       // game.setPlayerNames();
        ConcealCanvas.hideStartPage();
    })