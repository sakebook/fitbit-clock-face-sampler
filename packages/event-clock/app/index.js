import clock from 'clock';
import document from 'document';
import * as util from '../common/utils';
import * as file from '../common/file';

const clock24group = document.getElementById('clock-24-group');
const clock12group = document.getElementById('clock-12-group');
const clock24 = document.getElementById('clock-24');
const clock12 = document.getElementById('clock-12');
const clock12am = document.getElementById('clock-12-am');
const clock12pm = document.getElementById('clock-12-pm');
const button12 = document.getElementById('button-12');
const button24 = document.getElementById('button-24');

function update12clock(hours) {
  const isAM = (hours < 12);
  if (isAM) {
    clock12am.style.fill = 'fb-peach';
    clock12pm.style.fill = 'fb-extra-dark-gray';
  } else {
    clock12am.style.fill = 'fb-extra-dark-gray';
    clock12pm.style.fill = 'fb-peach';
  }
}

function onTick(evt) {
  const hours = evt.date.getHours();
  const minutes = evt.date.getMinutes();
  clock24.text = `${util.zeroPad(hours)}:${util.zeroPad(minutes)}`;
  clock12.text = `${hours % 12}:${util.zeroPad(minutes)}`;
  update12clock(hours);
}

function applyFormat(lastFormat) {
  if (lastFormat === '12') {
    button12.value = 1;
    button24.value = 0;
    clock24group.style.visibility = 'hidden';
    clock12group.style.visibility = 'visible';
  } else {
    button12.value = 0;
    button24.value = 1;
    clock24group.style.visibility = 'visible';
    clock12group.style.visibility = 'hidden';
  }
}

button24.onclick = function (evt) {
  clock24group.style.visibility = 'visible';
  clock12group.style.visibility = 'hidden';
  file.saveData('24');
};

button12.onclick = function (evt) {
  clock24group.style.visibility = 'hidden';
  clock12group.style.visibility = 'visible';
  file.saveData('12');
};

const lastFormat = file.loadData();
applyFormat(lastFormat);
clock.granularity = 'minutes';
clock.ontick = evt => onTick(evt);
