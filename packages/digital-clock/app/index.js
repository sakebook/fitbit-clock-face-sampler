import clock from 'clock';
import document from 'document';
import * as util from "../common/utils";

const clockText = document.getElementById('clock');

function onTick(evt) {
  const hours = evt.date.getHours();
  const minutes = evt.date.getMinutes();
  clockText.text = util.zeroPad(hours) + ":" + util.zeroPad(minutes);
}

clock.granularity = 'minutes';
clock.ontick = (evt) => onTick(evt);

