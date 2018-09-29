import clock from 'clock';
import document from 'document';
import { me as device } from 'device';
import * as util from '../common/utils';

const clockText = document.getElementById('clock');

function onTick(evt) {
  const hours = evt.date.getHours();
  const minutes = evt.date.getMinutes();
  clockText.text = `${util.zeroPad(hours)}:${util.zeroPad(minutes)}`;
}

function currentDeviceType() {
  // Initialize for old OS
  if (!device.screen) device.screen = { width: 348, height: 250 };
  if (device.screen.width === 300 && device.screen.height === 300) {
    return 'Versa';
  }
  return 'Ionic';
}

const deviceType = currentDeviceType();

function adjustImage() {
  if (deviceType === 'Ionic') {
    const imageCat = document.getElementById('image-cat');
    imageCat.href = 'cats/348_250.jpeg';
    imageCat.x = 0;
    imageCat.y = 0;
    imageCat.width = 348;
    imageCat.height = 250;
  }
}

adjustImage();
clock.granularity = 'minutes';
clock.ontick = evt => onTick(evt);
